/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import clsx from 'clsx'
import { FormBudget } from '@/components/organisms/form-budget'
import { QuoterType } from '@/types/shipments'
import styles from '@/styles/home.module.css'

const HomePage: NextPage = () => {
  const router = useRouter()

  const handleData = (data: QuoterType) => {
    router.push({
      pathname: '/shipments',
      query: data,
    })
  }

  return (
    <div
      className={clsx(['flex min-h-screen flex-col bg-sky-bg3', styles.home])}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="m-auto flex h-16 w-full max-w-screen-lg items-center px-4 md:justify-between ">
        <img
          src="/assets/images/skydropx-logo.svg"
          className={styles.headerImage}
          alt="Skydropx"
        />
        <p className="hidden text-xs md:block">🇪🇸</p>
      </header>
      <main className="m-auto flex w-full max-w-screen-lg grow flex-col items-center justify-center px-4  md:justify-center">
        <div className="py-5">
          <h1
            aria-label="title"
            className="text-center text-3xl font-bold text-sky-black md:w-4/6 md:text-left md:text-5xl lg:text-7xl"
          >
            Todos tus <span className="text-sky-violet">envíos</span> en un
            mismo lugar
          </h1>
          <p className="mt-3 mb-6 hidden w-3/5 text-sm md:block">
            Conecta tus propias cuentas de paqueterías o tu eCommerce para crear
            y visualizar tus guías desde un mismo lugar. Brinda seguimiento
            automatizado de los envíos a tu cliente final y equipo.
          </p>
        </div>
        <FormBudget onHandleSubmitData={handleData} />
      </main>

      <footer className="mt-9 flex h-10 w-full items-center justify-center text-xs">
        Copyright © 2022 Skydropx.
      </footer>
    </div>
  )
}

export default HomePage
