import React, { memo } from "react";
import { useSelector } from "react-redux";

function WorkTIme() {
  const workTimes = useSelector((state) => state.businessSlice?.workTimes);

  const weekData = [];

  const dayMaker = (index, day, times) => {
    var found = false;
    console.log(typeof times);
    if (typeof times == "string") {
      console.log(index, day, times);
      weekData.push({ index, day });
      return;
    }
    for (var i = 0; i < workTimes.length; i++) {
      if (weekData[i]?.day == day) {
        found = true;
        const startTime = times[0].startTime;
        const endTime = times[0].endTime;
        return weekData[i]?.times?.push({ startTime, endTime });
      }
    }

    if (!found) {
      weekData.push({ index, day, times });
    }
  };
  const days = [
    { d: "شنبه" },
    { d: "یکشنبه" },
    { d: "دوشنبه" },
    { d: "سه‌شنبه" },
    { d: "چهارشنبه" },
    { d: "پنج شنبه" },
    { d: "جمعه" },
  ];
  for (const i in workTimes) {
    const startTime = workTimes[i].start_time.slice(0, 5);
    const endTime = workTimes[i].end_time.slice(0, 5);
    const times = [{ startTime, endTime }];
    if (workTimes[i].week_day?.index) {
      dayMaker(i, days[i]?.d, times);
    } else {
      dayMaker(i, days[i]?.d, "tatil");
    }
  }
  console.log(workTimes, "ww");
  // workTimes?.map((item) => {
  //   const startTime = item.start_time.slice(0, 5);
  //   const endTime = item.end_time.slice(0, 5);
  //   const times = [{ startTime, endTime }];

  //   switch (item.week_day.index) {
  //     case 0:
  //       dayMaker(0, "شنبه", times);
  //       break;
  //     case 1:
  //       dayMaker(1, "یکشنبه", times);
  //       break;
  //     case 2:
  //       dayMaker(2, "دوشنبه", times);
  //       break;
  //     case 3:
  //       dayMaker(3, "سه‌شنبه", times);
  //       break;
  //     case 4:
  //       dayMaker(4, "چهارشنبه", times);
  //       break;
  //     case 5:
  //       dayMaker(6, "پنج شنبه", times);
  //       break;
  //     case 6:
  //       dayMaker(7, "جمعه ", times);
  //       break;

  //     default:
  //       break;
  //   }
  // });

  let options = {
    weekday: "long",
  };
  let today = new Date().toLocaleDateString("fa-IR", options);

  weekData.sort((a, b) => (a.index > b.index ? 1 : b.index > a.index ? -1 : 0));
  console.log(weekData, "kkk");
  weekData.forEach((item) => {});
  return (
    <section className="mb-4">
      <h1>ساعات کاری</h1>
      <ul className="flex flex-wrap lg:flex-nowrap w-full my-8 justify-center">
        {weekData?.map((item) => (
          <li
            key={item.index}
            className={
              item.day === today
                ? "!text-[white] bg-skin-fill ml-6 mb-6 rounded-xl p-4 text-center w-[140px] h-[140px]"
                : "bg-[white] ml-6 mb-6 rounded-xl p-4 text-center w-[140px] h-[140px]"
            }
          >
            <div className="mb-4">{item.day}</div>
            {item?.times?.map((elemnt, index) => (
              <div
                key={index}
                className={
                  item.day === today
                    ? " text-[white] my-1"
                    : "text-skin-primary my-1"
                }
              >
                {elemnt.startTime} تا {elemnt.endTime}
              </div>
            ))}
            {!item.times && <div>تعطیل</div>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default memo(WorkTIme);
