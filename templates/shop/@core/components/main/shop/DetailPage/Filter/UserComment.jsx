import Image from "next/image";
import React from "react";
import ReadOnlyStars from "../../../../../Helper/StarRating";

function UserComment({ comment, ideas }) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between text-right w-[60%] my-8">
        <div className="h-[10rem] mb-5">
          {" "}
          <Image
            quality={50}
            src={comment.image}
            width="500"
            height="500"
            alt="profile"
            loading="lazy"
            className={
              ideas
                ? "rounded-md object-cover w-full "
                : "rounded-full object-cover"
            }
          />
        </div>

        <div className="  mr-4">
          <div className="font-bold mb-5 text-xl">{comment?.name}</div>
          <div>{comment?.comment}</div>
        </div>
      </div>
      <div className="my-6">
        {comment.stars.map((item) => (
          <div className="flex w-full justify-between">
            <div className="text-skin-muted mt-2 ml-10 ">{item.title}</div>
            <div>
              {" "}
              <ReadOnlyStars value={item.value} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserComment;
