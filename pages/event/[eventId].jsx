import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
const ShopEvent = dynamic(() => import("../../templates/shop/pages/shopEvent"));

const Event = () => {
  const router = useRouter();
  const { events } = useSelector((state) => state.businessSlice);
  const data = events.find((event) => event.id === +router.query.eventId);

  return <ShopEvent {...data} />;
};

export default Event;
