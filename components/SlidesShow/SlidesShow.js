import Image from "next/image";
// import SlidesShowItem from "./SlidesShowItem";

const SlidesShow = ({ images }) => {
  return (
    <div className="flex">
      <div className="w-full h-96 flex-shrink-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.source}
            width={image.size.width}
            height={image.size.height}
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidesShow;
