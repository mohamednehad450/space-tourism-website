
import { FC } from 'react'
import { SH1, SH2 } from '../shared'


const LabeledData: FC<{ label: string, data: string }> = ({ data, label }) => {

    return (
        <div className=' flex flex-col flex-1 gap-3'>
            <span className='text-accent'>
                <SH2>{label}</SH2>
            </span>
            <span className='text-white'>
                <SH1>{data}</SH1>
            </span>
        </div>
    )
}


export default LabeledData