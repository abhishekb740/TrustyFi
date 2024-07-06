interface Ethereum {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, handler: (...args: any[]) => void) => void;
    removeListener: (event: string, handler: (...args: any[]) => void) => void;
}

interface Window {
    ethereum?: Ethereum;
}

type Category = {
    id: number;
    category_name: string;
};

type ProtocolCategory = {
    Categories: Category;
};

type Protocol = {
    id?: number;
    protocol_name: string;
    protocol_description?: string;
    website_url?: string;
    ProtocolCategories?: ProtocolCategory[];
    image_url?: string;
};

type Review = {
    id: number;
    protocol_id: number;
    user_id: number;
    rating: number;
    title: string;
    review: string;
    description: string;
    created_at: string;
    updated_at?: string;
    user_wallet_address?: string;
    Protocols?: Protocol;
}