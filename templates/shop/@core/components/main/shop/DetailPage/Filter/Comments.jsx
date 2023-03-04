import { CloseCircle } from "iconsax-react";
import React, { useState } from "react";
import { ProgressBar } from "../../../../../Helper/ProgressBar";
// import StarRating from "../../../../../Helper/StarRating";
import Modal from "../../../../../UI/Modal";
import Vote from "../Vote";
import AddComment from "./AddComment";
import UserComment from "./UserComment";

function Comments() {
  const [isOpen, setIsOpen] = useState(false);
  const comments = [
    {
      id: 1,
      name: "مهسا توفیق",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      stars: [
        { title: "رفتار", value: "3" },

        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
    {
      id: 2,
      name: "مهسا توفیق",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      stars: [
        { title: "رفتار", value: "3" },

        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
    {
      id: 3,
      name: "مهسا توفیق",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      stars: [
        { title: "رفتار", value: "3" },

        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
    {
      id: 4,
      name: "مهسا توفیق",
      image: "/images/plant.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      stars: [
        { title: "رفتار", value: "3" },
        { title: "مکان", value: "2" },
        { title: "هزینه", value: "1" },
        { title: "برخورد", value: "5" },
        { title: "سرعت عمل", value: "3" },
      ],
    },
  ];

  const openModalHandler = () => {
    setIsOpen(true);
  };
  const onCloseModalHandler = () => {
    setIsOpen(false);
  };
  return (
    <section className="cadr w-full !p-8 ">
      <Modal open={isOpen} onClose={onCloseModalHandler} selector="#portal">
        <button
          onClick={onCloseModalHandler}
          className="absolute left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        <AddComment />
      </Modal>
      <div className="flex justify-between">
        <div className="w-[50%] text-right">
          <h2 className="text-right mb-8 md:text-2xl">
            در مورد این کالا نظر بدهید یا سوالتتان را بپرسید.
          </h2>
          <p>
            اگر این محصول را قبلا خریده‌اید تجربه‌تان را به دیگران بگویید. اگر
            در مورد این محصول سوالی دارید همینجا بپرسید؛ مدیر به سوالتان پاسخ
            می‌دهد.
          </p>
          <button
            className="bg-skin-fill text-[white] rounded-lg px-4 my-8"
            onClick={openModalHandler}
          >
            افزودن نظر جدید
          </button>
        </div>
        <div className="w-[30%]">
          <Vote />
          <ProgressBar />
          <ProgressBar progressPercentage="80" />
        </div>
      </div>
      {comments?.map((item) => (
        <UserComment key={item.id} comment={item} />
      ))}
      {/* <StarRating /> */}
    </section>
  );
}

export default Comments;
