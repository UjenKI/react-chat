import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

        this.onValueInput = this.onValueInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueInput(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
        console.log(this.props.data);
    }

    render(){
        return(
            <form 
                className="bottom-pannel d-flex"
                onSubmit = {this.onSubmit}
            >
                <input
                    id = 'mainInput'
                    type='text'
                    placeholder = 'Write your message'
                    className = "form-control new-post-label"
                    onInput = {this.onValueInput}
                    value={this.state.text}
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'
                >Add</button>
            </form>
        )
    }
}


