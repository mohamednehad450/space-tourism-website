import { FC, PropsWithChildren } from 'react'


const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            className={`
        mx-auto max-w-[1440px] min-h-full
        flex lg:flex-row flex-col
        lg:px-40 sm:py-24 py-12
        lg:py-32 sm:px-0  px-6
        gap-20
      `}
        >
            {children}
        </div>
    )
}


export default Container