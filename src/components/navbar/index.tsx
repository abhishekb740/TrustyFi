import Image from 'next/image';

export default function Navbar() {
    return (
        <div className='flex flex-row h-[5rem] items-center justify-between px-16 border-b-[1px] border-b-[#B2F1A8]'>
            <div className='flex flex-row gap-2'>
                <Image src='/TrustifyLogo.png' width={20} height={20} alt="Trustify Logo" />
                <div>TRUSTIFY</div>
            </div>
            <div className='flex flex-row gap-4'>
                <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3'>Categories</button>
                <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3'>Stake</button>
                <button className='border shadow-[0_0_5px_#B2F1A8] rounded-md py-1 px-3'>BSC</button>
                <button className='bg-[#B2F1A8] shadow-[0_0_5px_#B2F1A8] text-black rounded-md py-1 px-3'>Wallet</button>
            </div>
        </div>
    )
}