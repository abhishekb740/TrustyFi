"use server";

import { client } from "@/utils/supabase/client";

export const fetchProtocolsAndCategories = async () => {
  const { data, error } = await client
    .from('Protocols')
    .select(`
        id,
        protocol_name,
        ProtocolCategories (
          Categories (
            id,
            category_name
          )
        )
      `);

  let formattedProtocols: any = [];
  if (data) {
    formattedProtocols = data.map((protocol: any) => ({
      protocol_name: protocol.protocol_name,
      ProtocolCategories: protocol.ProtocolCategories.map((category: any) => ({
        Categories: {
          id: category.Categories.id,
          category_name: category.Categories.category_name,
        }
      }))
    }));
  }

  if (error) {
    throw new Error(`Error fetching protocols and categories: ${error.message}`);
  }

  return formattedProtocols;
};

export const fetchProtocolDetails = async (protocolName: string) => {
  const { data, error } = await client
    .from('Protocols')
    .select(`
        id,
        protocol_name,
        protocol_description,
        website_url,
        image_url
      `)
    .eq('protocol_name', protocolName)
    .single();

  if (error) {
    throw new Error(`Error fetching protocol details: ${error.message}`);
  }

  return data;
};

export const handleUserInDatabase = async (walletAddress: string) => {
  const { data: existingUser, error } = await client
    .from('Users')
    .select('*')
    .eq('wallet_address', walletAddress)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error checking user existence:', error.message);
    return;
  }

  if (!existingUser) {
    const { error: insertError } = await client
      .from('Users')
      .insert({
        wallet_address: walletAddress,
        updated_at: new Date().toISOString()
      });

    if (insertError) {
      console.error('Error creating new user:', insertError.message);
    }
    console.log('New user created:', walletAddress);
  } else {
    const { error: updateError } = await client
      .from('Users')
      .update({ updated_at: new Date().toISOString() })
      .eq('wallet_address', walletAddress);

    console.log('User already exists:', walletAddress);

    if (updateError) {
      console.error('Error updating user:', updateError.message);
    }
  }
};

export const fetchUserByWalletAddress = async (walletAddress: string) => {
  const { data, error } = await client
    .from('Users')
    .select('*')
    .eq('wallet_address', walletAddress)
    .single();

  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }

  return data;
};

export const writeReview = async (
  userId: string,
  protocolId: number,
  rating: number,
  title: string,
  description: string,
  date: string,
  wallet_address: string
) => {
  // Check if a review already exists for this user and protocol
  const { data: existingReview, error: existingReviewError } = await client
    .from('Reviews')
    .select('*')
    .eq('user_id', userId)
    .eq('protocol_id', protocolId)
    .single();

  if (existingReviewError && existingReviewError.code !== 'PGRST116') {
    // Handle any error other than the "No rows" error
    throw new Error(`Error checking existing review: ${existingReviewError.message}`);
  }

  let data;
  if (existingReview) {
    // Update the existing review
    const { data: updateData, error: updateError } = await client
      .from('Reviews')
      .update({
        rating,
        title,
        description,
        user_wallet_address: wallet_address,
        updated_at: new Date().toISOString()
      })
      .eq('id', existingReview.id);

    if (updateError) {
      throw new Error(`Error updating review: ${updateError.message}`);
    }
    data = updateData;
  } else {
    // Insert a new review
    const { data: insertData, error: insertError } = await client
      .from('Reviews')
      .insert({
        user_id: userId,
        protocol_id: protocolId,
        rating,
        title,
        description,
        user_wallet_address: wallet_address,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });

    if (insertError) {
      throw new Error(`Error inserting review: ${insertError.message}`);
    }
    data = insertData;
  }

  // Fetch all reviews for the protocol to update the average rating
  const { data: reviews, error: reviewsError } = await client
    .from('Reviews')
    .select('rating')
    .eq('protocol_id', protocolId);

  if (reviewsError) {
    throw new Error(`Error fetching reviews for protocol: ${reviewsError.message}`);
  }

  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const avgRating = totalRating / totalReviews;

  // Update the protocol's average rating and review count
  const { error: updateProtocolError } = await client
    .from('Protocols')
    .update({ avg_rating: avgRating, review_count: totalReviews })
    .eq('id', protocolId);

  if (updateProtocolError) {
    throw new Error(`Error updating protocol rating: ${updateProtocolError.message}`);
  }

  return data;
};


export const fetchUserReviewForAProtocol = async (userId: string, protocolId: number) => {
  try {
    if (!userId || !protocolId) {
      throw new Error('Invalid userId or protocolId');
    }

    const { data, error } = await client
      .from('Reviews')
      .select('*')
      .eq('user_id', userId)
      .eq('protocol_id', protocolId)
      .limit(1)
      .single();

    if (error) {
      if (error.message.includes('multiple (or no) rows')) {
        return null;
      }
      throw new Error(`Error fetching user review: ${error.message}`);
    }

    return data || null;
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Error(`Unexpected error fetching user review: ${(err as Error).message}`);
  }
};

export const fetchUserReviews = async (wallet_address: string) => {
  const { data, error } = await client.from('Reviews').select("*, Protocols(protocol_name)").eq('user_wallet_address', wallet_address);
  if (error) {
    throw new Error(`Error fetching user reviews: ${error.message}`);
  }
  return data;
}

export const fetchReviewsForAProtocol = async (protocolId: number) => {
  const { data, error } = await client.from('Reviews').select('*, Protocols(protocol_name)').eq('protocol_id', protocolId);
  if (error) {
    throw new Error(`Error fetching reviews for a protocol: ${error.message}`);
  }
  return data;
}