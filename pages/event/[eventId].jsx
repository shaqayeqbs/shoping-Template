import dynamic from "next/dynamic";
import axios from "axios";
import APP_CONFIG from "../../@core/constants/app-config";
import END_POINTS from "../../@core/constants/endpoints";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
import mainData from "../../@core/utils/serverProps";
const ShopEvent = dynamic(() => import("../../templates/shop/pages/shopEvent"));

const Event = ({ eventData, data }) => {
  useSetBussinessData(data);
  return (
    <div className="container ">
      <ShopEvent {...eventData} />
    </div>
  );
};

export default Event;

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${APP_CONFIG.apiBaseUrl}${END_POINTS.Get_Specified_Business_Event}${context.params.eventId}`
  );
  let bussinessData = {};

  bussinessData = await mainData(context);
  return {
    props: {
      data: bussinessData?.data || null,
      eventData: res.data.data.event || null,
    },
  };
};
