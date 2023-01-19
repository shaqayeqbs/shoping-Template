import { useState, useEffect } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function useTimer(sec, min, hour) {
  const initialMinute = min;
  const initialSeconds = sec;
  const initialHours = hour;
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [Faminutes, setFaMinutes] = useState("۲");
  const [FarsHours, setFaHours] = useState("۲");
  const [seconds, setSeconds] = useState(initialSeconds);
  const [farsSec, setFaSeconds] = useState("۰");

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
  const farsMin = digitsEnToFa(Faminutes);
  const Faseconds = digitsEnToFa(farsSec);
  const FaHours = digitsEnToFa(FarsHours);

  function refreshTimer(sec, min, hour) {
    setMinutes(2);
    setFaMinutes("۲");
    setSeconds(0);
    setFaSeconds("۰");
  }

  return [hours, minutes, seconds, farsMin, FaHours, Faseconds, refreshTimer];
}
