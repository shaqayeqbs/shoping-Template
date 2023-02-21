import Image from "next/image";

const EventImage = ({data}) => {
    return (
        <Image
          width={400}
          height={500}
          src={data.files[0].details.location}
          alt={data.files[0].name}
          className="rounded-lg w-full"
        />
    )
}

export default EventImage;