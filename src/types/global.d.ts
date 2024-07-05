interface Ethereum {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, handler: (...args: any[]) => void) => void;
    removeListener: (event: string, handler: (...args: any[]) => void) => void;
}

interface Window {
    ethereum?: Ethereum;
}

interface Protocol {
    id: number;
    protocol_name: string;
    ProtocolCategories: {
        Categories: {
            id: number;
            category_name: string;
        }[];
    }[];
}