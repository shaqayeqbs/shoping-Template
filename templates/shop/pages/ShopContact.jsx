import { Call, Location } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WorkTIme from "../@core/components/main/ContactUs/WorkTIme";
import HeartShine from "../@core/icons/HeartShine";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../../@core/utils/Map/Map"), {
  ssr: false,
});

function ShopContact() {
  const [defaultCenter, setDefaultCenter] = useState([0, 0]);
  const [lng, setLng] = useState(49.57137831479);
  const [lat, setLat] = useState(37.27644303848);

  const [cordinates, setCordinates] = useState([lat, lng]);
  const address = useSelector((state) => state.businessSlice?.addresses);

  useEffect(() => {
    if (address[0]?.address) {
      setLat(+address[0]?.address?.lat);
      setLng(+address[0]?.address?.lng);
    }
    setDefaultCenter([lat, lng]);
  }, [address, lat, lng]);

  const dataList = [
    {
      id: 1,
      title: "شماره تماس",
      icon: <Call variant="Bold" size={36} />,
      items: ["013 - 12345678", "013 - 12345678"],
    },
    {
      id: 2,
      title: "شبکه اجتماعی ",
      icon: <HeartShine size={36} />,
      items: ["تلگرام", "اینستاگرام", "یوتوب", "لینکدین"],
    },
    {
      id: 3,
      title: " آدرس ",
      icon: <Location variant="Bold" size={36} />,
      items: [address[0]?.address?.address],
    },
  ];

  return (
    <section className="container">
      <h1 className="mt-14">راه های ارتباطی</h1>
      <div className="mt-4 z-0">
        <div className="w-full h-[450px]  -z-20">
          {typeof window && (
            <Map
              value={cordinates}
              change={setCordinates}
              className="w-full h-[400px] -z-30"
              readOnly
            />
          )}
        </div>
      </div>
      <div className="sm:flex flex-wrap justify-around w-full">
        {dataList?.map((item) => (
          <div
            key={item.id}
            className="bg-[white] flex flex-col justify-between ml-4 w-full rounded-md  py-4 my-10  px-8 items-center sm:max-w-[230px]"
          >
            <div className="bg-skin-fill flex mx-10 align-middle text-[white]  w-[3rem] h-[3rem] text-center rounded-full p-2  px-[0.6rem]">
              {item.icon}
            </div>
            <div className="mx-3 mt-4 font-bold text-center">{item.title}</div>
            <div className="text-skin-primary pt-6">نمایش</div>
            {/* <div
              className={
                item.items.length >= 3
                  ? "grid grid-cols-2"
                  : "my-2 text-center mx-3 "
              }
            >
              {item?.items?.map((item, index) => (
                <div
                  dir="ltr"
                  key={index}
                  className="text-center ltr my-2 w-full "
                >
                  {item}
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>
      <WorkTIme />
    </section>
  );
}

export default ShopContact;
