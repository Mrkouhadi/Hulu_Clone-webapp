import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Hulu Clone by Mr.kouhadi</title>
        <meta name="description" content="Hulu webapp clone built using Nextjs and Tailwindcss" />
        <meta name="keywords" content="Reactjs, nextjs, tailwindcss, frontend, webapp, hulu clone, clone, hulu"/>
        <meta name="author" content="Mr.Kouhadi"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
     
    </div>
  )
}