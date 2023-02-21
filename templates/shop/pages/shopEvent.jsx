import { useSelector } from "react-redux";
import {EventImage, EventTitle, EventParagraph, EventMultiMedia, EventLink, EventList, EventGalery} from "../@core/components/main/EventItems";
import Comments from "../@core/components/main/EventItems/Comments";
import EventHeader from "../@core/components/main/EventItems/Header";
import Event from "../@core/components/main/Event";

import 'tailwindcss/tailwind.css';


const ShopEvent = (props) => {
  const { events } = useSelector((state) => state.businessSlice);
  console.log(events);

  const data = props.details.map((data) => (
    <div key={data.id}>
      {data.type === 1 && <EventTitle data={data} />}
      {data.type === 2 && <EventParagraph data={data}/>}
      {data.type === 3 && ( <EventImage data={data}/> )}
      {data.type === 4 && <EventLink data={data}/>}
      {data.type === 5 && (<EventList data ={data}/>)}
      {data.type === 6 && (<EventMultiMedia data = {data}/>)}
      {data.type === 7 && <EventGalery data={data}/>}
    </div>
  ));

  return (
    <div className="container mt-16">
      <div className="container max-w-[900px] flex flex-col gap-8">
      <EventHeader data = {props}/>
      {data}
      <Comments/>
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

