import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
    render() {
        return (

            <section className="search-component-container">
                <div className="item1" >
                    <input type="text" className="search-component-input" placeholder={this.props.placeholder} />
                </div>
                <div className="search-component-item" >
                    <button type="submit" className="search-component-button search-component-button-default">{this.props.buttonName}</button>
                </div>

            </section>
        );
    }
}


export default Search;