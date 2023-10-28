"use client";

import { MenuIcon, LucideShoppingBasket } from "lucide-react";
import { Button } from "../button";
import { Card } from "../card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../sheet";
import { Separator } from "../separator";
import Image from "next/image";
import { Input } from "../input";
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
            <SheetHeader>
              <Image src="/pichau.png" width={100} height={40} alt="logo" />
            </SheetHeader>
            <UserInformation />
            <Separator className=" bg-white mt-4" />
            <AuthButtons />
          </SheetContent>
        </Sheet>
        <Image
          src="/pichau.png"
          width={200}
          height={20}
          alt="logo"
          className="hidden lg:block"
        />
        <Input type="search" placeholder="Busque aqui" className="max-w-xl" />
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
