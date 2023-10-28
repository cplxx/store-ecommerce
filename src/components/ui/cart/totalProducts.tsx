import { CartContext } from "@/providers/cart";
import { Separator } from "@radix-ui/react-separator";
import { useContext } from "react";

const TotalProducts = () => {
  const { subtotal, total, totalDiscount, products } = useContext(CartContext);

  return (
    <>
      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />
          <div className="flex items-center justify-between text-xs font-bold">
            <p>Subtotal</p>
            <p>R${subtotal.toFixed(2)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs font-bold">
            <p>Entrega</p>
            <p>Grátis</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs font-bold">
            <p>Descontos</p>
            <p>R${totalDiscount.toFixed(2)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs font-bold">
            <p>Total</p>
            <p>R${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TotalProducts;
