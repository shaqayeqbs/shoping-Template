let url = "";

if (typeof window !== "undefined") {
  url = window.location.href;
  if (
    url === "http://localhost:3000/" ||
    url === "http://localhost:3001/" ||
    url === "http://localhost:3002/"
  ) {
    url = "zaay.ir";
  }
}

const END_POINTS = {
  getSpecifiedBusinessBydDomain: `api/business/byDomin/${url}?lang=fa`,
  Get_Specified_Business_Event: "api/business/event/",
  verfy_phone: "api/auth/login",
  verfy_code: "api/auth/confirm",
  getArticles: "api/article?business_id=",
  getSpecifiedCurrentBusinessArticle: "api/article",
  get_bussiness_gallery: "api/business/gallery?business_id=",
  get_FQ: "api/business/fq?business_id=",
  get_current_user: "api/user?lang=fa",
  upload_current_user_profile_image: "api/user/upload-prfile-image",
  upload_current_user_profile: "api/user/profile",
  get_list_of_cities: "api/city?search=",
  get_list_of_products: "api/products/inventory?lang=fa&business_id=",
  get_specified_products: `api/products/inventory/`,
  store_a_new_favorite_to_selected_user: "api/user/favorits",
  getBusinessEditors: "api/business/details",
  gate_way: "api/business-getWay?lang=fa&business_id=",
  set_business_getWay_to_specified_order: "/api/orders/",
};
export const CART_END_POINTS = {
  get_list_of_order: "api/orders?lang=fa&business_id=",
  store_a_new_product: "api/orders/add-product",
  delete_product: "api/orders/delete-product",
  delete_all_products: "api/orders/force-remove-product",
};

export const USER_ADDRESS_END_POINTS = {
  get_user_address: "api/user/",
  set_user_address_to_specified_order: "/api/orders/",

  //   store_user_address: "api/user/",
  // update_user_address: "api/user/",
  // delete_user_address: "api/user/",
};
export default END_POINTS;
