import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="w-full h-36 flex items-center justify-center rounded-tl-lg roubded-tr-lg bg-category-item-gradient">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto max-h-[70%] h-auto max-w-[80%]"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="bg-accent p-2 rounded-br-lg rounded-bl-lg py-3">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
