import React, { useEffect, useState } from "react";
import Card from "./Card";

function Body({val,category}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const apikey = '0b09497b70d54409825d262a3032f25b';

  useEffect(() => {
    const categoryParam = category && category !== 'all' ? `&category=${category}` : '';
    const url = `https://newsapi.org/v2/top-headlines?country=${val}${categoryParam}&apiKey=${apikey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.articles || []);
        console.log(data.articles);
      })
      .catch((error) => setError(error.message));
  }, [val, category]);

  return (
    <div className="card-contain">
      {error && <p>{error}</p>} {/* Display error if it exists */}
      {data.length > 0 ? (
        data.map((article, index) => (
          <Card 
            key={index} 
            val={val} 
            title={article.title} 
            description={article.description} 
            image={article.urlToImage} 
            url={article.url} 
          />
        ))
      ) : !error && (
        <p>No news available for this selection.</p> // Fallback message if no data and no error
      )}
    </div>
  );
  
}

export default Body;
