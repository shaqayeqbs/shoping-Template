import React from "react";
import useTimer from "../../../../@core/hooks/useTimer";
import useCalculateRemainingTime from "../../../../@core/hooks/useCalculateRemainingTime";
function RemainTime({ remainTime }) {
  const [nowseconds, nowminutes, nowhours, nowdays] = useCalculateRemainingTime(
    remainTime.end
  );
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer(
    nowseconds,
    nowminutes,
    nowhours,
    nowdays
  );
  const timerBtn =
    "bg-skin-secondary p-2 px-4 text-skin-primary w-full rounded-md";
  const timerDevider = "text-skin-pzaarimary mx-2 rtl w-full";
  return (
    <div className="w-max" dir="ltr">
      {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
        <h3 className="my-2 ltr text-center md:text-left">
          <span className={timerBtn}>{FaHours}</span>
          <span className={timerDevider}>:</span>
          <span className={timerBtn}>{Faminutes}</span>{" "}
          <span className={timerDevider}>:</span>
          {seconds < 10 ? (
            <span className={timerBtn}>۰{Faseconds}</span>
          ) : (
            <span className={timerBtn}>{Faseconds}</span>
          )}
        </h3>
      )}
    </div>
  );
}

export default RemainTime;
