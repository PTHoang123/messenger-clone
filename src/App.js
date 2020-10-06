import React, { useState , useEffect} from 'react';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message'; 
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
   
    
  ])
  const [username, setUsername] = useState('')
   
 console.log(input);
 console.log(messages);

 useEffect(() => {
  db.collection("messenger-clone")
  .orderBy('timestamp','desc')  
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc =>({id: doc.id, data:doc.data()})))
  });
   
 }, [])
 
 useEffect(() => {
   setUsername(prompt('Please enter your name'))
   
 }, [])
 const sendMessage = (event) => { 
    event.preventDefault();

    db.collection("messenger-clone").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
 
    })
     
    setInput('');
 }

  return (
    <div className="App">
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/768px-Facebook_Messenger_4_Logo.svg.png'/>
      <h1>Messenger</h1>
      <h2>Hello {username}</h2>
      <form className= 'app__form'>
      <FormControl className="app__formControl">
  
  <Input className= "app_input" placeholder="nhập tin nhắn" value={input} type='subnit'  onChange={event => setInput(event.target.value)} />
  <IconButton className="app_iconButton" variant="contained" color="primary"  disabled={!input}  type="submit" onClick={sendMessage}>
<SendIcon/>
  </IconButton>
</FormControl>

</form>
     <FlipMove>
     {messages.map(({id, data}) => (
      <Message key={id} username={username} message={data} />
     ))}
     </FlipMove>
    </div>
   
  );
}

export default App;
