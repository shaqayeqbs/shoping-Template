import { useState, useEffect } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function useCalculateRemainingTime(endTime = 0) {
  const targetTime = new Date(endTime).getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  if (timeBetween < 0) {
    return [0, 0, 0, 0];
  }
  const nowseconds = Math.floor((timeBetween / 1000) % 60);
  const nowminutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const nowhours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const nowdays = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 2000);

    return () => clearInterval(interval);
  });

  return [nowseconds, nowminutes, nowhours, nowdays];
}
