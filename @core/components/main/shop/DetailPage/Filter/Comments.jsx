import React from "react";
import { ProgressBar } from "../../../../../Helper/ProgressBar";
import StarRating from "../../../../../Helper/StarRating";
import Vote from "../Vote";

function Comments() {
  return (
    <section className="cadr w-full !p-8 ">
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h2 className="text-right">
            در مورد این کالا نظر بدهید یا سوالتتان را بپرسید.
          </h2>
          <p>
            اگر این محصول را قبلا خریده‌اید تجربه‌تان را به دیگران بگویید. اگر
            در مورد این محصول سوالی دارید همینجا بپرسید؛ مدیر به سوالتان پاسخ
            می‌دهد.
          </p>
        </div>
        <div className="w-[30%]">
          <Vote />
          <ProgressBar />
          <ProgressBar progressPercentage="80" />
        </div>
      </div>
      <StarRating />
    </section>
  );
}

export default Comments;
