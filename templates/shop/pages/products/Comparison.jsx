import React, { useState } from "react";
import Card from "../../@core/UI/Card";
import Modal from "../../../../@core/UI/Modal";
import Specification from "../../@core/components/main/shop/DetailPage/Filter/Specification";
import { CloseCircle } from "iconsax-react";
import AddComparisonModal from "./AddComparisonModal";
import CompItem from "./CompItem";
function Comparison({ product, ListOFProduct }) {
  console.log(product, "ddd");
  const [showCompareForm, setShowCompareForm] = useState(false);
  const [comparedProduct, setComparedProduct] = useState(null);
  const showCompareFormHandler = (item) => {
    setShowCompareForm((prv) => !prv);
  };

  const onAddComparedProduct = (item) => {
    setComparedProduct(item);
    setShowCompareForm((prv) => !prv);
  };
  return (
    <>
      <Modal
        open={showCompareForm}
        onClose={showCompareFormHandler}
        selector="#portal"
        className=""
      >
        <button
          onClick={showCompareFormHandler}
          className="absolute left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        <div className="lg:max-h-[500px]">
          <AddComparisonModal
            ListOFProduct={ListOFProduct}
            onAddComparedProduct={onAddComparedProduct}
          />
        </div>
      </Modal>
      <Card>
        <div className="flex justify-between px-0">
          <CompItem product={product} />
          {!comparedProduct && (
            <div className="flex justify-center items-center w-full">
              <button
                onClick={showCompareFormHandler}
                className="p-2 px-6 rounded-lg"
              >
                انتخاب کالا
              </button>
            </div>
          )}
          {comparedProduct && <CompItem product={comparedProduct} />}
        </div>
      </Card>

      <Specification
        options={product?.product.staticOption}
        dynamicOptions={product?.options}
      />
    </>
  );
}

export default Comparison;
