import { Trash2Icon } from "lucide-react";
import { Button } from "../../button";
import { CartContext, CartProduct } from "@/providers/cart";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const RemoveProduct = ({ product }: CartItemProps) => {
  const { removeProductFromCart } = useContext(CartContext);

  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleRemoveProductFromCartClick}
    >
      <Trash2Icon size={16} />
    </Button>
  );
};

export default RemoveProduct;
