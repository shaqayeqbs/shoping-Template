import MainEditor from "../@core/components/main/EditorItems/MainEditor";

function ShopAboutUs({ data }) {
  console.log(data);
  return (
    <div className=" container !py-10">
      <div className=" flex flex-col gap-5">
        <MainEditor details={data?.editors} />
      </div>
    </div>
  );
}

export default ShopAboutUs;
