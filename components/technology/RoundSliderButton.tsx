import { ButtonHTMLAttributes, FC } from "react"


const RoundSliderButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }> = ({ active, ...props }) => {
    return (
        <button
            {...{ ...props }}
            className={
                `lg:w-20 lg:h-20 sm:h-[60px] sm:w-[60px] h-[40px] w-[40px]
                rounded-full border border-opacity-25 border-white 
                lg:text-[32px] sm:text-[24px]
                ${active ? "bg-white text-main" : "bg-transparent text-white hover:border-opacity-100"}`
            }
        />
    )
}


export default RoundSliderButton