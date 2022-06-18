import Data from '../Components/Data';
import Form from '../Components/Form';
import React from 'react';
import { GlobalStyles } from '../Components/styles/Global';
import IndexStyled from '../Components/styles/Index.styled';

class Index extends React.Component {
  static async getInitialProps(context) {
    let path = context.asPath;
    path = path.substring(path.indexOf('=') + 1);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/?userId=${path}`
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
      <IndexStyled>
        <GlobalStyles />
        <Form />
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
      </IndexStyled>
    );
  }
}

export default Index;

// npm install node
// npm install redux react-redux @reduxjs/toolkit next-redux-wrapper --save
// npm install uuid
// npm install styled-components --save
// npm install --save-dev babel-plugin-styled-components
