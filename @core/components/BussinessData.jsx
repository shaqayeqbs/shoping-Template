import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BussinessData } from "../../store/Slices/BussinessSlice";
import LoadingSpinner from "../UI/LoadingSpinner";

const Bussiness = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  let response = null;

  useEffect(() => {
    async function fetchData() {
      try {
        response = await dispatch(BussinessData());

        setIsLoading(false);
        setIsLoading(false);
      } catch {
        // logout();
      }
    }

    fetchData();
    return () => {
      console.log(
        "Use this return as a 'clean up tool' (this runs before the actual code)"
      );
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return <>{children}</>;
  }
};

export default Bussiness;
