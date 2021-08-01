import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPannel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'Fro example', important: true, like: false, id: 1},
                {label: 'Lorem ipsum ', important: false, like: false, id: 2},
                {label: 'Sample text', important: false, like: false, id: 3},
            ]
        }
        this.maxId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);

    }

    deleteItem(id){
        console.log(id);
        console.log(this.state.data);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            console.log(index);
            console.log(id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onToggleLike(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    render(){
        const liked = this.state.data.filter(item => item.like === true).length;
        const allPosts = this.state.data.length;

        return (
            <div className="app">
                <AppHeader
                    liked ={liked}
                    allPosts={allPosts}
                />
                <div className="search-pannel d-flex">
                    <SearchPannel/>
                    <PostStatusFilter/>
                </div>
                    <PostList 
                        posts={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleLike={this.onToggleLike}
                    />
                    <PostAddForm
                        onAdd={this.addItem}
                        data={this.state.data}
                    />
            </div>
        )
    }
}


