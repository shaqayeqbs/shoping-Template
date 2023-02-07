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
  register: `/user/register`,
  verify_instagram: `/instagram/account/create`,
  reset_password: "user/resetpassword",
  account_list: "instagram/account/list",
  account_last_post: "instagram/post/account/last?username=",
  analyze_account: "instagram/analyze/account?",
  clone_post: "instagram/post/clone/account",
  analyze_post_account: "instagram/analyze/post/account?",
  /////////////
  getSpecifiedBusinessBydDomain: `api/business/byDomin/${url}?lang=fa`,
  verfy_phone: "api/auth/login",
  verfy_code: "api/auth/confirm",
  getArticles: "api/article/",
  get_bussiness_gallery: "api/business/gallery?business_id=",
  get_FQ: "api/business/fq?business_id=",
  get_current_user: "api/user?lang=fa",
  upload_current_user_profile_image: "api/user/upload-prfile-image",
};

export default END_POINTS;
