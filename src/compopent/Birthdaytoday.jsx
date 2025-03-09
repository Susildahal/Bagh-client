import React, { useState } from 'react';

export default function Birthdaytoday() {
  var [years, setYears] = useState('');
  const[month,setMonth]=useState('')
  const[day ,setDay]=useState('')
  const [result,setResult]=useState('');
var newyears=2081-years;
  const handleData = (e) => {
    e.preventDefault();
    const totalDays = parseFloat(newyears)*365 + parseFloat(month) *30 + parseFloat(day);
    setResult(totalDays);
  };

  return (
    <div>
      <form onSubmit={handleData}>
      <label> Enter years: <input type="number"value={years} placeholder="Enter years"onChange={e => {const inputyears = e.target.value; setYears(inputyears); }} /></label>
      <br /><br />

      <label>
        Enter months:
        <input type="number" placeholder="Enter months"  value={month} onChange={e=>{const inputmonth=e.target.value; setMonth(inputmonth)}}/>
      </label>
      <br /><br />

      <label>
        Enter days:
        <input type="number" placeholder="Enter days" value={day} onChange={e=>{const inputday=e.target.value;setDay(inputday)}} />
      </label>
      <br /><br />

      <input type="submit" value="Submit"/>
      </form>
      <div>Your total days are: {newyears}</div>
      <div>Your total days are: {month}</div>
      <div>Your total days are: {day}</div>
      <div>Your total days are: {result}</div>




    </div>
  );
}