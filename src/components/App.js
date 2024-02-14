// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setImage(data.message);
        setIsLoading(true);
      });
  }, []);

  return (
    <div>
      {isLoading ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}
export default App;
