import React, { useState, useEffect } from "react";
import { Call, Location } from "iconsax-react";
import HeartShine from "../@core/icons/HeartShine";
import WorkTIme from "../@core/components/main/ContactUs/WorkTIme";
import Map from "../@core/utils/Map/Map";
import { useSelector } from "react-redux";

function ContactUs() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [defaultCenter, setDefaultCenter] = useState([0, 0]);
  const [address, connections] = useSelector((state) => [
    state.businessSlice.addresses,
    state.businessSlice.connections,
  ]);

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

  const DEFAULT_CENTER = [lat, lng];

  return (
    <section className="container">
      <h1>راه های ارتباطی</h1>
      <div className="flex justify-between">
        {dataList.map((item) => (
          <div
            key={item.id}
            className="bg-[white] flex justify-between ml-4 w-full rounded-md  py-4 mt-10 px-4  pt-8 "
          >
            <div>
              <div className="bg-skin-fill flex mx-10 align-middle text-[white]  w-[3rem] h-[3rem] text-center rounded-full p-2  px-[0.6rem]">
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
              {item.items.map((item, index) => (
                <div
                  dir="ltr"
                  key={index}
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
          readOnly
          zoomControl={false}
          width="800"
          height="300"
          center={defaultCenter}
          zoom={5}
          className="rounded-2xl"
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={defaultCenter} Location={defaultCenter}>
                <Popup></Popup>
              </Marker>
            </>
          )}
        </Map>
      </div>
      <WorkTIme />
    </section>
  );
}

export default ContactUs;
