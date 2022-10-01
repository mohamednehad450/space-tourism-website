import { FC, useState } from 'react'
import Image from 'next/image'


const portraitHeight = 800
const landscapeHeight = 350

const TechnologyImage: FC<{ show: boolean, src: { portrait: string, landscape: string } }> = ({ show, src }) => {

    const [ratioPortrait, setRatioPortrait] = useState(0.75)
    const [ratioLandscape, setRatioLandscape] = useState(0.75)

    return (
        <div className={`${show ? "animate-fade-in" : "hidden"} lg:max-w-lg lg:max-h-max sm:max-h-80 lg:mx-0 mx-auto`}>
            <span className='hidden lg:block'>
                <Image src={src.portrait} width={portraitHeight * ratioPortrait} height={portraitHeight} onLoadingComplete={r => setRatioPortrait(r.naturalWidth / r.naturalHeight)} />
            </span>
            <span className='lg:hidden'>
                <Image src={src.landscape} width={landscapeHeight * ratioLandscape} height={landscapeHeight} onLoadingComplete={r => setRatioLandscape(r.naturalWidth / r.naturalHeight)} />
            </span>
        </div>
    )
}


export default TechnologyImage