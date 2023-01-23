import { Heart, Location, Message, Shop, Wallet } from "iconsax-react";
import React from "react";
import ProfileAvator from "./ProfileAvator";
import SideBarItem from "./SideBarItem";
function SideBar({ onChangeIndex, activeItem }) {
  const changeAxtiveIndexHandler = (item) => {
    onChangeIndex(item);
  };

  const sideBar = [
    {
      id: 1,
      name: "wallet",
      title: "کیف پول",
      href: "/",
      icon: <Wallet size="24" variant="Outline" />,
    },
    {
      id: 6,
      title: "پیشخوان",
      name: "dashboard",
      href: "/",
      icon: <Shop size="24" variant="Outline" />,
    },
    {
      id: 3,
      title: "سفارشات",
      name: "orders",
      href: "/",
      icon: <Shop size="24" variant="Outline" />,
    },
    {
      id: 2,
      title: "علاقه مندی ها",
      name: "favorites",
      href: "/",
      icon: <Heart size="24" variant="Outline" />,
    },
    {
      id: 9,
      title: "آدرس ها",
      name: "address",
      href: "/",
      icon: <Location size="24" variant="Outline" />,
    },

    {
      id: 4,
      title: "دیدگاه ها",
      name: "ideas",
      href: "/",
      icon: <Message size="24" variant="Outline" />,
    },
    {
      id: 5,
      title: "پیغام ها",
      name: "messages",
      href: "/",
      icon: <Shop size="24" variant="Outline" />,
    },
    {
      id: 7,
      title: "بازدید های اخیر",
      name: "recently_viewed",
      href: "/",
      icon: <Shop size="24" variant="Outline" />,
    },
    {
      id: 8,
      title: "راهنما و پشتیبانی",
      name: "support",
      href: "/",
      icon: <Shop size="24" variant="Outline" />,
    },
  ];
  return (
    <aside className="bg-[white] mb-10 lg:w-[285px] lg:min-h-[20rem] p-4 rounded-xl">
      <div className="w-full flex justify-between">
        {" "}
        <div className="w-[6rem] ">
          {" "}
          <ProfileAvator />
        </div>
        <h2 className="mt-10">مهسا توفیق</h2>
      </div>
      {sideBar.map((item) => (
        <div key={item.id} className="inline-block lg:block  ">
          <SideBarItem
            item={item}
            onChangeActiveIndex={changeAxtiveIndexHandler}
            activeItem={activeItem}
          />
        </div>
      ))}
    </aside>
  );
}

export default SideBar;
