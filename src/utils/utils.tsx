
export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
};

export const formatAddress = (addr: string) => {
    return `${addr.substring(0, 4)+'...'+addr.substring(addr.length-3,addr.length)}`;
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

export const Topics = [
    {
        name: "Yield Farming",
        icon: "star.svg"
    },
    {
        name: "LaunchPads",
        icon: "star.svg"
    },
    {
        name: "DEX",
        icon: "star.svg"
    },
    {
        name: "AMM",
        icon: "star.svg"
    },
    {
        name: "RWA",
        icon: "star.svg"
    },
    {
        name: "AI",
        icon: "star.svg"
    },
    {
        name: "NFT Marketplace",
        icon: "star.svg"
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
    },
    {
        name: "Aave",
        image: "Aave.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Curve",
        image: "Curve.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Lido Finance",
        image: "Lido.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Compound Finance",
        image: "Compound.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "EigenLayer",
        image: "Eigen.png",
        description: "Algoritmic, autonomous interest rate protocol",
    }

];