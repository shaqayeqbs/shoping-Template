import { useState, useEffect } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function useTimer(sec = 0, min = 0, hour = 0, day = 0) {
  const initialMinute = min;
  const initialSeconds = sec;
  const initialHours = hour;
  const initialDay = day;
  const [days, setDays] = useState(initialDay);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [Faminutes, setFaMinutes] = useState(digitsEnToFa(minutes));
  const [FarsHours, setFaHours] = useState(digitsEnToFa(hours));
  const [FarsDays, setFaDays] = useState(digitsEnToFa(days));
  const [farsSec, setFaSeconds] = useState(digitsEnToFa(seconds));

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
          } else if (hours === 0) {
            if (days > 0) {
              setDays(days - 1);
              setHours(24);
              setFaDays(digitsEnToFa((days - 1).toString()));
              setFaHours(digitsEnToFa(24));
            }
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

  return [hours, minutes, seconds, farsMin, FaHours, Faseconds, FarsDays, days];
}
