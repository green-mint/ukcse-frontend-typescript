import React, { useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import MobileHeaderItem from "./MobileHeaderItem";
import Hamburger from "./Hamburger";
import Link from "next/link";
import useAuth from "../../../lib/auth/useAuth";

const headerItems = [
  {
    name: "Home",
    href: "/",
    hidden: false,
  },
  {
    name: "Posts",
    href: "/posts",
    hidden: false,
  },
  {
    name: "Products",
    href: "/products",
    hidden: false,
  },
];
export type Props = {};

const Header = ({}: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  const { isAuthenticated, user, signin, signout } = useAuth();

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navOpen]);

  return (
    <nav className="flex relative z-20 bg-black text-white justify-between py-3 px-4 md:px-8 xl:px-24">
      <div className="text-3xl self-center">
        <Link href="/">LOGO</Link>
      </div>

      <div className="z-30 self-center">
        <div className="md:hidden">
          <Hamburger isOpen={navOpen} setIsOpen={setNavOpen} />
        </div>

        <div className="hidden md:flex space-x-5">
          {headerItems.map(
            (item, index) =>
              !item.hidden && (
                <HeaderItem key={index} href={item.href}>
                  {item.name}
                </HeaderItem>
              )
          )}
          {user?.role === "admin" && (
            <HeaderItem href="/admin">Admin</HeaderItem>
          )}
          {isAuthenticated ? (
            <div onClick={() => signout()}>
              <HeaderItem>Signout</HeaderItem>
            </div>
          ) : (
            <>
              <HeaderItem href="/auth/signup">Signup</HeaderItem>
              <HeaderItem href="/auth/signin">Signin</HeaderItem>
            </>
          )}
        </div>
      </div>

      <div
        className={`${
          navOpen ? "-translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } py-5 top-0 right-0 bg-black h-screen absolute w-screen z-10 flex flex-col text-4xl justify-center px-7 space-y-10 transition-all ease-out duration-700`}>
        <div className="space-y-5">
          {headerItems.map((item, index) => (
            <MobileHeaderItem
              key={index}
              setNavOpen={setNavOpen}
              href={item.href}>
              {item.name}
            </MobileHeaderItem>
          ))}
          <MobileHeaderItem setNavOpen={setNavOpen} href="/popular">
            Popular Posts
          </MobileHeaderItem>
        </div>
        {isAuthenticated ? (
          <div onClick={() => signout()}>
            <MobileHeaderItem href="/" setNavOpen={setNavOpen}>
              Signout
            </MobileHeaderItem>
          </div>
        ) : (
          <>
            <MobileHeaderItem setNavOpen={setNavOpen} href="/auth/signup">
              Signup
            </MobileHeaderItem>
            <MobileHeaderItem setNavOpen={setNavOpen} href="/auth/signin">
              Signin
            </MobileHeaderItem>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
