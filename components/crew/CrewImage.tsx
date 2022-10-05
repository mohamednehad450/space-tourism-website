import { FC } from 'react'


const CrewImage: FC<{ src: string, show?: boolean }> = ({ src, show }) => {

    return (
        <div
            className={`
                ${show ? "animate-slide-in" : "hidden"} 
                lg:absolute
                min-h-[225px]
            `}
        >
            <img src={src} className={"lg:max-w-2xl lg:max-h-max sm:max-h-[532px] max-h-56"} />
        </div>
    )
}


export default CrewImage