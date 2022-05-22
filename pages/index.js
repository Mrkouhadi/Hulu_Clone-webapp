import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

const Home =({movies})=> {
  return (
    <div className="h-screen">
      <Head>
        <title>Hulu Clone by Mr.kouhadi</title>
        <meta name="description" content="Hulu webapp clone built using Nextjs and Tailwindcss" />
        <meta name="keywords" content="Reactjs, nextjs, tailwindcss, frontend, webapp, hulu clone, clone, hulu"/>
        <meta name="author" content="Mr.Kouhadi"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Nav/>
      <Results requests={movies}/>
    </div>
  )
}
export default  Home;

export const getServerSideProps = async(context) =>{
  const {genre} = context.query;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending}`).then(
    results => results.json()
  );

  return {
    props:{
      movies:request.results
    }
  }
}