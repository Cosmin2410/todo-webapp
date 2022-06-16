import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Data from '../Components/Data';
import Link from 'next/link';
import { useState } from 'react';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return {
    props: { todoData: data },
  };
};

export default function Home({ todoData }) {
  // const [objData, setObjData] = useState({});

  // const usersData = todoData.map((userData) => {
  //   const userObj = {
  //     userId: userData.userId,
  //   };

  //   console.log(userObj);
  // });

  // console.log(objData);

  const filterData = (id) => {
    todoData.map((usersData) => {
      console.log(usersData);
      // datas.filter((userData) => userData !== id);

      // usersData.filter((userData) => userData !== id);
    });

    console.log(id);
  };

  return (
    <>
      <div>
        <input type="text" />
        <button>Add Task</button>
      </div>
      <div>
        {todoData.map((allData) => {
          return (
            <Link key={allData.id} href={`/?userId=${allData.id}`}>
              {/* <Data data={allData.title} /> */}
              <div
                onClick={() => filterData(allData.userId, allData)}
                style={{ pointerEvents: 'none' }}
              >
                {allData.title}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

// npm i node
// npm install redux react-redux @reduxjs/toolkit next-redux-wrapper --save

// zi 1 api call from redux and useId pages
// zi 2 customhook and styled components
// zi 3
