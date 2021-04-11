import React from 'react';
import ReactDOM from 'react-dom';
import './Apps.scss';
import TaskList from './components/tasklist/taskList';
import InputField from './components/inputfield/inputField';
// import CommentsFilter from "./components/commentfilter/CommentsFilter";
import Form from "./components/inputform/InputForm"
// import { render } from '@testing-library/react';
// import {ClickCounter} from './components/click-counter/ClickCounter';



const filterTask = (displayedList, theTask) => {
  if (displayedList === 'all') { return theTask
    } else if (displayedList === 'active') {
      return theTask.filter((item) =>!item.isDone)
    } else if (displayedList === 'done') {
      return theTask.filter((item) =>item.isDone)
    };
};

const filterComments = (inputFilterValue,newTask) => {
  if (inputFilterValue === '') return newTask;
  return newTask.filter((item) => item.task.toLowerCase().includes(inputFilterValue.toLowerCase()));

}

class  App extends React.Component {
  state = {
    theTask: [
    {
      task: 'Learn HTML',
      id: 0,
      isimportant: false,
      isDone: false,
   
    },
    {
      task: 'Learn CSS',
      id:1,
      isimportant: false,
      isDone: false,

    },
    {
      task: 'Learn JS',
      id: 2,
      isimportant: false,
      isDone: false,
 
    }
  ],

  displayedList: 'all',

  inputFilterValue: '',


}


  displayedActive =  (string) => {
  console.log('displayedActive', string);

  this.setState ( {displayedList: string});
  console.log(this)
};


  toggleDone = (inputId) => {
    console.log('toggleDone', inputId);


    const stateCb = (preState) => {
      const {theTask} = preState;

      const newTheTask = theTask.map(item => {
        const {id, isDone} =item;

        return {
          ...item,
          isDone: inputId === id ? !isDone : isDone
        }; });

      return {
        theTask:newTheTask
      };
    };


    this.setState(stateCb);
};


  toggleIsImportant = (inputId) => {
  console.log(inputId);


  const stateCb = (preState) => {
    const {theTask} = preState;

    const newTheTask = theTask.map(item => {
      const {id, isimportant} =item;

      return {
        ...item,
        isimportant: inputId === id ? !isimportant : isimportant
      }; });

    return {
      theTask:newTheTask
    };
  };


  this.setState(stateCb);
};

  delHandler = (inputId) => {
    console.log(inputId);


    const stateCb = (preState) => {
      const {theTask} = preState;

      const newTheTask = theTask.filter((item) => item.id !== inputId);
      return {
        theTask:newTheTask
      };
    };


    this.setState(stateCb);
};


  inputHandler = (e) => {
  const {value} = e.target;
  console.log(value);
  this.setState({inputFilterValue: value});
 
};

addTask = input => {
 
  this.setState(state => {
    let {theTask} = state;
    theTask.push({
      id: Math.random(),
      task: input,
      isimportant: false,
      isDone: false,
    });
    return theTask;

  })
 
};




  render() {

    const {theTask,displayedList,inputFilterValue} = this.state;


    const newTask = filterTask(displayedList, theTask);
    

    const filteredTheTask = filterComments(inputFilterValue, newTask);


    const activeTask = theTask.filter(item => !item.isDone);
    const completedTask = theTask.filter(item => item.isDone);



  return (
    <div className="container">
      <h1>To Do List</h1>
      <h2>Active task: {activeTask.length}</h2>
      <h2>Completed task: {completedTask.length}</h2>
      <Form  addTask={this.addTask}/>
      <InputField displayedActive={this.displayedActive} />
      {/* <CommentsFilter /> */}
      <input className ="input" type="text" value={inputFilterValue} onChange={this.inputHandler} placeholder="Search..." ></input>
      <TaskList
      theTask={filteredTheTask}
      toggleDone={this.toggleDone}
      delHandler={this.delHandler}
      toggleIsImportant={this.toggleIsImportant}


      />
      {/* <ClickCounter initClicksQty={5}/> */}
    </div>
  )
  }
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);