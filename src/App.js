import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard';

class App extends Component{
  render(){
    const myStyle ={
      borderColor: "red",
      border:"solid",
      borderStyle:"solid",
      width: "25%",
      marginTop:"15px",
      marginLeft: "auto",
      marginRight: "auto",
    }

    return(
      <>
        <div style ={myStyle}>
          <ContactCard
          name="Susan"
          mobile = "8005882300"
          work = "8888888888"
          email ="thisaintreal@fake.com"
        />
        </div>

        <div style = {myStyle}>
          <ContactCard
          name="Dave"
          mobile = "44565564"
          work = "12345678912"
          email ="mightgai@fake.com"
          />
        </div>

        <div style = {myStyle}>
          <ContactCard
          name="Dan"
          mobile = "5551152357"
          work = "4588122358"
          email ="sumgai@fake.com"
          />
        </div>
      </>
    );
  }
}


export default App;
