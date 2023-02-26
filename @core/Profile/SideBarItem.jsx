function SideBarItem({ item, onChangeActiveIndex, activeItem }) {
  const setActiveBtnHandler = () => {
    onChangeActiveIndex(item.name);
  };
  return (
    <button
      onClick={setActiveBtnHandler}
      className={
        activeItem == item.name
          ? "flex cursor-pointer w-full border-0 text-skin-primary font-[1000] mx-4"
          : "flex cursor-pointer w-full border-0 mx-4"
      }
    >
      <span className="my-4">{item.icon}</span>
      <span className="mx-3 my-4">{item.title}</span>
    </button>
  );
}

export default SideBarItem;
