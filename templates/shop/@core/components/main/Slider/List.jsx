import ListItem from "./ListItem";
import { memo } from "react";
function List({ data, offcerPage = null, articles = null, favorties = null }) {
  console.log(data);

  const dataa = [...data, ...data, ...data, ...data, ...data];
  const dataaa = [...dataa, ...dataa, ...dataa];
  return (
    <ul className="flex flex-col sm:grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center gap-3">
      {dataaa?.map((item) => (
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
