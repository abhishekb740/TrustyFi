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

