"use client"

export default function Hero() {
    return (
        <main className="flex flex-col justify-center items-center pt-24">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xl">LET'S MAKE DEFI MORE</div>
                    <div className="flex flex-col items-center">
                        <div className="text-7xl">VERIFIED REVIEWS</div>
                        <div className="text-7xl">FOR EVERY <span className="text-[#B2F1A8]"> DEFI PROTOCOLS </span> </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-2xl">
                        The first Web3 review platform that pays users for verified reviews
                    </div>
                </div>
            </div>
        </main>
    )
}