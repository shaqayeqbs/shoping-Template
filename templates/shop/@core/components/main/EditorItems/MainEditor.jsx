import {
  EditorImage,
  EditorTitle,
  EditorParagraph,
  EditorMultiMedia,
  EditorLink,
  EditorList,
  EditorGalery,
} from "./index.js";
import EditorHeader from "./Header";
import { Fragment } from "react";

const MainEditor = (props) => {
    console.log(props);
  const data = props.details.map((data) => (
    <div key={data.id}>
      {data.type === 1 && <EditorTitle data={data} />}
      {data.type === 2 && <EditorParagraph data={data} />}
      {data.type === 3 && <EditorImage data={data} />}
      {data.type === 4 && <EditorLink data={data} />}
      {data.type === 5 && <EditorList data={data} />}
      {data.type === 6 && <EditorMultiMedia data={data} />}
      {data.type === 7 && <EditorGalery data={data} />}
    </div>
  ));

  return(
    <Fragment>
        <EditorHeader data={props} />
        {data}
    </Fragment>
  )
};

export default MainEditor;
