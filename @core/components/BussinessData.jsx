import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userData } from "../../store/UserSlice";

import { BussinessData } from "../../store/Slices/BussinessSlice";
import LoadingSpinner from "../UI/LoadingSpinner";
// import logout from "../Hepler/logout";
// import { useNavigate } from "react-router-dom";

const Bussiness = ({ children }) => {
  //   const loggedinUserId = useSelector((state) => state.user.id);
  const [isLoading, setIsLoading] = useState(false);
  //   const [token, setToken] = useState("");
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   if (token === "") {
  //     setToken(localStorage.getItem("token"));
  //   }

  let response = null;

  useEffect(() => {
    async function fetchData() {
      try {
        response = await dispatch(BussinessData());
        console.log({ response });
        setIsLoading(false);
        // if (
        //   !response?.payload?.id &&
        //   token &&
        //   response?.payload != "ECONNABORTED" &&
        //   response?.payload != "ERR_NETWORK"
        // ) {
        //   navigate("/verifyinstagram");
        // } else if (
        //   response?.payload === "ECONNABORTED" ||
        //   response?.payload === "ERR_NETWORK"
        // ) {

        //   logout();
        // }

        setIsLoading(false);
      } catch {
        // logout();
      }
    }

    // if (token != "") {
    //   if (!loggedinUserId) {
    fetchData();
    //   }
    // } else {
    //   logout();
    // }
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return <>{children}</>;
  }
};

export default Bussiness;
