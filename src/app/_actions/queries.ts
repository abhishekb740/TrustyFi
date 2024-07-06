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
  } else {
    const { error: updateError } = await client
      .from('Users')
      .update({ updated_at: new Date().toISOString() })
      .eq('wallet_address', walletAddress);

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

export const writeReview = async (userId: string, protocolId: number, rating: number, title: string, description: string, date: string) => {
  const { data, error } = await client
    .from('Reviews')
    .insert({
      user_id: userId,
      protocol_id: protocolId,
      rating,
      title,
      description,
      created_at: date,
      updated_at: new Date().toISOString()
    });

  if (error) {
    throw new Error(`Error writing review: ${error.message}`);
  }

  return data;
};

export const fetchUserReview = async (userId: string, protocolId: number) => {
  try {
    // Validate inputs
    if (!userId || !protocolId) {
      throw new Error('Invalid userId or protocolId');
    }

    console.log(`Fetching user review for userId: ${userId} and protocolId: ${protocolId}`);

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

