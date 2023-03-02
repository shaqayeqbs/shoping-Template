import React, { useEffect, useState } from "react";
import Card from "../../templates/shop/@core/UI/Card";
import { gateWayBanks } from "../api/gatewayApi";
import { useSelector } from "react-redux";
import BanksList from "./BanksList";

function Payment() {
  const [banks, setBanks] = useState([]);
  const id = useSelector((state) => state?.businessSlice.id);
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const res = await gateWayBanks(id);
      console.log(res?.data?.getways);
      setBanks(res?.data?.getways);
    };
    fetchData();
  }, []);

  console.log(banks);
  return (
    <Card>
      <div className="text-[black] text-medium font-bold">
        انتخاب روش پرداخت
      </div>

      <BanksList banks={banks} />
    </Card>
  );
}

export default Payment;
