import { TruckIcon } from "lucide-react";

const Delivery = () => {
  return (
    <div className="bg-accent flex items-center px-5 py-4 justify-between mt-5 rounded-lg">
      <div className="flex items-center gap-2">
        <TruckIcon />
        <div className="flex flex-col ">
          <p className="text-xs">
            Entrega via <span className="font-bold">Store</span>
          </p>
          <p className="text-[#b162ff] text-xs">
            Envio para <span className="font-bold">todo o Brasil</span>{" "}
          </p>
        </div>
      </div>
      <p className="font-bold text-xs">Frete grátis</p>
    </div>
  );
};

export default Delivery;
