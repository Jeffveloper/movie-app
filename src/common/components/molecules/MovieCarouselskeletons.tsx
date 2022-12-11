const CarouselSkeleton = () => {
  return (
    <section className="px-8 py-6">
      <div className="mb-4">
        <div className="rounded-md animate-pulse bg-gray-700 w-12 h-6"></div>
      </div>
      <div className="overflow-auto scrollbar pb-1">
        <ul className="flex gap-2 w-max">
          <li className="rounded-md animate-pulse bg-gray-700 w-[100px] h-[150px]"></li>
          <li className="rounded-md animate-pulse bg-gray-700 w-[100px] h-[150px]"></li>
          <li className="rounded-md animate-pulse bg-gray-700 w-[100px] h-[150px]"></li>
          <li className="rounded-md animate-pulse bg-gray-700 w-[100px] h-[150px]"></li>
        </ul>
      </div>
    </section>
  );
};

export default CarouselSkeleton;
