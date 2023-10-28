import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "../button";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";

const FinishPurchase = () => {
  const { products } = useContext(CartContext);
  
  const handleFinishPurchaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };
  return (
    <>
      <Button
        className="font-bold uppercase mt-7"
        onClick={handleFinishPurchaseClick}
      >
        Finalizar compra
      </Button>
    </>
  );
};

export default FinishPurchase;
