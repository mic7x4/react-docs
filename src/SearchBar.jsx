import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="search"/>
                    <input type="checkbox"/> Only show products in stock
                </form>
            </div>
        )
    }
}
