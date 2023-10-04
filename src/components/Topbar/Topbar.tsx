import Image from 'next/image'
import React from 'react'

interface Props {
    profile:{
        image: string,
        alt: string,
        notification:{
            image: string,
            alt: string
        },
        role: string,
        info:{
            svg: string,
            alt: string
        },
        dropdown:{
            svg: string,
            alt: string
        }
    }
}

export default function Topbar({props}: {props: Props}) {
    return (
            <div className='flex pt-7 pb-4 items-center justify-end pl-4 pr-10 font-inter font-medium'>
                

                <div className='flex items-center'>
                    <Image src={props.profile.notification.image} width={16} height={22} alt={props.profile.notification.alt} />

                    <div className='flex items-cetner bg-primary bg-opacity-10 rounded-[18px] justify-center ml-6 px-5 py-[10px]'>
                        <span className='text-sm text-primary'>{props.profile.role}</span>
                    </div>

                    <div className='w-10 h-10 flex justify-end items-end ml-[10px]'>
                        <Image className='rounded-full' src={props.profile.image} width={40} height={40} alt={props.profile.alt} />
                        <div className='w-3 h-3 bg-primary flex justify-center items-center rounded-full z-10 absolute'>
                            <Image src={props.profile.info.svg} width={4} height={4} alt={props.profile.info.alt} />
                        </div>
                    </div>

                    <Image className='ml-5' src={props.profile.dropdown.svg} width={8} height={5} alt={props.profile.dropdown.alt} />
                </div>  
            </div>
    )
}