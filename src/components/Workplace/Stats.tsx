import Image from 'next/image'
import React from 'react'


interface Props {
    figure: string,
    description: string,
    flex?: string,
    icon: string,
    index: string,
    profit: number,
    border: boolean,
    unit: string,
}


export default function Stats({ props }: { props: Props }) {
    return (
        <div className={`w-1/4 py-2 ${props.border ? 'border-r border-[#e6edff]' : ''} `}>
            <div className='flex items-center justify-between px-[10%]'>
                <span className='font-poppins lg:text-xl xl:text-2xl font-semibold '>{props.figure}
                    {props.flex &&
                        <span className={`  ${props.flex === "%"?"lg:text-xl xl:text-2xl font-semibold":"lg:text-sm xl:text-sm font-normal ml-2 "}`}>{props.flex}</span>
                    }
                </span>
                <div  className='reporting-icons h-11 w-11' >
                <Image src={props.icon} width={50} height={50} alt={props.figure} />
                </div>
            </div>

            <div className='px-[10%]'>
                <span className='font-poppins md:text-xs lg:text-xs xl:text-sm '>{props.description}</span>
            </div>

            <div className='mt-3 px-[8%] flex items-center'>
                {props.profit > 0 ?
                    <Image src="/images/reporting/Up.svg" width={20} height={20} alt="profit" />
                    : <Image src={"/images/reporting/Down.svg"} width={20} height={20} alt="loss" />
                }
                <span className='font-poppins md:text-xs xl:text-sm text-[#7C8DB5]'>{props.index}</span>

                <span className='font-poppins md:text-xs xl:text-sm ml-3 text-[#7C8DB5]'>{props.profit > 0 ? "+" : ""}{props.profit}{props.unit}</span>

            </div>
        </div>
    )
}
