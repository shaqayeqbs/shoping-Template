import MainEditor from "../../@core/components/main/EditorItems/MainEditor";

const ShopArticleDetailPage = ({ item = [] }) => {
  if (!item || item.lenght === 0) {
    return <p>No Products found!</p>;
  }
  return (
    <div className="flex flex-col gap-5">
      <MainEditor details={item} />
    </div>
  );
};

export default ShopArticleDetailPage;
