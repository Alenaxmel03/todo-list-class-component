import React from 'react';
import {Comment} from './comment/Comment'

export const Comments = ({commentsList}) => {
    return (
        <ul>{commentsList.map((item) => <Comment key={item.id} {...item}/>)}
        </ul>
    );
};



//Второй вариант
// export const Comments = ({commentsList}) => {
//     const items = commentsList.map((item) => {
// return <li>{item}</li>;
//     });

    // const  item = <li>Пункт списка</li>;

//     return (
//         <ul>{items}</ul>
//     );
// };



// const arr = ['apple', 'orange'];

// const upeerFruits = arr.map((item) => {
//     const upperFruitName = item.toLocaleUpperCase();
//     return upperFruitName;
// });
// console.log(arr);
// console.log(upeerFruits);
