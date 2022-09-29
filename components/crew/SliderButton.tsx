import { ButtonHTMLAttributes, FC } from 'react'


const SliderButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }> = ({ active, ...props }) => {
    return <button className={`w-[10px] lg:w-4 h-[10px] lg:h-4 rounded-full bg-white ${active ? "bg-opacity-100" : "bg-opacity-20 hover:bg-opacity-50"} `} {...{ ...props }} />
}


export default SliderButton