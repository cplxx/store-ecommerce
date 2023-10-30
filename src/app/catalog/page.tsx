import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="p-5 gap-8 flex flex-col">
      <Badge
        className="w-fit gap-1 text-base border-primary border-2 uppercase px-3 2xl:ml-[200px] md:ml-3 py-[0.375rem] rounded-lg"
        variant="outline"
      >
        <ShapesIcon size={16} />
        <h1>Catálago</h1>
      </Badge>

      <div className="grid grid-cols-3 place-items-center gap-8 2xl:mx-[140px] md:-mx-3 ">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
