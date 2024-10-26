import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Search from './Components/Search';
import './App.css';

function App() {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('all'); // Changed to 'all' to represent all categories

  const handleCountryChange = (value) => {
    setCountry(value);
    console.log("vale change of the country");
  };

  const handleChangeCategory = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Navbar handle={handleChangeCategory} />
      <Search set={handleCountryChange} />
      <Body val={country} category={category} /> {/* Pass both country and category */}
    </div>
  );
}

export default App;
