import React, {Component} from 'react';

export class ClickCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     const {initClicksQty} = props;


    //     this.state ={
    //         clicksQty:initClicksQty
    //     }
    // }

    state = {
       clicksQty: this.props.initClicksQty,
       randNumber:null
    }

    btnHandler = () =>{
        // const {clicksQty} = this.state;
        // this.setState((prevState) => ({
        //     clicksQty:prevState.clicksQty + 1
        // }))
        this.setState((prevState) => {
            const {clicksQty} = prevState;
            return {
                clicksQty:clicksQty + 1
            }
        })
    };


    btn2Handler = () =>{
       const randNumber = Math.random();
        this.setState({randNumber})
    }
    




    render() {
        console.log(this.state);
        console.log(this.props);
        const {clicksQty, randNumber} = this.state;

       return (
        <div><p>Количество кликов :{clicksQty}</p>
        <p><button type = "button" onClick={this.btnHandler}>click</button></p>
        <p>Случайное число :{randNumber}</p>
        <p><button type = "button" onClick={this.btn2Handler}>getRandNumber</button></p>
        
        </div> 
       )
    }
}