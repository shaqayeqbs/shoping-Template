import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { businessAction } from "../../store/Slices/BussinessSlice";
import { setUser } from "../../store/Slices/UserSlice";

export default function useSetBussinessData(data) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userName = useSelector((state) => state.user?.name);

  useEffect(() => {
    if (data) {
      dispatch(businessAction.fetchFirspageData(data));
    }
  }, [dispatch]);
  useEffect(() => {
    if (token && !userName) {
      dispatch(setUser());
    }
  }, [dispatch, userName, token]);

  return true;
}
