import styles from '../styles/home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Pagina Principal</title>
        <meta name="keyworkds" content="Roupas, Calçados, Boné"></meta>
        <meta name='description' content="Encontre a melhor roupa para vocé"></meta>
      </Head>
      <h1 className={styles.title}>Hello World Next.js</h1>
      <Image src="/images/city.jpg" alt='foto de uma cidade' width={400} height={300}/>
    </div>
  )
}