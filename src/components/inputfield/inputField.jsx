import React, { Component }from 'react';
import './style.scss'


export default class InputField extends Component  {
   render () {
       const {displayedActive,displayedList} = this.props;
       console.log("displayedActive", displayedActive)
       
    return (
        <div>
            
            <form action="#">
            <button className="btn-field" type="button" value={displayedList} onClick={() => displayedActive("all")}>All</button>
                <button className="btn-field" type="button" value={displayedList} onClick={() => displayedActive("active")}>Active</button>
                <button className="btn-field" type="button" value={displayedList} onClick={() =>displayedActive("done")}>Completed</button>
            </form>
        </div>
    );
};}
    