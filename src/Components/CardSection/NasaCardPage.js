import React, {useState, useEffect} from "react";
import NasaCardSection from './NasaCardSection'
import axios from 'axios'
import './Card.css'

const NasaCardPage = () => {
  const [data, setData] = useState(false);
  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=qCjZEybN1FEJ5Sm2yaX8lmIiy51OoD9MrMj2zAVz')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
  },[]);

  return(
    <div className="cardPage">
    {!data &&
      <p>...loading</p>
    }
    {data &&     
      <NasaCardSection
        title={data.title}
        explanation={data.explanation}
        image={data.hdurl}
        date={data.date}
      />
    }
    </div>
  );
}

export default NasaCardPage;