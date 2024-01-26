import Image from "next/image";

const SlidesShowItem = ({ image }) => {
  return (
    <Image
      src={image.source}
      width={image.size.width}
      height={image.size.height}
      className="w-full"
      style={{ objectFit: "cover" }}
    />
  );
};

// h-72 md:h-80 lg:h-96

export default SlidesShowItem;
