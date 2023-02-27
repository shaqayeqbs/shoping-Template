import dynamic from "next/dynamic";
import axios from "axios";
import APP_CONFIG from "../../@core/constants/app-config";
import END_POINTS from "../../@core/constants/endpoints";
const ShopEvent = dynamic(() => import("../../templates/shop/pages/shopEvent"));

const Event = ({eventData}) => {

  return <ShopEvent {...eventData} />;
};

export default Event; 


export const getServerSideProps = async (context) => {
  const res = await axios.get(`${APP_CONFIG.apiBaseUrl}${END_POINTS.Get_Specified_Business_Event}${context.params.eventId}`)

  return {
    props: {
      eventData: res.data.data.event || null,
    },
  };
};
