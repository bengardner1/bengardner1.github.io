import React, { useState, useEffect } from 'react';

const TimeSinceDob = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the seconds state every second
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // You can set a specific date to count the seconds from
  const startDate = new Date('2003-02-11T01:06:00Z');
  const elapsedSeconds = Math.floor((Date.now() - startDate.getTime()) / 1000);
  const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
  return (
    <div>
      <p className='d-block'>Seconds since I was born: {addCommas(elapsedSeconds)}</p>
    </div>
  );
};

export default TimeSinceDob;
