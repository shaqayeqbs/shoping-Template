import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import Toggle from "../../../../Helper/Toggle";

function FilterBar() {
  return (
    <div className="w-full bg-[white]  min-h-[25rem] rounded-xl py-6 px-4">
      <h2 className="text-md mx-3 mb-3">فیلترها</h2>
      <button className="flex w-full border-0 items-center justify-between py-3 my-2">
        <h6 className="text-sm">دسته بندی</h6>
        <ArrowDown2 size={20} />
      </button>
      <button className="flex w-full border-0 items-center justify-between py-3 my-2">
        <h6 className="text-sm">برند</h6>
        <ArrowDown2 size={20} />
      </button>
      <button className="flex w-full border-0 items-center justify-between py-3 my-2">
        <h6 className="text-sm">محدوده قیمت</h6>
        <ArrowDown2 size={20} />
      </button>
      <div className="flex justify-between mb-6 border-b-2 text-sm mt-3 border-bordercolor py-4">
        <h6 className="text-sm">فقط کالاهای موجود</h6>
        <Toggle />
      </div>
      <div className="flex justify-between items-center">
        <h6 className="text-sm">فقط شگفت انگیز</h6>
        <Toggle />
      </div>
    </div>
  );
}

export default FilterBar;
