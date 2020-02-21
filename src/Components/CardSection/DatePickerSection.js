import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form action="">
      <DatePicker selected={startDate} onChange={props.date} />
    </form>
  );
};

export default PickDate;