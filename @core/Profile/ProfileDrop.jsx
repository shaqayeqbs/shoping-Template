import { Menu, Transition } from "@headlessui/react";
import {
  ArrowLeft2,
  Heart,
  LogoutCurve,
  Message,
  Shop,
  Wallet,
} from "iconsax-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { userActions } from "../../store/Slices/UserSlice";
import { cartActions } from "../../store/Slices/CartSlice";

function classNames(...classes) {
  return classes?.filter(Boolean).join(" ");
}

export default function ProfileDrop() {
  const userProfile = useSelector((state) => state?.user?.image);
  const userName = useSelector((state) => state?.user?.name);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.logout());
    dispatch(cartActions.logout());
  };
  const DropDownData = [
    {
      id: 1,
      title: "کیف پول",
      href: "/",
      icon: <Wallet size="24" variant="Outline" />,
    },
    // {
    //   id: 2,
    //   title: "علاقه مندی ها",
    //   href: "/",
    //   icon: <Heart size="24" variant="Outline" />,
    // },
    // {
    //   id: 3,
    //   title: "مدیریت فروشگاه",
    //   href: "/",
    //   icon: <Shop size="24" variant="Outline" />,
    // },
    // {
    //   id: 4,
    //   title: "دیدگاه ها",
    //   href: "/",
    //   icon: <Message size="24" variant="Outline" />,
    // },
  ];
  return (
    <Menu as="div" className="relative   text-left ">
      <div>
        <Menu.Button className="relative inline-flex  !w-[3.5rem] !h-[3.5rem] md:w-full md:h-full rounded-full md:mt-[20%] justify-center  border-0 border-gray-300 bg-white  py-2 text-sm font-medium text-gray-700  hover:bg-[transparent]">
          <Image
            alt="profile"
            quality={50}
            loading="lazy"
            src={userProfile}
            layout="fill"
            className="object-cover rounded-full "
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-[white] p-3 p left-0  z-10 mt-2 w-56 origin-top-right divide-y divide-[#e6e6e6] rounded-xl  shadow-sm shadow-[#7f7e7e]  ring-black ring-opacity-5 focus:outline-none">
          <div className="text-right">
            {" "}
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block py-3 text-sm "
                  )}
                >
                  <div className="flex  justify-between py-1">
                    <div className="flex cursor-pointer">
                      <div className="mt-[-.4rem]">
                        <Image
                          alt="profile"
                          quality={50}
                          src={userProfile}
                          loading="lazy"
                          width={40}
                          height={40}
                          className="object-cover rounded-full "
                        />
                      </div>
                      <p className="inline-block p-1 my-[rem] mr-2">
                        {" "}
                        {userName}
                      </p>
                    </div>

                    <div className="mt-1 text-bold  !font-bolder">
                      <ArrowLeft2 size="20" variant="Outline" />
                    </div>
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
          {DropDownData?.map((item) => (
            <div className="py-2 pt-4  text-right " dir="rlt" key={item.id}>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block py-2 text-sm "
                    )}
                  >
                    <div className="flex">
                      {" "}
                      {item.icon}
                      <div className="mx-2">{item.title}</div>
                    </div>
                  </Link>
                )}
              </Menu.Item>
              <div className="py-1"></div>
            </div>
          ))}
          <Menu.Item>
            {({ active }) => (
              <div className=" text-right py-2 text-[#ed5e5e]">
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block  py-2 text-sm text-right"
                  )}
                >
                  <button className="flex border-0" onClick={logoutHandler}>
                    {" "}
                    <LogoutCurve size="24" variant="Outline" />
                    <div className="mx-2"> خروج</div>
                  </button>
                </Link>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
