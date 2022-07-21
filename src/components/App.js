// create your App component here

import React,{useState, useEffect} from "react";

export default function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);


   if (!dogImage) return <p>Loading...</p>;

 return <img src={dogImage} alt="A Random Dog" />;
}

