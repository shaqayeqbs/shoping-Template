import dynamic from "next/dynamic";
// import axios from "axios";
// import APP_CONFIG from "../../@core/constants/app-config";
// import END_POINTS from "../../@core/constants/endpoints";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
// import mainData from "../../@core/utils/serverProps";
import bussinessDa from "../../@core/data/business.json";
const ShopEvent = dynamic(() => import("../../templates/shop/pages/shopEvent"));

const Event = ({ eventData, data }) => {
  useSetBussinessData(data);
  console.log(eventData);
  return (
    <div className="container ">
      <ShopEvent {...eventData} />
    </div>
  );
};

export default Event;

export const getServerSideProps = async (context) => {
  // const res = await axios.get(
  //   `${APP_CONFIG.apiBaseUrl}${END_POINTS.Get_Specified_Business_Event}${context.params.eventId}`
  // );
  let bussinessData = bussinessDa;

  const event = bussinessData[0]?.business?.events?.find(
    (item) => +item.id == context.params.eventId
  );
  // bussinessData = await mainData(context);
  return {
    props: {
      data: bussinessData[0]?.business || null,
      eventData: event || null,
    },
  };
};
