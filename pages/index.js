import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Data from '../Components/Data';
import Link from 'next/link';
import React from 'react';

class Index extends React.Component {
  static async getInitialProps(context) {
    let path = context.asPath;
    path = path.substring(path.indexOf('=') + 1);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${path}`
    );

    const data = await response.json();

    const allUsersResponse = await fetch(
      `https://jsonplaceholder.typicode.com/todos`
    );

    const allUsersData = await allUsersResponse.json();

    return { data, allUsersData, path };
  }

  render() {
    const { data, allUsersData, path } = this.props;
    return (
      <>
        {path === '/'
          ? allUsersData.map((usersData) => {
              return (
                <Data
                  key={usersData.id}
                  data={usersData.title}
                  completed={usersData.completed}
                />
              );
            })
          : data.map((allData) => {
              return (
                <Data
                  key={allData.id}
                  data={allData.title}
                  completed={allData.completed}
                />
              );
            })}
      </>
    );
  }
}

export default Index;

// npm i node
// npm install redux react-redux @reduxjs/toolkit next-redux-wrapper --save

// zi 1 api call from redux and useId pages
// zi 2 customhook and styled components
// zi 3
