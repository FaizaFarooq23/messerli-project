import { signOut } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

interface Props {
    items: {
        title: string,
        icon: string,
        activeIcon: string,
        link?: string,
        links: string[],
        subItems?: {
            title: string,
            link: string,
            icon: string,
            activeIcon: string,
        }[]
    }[],
    logo: {
        image: string,
        alt: string
    },
    account: {
        type: string,
        email: string
    }
}

export default function Sidebar({ componentProps }: { componentProps: Props }) {
    const router = useRouter();

    const pushRouter = (index: number) => {
        if (index === 1) {
            router.push("/historique");
        }
    }

    return (
        <div className='flex flex-col  justify-between '>
            <div className='-mt-14'>
            <div className='flex items-center ml-4'>
                <div className='bg-primary rounded-lg w-10 h-10'>
                    <Image src={componentProps.logo.image} width={70} height={65} alt={componentProps.logo.alt} />
                </div>
                <div className='flex flex-col ml-2'>
                    <span className='text-primary text-sm'>{componentProps.account.type}</span>
                    <span className='text-secondary font-normal text-xs'>{componentProps.account.email}</span>
                </div>
            </div>
            <div className='mt-20 font-medium font-inter'>

                {componentProps.items.map((item, index) => (
                    <div className='flex flex-col gap-x-2 mb-10 first:mb-5' key={index + item.title}>
                      
                        <div className={`flex items-center cursor-pointer ${item.link === router.pathname ? 'border-r-4 border-primary': ''}`} onClick={() => router.push(item.link!)} >
                            {
                                item.links.includes(router.pathname) ?
                                    <Image className='ml-5' src={item.activeIcon} width={30} height={30} alt={item.title} />
                                    : <Image className='ml-5' src={item.icon} width={30} height={30} alt={item.title} />
                            }
                            <span className={`text-sm ${item.links.includes(router.pathname) ? "text-primary" : "text-secondary"} ml-4`}>{item.title}</span>
                        </div>

                    </div>
                ))}
            </div>
            </div>
            <div className="flex flex-col mt-[44vh] pl-4 w-full justify-center">
            <button className={`flex items-center my-6  ${'/parameters' === router.pathname ? 'border-r-4 border-primary': ''}`} onClick={()=>router.push('/parameters')}>
                    {router.pathname === '/parameters' ?
                    <Image src='/images/sidebar/settings-icon.svg' width={20} height={20} alt='log-out' />
                : <Image src='/images/sidebar/settings.svg' width={20} height={20} alt='log-out' />        
                }
                    <span className='ml-5 font-sm font-medium text-inter text-secondary'>
                    Paramètres
                    </span>
                </button>
                <button className='flex items-center ' onClick={()=> signOut()}>
                    <Image src='/images/sidebar/Log out icon.svg' width={20} height={20} alt='log-out' />
                    <span className='ml-5 font-sm font-medium text-inter text-secondary'>
                        Déconnexion
                    </span>
                </button>
            </div>
        </div>
    )
}
