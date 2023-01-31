import ArticleDetails from "../../@core/components/main/shop/DetailPage/ArticleDetails";

const ShopArticleDetailPage = ({ item }) => {
  if (!item || item.lenght === 0) {
    return <p>No Products found!</p>;
  }

  return (
    <div>
      <div>
        <ArticleDetails item={item} />
      </div>
    </div>
  );
};

export default ShopArticleDetailPage;
