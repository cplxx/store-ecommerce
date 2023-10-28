import { CartContext } from "@/providers/cart";
import { useContext, useState } from "react";

const { decreaseProductQuantity, increaseProductQuantity, products } =
  useContext(CartContext);

console.log(products);

const handleDecreaseProductQuantityClick = () => {
  decreaseProductQuantity(product.id);
};

const handleIncreaseProductQuantityClick = () => {
  increaseProductQuantity(product.id);
};

const [quantity, setQuantity] = useState(1);

const handleDecreaseQuantityClick = () => {
  setQuantity((prev) => (prev === 1 ? prev : prev - 1));
};

const handleIncreaseQuantityClick = () => {
  setQuantity((prev) => prev + 1);
};
