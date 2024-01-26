import Image from "next/image";

const Goals = () => {
  return (
    <ul className="lg:grid lg:grid-cols-12 gap-6 mb-48">
      <li className="flex items-start col-span-3 gap-6 lg:gap-8">
        <Image
          src={"/icons/career-talks.png"}
          width={96}
          height={96}
          className="w-14 lg:w-18 object-contain"
        />
        <div>
          <h6 className="font-semibold text-2xl mb-1">Career Talks</h6>
          <p className="text-gray-500 line-clamp-3">
            Discussing with the best Software and Artificial Intelligence
            Engineers in the industry
          </p>
        </div>
      </li>
      <li className="flex items-start col-span-3 gap-6 my-12 lg:my-0">
        <Image
          src={"/icons/activities.png"}
          width={96}
          height={96}
          className="w-14 lg:w-18 object-contain"
        />
        <div>
          <h6 className="font-semibold text-2xl mb-1">Activities</h6>
          <p className="text-gray-500 line-clamp-3">
            Provides a platform for students to explore the latest trends
          </p>
        </div>
      </li>
      <li className="flex items-start col-span-3 gap-6 my-12 lg:my-0">
        <Image
          src={"/icons/programming.png"}
          width={96}
          height={96}
          className="w-14 lg:w-18 object-contain"
        />
        <div>
          <h6 className="font-semibold text-2xl mb-1">Developing</h6>
          <p className="text-gray-500 line-clamp-3">
            Develop software, games, and artificial intelligence projects
          </p>
        </div>
      </li>
      <li className="flex items-start col-span-3 gap-6 my-12 lg:my-0">
        <Image
          src={"/icons/tutorial.png"}
          width={96}
          height={96}
          className="w-14 lg:w-18 object-contain"
        />
        <div>
          <h6 className="font-semibold text-2xl mb-1">Tutorial</h6>
          <p className="text-gray-500 line-clamp-3">
            Online tutorials from the best software developers in the industry
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Goals;
