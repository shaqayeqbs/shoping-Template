import React from "react";
import { ChangableStarRating } from "../../../../../Helper/StarRating";

function AddComment() {
  const onChangeHandler = (data) => {
    // console.log(data);
  };
  return (
    <div className="w-full  text-center py-8 px-12">
      <form>
        <label className="block text-right" htmlFor="comment">
          نظر شما
        </label>
        <textarea
          name="comment"
          className="border-2 border-bordercolor rounded-md w-full my-4"
        ></textarea>

        <div className="flex justify-between">
          <div className="mt-4 text-skin-muted">رفتار</div>
          <div className="mb-">
            <ChangableStarRating onChangeStar={onChangeHandler} />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mt-4 text-skin-muted"> مکان</div>
          <div>
            {" "}
            <ChangableStarRating onChangeStar={onChangeHandler} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-4 text-skin-muted"> هزینه</div>
          <ChangableStarRating onChangeStar={onChangeHandler} />
        </div>
        <div className="flex justify-between">
          <div className="mt-4 text-skin-muted"> برخورد</div>
          <ChangableStarRating onChangeStar={onChangeHandler} />
        </div>
        <div className="flex justify-between">
          <div className="mt-4 text-skin-muted">سرعت عمل</div>
          <ChangableStarRating onChangeStar={onChangeHandler} />
        </div>

        <div className="text-left my-4">
          <button className="bg-skin-fill text-[white] px-4 rounded-md">
            ثبت نظر
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
