import React from "react";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 30,
  activeColor: "#ff8d14",

  count: 5,
  edit: false,
};

const secondExample = {
  size: 50,
  count: 5,
  color: "black",
  activeColor: "#ff8d14",
  value: 2.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
  },
};

const thirdExample = {
  size: 40,
  count: 5,
  isHalf: false,
  value: 2.5,
  //   color: "blue",
  activeColor: "#ff8d14",
  onChange: (newValue) => {},
};

export function ChangableStarRating({ onChangeStar }) {
  const onChangeHandler = (newValue) => {
    onChangeStar(newValue);
    // console.log(`Example 3: new value is ${newValue}`);
  };
  return (
    <div className="App">
      <ReactStars {...secondExample} />

      <ReactStars {...thirdExample} onChange={onChangeHandler} />
    </div>
  );
}
export default function ReadOnlyStars({ value = 4 }) {
  return <ReactStars {...firstExample} value={value} />;
}
