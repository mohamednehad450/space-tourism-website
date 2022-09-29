import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";


const RoundButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = (props) => {

    return (
        <span
            className={`
                w-[150px] sm:w-[242px] lg:w-[274px] 
                h-[150px] sm:h-[242px] lg:h-[274px]
                grid place-content-center
            `}
        >
            <span
                className={`
                    hover:border-[48px] sm:hover:border-[72px] lg:hover:border-[88px] 
                    border-opacity-10 border-white 
                    rounded-full transition-all grid place-items-center
                `}
            >
                <button
                    {...{ ...props }}
                    className={`
                        w-[150px] sm:w-[242px] lg:w-[274px] 
                        h-[150px] sm:h-[242px] lg:h-[274px]
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