import { ShoppingCart } from "lucide-react";
import { Badge } from "../badge";
import Scroll from "../cart/scrollArea";
import FinishPurchase from "../cart/finishPurchase";
import TotalProducts from "../cart/totalProducts";

const CartModal = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase rounded-lg"
        variant="outline"
      >
        <ShoppingCart size={16} />
        carrinho
      </Badge>
      <Scroll />
      <TotalProducts />
      <FinishPurchase />
    </div>
  );
};

export default CartModal;
