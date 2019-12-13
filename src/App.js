import React from 'react';

import './App.css';
import Button from './components/button';
import TextArea from './components/textarea';

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let rand = Math.floor(Math.random() * 10000);
    let dateClick = this.getNowDateTime();   
    let phrase = ` Нажата кнопка ${e.target.innerHTML}, задержка ${rand} Время нажатия: ${dateClick}`;
    
    setTimeout((ph = phrase) => {
      let dateAdd = this.getNowDateTime();
      ph = `${this.state.comment} Время добавления: ${dateAdd} ${ph} \r\n`;
      this.setState({comment : ph})
    }, rand);
  }

  getNowDateTime(){
    let d=new Date();
    let min = String(d.getMinutes()).padStart(2, "0");
    let sec = String(d.getSeconds()).padStart(2, "0");
    let hours = String(d.getHours()).padStart(2, "0");
    let date = d.getDate()+"." + (d.getMonth() + 1) + "." + d.getFullYear()+" "+hours+":"+min+":"+sec;

    return date;
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");        
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({comment :''});

  }

  buttonStyle = {
    margin: "10px 10px 10px 10px"
  };

  render() {
    return(
      <div className="container">
        <div className="App">
          <Button action={this.handleClick}
                type={"btn1"}
                title={"Баттон 1"}
                style={this.buttonStyle}
          />
          <Button action={this.handleClick}
                type={"btn2"}
                title={"Баттон 2"}
                style={this.buttonStyle}
          />
          <Button action={this.handleClick}
                type={"btn3"}
                title={"Баттон 3"}
                style={this.buttonStyle}
          />
        </div>
        <div className="App">
        <TextArea
              rows={10}
              value={this.state.comment}              
              handleChange={this.handleTextArea}
              placeholder={"Здесь будет лог от нажатий кнопок"}
        /> 
        <Button action={this.handleClear}
                type={"clear"}
                title={"Очистить"}
                style={this.buttonStyle}
          /> 
        </div>
      </div>
    )
  }
  
}

export default App;
