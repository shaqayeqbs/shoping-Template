import React from "react";
import { Call, Location } from "iconsax-react";
import HeartShine from "../@core/icons/HeartShine";
import WorkTIme from "../@core/components/main/ContactUs/WorkTIme";
import Map from "../@core/utils/Map/Map";

function contactUs() {
  const dataList = [
    {
      id: 1,
      title: "شماره تماس",
      icon: <Call variant="Bold" />,
      items: ["013 - 12345678", "013 - 12345678"],
    },
    {
      id: 2,
      title: "شبکه اجتماعی ",
      icon: <HeartShine />,
      items: ["تلگرام", "اینستاگرام", "یوتوب", "لینکدین"],
    },
    {
      id: 3,
      title: " آدرس ",
      icon: <Location variant="Bold" />,
      items: ["رشت، بیستون ، خیابان طالقانی، خیابان سردار جنگل ، پلاک -۴۷۸"],
    },
  ];
  const DEFAULT_CENTER = [38.907132, -77.036546];
  return (
    <section className="container">
      <h1>راه های ارتباطی</h1>
      <div className="flex justify-between">
        {dataList.map((item) => (
          <div
            key={item.id}
            className="bg-[white] flex justify-between ml-4 w-full rounded-md  py-3 mt-10 px-2  pt-8 "
          >
            <div>
              <div className="bg-skin-fill flex mx-10 align-middle text-[white]  w-[2.2rem]  text-center rounded-full px-2 py-1">
                {item.icon}
              </div>
              <div className="mx-3 mt-4 font-bold text-center">
                {item.title}
              </div>
            </div>
            <div
              className={
                item.items.length >= 3
                  ? "grid grid-cols-2"
                  : "my-2 text-center mx-3 "
              }
            >
              {item.items.map((item) => (
                <div
                  dir="ltr"
                  key={item}
                  className="text-center ltr my-2 w-full "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Map
          width="800"
          height="300"
          center={DEFAULT_CENTER}
          zoom={10}
          className="rounded-2xl"
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </div>
      <WorkTIme />
    </section>
  );
}

export default contactUs;
