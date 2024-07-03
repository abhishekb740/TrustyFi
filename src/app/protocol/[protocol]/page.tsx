import Image from 'next/image';

type Props = {
    params: {
        protocol: string;
    }
}

export default function Protocol({ params }: Props) {
    console.log(params.protocol);
    return (
        <div className="flex flex-col">
            <div className='flex flex-row items-center py-20 justify-evenly border-b-[1px] border-[#B2F1A8]'>
                <div className="flex flex-row gap-6">
                    <Image src="/uniswap.png" alt="uniswap logo" width={100} height={100} className="bg-white rounded-lg" />
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl">Uniswap</div>
                        <div>
                            Algoritmic, autonomous interest rate protocol
                        </div>
                        <div className='flex flex-row gap-1'>
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <div>
                                4.9  (32 reviews)
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row py-4 px-4 gap-8 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg'>
                    <div className=''>
                        <Image src="/redirect.png" width={35} height={35} alt="Rating" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            app.uniswap.org
                        </div>
                        <div>
                            Visit
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black'>
                <button>WRITE A REVIEW</button>
            </div>
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
                </div>
                <div className='flex flex-col'>

                </div>
            </div>
        </div>
    )
}