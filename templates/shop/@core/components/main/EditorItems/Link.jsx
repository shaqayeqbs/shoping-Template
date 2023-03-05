import Link from "next/link";

const EditorLink = ({ data }) => {
  return (
    <Link href={data?.meta.href} className="my-3 p-0">
      {data?.value}
    </Link>
  );
};

export default EditorLink;
