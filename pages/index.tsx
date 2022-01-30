import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import User from '../components/user/User'

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      <Head>
        <title>GitHub User Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid min-h-screen px-6 py-4 md:justify-center font-space bg-clr-section-light dark:bg-clr-section-dark">
          <div className="max-w-[45.625rem] flex flex-col justify-center gap-9">
            <Header
              setTheme={setTheme}
              mounted={mounted}
              theme={theme}
              systemTheme={systemTheme}
            />

            <div className="flex flex-col gap-4">
              <Searchbar />

              <User user={undefined} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
