let url = "";

if (typeof window !== "undefined") {
  url = window.location.href;
  if (
    url === "http://localhost:3000/" ||
    url === "http://localhost:3001/" ||
    url === "http://localhost:3002/"
  ) {
    url = "tivarja.ir";
  }
}

const END_POINTS = {
  getSpecifiedBusinessBydDomain: `api/business/byDomin/${url}?lang=fa`,
  verfy_phone: "api/auth/login",
  verfy_code: "api/auth/confirm",
  getArticles: "api/article/",
  get_bussiness_gallery: "api/business/gallery?business_id=",
  get_FQ: "api/business/fq?business_id=",
  get_current_user: "api/user?lang=fa",
  upload_current_user_profile_image: "api/user/upload-prfile-image",
  upload_current_user_profile: "api/user/profile",
  get_list_of_cities: "api/city?search=",
  get_list_of_products: "api/products/inventory?lang=fa&business_id=",
};

export default END_POINTS;
