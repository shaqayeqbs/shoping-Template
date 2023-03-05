import React, { useState } from "react";
import Modal from "../../../../../../../../@core/UI/Modal";
import { copiedSuccessfully } from "../../../../../../../../@core/constants/toasts-messages";

import {
  CloseCircle,
  Whatsapp,
  Facebook,
  Instagram,
  Copy,
} from "iconsax-react";
import Link from "next/link";
function ShareModal({ isOpen, onClose }) {
  const url = window.location.href;
  const shareLinks = [
    {
      id: "1",
      title: "واتس‌اپ",
      bgColor: "#56C679",
      icon: <Whatsapp variant="Bold" />,
      link: `https://web.whatsapp.com/send?text= Please Visit ${url}`,
    },
    {
      id: "2",
      title: "کپی کردن لینک ",
      bgColor: "#ffffff",
      icon: <Copy variant="Bold" />,
    },
    {
      id: "3",
      title: "فیسبوک",
      bgColor: "#5682C6",
      icon: <Facebook variant="Bold" />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}&t=${encodeURIComponent("tenant")}`,
    },
    // {
    //   id: "4",
    //   title: "اینستاگرام",
    //   bgColor: "#C356C6",
    //   icon: <Instagram variant="Bold" />,
    // },
  ];
  return (
    <div className="relative ">
      <Modal open={isOpen} onClose={onClose} selector="#portal">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        <div className="p-8">
          {" "}
          <h1 className="md:text-2xl">اشتراک گذاری کالا</h1>
          {shareLinks.map((item) => (
            <div
              key={item.id}
              className={
                item.bgColor != "#ffffff"
                  ? "flex text-lg my-6 mx-auto text-[white] w-[60%] rounded-lg pt-4"
                  : "flex text-skin-primary w-[60%] rounded-lg  mx-auto border-2 my-6"
              }
              style={{ background: item.bgColor }}
            >
              {item.bgColor != "#ffffff" ? (
                <a
                  href={item.link}
                  rel="nofollow noopener"
                  target="_blank"
                  className=" flex mx-auto "
                >
                  {item.icon}
                  <span className="mx-3"> {item.title} </span>
                </a>
              ) : (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    copiedSuccessfully();
                  }}
                  className=" flex mx-auto border-0 py-4"
                >
                  {item.icon}
                  <span className="mx-3"> {item.title} </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default ShareModal;
