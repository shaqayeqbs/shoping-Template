export default function logout(queryValue) {
  localStorage.removeItem("persist:root");
  localStorage.removeItem("root");
  localStorage.removeItem("token");

  window.location.replace("/");
}
