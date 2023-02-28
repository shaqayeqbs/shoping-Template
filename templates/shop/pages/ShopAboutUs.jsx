import MainEditor from "../@core/components/main/EditorItems/MainEditor";

function ShopAboutUs({ data }) {
  console.log(data);
  return (
    <div className=" container !py-10">
      <div className=" flex flex-col gap-5">
        <h2 className="mb-5 text-[24px] border-r-[6px] border-primary pr-5 py-2 h-[2.5rem] rounded-sm">
          درباره ما
        </h2>
        <MainEditor details={data.editors} />
      </div>
    </div>
  );
}

export default ShopAboutUs;
