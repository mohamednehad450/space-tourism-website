import { FC, PropsWithChildren, useEffect, useState } from "react"
import { AppData, getAppData, useProvideAppDate } from "./appData"



const ProvideAppData: FC<PropsWithChildren> = ({ children }) => {

    const context = useProvideAppDate()
    const [data, setData] = useState<AppData | "Loading" | "Error">("Loading")

    useEffect(() => {
        getAppData()
            .then(setData)
            .catch(err => setData("Error"))
    }, [])

    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )
}

export default ProvideAppData 