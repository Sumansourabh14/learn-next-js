import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const list = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
        <Head>
            <title>Learn Next.JS | List</title>
        </Head>
        <h1>List</h1>
        <ul>
          {data.map((el => {
            return <li key={el.name}>{el.name}</li>
          }))}
        </ul>
    </div>
  )
}

export default list;