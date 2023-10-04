import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  title: string,
  children: ReactNode
}

export default function Layout(props: Props) {
  return (
    <div className='main-container'>
    <Head>
        <title>{props.title}</title>
    </Head>
    {props.children}
    </div>
  )
}
