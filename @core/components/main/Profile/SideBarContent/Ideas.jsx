import React from "react";
import Card from "../../../../UI/Card";
import UserComment from "../../shop/DetailPage/Filter/UserComment";

function Ideas() {
  const ideas = [
    {
      id: "1",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      stars: [
        { title: "رفتار", value: "3" },

        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
    {
      id: "2",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      stars: [
        { title: "رفتار", value: "3" },

        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
    {
      id: "3",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      stars: [
        { title: "رفتار", value: "3" },

        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
  ];
  return (
    <Card>
      {ideas?.map((item) => (
        <div key={item.key} className="border-b-2 border-bordercolor">
          {" "}
          <UserComment comment={item} ideas />
        </div>
      ))}
    </Card>
  );
}

export default Ideas;
