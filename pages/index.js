//import Head from 'next/head'
//import Image from 'next/image'
import houses from './houses.js'
import styles from '../styles/Home.module.css'
import House from '../components/House.js'
import Layout from '../components/Layout.js'

const content =(
   <div className={styles.container}>
       
      <h2>Places to stay</h2>
      <div className="houses">
      {houses.map((house, index) => {
      return <House key={index} {...house} />
      })}
      </div>
      <style jsx>{`
  .houses {
    display: grid;
    grid-template-columns: 49% 49%;
    grid-template-rows: 300px 300px;
    grid-gap: 2%;
  }
  body{
    padding-left:30px;
  padding-right:30px;
  }
`}</style>
    </div>
  )

  export default function Home() {
    return(<Layout content={content} />)
  }
