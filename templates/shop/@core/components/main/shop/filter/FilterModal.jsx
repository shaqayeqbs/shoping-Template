import { useDispatch, useSelector } from "react-redux";
import { filterModalAction } from "../../../../../../../store/Slices/filterModalSlice";
import OrderingList from "../../../../Helper/OrderingList";
import Modal from "../../../../../../../@core/UI/Modal";
import FilterBar from "./filterBar";

const FilterModal = () => {
    const dispatch = useDispatch()
  const filterModalStatus = useSelector((state) => state.filterModal);

  const closeModalHandler = () => {
    dispatch(filterModalAction.closeModal())
  }
  return (
    <>
      <Modal open={filterModalStatus.isModalOpen} selector="#portal" onClose={closeModalHandler}>
        {filterModalStatus.isFilterModalOpen && <FilterBar />}
        {filterModalStatus.isSortingModalOpen && <OrderingList />}
      </Modal>
    </>
  );
};

export default FilterModal;
