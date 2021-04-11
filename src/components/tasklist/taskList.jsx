import React, { Component } from 'react'
import './style.scss'
import TaskItem from '../taskitem/taskItem';


export default class TaskList extends Component {
    render () {
        const {theTask = [],toggleDone,delHandler, toggleIsImportant}=this.props
         return (
        <ul className= "list">
            {theTask.map((item) => <TaskItem key={item.id} {...item} toggleDone={toggleDone}  delHandler={delHandler} 
            toggleIsImportant={toggleIsImportant}   />
            )}
        </ul>
    );
};}
   