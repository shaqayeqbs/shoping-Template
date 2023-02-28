import { Fragment } from "react";
import {
  EditorImage,
  EditorTitle,
  EditorParagraph,
  EditorMultiMedia,
  EditorLink,
  EditorList,
  EditorGalery,
} from "./index.js";

const MainEditor = ({details = []}) => {
  return (
    <>
      {details.map((data) => (
        <Fragment key={data.id}>
          {data.type === 1 && <EditorTitle data={data} />}
          {data.type === 2 && <EditorParagraph data={data} />}
          {data.type === 3 && <EditorImage data={data} />}
          {data.type === 4 && <EditorLink data={data} />}
          {data.type === 5 && <EditorList data={data} />}
          {data.type === 6 && <EditorMultiMedia data={data} />}
          {data.type === 7 && <EditorGalery data={data} />}
        </Fragment>
      ))}
    </>
  );
};

export default MainEditor;
