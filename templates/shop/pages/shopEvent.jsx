import { useSelector } from "react-redux";
import Comments from "../@core/components/main/EditorItems/Comments";
import Event from "../@core/components/main/Event";
import "tailwindcss/tailwind.css";
import MainEditor from "../@core/components/main/EditorItems/MainEditor";

const ShopEvent = (props) => {
  const { events } = useSelector((state) => state.businessSlice);

  return (
    <div className="container mt-16 px-4">
      <div className="container max-w-[900px] flex flex-col gap-8">
        <MainEditor {...props}/>
        <Comments />
        <section className="md:flex">
          {events?.slice(0, 2)?.map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopEvent;
