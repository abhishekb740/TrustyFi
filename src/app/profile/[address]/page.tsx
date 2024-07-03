"use client"
import { formatAddress } from '@/utils/utils';
import Image from 'next/image';

type Props = {
    params: {
        address: string;
    }
}

export default function Profile({ params }: Props) {

    return (
        <div className="flex flex-col min-h-screen" style={{fontFamily: 'Montserrat'}}>
            <div className="flex flex-row justify-evenly items-center p-8 border-b-[1px] border-b-[#B2F1A8]">
                <div className="flex flex-row items-center gap-8">
                    <img className="bg-white rounded-lg" src="/profile.png" height={120} width={120} alt="profile logo" />
                    <div className="text-3xl">
                        {formatAddress(params.address)}
                    </div>
                </div>
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-4xl" style={{fontFamily: 'Druk Trial'}}>
                            REVIEWS
                        </div>
                        <div className="text-2xl">
                            11
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-4xl" style={{fontFamily: 'Druk Trial'}}>
                            AVERAGE SCORE
                        </div>
                        <div className="text-2xl">
                            3.9
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-8 justify-center items-center gap-8">
                <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4  w-1/2">
                    <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                        <Image className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                        <div className="text-lg">
                            {formatAddress(params.address)}
                        </div>
                    </div>
                    <div className='flex flex-col pt-4 gap-4'>
                        <div className="flex flex-row justify-between">
                            <div className='flex flex-row gap-1'>
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            </div>
                            <div>
                                Marzo 2024
                            </div>
                        </div>
                        <div>
                            Decentralized Exchange
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat tempora doloribus architecto asperiores iste sunt nesciunt vitae id fuga, molestiae nostrum veritatis ab obcaecati natus fugit, deserunt recusandae laboriosam!
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4  w-1/2">
                    <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                        <img className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                        <div className="text-lg">
                            {formatAddress(params.address)}
                        </div>
                    </div>
                    <div className='flex flex-col pt-4 gap-4'>
                        <div className="flex flex-row justify-between">
                            <div className='flex flex-row gap-1'>
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            </div>
                            <div>
                                Marzo 2024
                            </div>
                        </div>
                        <div>
                            Decentralized Exchange
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat tempora doloribus architecto asperiores iste sunt nesciunt vitae id fuga, molestiae nostrum veritatis ab obcaecati natus fugit, deserunt recusandae laboriosam!
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4  w-1/2">
                    <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                        <img className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                        <div className="text-lg">
                            {formatAddress(params.address)}
                        </div>
                    </div>
                    <div className='flex flex-col pt-4 gap-4'>
                        <div className="flex flex-row justify-between">
                            <div className='flex flex-row gap-1'>
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            </div>
                            <div>
                                Marzo 2024
                            </div>
                        </div>
                        <div>
                            Decentralized Exchange
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat tempora doloribus architecto asperiores iste sunt nesciunt vitae id fuga, molestiae nostrum veritatis ab obcaecati natus fugit, deserunt recusandae laboriosam!
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4  w-1/2">
                    <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                        <img className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                        <div className="text-lg">
                            {formatAddress(params.address)}
                        </div>
                    </div>
                    <div className='flex flex-col pt-4 gap-4'>
                        <div className="flex flex-row justify-between">
                            <div className='flex flex-row gap-1'>
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            </div>
                            <div>
                                Marzo 2024
                            </div>
                        </div>
                        <div>
                            Decentralized Exchange
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat tempora doloribus architecto asperiores iste sunt nesciunt vitae id fuga, molestiae nostrum veritatis ab obcaecati natus fugit, deserunt recusandae laboriosam!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}