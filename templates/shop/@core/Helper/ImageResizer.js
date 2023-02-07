import Resizer from "react-image-file-resizer";

export const resizeFile = (file) => {
  console.log(file);
  //   return file;
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      100,
      100,
      "JPEG",
      70,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
      171,
      171
    );
  });
};
