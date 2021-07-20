import React from 'react';

import './search-pannel.css';

const SearchPannel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Seach on posts"
        />
    )
}

export default SearchPannel;