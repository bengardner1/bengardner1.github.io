import React, { useState, useEffect } from 'react';

const TimeSinceDob = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const startDate = new Date('2003-02-11T01:06:00Z');
  const elapsedSeconds = Math.floor((Date.now() - startDate.getTime()) / 1000);
  const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div>
      <p className='d-block'>{addCommas(elapsedSeconds)} seconds</p>
    </div>
  );
};

export default TimeSinceDob;
