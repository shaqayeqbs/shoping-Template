import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { getEventGallery } from "../../../api/BussinessApi";
import LoadingSpinner from "../../../UI/LoadingSpinner";

const EditorGalery = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [galleryData, setGalleryData] = useState();
  useEffect(() => {
    const trigger = async () => {
      const recievedData = await getEventGallery(data.value);
      setIsLoading(false);
      const mappedData = {
        title: recievedData?.data?.data?.gallery?.name,
        data: recievedData?.data?.data?.gallery?.files?.map((data) => (
          <Image
            src={data?.details.location}
            width={300}
            height={300}
            alt={data.name}
            key={data.id}
            className="rounded-lg w-full"
          />
        )),
      };
      setGalleryData(mappedData);
    };
    trigger();
  }, []);

  return (
    <div className="w-full">
      {isLoading && <LoadingSpinner />}
      {galleryData && (
        <div className=" grid md:grid-cols-3 gap-4">{galleryData.data}</div>
      )}
    </div>
  );
};

export default EditorGalery;
