// import dynamic from "next/dynamic";
// const Profile = dynamic(() => import("../@core/components/main/Profile"));
import { useRouter } from "next/router";
import Profile from "../@core/components/main/Profile";
function ShopProfile() {
  const router = useRouter()
  router.push('/')
  return (
    <div className="container !mt-20">
      <Profile />
    </div>
  );
}

export default ShopProfile;
