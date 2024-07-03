import Image from 'next/image';
import { formatAddress } from '@/utils/utils';

export default function Reviews() {
    return (
        <div>
            <div className='flex flex-row justify-evenly mt-24'>
                <div className='flex flex-col w-[40%]'>
                    <div className='flex flex-col p-8 border border-[#B2F1A8] rounded-lg gap-8'>
                        <div className='flex flex-col gap-4 items-start'>
                            <div className='flex flex-row gap-8 justify-center items-center'>
                                <div className='text-3xl'>
                                    REVIEWS
                                </div>
                                <div className='flex flex-row'>
                                    <div>
                                        <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                    </div>
                                    <div>
                                        4.9
                                    </div>
                                </div>
                            </div>
                            <div>
                                32 reviews
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-4'>
                            <div className='flex flex-row gap-6'>
                                <div className='flex flex-row gap-2'>
                                    <input type='checkbox' className='' />
                                    <div>
                                        5 stars
                                    </div>
                                </div>
                                <div className='flex w-[70%] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                    <div className='bg-[#B2F1A8] w-[72%] rounded-full'>

                                    </div>
                                </div>
                                <div>
                                    72%
                                </div>
                            </div>
                            <div className='flex flex-row gap-6'>
                                <div className='flex flex-row gap-2'>
                                    <input type='checkbox' className='' />
                                    <div>
                                        4 stars
                                    </div>
                                </div>
                                <div className='flex w-[70%] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                    <div className='bg-[#B2F1A8] w-[65%] rounded-full'>

                                    </div>
                                </div>
                                <div>
                                    65%
                                </div>
                            </div>
                            <div className='flex flex-row gap-6'>
                                <div className='flex flex-row gap-2'>
                                    <input type='checkbox' className='' />
                                    <div>
                                        3 stars
                                    </div>
                                </div>
                                <div className='flex w-[70%] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                    <div className='bg-[#B2F1A8] w-[53%] rounded-full'>

                                    </div>
                                </div>
                                <div>
                                    53%
                                </div>
                            </div>
                            <div className='flex flex-row gap-6'>
                                <div className='flex flex-row gap-2'>
                                    <input type='checkbox' className='' />
                                    <div>
                                        2 stars
                                    </div>
                                </div>
                                <div className='flex w-[70%] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                    <div className='bg-[#B2F1A8] w-[24%] rounded-full'>

                                    </div>
                                </div>
                                <div>
                                    24%
                                </div>
                            </div>
                            <div className='flex flex-row gap-6'>
                                <div className='flex flex-row gap-2'>
                                    <input type='checkbox' className='' />
                                    <div>
                                        1 stars
                                    </div>
                                </div>
                                <div className='flex w-[70%] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                    <div className='bg-[#B2F1A8] w-[0%] rounded-full'>

                                    </div>
                                </div>
                                <div>
                                    0%
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-4 bg-[#B2F1A8] py-2 rounded-lg px-4'>
                                <div>
                                    <Image src="/filter.png" width={20} height={20} alt="Filter Logo" />
                                </div>
                                <div className='text-black'>
                                    FILTER
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    Sort by
                                </div>
                                <div className='bg-[#B2F1A8] text-black rounded-lg p-1 text-sm'>
                                    MORE RELEVANT
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-24 gap-6'>
                        <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4">
                            <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                <Image className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                                <div className="text-lg">
                                    {formatAddress("0xD07D389EAb22F37F17a82AA139402b90B33dBFa0")}

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
                        <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4">
                            <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                <Image className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                                <div className="text-lg">
                                    {formatAddress("0xD07D389EAb22F37F17a82AA139402b90B33dBFa0")}

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
                        <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4">
                            <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                <Image className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                                <div className="text-lg">
                                    {formatAddress("0xD07D389EAb22F37F17a82AA139402b90B33dBFa0")}

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
                        <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4">
                            <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                <Image className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                                <div className="text-lg">
                                    {formatAddress("0xD07D389EAb22F37F17a82AA139402b90B33dBFa0")}

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
                <div className='flex flex-col w-[40%] gap-12'>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-12 items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Company Data
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Bio
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Social
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-12 items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Category
                            </div>
                            <div>
                                Algorithm, autonomous interest rate protocol
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Related
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    Lido Finance
                                </div>
                                <div>
                                    Aave
                                </div>
                                <div>
                                    Compound Finance
                                </div>
                                <div>
                                    Curve
                                </div>
                                <div>
                                    EigenLayer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}