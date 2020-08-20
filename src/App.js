import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/question2'
import Greeter from './components/question3'
import Alert from './components/question4'
import Person from './components/question5'
import Form from './components/question6'
import Post from './components/question7'


function App() {
  return (
    <div className="App">
      <Counter />
      <Greeter />
      <Alert />
      <Person name={'lily'} age={25} job={'wife'} />
      <Form />
      <Post title={'dog'} content={'cute dog'} img={'https://i1.wp.com/puppytoob.com/wp-content/uploads/2017/11/Blue-pitbull.jpg?resize=749%2C498'} />
    </div>
  );
}

export default App;
