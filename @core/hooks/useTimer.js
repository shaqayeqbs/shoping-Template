import { useState, useEffect } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function useTimer() {
  const initialMinute = 10;
  const initialSeconds = 0;
  const initialHours = 2;
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [Faminutes, setFaMinutes] = useState("۲");
  const [FaHours, setFaHours] = useState("۲");
  const [seconds, setSeconds] = useState(initialSeconds);
  const [Faseconds, setFaSeconds] = useState("۰");

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setFaSeconds(digitsEnToFa((seconds - 1).toString()));
      }
      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
          setFaMinutes(digitsEnToFa((minutes - 1).toString()));
          setFaSeconds(digitsEnToFa("59"));
        } else if (minutes === 0) {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setFaHours(digitsEnToFa((hours - 1).toString()));
            setFaMinutes(digitsEnToFa("59"));
          }
          if (minutes === 0 && hours === 0 && seconds === 0) {
            clearInterval(myInterval);
          } else if (hours === 0) {
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return [hours, minutes, seconds, Faminutes, FaHours, Faseconds];
}
