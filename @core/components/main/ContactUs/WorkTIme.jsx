import React from "react";

function WorkTIme() {
  const data = [
    {
      id: 1,
      day: "شنبه",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
    {
      id: 2,
      day: " یکشنبه ",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
    {
      id: 3,
      day: "دوشنبه",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
    {
      id: 4,
      day: "سه شنبه",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
    {
      id: 5,
      day: "چهارشنبه",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
    {
      id: 6,
      day: "پنج شنبه",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
    {
      id: 7,
      day: "جمعه",
      startTime: "14:30 تا 16:30",
      endTime: "14:30 تا 16:30",
    },
  ];
  let options = {
    weekday: "long",
  };
  let today = new Date().toLocaleDateString("fa-IR", options);
  console.log(today);
  return (
    <section className="mb-4">
      <h1>ساعات کاری</h1>
      <ul className="flex w-full my-10">
        {data.map((item) => (
          <li
            key={item.id}
            className={
              item.day === today
                ? "w-full text-[white] bg-skin-fill ml-6 rounded-xl p-4 text-center"
                : "w-full bg-[white] ml-6 rounded-xl p-4 text-center"
            }
          >
            <div>{item.day}</div>
            <div
              className={
                item.day === today
                  ? " text-[white] my-1"
                  : "text-skin-primary my-1"
              }
            >
              {item.startTime}
            </div>
            <div
              className={
                item.day === today
                  ? " text-[white] my-1"
                  : "text-skin-primary my-1"
              }
            >
              {item.endTime}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkTIme;
