import { ButtonHTMLAttributes, FC } from "react"


const TabButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }> = ({ active, ...props }) => {
    return (
        <button {...{ ...props }} className={`text-sm sm:text-base flex pb-2 sm:pb-4 tracking-[2.7px] leading-5 font-nav border-b-[3px] border-b-transparent
            ${active ? "border-b-white text-white" : 'text-accent hover:border-b-white hover:border-opacity-25'}`} />
    )
}

export default TabButton
