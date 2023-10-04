import Login from '@/components/Login/Login'
import Head from 'next/head'
import React, { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Index() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signIn('credentials', {
            username,
            password,
            callbackUrl: `${window.location.origin}/reports`,
        })

    }

    return (
        <div>
            <Head>
                <title>{"Login"}</title>
                <meta name="description" content="Power Monitoring System" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/logo.svg" />
            </Head>

            <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} submitForm={submitForm} />
        </div>
    )
}


