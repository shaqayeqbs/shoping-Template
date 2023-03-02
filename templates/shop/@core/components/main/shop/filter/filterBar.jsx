import Accordion from "../../../../Helper/Accordion/Accordion";
import Toggle from "../../../../Helper/Toggle";

function FilterBar() {
  return (
    <div className="w-full bg-[white]  min-h-[25rem] rounded-xl py-6 px-4">
      <h2 className="text-md mx-3">فیلترها</h2>
      <Accordion />
      <div className="flex justify-between mb-8 border-b-2 text-sm border-bordercolor py-4">
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
