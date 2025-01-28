const ResCardShimmer = () => {
  return (
    <div className="flex flex-wrap p-4 w-full md:w-10/12 mx-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="p-2 flex flex-col ounded-lg w-[calc(50%-8px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%)]"
        >
          <div className="relative h-40 md:h-40 lg:h-56 bg-gray-400 shimmer animate-pulse rounded-md"></div>
          <div className="mt-4 space-y-2">
            <div className="h-4 md:h-5 w-3/4 bg-gray-400 shimmer animate-pulse rounded"></div>
            <div className="h-3 md:h-4 w-1/2 bg-gray-400 shimmer animate-pulse rounded"></div>
            <div className="h-2 md:h-3 w-full bg-gray-400 shimmer animate-pulse rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResCardShimmer;
