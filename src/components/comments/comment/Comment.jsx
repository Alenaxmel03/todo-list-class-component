import React from 'react';


// const liStyle = {
//    borderBottom: '1px solid' 
// }

export const Comment = ({author,text,avatar,}) =>{
    const style = {
        background: text.length < 10 ? 'red' :  'blue',
        borderBottom: '1px solid'
    };

    return (
    <li style = {style}>
<span>Автор:{author}</span>
<br/>
<span>Комментарии: {text}</span>
<br/>
<span>Аватар: {avatar}</span>
</li>)
};
