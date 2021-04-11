import React, { Component } from 'react';
import './styles.scss'


export default class Form  extends Component {
    state = {
        input: ''
    }

    inputChange= (e) => {
        const {value} = e.target;
        this.setState ({input: value})

    }
    addTask = () => {
        const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }

    }



    render() {

        const {input} = this.state;
        return (
            <div >
                <form className= "blockform" action="#">
                <input className ="input" value={input} onChange={this.inputChange} type = "text" placeholder="What do you want to do..." />
                <button className = "btn-form" disabled={!input} type="button" onClick={this.addTask} >Add</button>
            </form>
            <p> Новая задача: {input} </p>
          
                
            </div>
        )
       
    }
}

