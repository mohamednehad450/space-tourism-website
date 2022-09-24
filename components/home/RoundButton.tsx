import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";


const RoundButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = (props) => {

    return (
        <span
            className={`
                w-[150px] sm:w-[376px] lg:w-[450px]
                h-[150px] sm:h-[376px] lg:h-[450px]
                grid place-content-center
            `}
        >
            <span
                className={`
                    hover:border-[50px] sm:hover:border-[72px] lg:hover:border-[88px] 
                    border-opacity-10 border-white 
                    rounded-full transition-all grid place-items-center
                `}
            >
                <button
                    {...{ ...props }}
                    className={`
                        lg:w-72 sm:w-60 w-[150px] 
                        lg:h-72 sm:h-60 h-[150px] 
                        bg-white rounded-full 
                        sm:text-3xl text-xl           
                        hover:shadow-inner
                    `}
                />
            </span>
        </span>
    )
}

export default RoundButton