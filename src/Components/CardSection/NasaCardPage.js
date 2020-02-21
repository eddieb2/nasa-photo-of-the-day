import React, {useState, useEffect} from "react";
import NasaCardSection from './NasaCardSection';
import axios from 'axios';
import PickDate from './DatePickerSection'
import './Card.css';

const NasaCardPage = () => {
  const [data, setData] = useState(false);
  const [date, setDateHere] = useState(' ');


  const setDate = date => {
    console.log(date)
    let stringArr = date.toString().split(' ');
    let month = '';
    console.log(stringArr)
    switch (stringArr[1]){
      case 'Jan': month = '01';
      break;
      case 'Feb': month = '02';
      break;
      case 'Mar': month = '03';
      break;
      case 'Apr': month = '04';
      break;
      case 'May': month = '05';
      break;
      case 'Jun': month = '06';
      break;
      case 'Jul': month = '07';
      break;
      case 'Aug': month = '08';
      break;
      case 'Sep': month = '09';
      break;
      case 'Oct': month = 10;
      break;
      case 'Nov': month = 11;
      break;
      case 'Dec': month = 12;
      break;
      default: month = '01';
      break;
    }
    const formattedDate = `${stringArr[3]}-${month}-${stringArr[2]}`;
    console.log(formattedDate);

    setDateHere(formattedDate);

  }

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=qCjZEybN1FEJ5Sm2yaX8lmIiy51OoD9MrMj2zAVz&date=${date}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
  },[date]);

  return(
    <div className="cardPage">
      <div className="pickDate">
        <PickDate date={setDate}/>
      </div>
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