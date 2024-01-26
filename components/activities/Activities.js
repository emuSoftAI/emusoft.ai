import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Activities = ({ activities }) => {
  return (
    <ul className="my-24">
      {activities.map((activity, index) => (
        <li
          className="lg:grid lg:grid-cols-12 last:mb-0 gap-12 border-b first:pt-0 py-14 lg:py-24 border-b-gray-300"
          key={index}
        >
          <div
            className={`col-span-6 lg:col-span-8 flex flex-col ${
              index % 2 == 0 ? "order-1" : "order-2"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl mb-3">{activity.title}</h2>
            <p className="text-lg text-gray-500 line-clamp-6 lg:line-clamp-none text-justify mb-4 xl:mb-0">
              {activity.description}
            </p>
            <div className="hidden lg:inline mt-auto">
              <p className="text-gray-500">{activity.location}</p>
              <p className="text-gray-500">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div
            className={`col-span-6 lg:col-span-4 mt-12 lg:mt-0 ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <Image
              src={activity.thumbnail.source}
              width={activity.thumbnail.size.width}
              height={activity.thumbnail.size.height}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded drop-shadow-lg mb-8 lg:mb-0"
            />
            <div className="block lg:hidden mt-auto">
              <p className="text-gray-500">{activity.location}</p>
              <p className="text-gray-500">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </li>
      ))}
      <center className="my-16">
        <Button type={"button"} variant={"link"}>
          More
        </Button>
      </center>
    </ul>
  );
};

export default Activities;
