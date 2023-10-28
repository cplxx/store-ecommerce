"use client";

import { MenuIcon, LucideShoppingBasket } from "lucide-react";
import { Button } from "../button";
import { Card } from "../card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../sheet";
import { Separator } from "../separator";
import Image from "next/image";
import CartModal from "./cart";
import { UserInformation } from "./UserInformation";
import { AuthButtons } from "./AuthButtons";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";

const Header = () => {
  const { products, totalItemsInCart } = useContext(CartContext);

  return (
    <>
      <Card className="flex items-center justify-between lg:justify-center gap-2 lg:gap-20 p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-primary">
            <UserInformation />
            <Separator className=" bg-white mt-4" />
            <AuthButtons />
          </SheetContent>
        </Sheet>
        <UserInformation />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="relative">
              <LucideShoppingBasket />
              {products.length > 0 && (
                <span className="absolute bg-primary rounded-full font-bold text-xs h-5 w-5 bottom-6 left-4 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <CartModal />
          </SheetContent>
        </Sheet>
      </Card>
    </>
  );
};

export default Header;
