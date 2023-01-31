// import Profile from "../@core/components/main/Profile";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../@core/components/main/Profile"));

function ProfilePage() {
  if (typeof window == undefined) {
    return null;
  }
  return (
    <div className="container !mt-20">
      <Profile />
    </div>
  );
}

export default ProfilePage;
