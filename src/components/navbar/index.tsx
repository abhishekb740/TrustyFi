"use client";
import Image from 'next/image';
import { useMetaMask } from '@/hooks/useMetamask';
import { formatAddress } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Notification from '../notification';

type Props = {
    setShowWallet: (showWallet: boolean) => void;
    showWallet: boolean;
};

export default function Navbar({ setShowWallet, showWallet }: Props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [notification, setNotification] = useState<{ message: string; show: boolean; isSuccess: boolean }>({
        message: '',
        show: false,
        isSuccess: false,
    });

    const toggleWallet = () => setShowWallet(!showWallet);
    const router = useRouter();
    const { wallet, connected } = useMetaMask();

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const showNotification = (message: string, isSuccess: boolean) => {
        setNotification({ message, show: true, isSuccess });
    };

    const handleButtonClick = (path: string) => {
        if (connected) {
            router.push(path);
            setMenuOpen(false);
        } else {
            showNotification('Please connect your wallet.', false);
            router.push("/");
        }
    };

    return (
        <>
            <Notification
                message={notification.message}
                show={notification.show}
                onClose={() => setNotification({ ...notification, show: false })}
                isSuccess={notification.isSuccess}
            />
            <div className='flex flex-row lg:flex-row h-[5rem] items-center justify-between px-4 lg:px-16 border-b-[1px] border-b-[#B2F1A8] relative' style={{ fontFamily: 'Montserrat' }}>
                <div className='flex flex-row gap-2 hover:cursor-pointer' onClick={() => (router.push("/"))}>
                    <Image src='/TrustifyLogo.svg' width={20} height={20} alt="Trustify Logo" />
                    <div className='text-xl lg:text-2xl'>TRUSTYFI</div>
                </div>
                <div className='lg:hidden flex items-center' onClick={handleToggleMenu}>
                    <AiOutlineMenu size={24} />
                </div>
                <div className={`absolute z-20 top-[5rem] right-0 lg:static lg:flex flex-col lg:flex-row gap-4 ${menuOpen ? 'flex' : 'hidden'} lg:flex bg-[#1E1E1E] p-2`}>
                    <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3' onClick={() => handleButtonClick("/governance")}>Governance</button>
                    <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3' onClick={() => handleButtonClick("/categories")}>Categories</button>
                    <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3' onClick={() => handleButtonClick("/stake")}>Stake</button>
                    <button className={`${wallet.network ? "border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3" : "hidden"}`}>{wallet.network}</button>
                    <button className='bg-[#B2F1A8] shadow-[0_0_5px_#B2F1A8] text-black rounded-md py-1 px-3 flex flex-row gap-2' onClick={connected ? () => (router.push(`/profile/${wallet.accounts}`)) : toggleWallet}>
                        <div>
                            <Image src='/wallet.png' width={20} height={20} alt="Wallet" />
                        </div>
                        {connected ? `${formatAddress(wallet.accounts[0])}` : ' Wallet'}
                    </button>
                </div>
            </div>
        </>
    );
}
