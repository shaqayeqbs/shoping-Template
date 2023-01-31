export default function Pagination() {
  return (
    <div className="flex items-center justify-center text-center mt-10 bg-white px-4 py-3 sm:px-6 text-skin-muted text-[20px]">
      <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between text-center ">
        <div className="  mx-auto">
          <nav
            className="isolate text-center inline-flex -space-x-px rounded-md "
            aria-label="Pagination"
          >
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex  items-center  bg-indigo-50 px-4 py-2  font-medium text-indigo-600 focus:z-20"
            >
              1
            </a>
            <span className="relative inline-flex items-center bg-white px-4 py-2 font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              6
            </a>
            <a
              href="#"
              className="relative hidden bg-skin-fill rounded-full text-[white] items-center bg-white px-4 w-10  h-10 pt-6 text-center mt-2  font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              7
            </a>

            <a
              href="#"
              className="relative hidden items-center bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              8
            </a>
            <span className="relative inline-flex items-centerbg-white px-4 py-2 font-medium text-gray-700">
              ...
            </span>

            <a
              href="#"
              className="relative inline-flex items-center over:bg-gray-50 focus:z-20"
            >
              24
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
