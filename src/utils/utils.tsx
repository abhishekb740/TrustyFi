import { createCanvas } from 'canvas';

// function getRandomDarkColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 10)];
//     }
//     return color;
// }

export function generateProfilePic(address: string): string {
    const firstChar = address[2].toUpperCase();
    const lastChar = address[address.length - 1].toUpperCase();
    const initials = `${firstChar}${lastChar}`;
    const canvas = createCanvas(120, 120);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 120, 120);

    ctx.fillStyle = "#648364"
    ctx.font = '60px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initials, 60, 60);

    return canvas.toDataURL();
}

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