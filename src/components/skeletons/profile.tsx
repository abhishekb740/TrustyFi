import React from 'react';

export default function ProfileSkeleton() {
    return (
        <div className="flex flex-col min-h-screen animate-pulse" style={{ fontFamily: 'Montserrat' }}>
            <div className="flex flex-row justify-evenly items-center p-8 border-b-[1px] border-b-[#B2F1A8]">
                <div className="flex flex-row items-center gap-8">
                    <div className="bg-gray-300 rounded-lg" style={{ height: '120px', width: '120px' }}></div>
                    <div className="bg-gray-300 rounded h-8 w-48"></div>
                </div>
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col items-center gap-6">
                        <div className="bg-gray-300 rounded h-10 w-32"></div>
                        <div className="bg-gray-300 rounded h-8 w-16"></div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="bg-gray-300 rounded h-10 w-32"></div>
                        <div className="bg-gray-300 rounded h-8 w-16"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-8 justify-center items-center gap-8">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex flex-col rounded-md border border-[#B2F1A8] p-4 w-1/2">
                        <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                            <div className="bg-gray-300 rounded-lg" style={{ height: '40px', width: '40px' }}></div>
                            <div className="bg-gray-300 rounded h-6 w-32"></div>
                        </div>
                        <div className='flex flex-col pt-4 gap-4'>
                            <div className="flex flex-row justify-between">
                                <div className='flex flex-row gap-1'>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="bg-gray-300 rounded h-5 w-5"></div>
                                    ))}
                                </div>
                                <div className="bg-gray-300 rounded h-6 w-24"></div>
                            </div>
                            <div className="bg-gray-300 rounded h-6 w-48"></div>
                            <div className="bg-gray-300 rounded h-6 w-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
