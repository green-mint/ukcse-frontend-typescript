import React, { useState } from "react";
import Link from "next/link";
import useAuth from "../../../lib/auth/useAuth";
import { Modal } from "../../ui";
import { ProductCheckoutForm, ProductEnquiryForm } from "../../product";

type ProductSideBarProps = {
  productId: string;
  price: number;
  stock: number;
}

function ProductSideBar({ productId, stock, price }: ProductSideBarProps) {
  const { isAuthenticated } = useAuth();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBuyingOpen, setIsBuyingOpen] = useState(false);

  return (
    <>
      <Modal
        content={<ProductEnquiryForm productId={productId} />}
        title="Enquiry"
        isOpen={isEnquiryOpen}
        setIsOpen={setIsEnquiryOpen}
      />
      <Modal
        content={
          <ProductCheckoutForm
            stock={stock}
            price={price}
            productId={productId}
          />
        }
        title="Buy"
        isOpen={isBuyingOpen}
        setIsOpen={setIsBuyingOpen}
      />
      <div className="flex lg:flex-col justify-center lg:h-full p-3 w-full text-black space-x-2 sm:space-x-3 lg:space-x-0 lg:space-y-10 lg:p-8">
        <button
          className="rounded-xl px-3 sm:px-5 py-2 bg-white font-bold cursor-pointer hover:scale-110"
          onClick={() => setIsBuyingOpen(true)}>
          Buy
        </button>
        <button
          className="rounded-xl px-3 sm:px-5 py-2 bg-white font-bold cursor-pointer hover:scale-110"
          onClick={() => setIsEnquiryOpen(true)}>
          Enquire
        </button>
        {/* <button className='rounded-xl px-3 sm:px-5 py-2 bg-white font-bold cursor-pointer hover:scale-110'>FAQs</button> */}
        {!isAuthenticated && (
          <button className="rounded-xl px-3 sm:px-5 py-2 bg-white font-bold cursor-pointer hover:scale-110">
            <Link href="/auth/signup">Register</Link>
          </button>
        )}
      </div>
    </>
  );
}

export default ProductSideBar;
