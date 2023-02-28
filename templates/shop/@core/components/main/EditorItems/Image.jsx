import Image from "next/image";

const EditorImage = ({ data }) => {
  if (
    !data ||
    !data.files ||
    !data.files.length ||
    !data.files[0]?.details ||
    !data.files[0]?.details.location
  ) {
    return <></>;
  }
  return (
    <Image
      width={400}
      height={500}
      src={data?.files?.[0]?.details?.location}
      alt={data?.files?.[0]?.name}
      className="rounded-lg w-full"
    />
  );
};

export default EditorImage;
