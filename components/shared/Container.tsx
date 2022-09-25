import { FC, PropsWithChildren } from "react"


const Container: FC<PropsWithChildren> = ({ children }) => {

    return (
        <section
            className={`
                h-screen max-w-[1440px]
                flex flex-col mx-auto
                overflow-hidden
            `}
        >
            <div className="lg:mt-36 sm:mt-24 mt-20 grow">
                {children}
            </div>
        </section>
    )
}

export default Container