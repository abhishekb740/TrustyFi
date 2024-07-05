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
    protocol_name: string;
    ProtocolCategories: ProtocolCategory[];
};