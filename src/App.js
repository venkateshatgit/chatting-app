import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import SideBar from './components/sidebar/sideBar';
import Message from './components/message-section/messages';
import WriteMessage from './components/write-message/writeMessage';

function App() {

  const [messageArray, setMessageArray] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    const newMessageArray = [...messageArray]
    newMessageArray.push(e.target[0].value);
    setMessageArray(newMessageArray)
    e.target[0].value=""
  }

  return (
    <div className="App">
        <SideBar/>
        <Message messageArray={messageArray}/>
        <WriteMessage  handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
