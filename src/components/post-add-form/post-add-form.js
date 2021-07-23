import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return(
        <div className="bottom-pannel d-flex">
            <input
                type='text'
                placeholder = 'Write your message'
                className = "form-control new-post-label"
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
                onClick={() => onAdd('hello')}
            >Add</button>
        </div>
    )
}

export default PostAddForm;

