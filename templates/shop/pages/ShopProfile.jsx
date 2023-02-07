// import dynamic from "next/dynamic";
// const Profile = dynamic(() => import("../@core/components/main/Profile"));
import Profile from "../@core/components/main/Profile";
function ShopProfile() {
  return (
    <div className="container !mt-20">
      <Profile />
    </div>
  );
}

export default ShopProfile;
