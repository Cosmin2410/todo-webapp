import Data from '../Components/Data';
import Form from '../Components/Form';
import React from 'react';
import { GlobalStyles } from '../Components/styles/Global';
import IndexStyled from '../Components/styles/Index.styled';

class Index extends React.Component {
  static async getInitialProps(context) {
    let path = context.asPath;
    path = path.substring(path.indexOf('=') + 1);

    let userTask;
    let allTasks;

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/?userId=${path}`
      );

      userTask = await res.json();
    } catch (err) {
      console.log(err);
      userTask = [];
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      allTasks = await response.json();
    } catch (err) {
      console.log(err);
      allTasks = [];
    }

    return { userTask, allTasks, path };
  }

  render() {
    const { userTask, allTasks, path } = this.props;

    return (
      <IndexStyled>
        <GlobalStyles />
        <Form />
        {path === '/'
          ? allTasks.map((usersData) => {
              return (
                <Data
                  key={usersData.id}
                  task={usersData.title}
                  completed={usersData.completed}
                />
              );
            })
          : userTask.map((userData) => {
              return (
                <Data
                  key={userData.id}
                  task={userData.title}
                  completed={userData.completed}
                />
              );
            })}
      </IndexStyled>
    );
  }
}

export default Index;

// npm install node
// npm install uuid
// npm install styled-components --save
// npm install --save-dev babel-plugin-styled-components
// npm i --save-dev node uuid  babel-plugin-styled-components
