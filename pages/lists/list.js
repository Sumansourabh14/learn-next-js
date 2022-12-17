import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "../../styles/List.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      items: data
    }
  }
}

const list = ({ items }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((err) => console.log(err))
  // }, []);

  return (
    <div>
        <Head>
            <title>Learn Next.JS | List</title>
        </Head>
        <h1>List</h1>
        {/* <ul>
          {data.map((el => {
            return <li key={el.name}>{el.name}</li>
          }))}
        </ul> */}
        {items.map((item => (
          <Link href={`/lists/${item.id}`} key={item.id}>
            <div className={styles.single}>
              <h3>{item.name}</h3>
            </div>
          </Link>
        )))}
    </div>
  )
}

export default list;