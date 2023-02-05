import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { businessAction } from "../../store/Slices/BussinessSlice";

export default function useSetBussinessData(data) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(businessAction.fetchFirspageData(data));
    }
  }, [dispatch]);
  return true;
}
