import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPannel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';



const App = () => {

    const data = [
        {label: 'Fro example', important: true},
        {label: 'Lorem ipsum ', important: false},
        {label: 'Sample text', important: false},
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-pannel d-flex">
                <SearchPannel/>
                <PostStatusFilter/>
            </div>
                <PostList posts={data}/>
                <PostAddForm/>
        </div>
    )
}

export default App;