import ListItem from "./ListItem";
import { memo } from "react";
function List({ data, offcerPage = null, articles = null, favorties = null }) {
  console.log(data);
  return (
    <ul className="grid w-full grid-cols-1  md:grid-cols-3">
      {data?.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          offcerPage={offcerPage}
          articles={articles}
          favorties={favorties}
        />
      ))}
    </ul>
  );
}

export default memo(List);
