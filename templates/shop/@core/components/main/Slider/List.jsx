import ListItem from "./ListItem";
import { memo } from "react";
function List({ data, offcerPage = null, type = null, favorties = null }) {
  console.log(data, "here");
  return (
    <ul className="flex flex-col items-center sm:grid max-w-full sm:grid-cols-2 md:grid-cols-3  content-center gap-3">
      {data?.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          offcerPage={offcerPage}
          type={type}
          favorties={favorties}
        />
      ))}
    </ul>
  );
}

export default memo(List);
