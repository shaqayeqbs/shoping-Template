import React from "react";

import Card from "../../../templates/shop/@core/UI/Card";

function PostType() {
  return (
    <Card>
      <div className="accent-primary text-skin-">
        {" "}
        <label htmlFor="connection" className="block mb-6">
          <h3>روش ارسال سفارشتان را انتخاب کنید:</h3>
        </label>
        <input
          type="radio"
          name="post-type"
          value="post-pishtaz"
          defaultChecked
          style={{ accentColor: "inherit", marginRight: 0 }}
        />
          <label htmlFor="post-pishtaz">پست پیشتاز</label> {" "}
        <input
          type="radio"
          name="post-type"
          value="tipax"
          style={{ accentColor: "inherit" }}
        />
          <label htmlFor="tipax">تیپاکس</label> {" "}
        <input
          type="radio"
          name="post-type"
          value="kara-resan"
          style={{ accentColor: "inherit" }}
        />
          <label htmlFor="kala-resan">کالارسان</label>
      </div>
    </Card>
  );
}

export default PostType;
