import React, { useState } from "react";
import Image from "next/image";
import Modal from "../../UI/Modal";
import VerifyPhoneModal from "./VerifyPhoneModal";
import VerifyCodeModal from "./VerifyCodeModal";
import { CloseCircle } from "iconsax-react";
import { useSelector } from "react-redux";

function ModalVerification({ isOpen, onClose }) {
  const [isOpenModal, setIsOpen] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(true);
  const [verifyCode, setVerifyCode] = useState(null);
  const businessName = useSelector((state) => state?.businessSlice?.name);
  const logo = useSelector((state) => state?.businessSlice?.logo);

  const mobileVerifiedHandler = (phone) => {
    setVerifyCode(phone);
    setVerifyPhone(false);
  };
  const codeVerifiedHandler = () => {
    setIsOpen(false);
    setVerifyPhone(true);
    setVerifyCode(null);
    onClose();
  };
  const onCloseModalHandler = () => {
    setIsOpen(false);
    setVerifyPhone(true);
    setVerifyCode(null);
    onClose();
  };

  const returnToVerifyModalHandler = () => {
    setVerifyPhone(true);
    setVerifyCode(null);
  };

  return (
    <div className="relative ">
      <Modal open={isOpen} onClose={onCloseModalHandler} selector="#portal">
        <button
          onClick={onCloseModalHandler}
          className="absolute left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        <div className=" mx-auto text-center">
          {/* <div className=" w-[5rem] h-[5rem] rounded-full overflow-hidden"> */}{" "}
          {logo && (
            <img
              quality={50}
              src={logo}
              fill
              loading="lazy"
              className="mx-auto block w-[6rem] h-[6rem] rounded-full mt-10"
              alt="logo"
            />
          )}
          {/* </div> */}
          <h2 className="mt-5 mx-2"> {businessName} </h2>
        </div>

        <div className="">
          {" "}
          {verifyPhone && (
            <VerifyPhoneModal
              onMobileVerified={mobileVerifiedHandler}
              title={businessName}
              close={onCloseModalHandler}
            />
          )}
          {verifyCode && (
            <VerifyCodeModal
              returnToVerifyModal={returnToVerifyModalHandler}
              phone={verifyCode}
              onCodeVerified={codeVerifiedHandler}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ModalVerification;
