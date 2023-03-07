import React from "react";
import ProductCarousel from "../../@core/components/main/Slider/ProductCarousel";
function AddComparisonModal({ ListOFProduct }) {
  return (
    <section className="p-6 w-full inline-block">
      <h2>انتخاب کالا برای مقایسه</h2>
      <form
        action="
      
      "
      >
        <input
          type="text"
          placeholder="جستجو در کالاها..."
          className="border-2 w-full p-3 rounded-xl my-7 border-bordercolor"
        />
      </form>
      <div className=" grid grid-col-4 overflow-scroll">
        {" "}
        <ProductCarousel data={ListOFProduct?.inventorys} />
      </div>
    </section>
  );
}

export default AddComparisonModal;
