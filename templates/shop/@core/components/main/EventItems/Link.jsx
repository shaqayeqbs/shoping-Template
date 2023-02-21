import Link from "next/link";

const EventLink = ({ data }) => {
  return <Link href={data.meta.href} className='my-3 p-0'>{data.value}</Link>;
};

export default EventLink;
