import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../../button";
import { CartContext, CartProduct } from "@/providers/cart";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const IncreaseAndDecrease = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, addProductToCart } =
    useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  return (
    <div className="flex items-center gap-2 ">
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={handleDecreaseProductQuantityClick}
      >
        <ArrowLeftIcon size={14} />
      </Button>

      <span className="text-xs gap-1">{product.quantity}</span>

      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={handleIncreaseProductQuantityClick}
      >
        <ArrowRightIcon size={14} />
      </Button>
    </div>
  );
};

export default IncreaseAndDecrease;
