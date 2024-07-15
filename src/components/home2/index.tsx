import Image from "next/image";

export default function Home2() {
    return (
        <div className="flex flex-col" style={{ fontFamily: 'Montserrat' }}>
            <div className="flex flex-col mt-16 gap-16 justify-center items-center">
                <div className="text-6xl font-bold" style={{ fontFamily: 'Druk Trial' }}>
                    HOW TRUSTYFI WORKS
                </div>
                <div className="flex flex-col gap-12 items-center justify-center">
                    <div className="flex flex-col md:flex-row border border-[#B2F1A8] p-4 rounded-md max-w-full md:max-w-[50%] gap-4">
                        <div className="w-full md:w-[200px] flex justify-center items-center">
                            <Image className="object-contain" src="/orb1.svg" width={200} height={200} alt="Orb" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center flex-1">
                            <div className="font-bold">
                                Find your favorite protocol
                            </div>
                            <div>
                                Search for your favorite protocol on our platform and check its page to see what other users think about it. Can&apos;t find the protocol you&apos;re looking for? Send us an email at info@trustyfi.io to suggest it, and we will contact them to bring it to our platform.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border border-[#B2F1A8] p-4 rounded-md max-w-full md:max-w-[50%] gap-4">
                        <div className="w-full md:w-[200px] flex justify-center items-center">
                            <Image className="object-contain" src="/orb2.svg" width={200} height={200} alt="Orb" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center flex-1">
                            <div className="font-bold">
                                Leave a verified review
                            </div>
                            <div>
                                You can leave your reviews on each protocol&apos;s page. Share your experience by giving a rating from 1 to 5 and leaving written feedback to help new users make a choice!
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border border-[#B2F1A8] p-4 rounded-md max-w-full md:max-w-[50%] gap-4">
                        <div className="w-full md:w-[200px] flex justify-center items-center">
                            <Image className="object-contain" src="/orb3.svg" width={200} height={200} alt="Orb" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center flex-1">
                            <div className="font-bold">
                                Earn $TRST
                            </div>
                            <div>
                                For every verified review you leave (by integrating your wallet), you will receive a reward in our token based on the subscription of the protocol in question. Get excited with reviews and accumulate earnings!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}