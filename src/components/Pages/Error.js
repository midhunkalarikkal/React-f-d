import { useRouteError } from "react-router-dom";

const Error = ({message}) => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center bg-red-50 text-gray-700 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!!</h1>
        <h2 className="text-2xl font-semibold mb-4">
          {message ? message : "Something went wrong..."}
          </h2>
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          {err ? err.status + " " + err.statusText : ""}
        </h3>
        <p className="text-gray-600">
          {err ? err.data
            ? err.data
            : "An unexpected error occurred. Please try again later." : ""}
        </p>
      </div>
    </div>
  );
};

export default Error;
