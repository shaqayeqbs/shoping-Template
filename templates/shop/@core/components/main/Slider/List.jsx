import ListItem from "./ListItem";
import { memo } from "react";
function List({ data, offcerPage = null, articles = null, favorties = null }) {
  console.log(data);
  return (
    <ul className="flex grid-cols-1  w-full md:grid-cols-5">
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
