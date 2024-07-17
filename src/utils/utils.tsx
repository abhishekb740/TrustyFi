
export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
};

export const formatAddress = (addr: string) => {
    return `${addr.substring(0, 4) + '...' + addr.substring(addr.length - 3, addr.length)}`;
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

export default function formatUrl(url: string): string {
    try {
        const { hostname } = new URL(url);
        return hostname.replace('www.', '');
    } catch (error) {
        console.error('Invalid URL:', error);
        return '';
    }
}

export const Topics = [
    {
        name: "Yield Farming",
        icon: "yieldfarming.svg"
    },
    {
        name: "LaunchPads",
        icon: "launchpads.svg"
    },
    {
        name: "DEX",
        icon: "dex.svg"
    },
    {
        name: "AMM",
        icon: "amm.svg"
    },
    {
        name: "RWA",
        icon: "rwa.svg"
    },
    {
        name: "AI",
        icon: "ai.svg"
    },
    {
        name: "NFT Marketplace",
        icon: "nftmarketplace.svg"
    },
    {
        name: "Derivatives",
        icon: "star.svg"
    }
];

export const Protocols = [
    {
        name: "Uniswap",
        image: "Uniswap.svg",
        description: "Algoritmic, autonomous interest rate protocol",
        website_url: "https://uniswap.org/"
    },
    {
        name: "Aave",
        image: "Aave.svg",
        description: "Algoritmic, autonomous interest rate protocol",
        website_url: "https://aave.com/"
    },
    {
        name: "Curve",
        image: "Curve.svg",
        description: "Algoritmic, autonomous interest rate protocol",
        website_url: "https://curve.fi/"
    },
    {
        name: "Lido Finance",
        image: "Lido.svg",
        description: "Algoritmic, autonomous interest rate protocol",
        website_url: "https://lido.fi/"
    },
    {
        name: "Compound Finance",
        image: "CompoundFinance.svg",
        description: "Algoritmic, autonomous interest rate protocol",
        website_url: "https://compound.finance/"
    },
    {
        name: "EigenLayer",
        image: "Eigen.svg",
        description: "Algoritmic, autonomous interest rate protocol",
        website_url: "https://eigenlayer.com/"
    }

];