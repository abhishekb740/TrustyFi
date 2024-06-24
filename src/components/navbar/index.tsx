"use client"
import Image from 'next/image';
import { useState } from 'react';
import { useMetaMask } from '@/hooks/useMetamask';
import { formatAddress } from '@/utils/utils';

type Props = {
    setShowWallet: (showWallet: boolean) => void;
    showWallet: boolean;
}

export default function Navbar({ setShowWallet, showWallet }: Props) {
    const toggleWallet = () => setShowWallet(!showWallet);
    const { wallet } = useMetaMask();
    return (
        <div className='flex flex-row h-[5rem] items-center justify-between px-16 border-b-[1px] border-b-[#B2F1A8] relative'>
            <div className='flex flex-row gap-2'>
                <Image src='/TrustifyLogo.png' width={20} height={20} alt="Trustify Logo" />
                <div className='text-2xl'>TRUSTIFY</div>
            </div>
            <div className='flex flex-row gap-4'>
                <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3'>Categories</button>
                <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3'>Stake</button>
                <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3'>BSC</button>
                <button className='bg-[#B2F1A8] shadow-[0_0_5px_#B2F1A8] text-black rounded-md py-1 px-3 flex flex-row gap-2' onClick={toggleWallet}>
                    <div>
                        <Image src='/wallet.png' width={20} height={20} alt="Wallet" />
                    </div>
                    {wallet.accounts.length>0 ? `${formatAddress(wallet.accounts[0])}` : ' Wallet'}
                </button>
            </div>
        </div>
    )
}