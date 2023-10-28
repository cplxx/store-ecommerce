import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="py-3 lg:w-32 md:w-28 xl:w-48 2xl:w-64 flex justify-center items-center gap-2 rounded-lg "
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="font-semibold text-xs">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
