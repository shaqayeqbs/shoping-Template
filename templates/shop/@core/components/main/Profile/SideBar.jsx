import { Heart, Location, Message, Shop, Wallet } from "iconsax-react";
import ProfileAvator from "./ProfileAvator";
import SideBarItem from "./SideBarItem";
import { Edit2 } from "iconsax-react";
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
    <aside className="bg-[white] mb-10 lg:w-[285px] block !ml-[2rem] lg:min-h-[20rem] ml-[2rem] p-4 rounded-xl">
      <div className="w-full ml-[2rem]  flex justify-between">
        {" "}
        <div className="">
          {" "}
          <ProfileAvator />
        </div>
        <h2 className="mt-4 mr-2 w-full">مهسا توفیق</h2>
        <button
          onClick={() => {
            onChangeIndex("profile");
          }}
          // className={
          //   activeItem == item.name
          //     ? "flex cursor-pointer w-full border-0 text-skin-primary font-[1000] mx-4"
          //     : "flex cursor-pointer w-full border-0 mx-4"
          // }
          className="-mt-2 border-0 text-skin-primary"
        >
          <Edit2 size="24" />
        </button>
      </div>
      {sideBar?.map((item) => (
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
