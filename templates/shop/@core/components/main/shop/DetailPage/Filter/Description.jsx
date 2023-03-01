import React from "react";
import MainEditor from "../../../../../../@core/components/main/EditorItems/MainEditor";

function Description({description}) {
  return (
    <div className=" flex flex-col gap-5">
    <MainEditor details={description}/>
    </div>
  );
}

export default Description;
