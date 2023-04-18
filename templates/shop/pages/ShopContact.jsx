import { Call, Location } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WorkTIme from "../@core/components/main/ContactUs/WorkTIme";
import HeartShine from "../@core/icons/HeartShine";
import dynamic from "next/dynamic";
import Modal from "../../../@core/UI/Modal";
import Image from "next/image";
import Link from "next/link";

import { digitsEnToFa } from "@persian-tools/persian-tools";
const Map = dynamic(() => import("../../../@core/utils/Map/Map"), {
  ssr: false,
});

function ShopContact() {
  const [defaultCenter, setDefaultCenter] = useState([0, 0]);
  const [lng, setLng] = useState(49.57137831479);
  const [lat, setLat] = useState(37.27644303848);
  const [item, setItem] = useState("");

  const [cordinates, setCordinates] = useState([lat, lng]);
  const address = useSelector((state) => state.businessSlice?.addresses);
  console.log(address, "addd");
  const socials = useSelector((state) => state.businessSlice?.connections);
  const phone = useSelector((state) => state.businessSlice?.phone);
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = (item) => {
    setItem(item);
    console.log(item);
    setShowModal((prev) => !prev);
  };
  // useEffect(() => {
  //   if (address[0]?.address) {
  //     setLat(+address[0]?.address?.lat);
  //     setLng(+address[0]?.address?.lng);
  //   }
  //   setDefaultCenter([lat, lng]);
  // }, [address, lat, lng]);

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
      items: ["کوچه نوغان6،مغازه سوم، پلاک 6", "رشت ، مطهری"],
    },
  ];

  return (
    <section className="container">
      {showModal && (
        <Modal
          open={showModal}
          className="!w-[30%] "
          onClose={toggleShowModal}
          selector="#portal"
        >
          <div className="p-8">
            <div className="bg-skin-fill  flex mx-auto justify-center mb-4 align-middle text-[white]  w-[3rem] h-[3rem] text-center rounded-full p-2  px-[0.6rem]">
              {item.icon}
            </div>
            <div className="w-full text-center">{item.title}</div>
            {item.id === 2 && (
              <div className=" ltr  grid grid-cols-4 max-w-[50%] mt-7 mx-auto justify-between   text-skin-primary mb-4 ">
                {socials?.map((item, index) => (
                  <Link
                    href={`${item.connection.prefix}${item.data}`}
                    key={index}
                  >
                    <Image
                      quality={50}
                      loading="lazy"
                      height="80"
                      width="80"
                      src={item?.connection?.files[0]?.details?.location}
                      alt="Your SVG"
                      className=""
                    />
                  </Link>
                ))}
              </div>
            )}
            {item.id === 1 && (
              <div className="flex">
                {phone?.slice(0, 2)?.map((item, index) => (
                  <div
                    key={item.id}
                    className=" ltr  grid grid-cols-4 max-w-[50%] mt-7 mx-auto justify-between   text-skin-primary mb-4 "
                  >
                    <div className="flex">
                      <Call
                        size="28"
                        className="text-skin-primary ml-2"
                        variant="Bold"
                      />

                      <a href={`tel:${item.data}`}>{digitsEnToFa(item.data)}</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      )}
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
          <button
            onClick={toggleShowModal.bind(null, item)}
            key={item.id}
            className="bg-[white] border-0 flex flex-col justify-between ml-4 w-full rounded-md  py-4 my-10  px-8 items-center sm:max-w-[330px]"
          >
            <div className="bg-skin-fill flex mx-10 align-middle text-[white]  w-[3rem] h-[3rem] text-center rounded-full p-2  px-[0.6rem]">
              {item.icon}
            </div>
            <div className="mx-3 mt-4 font-bold text-center">{item.title}</div>
            <div className="text-skin-primary pt-6">نمایش</div>
          </button>
        ))}
      </div>
      <WorkTIme />
    </section>
  );
}

export default ShopContact;
