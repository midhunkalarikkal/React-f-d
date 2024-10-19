const Shimmer = () => {
  return (
    <div className="p-2 m-4 flex flex-col border border-gray-300 rounded-lg w-[300px]">
      <div className="relative h-56 bg-gray-400 shimmer animate-pulse rounded-md"></div>
      <div className="mt-4 space-y-2">
        <div className="h-6 w-3/4 bg-gray-400 shimmer animate-pulse rounded"></div>
        <div className="h-5 w-1/2 bg-gray-400 shimmer animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-400 shimmer animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer;
