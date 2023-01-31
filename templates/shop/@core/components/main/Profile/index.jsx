import React, { useState } from "react";
import SideBar from "./SideBar";
import Address from "./SideBarContent/Address";
import Dashboard from "./SideBarContent/Dashboard";
import Favorties from "./SideBarContent/Favorties";
import Ideas from "./SideBarContent/Ideas";
import Orders from "./SideBarContent/Orders";
import RecentlyViewed from "./SideBarContent/RecentlyViewed";

function Profile() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const changeAxtiveIndexHandler = (item) => {
    setActiveItem(item);
  };
  let content = "";
  switch (activeItem) {
    case "orders":
      content = <Orders onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    case "favorites":
      content = <Favorties onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    case "recently_viewed":
      content = <RecentlyViewed onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    case "ideas":
      content = <Ideas onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    case "address":
      content = <Address onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    default:
      content = <Dashboard onChangeIndex={changeAxtiveIndexHandler} />;
  }
  return (
    <section className="lg:flex justify-between w-full">
      <SideBar
        onChangeIndex={changeAxtiveIndexHandler}
        activeItem={activeItem}
      />
      <div className="w-full"> {content}</div>
    </section>
  );
}

export default Profile;
