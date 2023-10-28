import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

const IncreaseDecrease = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className="flex items-center gap-2 mt-2">
      <Button
        size="icon"
        variant="outline"
        onClick={handleDecreaseQuantityClick}
      >
        <ArrowLeftIcon />
      </Button>

      <span>{quantity}</span>

      <Button
        size="icon"
        variant="outline"
        onClick={handleIncreaseQuantityClick}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default IncreaseDecrease;
