import Link from "next/link";
import React from "react";

type Props = {};

const AdminSidebar = (props: Props) => {
  return (
    <div className="h-screen w-64 bg-black inset-0 fixed">
      <div className="px-5 space-y-3">
        <Link href="/admin">
          <div className="mt-40 cursor-pointer text-xl font-bold text-white">
            General
          </div>
        </Link>
        <Link href="/admin/products">
          <div className="mt-40 cursor-pointer text-xl font-bold text-white">
            Products
          </div>
        </Link>
        <Link href="/admin/posts">
          <div className="cursor-pointer text-xl font-bold text-white">
            Posts
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
