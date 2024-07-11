import Image from 'next/image'

export default function Footer() {
    return (
        <div className="flex flex-row justify-center items-center mt-20 border-t-2 p-8 border-t-[#B2F1A8]"  style={{fontFamily: 'Montserrat'}}>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className='flex flex-row gap-2'>
                    <Image src='/TrustifyLogo.svg' width={20} height={20} alt="Trustify Logo" />
                    <div className='text-2xl'>TRUSTYFI</div>
                </div>
                <div className='text-sm'>
                    privacy policy . cookie policy
                </div>
                <div className='text-sm'>
                    copyright © 2024 All rights reserved.
                </div>
            </div>
        </div>
    )
}