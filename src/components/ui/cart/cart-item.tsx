import { CartProduct } from "@/providers/cart";
import Image from "next/image";
import IncreaseAndDecrease from "./cartItem/increase-decrease";
import { computeProductTotalPrice } from "@/helpers/products";
import RemoveProduct from "./cartItem/remove-product";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className=" h-[77px] w-[77px] bg-accent flex items-center justify-center rounded-lg">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          alt={product.name}
          sizes="100vw"
          style={{ objectFit: "contain" }}
          className="w-auto h-auto max-w-[80%] max-h-[70%]"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-xs">{product.name}</p>

        <div className="flex items-center gap-2">
          <p className="font-bold text-sm">R${product.totalPrice.toFixed(2)}</p>
          {product.discountPercentage > 0 && (
            <p className="opacity-75 line-through text-xs">
              R${Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
        <IncreaseAndDecrease
          product={computeProductTotalPrice(product as any) as any}
        />
      </div>
      <RemoveProduct
        product={computeProductTotalPrice(product as any) as any}
      />
    </div>
  );
};

export default CartItem;
