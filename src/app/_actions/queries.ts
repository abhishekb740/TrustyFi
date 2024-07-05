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

  console.log('Existing user:', existingUser)

  if (!existingUser) {
    // Create new user
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
    // Update user information if necessary
    const { error: updateError } = await client
      .from('Users')
      .update({ updated_at: new Date().toISOString() })
      .eq('wallet_address', walletAddress);

    if (updateError) {
      console.error('Error updating user:', updateError.message);
    }
  }
};