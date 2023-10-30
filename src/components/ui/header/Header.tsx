"use client";

import { MenuIcon, LucideShoppingBasket, User } from "lucide-react";
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
import { useSession } from "next-auth/react";
import { Avatar } from "../avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  const { products, totalItemsInCart } = useContext(CartContext);
  const { status, data } = useSession();

  return (
    <>
      <Card className="flex items-center justify-between lg:justify-center gap-2 lg:gap-72 xl:gap-96 2xl:gap-[548px] p-[1.875rem]">
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

        <div className="hidden md:block">
          <ul className="flex gap-10">
            <li>Inicio</li>
            <li>Catálago</li>
            <li>Ofertass</li>
          </ul>
        </div>

        <Sheet>
          <div className="flex gap-5">
            <Button size="icon" variant="outline">
              {status === "authenticated" ? (
                <Avatar>
                  {data?.user?.image && <AvatarImage src={data.user.image} />}
                </Avatar>
              ) : (
                <User />
              )}
            </Button>

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
          </div>

          <SheetContent>
            <CartModal />
          </SheetContent>
        </Sheet>
      </Card>
    </>
  );
};

export default Header;
