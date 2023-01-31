import React from "react";
import { CallIncoming, Verify, Send2, Cards } from "iconsax-react";

export const DescriptionData = [
  {
    id: "10",
    title: " تضمین اصالت کالا ",
    description: "محصولات کاملا اورجینال",
    icon: <Verify size="36" className="text-primary" variant="Bold" />,
  },
  {
    id: "2",
    title: "پشتیبانی",
    description: " آماده پاسخگویی به شما ",
    icon: <CallIncoming size="36" className="text-primary" variant="Bold" />,
  },

  {
    id: "3",
    title: "  ارسال سریع",
    description: "به تمام نقاط ایران ",
    icon: <Send2 size="36" className="text-primary" variant="Bold" />,
  },
  {
    id: "4",
    title: "پرداخت آنلاین",
    description: "با در گاه اینترنتی امن",
    icon: <Cards size="36" className="text-primary" variant="Bold" />,
  },
];
