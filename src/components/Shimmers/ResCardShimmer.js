const ResCardShimmer = () => {
  return (
    <div className="p-2 flex flex-col border border-gray-300 rounded-lg w-[150px] sm:w-[250px] md:w-[190px] lg:w-[310px]">
      <div className="relative h-40 md:h-48 lg:h-56 bg-gray-400 shimmer animate-pulse rounded-md"></div>
      <div className="mt-4 space-y-2">
        <div className="h-4 md:h-6 w-3/4 bg-gray-400 shimmer animate-pulse rounded"></div>
        <div className="h-3 md:h-5 w-1/2 bg-gray-400 shimmer animate-pulse rounded"></div>
        <div className="h-2 md:h-4 w-full bg-gray-400 shimmer animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default ResCardShimmer;
