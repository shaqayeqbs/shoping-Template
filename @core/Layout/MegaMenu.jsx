import React, { useState } from "react";
import items from "../data/data.json";
import Modal from "../UI/Modal";
import classes from "./MegaMenu.module.css";
import MegaMenuList from "./MegaMenuList";
import { useSelector } from "react-redux";

function MegaMenu({ isOpen, onCloseModalHandler }) {
  const productCategorys = useSelector(
    (state) => state?.businessSlice.productCategorys
  );
  const [children, setChildren] = useState(productCategorys[0].children);

  const changeChildrenHandler = (item) => {
    setChildren(item.children);
  };
  console.log({ productCategorys }, "hereee");
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onCloseModalHandler}
        selector="#portal"
        MegaMenu={true}
      >
        <ul className={classes.section}>
          <div className="overflow-y-scroll max-h-[32.5rem] text-skin-primary">
            {productCategorys?.map((item) => (
              <div>
                <MegaMenuList
                  key={item.id}
                  item={item}
                  color
                  onChangeChildren={changeChildrenHandler}
                />
              </div>
            ))}
          </div>
          {children && (
            <div>
              {children?.map((item) => (
                <MegaMenuList key={item.id} item={item} />
              ))}
            </div>
          )}
        </ul>
      </Modal>
    </div>
  );
}

export default MegaMenu;
