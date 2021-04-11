import React, {Component} from 'react';
import './styles.scss'

export default class CommentsFilter extends Component {

    state = {
        inputValue: '',
        selectValue: ''
    }

    onInputChange = (e) => {
        const {value} = e.target;
        const inputValue = value.toUpperCase();

            this.setState({inputValue})
    };


    selectHandler = (e) => {
        const {value} = e.target;
        this.setState({selectValue: value})
    }

    onInputFocus = (e) => {
        console.log(e);

    }





    render() {
        const {inputValue, selectValue} = this.state;

        return (
            <div>
                <p><input className='inputfilter' value={inputValue} onFocus={this.onInputFocus} onChange={this.onInputChange} type="text" /></p>
                <p>Значение:{inputValue} </p>
                <select value={selectValue} onChange={this.selectHandler}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Манго</option>
          </select>
          <p>Значение:{selectValue} </p>
            </div>
        )
    }
}