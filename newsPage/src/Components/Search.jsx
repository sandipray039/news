import React, { useState } from 'react';

function Search({ set }) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    // Country name to code map
    const countryMap = {
        "united states": "us",
        "united kingdom": "gb",
        "canada": "ca",
        "australia": "au",
        "india": "in",
        "germany": "de",
        "france": "fr",
        "japan": "jp",
        "china": "cn",
        // Add more country mappings as needed
    };

    const handleChange = (event) => {
        setInputValue(event.target.value.toLowerCase()); // Convert input to lowercase for matching
        setError(''); // Clear error when user starts typing
    };

    const handleClick = () => {
        const countryCode = countryMap[inputValue];
        if (countryCode) {
            set(countryCode); // Set country code in `App`
            setError(''); // Clear any previous error
        } else {
            setError("Country not recognized. Please try a valid country name.");
        }
    };

    return (
        <div className='search'>
            <input
                type="text"
                placeholder="Enter country name (e.g., United States, India)"
                value={inputValue}
                onChange={handleChange}
                className="form-control"
            />
            <div className="list-group">
                <button 
                    onClick={handleClick} 
                    type="button" 
                    className="list-group-item list-group-item-action active"
                >
                    Search
                </button>
            </div>
            {/* Render the error message conditionally */}
            {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>
    );
}

export default Search;
