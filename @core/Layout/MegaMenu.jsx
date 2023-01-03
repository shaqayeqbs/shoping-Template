import React, { useState } from "react";
import Modal from "../UI/Modal";
import items from "../data/data.json";
import MegaMenuList from "./MegaMenuList";
import classes from "./MegaMenu.module.css";

function MegaMenu({ isOpen, onCloseModalHandler }) {
  const [children, setChildren] = useState(items[0].children);
  const changeChildrenHandler = (item) => {
    setChildren(item.children);
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onCloseModalHandler}
        selector="#portal"
        MegaMenu={true}
      >
        <ul className={classes.section}>
          <div>
            {items.map((item) => (
              <MegaMenuList
                key={item.id}
                item={item}
                color
                onChangeChildren={changeChildrenHandler}
              />
            ))}
          </div>
          <div>
            {children.map((item) => (
              <MegaMenuList key={item.id} item={item} />
            ))}
          </div>
        </ul>
      </Modal>
    </div>
  );
}

export default MegaMenu;
