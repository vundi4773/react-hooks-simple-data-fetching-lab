// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
        setIsLoading(true);
      });
  }, []);
  if (!isLoading) return <p>Loading...</p>;
  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;
