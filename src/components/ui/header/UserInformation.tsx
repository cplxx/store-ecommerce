import React from "react";
import { Avatar } from "../avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";

export const UserInformation = () => {
  const { status, data } = useSession();
  return (
    <>
      {status === "authenticated" && data?.user && (
        <div className="flex  items-center gap-2 py-4">
          <Avatar>
            <AvatarFallback>{data.user.name?.[0].toUpperCase()}</AvatarFallback>

            {data.user.image && <AvatarImage src={data.user.image} />}
          </Avatar>

          <p className="font-medium">{data.user.name}</p>
        </div>
      )}
    </>
  );
};
