import React, { Component} from 'react'
import './style.scss'


export default class  TaskItem  extends Component  {
    render() {
       const {task,isDone,toggleDone, id, delHandler, toggleIsImportant,isimportant} = this.props
         const btnDoneContent = isDone ? '✔️' : '❌';
   



    return (
        <li className="item" style={{
            textDecoration: isDone ? 'line-through' : 'none',
            backgroundColor: isimportant ? 'yellow' : 'rgb(155, 142, 189)'
          }}>
        
            <span className="list"> {task}
            </span>
            <span className="block-btn">
            <button className ="btn" type="button" onClick={() => delHandler(id)}> Delete </button>
            <button className ="btn" type="button" onClick={() => toggleIsImportant(id)}> Important ❕ </button>
            <button className ="btn" onClick={()=>toggleDone(id)} type="button" >{btnDoneContent}</button>
        </span>
        </li>
    );
};
    }
   