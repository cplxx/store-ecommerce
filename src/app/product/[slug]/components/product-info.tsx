"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/products";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";
import IncreaseDecrease from "./increase-decrease";
import Delivery from "./delivery";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R${product.totalPrice.toFixed(2)}</h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          {Number(product.basePrice).toFixed(2)}
        </p>
      )}
      <IncreaseDecrease />
      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold text-base">Descrição</h3>
        <p className="text-sm opacity-60 text-justify">{product.description}</p>
      </div>
      <Button
        className="mt-8 uppercase font-bold"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrino
      </Button>
      <Delivery />
    </div>
  );
};

export default ProductInfo;
