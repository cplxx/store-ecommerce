import { ScrollArea } from "@radix-ui/react-scroll-area";
import { computeProductTotalPrice } from "@/helpers/products";
import CartItem from "./cart-item";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Scroll = () => {
  const { products } = useContext(CartContext);
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-5 h-full">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any}
              />
            ))
          ) : (
            <p className="text-center font-semibold">Carrinho vazio</p>
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default Scroll;
