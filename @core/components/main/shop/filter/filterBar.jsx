import Accordion from "../../../../Helper/Accordion/Accordion";
import Toggle from "../../../../Helper/Toggle";

function FilterBar() {
  return (
    <div className="w-full bg-[white]  min-h-[25rem] rounded-xl py-6 px-4">
      <h2 className="text-[24px] mx-3">فیلترها</h2>
      <Accordion />
      <div className="flex justify-between mb-8 border-b-2 border-bordercolor py-4">
        <h3>فقط کالاهای موجود</h3>
        <Toggle />
      </div>
      <div className="flex justify-between">
        <h3>فقط شگفت انگیز</h3>
        <Toggle />
      </div>
    </div>
  );
}

export default FilterBar;
