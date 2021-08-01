import React, {Component} from 'react';

export default class PostStatusFilter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const classTag = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button onClick={() => this.props.filterUpdate(name)} key={name} type='button' className={`btn ${classTag}`}>{label}</button>
            )
        })

        return(
            <div className = "btn-group">
                {/* <button type='button' className='btn btn-info'>All</button>
                <button type='button' className='btn btn-outline-secondary'>Liked</button> */}
                {buttons}
            </div>
        )
    }
}