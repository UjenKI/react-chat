import React from 'react';

import './post-add-form.css';

const PostAddForm = () => {
    return(
        <form className="bottom-pannel d-flex">
            <input
                type='text'
                placeholder = 'Write your message'
                className = "form-control new-post-label"
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
            >Add</button>
        </form>
    )
}

export default PostAddForm;

