import React from "react";

function OrdersActiveBrn({ activeState, onChangeState }) {
  const btns = [
    {
      id: "1",
      title: "جاری",
      name: "current",
    },
    {
      id: "2",
      title: "تحویل شده",
      name: "delivered",
    },
    {
      id: "3",
      title: "مرجوع شده",
      name: "returend",
    },
    {
      id: "4",
      title: "لغو شده",
      name: "cancelled",
    },
  ];

  const onChangeAvtiveState = (e) => {
    onChangeState(e.target.value);
  };
  return (
    <section className="border-b-2 border-bordercolor">
      {btns.map((item) => (
        <button
          key={item.id}
          onClick={onChangeAvtiveState}
          value={item.name}
          className={
            activeState === item.name
              ? "border-0  mx-4 rounded-none border-b-4 border-primary"
              : "border-0 mx-4 text-skin-muted"
          }
        >
          {item.title}
        </button>
      ))}
    </section>
  );
}

export default OrdersActiveBrn;
