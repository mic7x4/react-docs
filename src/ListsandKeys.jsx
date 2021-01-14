import React from 'react'

function ListsandKeys() {
    function ListItem(props){
        return <li>{props.value}</li>
    }
    function NumberList(props){
        const numbers = [1,2,3,4,5,6,7];
        const listItems = numbers.map((number) => 
            <ListItem key={number.toString()} value={number}/>
        )
        return <ul>{listItems}</ul>
    }

    return (
        <div>
            <ul>
                <NumberList/>
            </ul>
        </div>
    )
}

export default ListsandKeys
