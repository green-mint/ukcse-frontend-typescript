import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useAuth from "../../../lib/auth/useAuth";
import { CREATE_CHECKOUT } from "../../../lib/graphql/operations";
import {
  CreateCheckoutSession,
  CreateCheckoutSessionVariables,
} from "../../../lib/graphql/interfaces/CreateCheckoutSession";
import { LoaderButton } from "../../buttons";
import { CounterInput } from "../../ui";

type ProductCheckoutFormProps = {
  stock: number;
  price: number;
  productId: string;
};

function ProductCheckoutForm({
  stock,
  price,
  productId,
}: ProductCheckoutFormProps) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { token } = useAuth();
  const [createCheckout, { loading, error, data }] = useMutation<
    CreateCheckoutSession,
    CreateCheckoutSessionVariables
  >(CREATE_CHECKOUT, { errorPolicy: "all" });

  console.log(token);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    if (data) router.push(data?.createCheckoutSession.redirectUrl);
  }, [data]);

  return (
    <div className="mt-8">
      <CounterInput value={quantity} setValue={setQuantity} max={stock} />
      <div className="mt-5 font-bold">
        <span>Total Bill: $</span> <span>{quantity * price}</span>
      </div>
      <div className="mt-5">
        <LoaderButton
          label="Checkout"
          className="px-3 py-2 bg-black text-slate-100"
          onClick={() =>
            createCheckout({
              variables: {
                input: {
                  items: [
                    {
                      productId,
                      quantity,
                    },
                  ],
                  successUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${productId}/payment-success`,
                  cancelUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${productId}/payment-failure`,
                },
              },
            })
          }
        />
      </div>
    </div>
  );
}

export default ProductCheckoutForm;
