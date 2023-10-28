import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  LogInIcon,
  LogOutIcon,
  HomeIcon,
  PercentIcon,
  ListOrderedIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../button";
import Link from "next/link";
import { SheetClose } from "../sheet";

export const AuthButtons = () => {
  const { status } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div className="mt-4 flex flex-col gap-3">
      <SheetClose asChild>
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <HomeIcon size={18} />
            Inicio
          </Button>
        </Link>
      </SheetClose>

      <Button variant="ghost" className="w-full justify-start gap-2">
        <PercentIcon size={18} />
        Ofertas
      </Button>

      <SheetClose asChild>
        <Link href="/catalog">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <ListOrderedIcon size={18} />
            Catálago
          </Button>
        </Link>
      </SheetClose>

      {status === "unauthenticated" && (
        <Button
          onClick={handleLoginClick}
          variant="ghost"
          className="w-full justify-start gap-2"
        >
          <LogInIcon size={16} />
          Fazer login
        </Button>
      )}

      {status === "authenticated" && (
        <Button
          onClick={handleLogoutClick}
          variant="ghost"
          className="w-full justify-start gap-2"
        >
          <LogOutIcon size={16} />
          Fazer logout
        </Button>
      )}
    </div>
  );
};
