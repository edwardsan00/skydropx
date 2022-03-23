import type { NextPage } from 'next'
import Head from 'next/head'
import clxs from 'clsx'
import { Input } from 'components/input'
import { Button } from 'components/button'
import { LocationSolid, WeightSolid, LengthSolid } from 'components/icons'
import styles from 'styles/home.module.css'
import clsx from 'clsx'

const Home: NextPage = () => {
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
          <h1 className="text-center text-3xl font-bold text-sky-black md:w-4/6 md:text-left md:text-5xl lg:text-7xl">
            Todos tus <span className="text-sky-violet">envíos</span> en un
            mismo lugar
          </h1>
          <p className="mt-3 mb-6 hidden w-3/5 text-sm md:block">
            Conecta tus propias cuentas de paqueterías o tu eCommerce para crear
            y visualizar tus guías desde un mismo lugar. Brinda seguimiento
            automatizado de los envíos a tu cliente final y equipo.
          </p>
        </div>
        <div
          className={clsx([
            'flex w-full flex-col rounded-md bg-white px-8 pt-8 pb-5',
            styles.homeBlur,
          ])}
        >
          <div className="flex w-full flex-col md:flex-row">
            <Input
              name="from"
              fullWidth
              className="mb-2 md:mr-2"
              icon={<LocationSolid className="fill-sky-red" />}
              placeholder="Codigo origen"
            />
            <Input
              fullWidth
              name="to"
              className="mb-2"
              icon={<LocationSolid className="fill-sky-red" />}
              placeholder="Codigo destino"
            />
          </div>
          <div className="flex w-full flex-col md:flex-row">
            <Input
              fullWidth
              name="weight"
              className="mb-2 md:mr-2"
              icon={<WeightSolid className="fill-sky-blue" />}
              placeholder="Peso (KG)"
            />
            <Input
              fullWidth
              name="weight"
              className="mb-2"
              icon={<LengthSolid className="fill-sky-black" />}
              placeholder="Largo (CM)"
            />
          </div>
          <div className="flex w-full flex-col md:flex-row">
            <Input
              fullWidth
              name="width"
              className="mb-2 md:mr-2 md:mb-0"
              placeholder="Ancho (CM)"
            />
            <Input
              fullWidth
              name="height"
              className="mb-2 md:mb-0"
              placeholder="Alto (CM)"
            />
          </div>
          <div className="mt-2">
            <p className="mb-4 text-xs italic text-sky-gray">
              * Debes completar todos los campos para poder cotizar
            </p>
            <Button className="w-full bg-sky-red text-white md:w-40">
              Buscar
            </Button>
          </div>
        </div>
      </main>

      <footer className="mt-9 flex h-10 w-full items-center justify-center text-xs">
        Copyright © 2022 Skydropx.
      </footer>
    </div>
  )
}

export default Home
