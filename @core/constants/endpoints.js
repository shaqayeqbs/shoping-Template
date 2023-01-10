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
  register: `/user/register`,
  verfy_code: "user/verifycode",
  verfy_phone: "user/verifyphone",
  verify_instagram: `/instagram/account/create`,
  reset_password: "user/resetpassword",
  account_list: "instagram/account/list",
  account_last_post: "instagram/post/account/last?username=",
  analyze_account: "instagram/analyze/account?",
  clone_post: "instagram/post/clone/account",
  analyze_post_account: "instagram/analyze/post/account?",
  /////////////
  getSpecifiedBusinessBydDomain: `api/business/byDomin/${url}?lang=fa`,
};

export const COMPETITOR_END_PONINTS = {
  create_account: "instagram/competitor/create",
  last_post: "instagram/post/competitor/last?username=",
  delete: "instagram/competitor/remove/",
  clone_post: "/instagram/post/clone/competitor",
  analyze_accountL: "instagram/analyze/competitor?",
  analyze_post_account: "instagram/analyze/post/competitor?",
  search: "instagram/search/?username=",
};

export default END_POINTS;
