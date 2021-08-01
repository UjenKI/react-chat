import React, {Component} from 'react';

import './search-pannel.css';

export default class SearchPannel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.searchInput = this.searchInput.bind(this);
    }

    searchInput(e){
        const term = e.target.value;
        this.setState({term});
        this.props.searchInput(term);
    }

    render(){
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Seach on posts"
                onChange={this.searchInput}
            />
        )
    }
}