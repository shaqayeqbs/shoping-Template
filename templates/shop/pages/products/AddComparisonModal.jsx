import React, { useEffect, useState } from "react";
import ProductCarousel from "../../@core/components/main/Slider/ProductCarousel";
import { getSearchedProducts } from "../../../../@core/api/productApi";
import { useSelector } from "react-redux";
function AddComparisonModal({ ListOFProduct, onAddComparedProduct }) {
  const [data, setData] = useState(ListOFProduct?.inventorys);
  const [name, setName] = useState("");
  const [timer, setTimer] = useState(null);
  const id = useSelector((state) => state.businessSlice?.id);

  const nameChangeHandler = async (val) => {
    setS(val);
    clearTimeout(timer);
    if (name.length <= 3) {
      setData(ListOFProduct?.inventorys);
      return;
    } else {
      setTimer(
        setTimeout(async () => {
          const searchedProduct = await getSearchedProducts(id, name);

          setData(searchedProduct?.inventorys);
        }, 1000)
      );
    }
  };

  return (
    <section className="p-6 w-full inline-block">
      <h2>انتخاب کالا برای مقایسه</h2>
      <form
        action="
      
      "
      >
        <input
          name="name"
          type="text"
          maxLength="15"
          value={name}
          onChange={(e) => nameChangeHandler(e.target.value)}
          placeholder="جستجو در کالاها..."
          className="border-2 w-full p-3 rounded-xl my-10 border-bordercolor"
        />
      </form>
      <div className=" grid grid-col-4 overflow-y-auto">
        {" "}
        <ProductCarousel
          data={data}
          type="compare"
          onAddComparedProduct={onAddComparedProduct}
        />
      </div>
    </section>
  );
}

export default AddComparisonModal;
