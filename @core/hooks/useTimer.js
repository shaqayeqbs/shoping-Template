import { useState, useEffect } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function useTimer() {
  const initialMinute = 2;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinute);
  const [Faminutes, setFaMinutes] = useState("۲");
  const [seconds, setSeconds] = useState(initialSeconds);
  const [Faseconds, setFaSeconds] = useState("۰");
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setFaSeconds(digitsEnToFa((seconds - 1).toString()));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
          setFaMinutes(digitsEnToFa((minutes - 1).toString()));
          setFaSeconds(digitsEnToFa("59"));
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  function refreshTimer() {
    setMinutes(2);
    setFaMinutes("۲");
    setSeconds(0);
    setFaSeconds("۰");
  }

  return [minutes, seconds, Faminutes, Faseconds, refreshTimer];
}
