const ProductFilters = ({ onChangeFilter }) => {
  const tabsList = [
    {
      id: "all",
      displayName: "All",
    },
    {
      id: "electronics",
      displayName: "Electronics",
    },
    {
      id: "jewelery",
      displayName: "Jewelerys",
    },
    {
      id: "men's clothing",
      displayName: "Men's clothing",
    },
    {
      id: "women's clothing",
      displayName: "Women's clothing",
    },
  ];

  return (
    <section className="text-center mt-32 bg-[black]/80 text-white w-[50%] md:w-[90%] p-2 rounded-md mx-auto">
      {tabsList.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            onChangeFilter(tab.id);
          }}
          className="mx-6 hover:border-b-2"
        >
          {tab.displayName}
        </button>
      ))}
    </section>
  );
};

export default ProductFilters;
