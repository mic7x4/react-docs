import React from 'react'


const comment = {
    date: new Date(),
    text:"I hote you enjoy learning react",
    author:{
        name:"Black Hustle",
    }
}

function Comment({props}) {
    return (
        <div className="comment">
            <div className="userInfo">
                <img 
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="userInfo__name">
                    {props.author.name}
                </div>
            </div>
            <div className="comment__text">{props.text}</div>
            <div className="comment__date">{props.date}</div>
            
        </div>
    )
}





export default Comment
