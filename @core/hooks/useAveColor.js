import { FastAverageColor } from "fast-average-color";
const fac = new FastAverageColor();

const useAverageColor = (dom) => {
  // useEffect(() => {
  console.log("img", dom);
  fac
    .getColorAsync(dom)
    .then((color) => {
      console.log("color", color);
      dom.style.backgroundColor = color.rgba;
      dom.style.color = color.isDark ? "#fff" : "#000";
      return color;
    })
    .catch((e) => {
      console.log(e);
    });
  // });
};

export default useAverageColor;
