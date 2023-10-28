import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import PromoBannerDesktop from "./components/promo-banner-desktop";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-4 md:py-0 ">
      <PromoBanner src="/banner-home-01.png" alt="Até 55% de descontos" />

      <PromoBannerDesktop src="/bannerDesktop.png" alt="até 55% de desconto" />
      <div>
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />

      <div className="items-center justify-around hidden md:flex lg:px-10">
        <Image
          src="/fone-desktop.png"
          alt=""
          width={0}
          height={0}
          className="w-[45%]"
          sizes="100vw"
        />

        <Image
          src="/mouse-desktop.png"
          alt=""
          width={0}
          height={0}
          className="w-[45%]"
          sizes="100vw"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner src="/banner-home-03.png" alt="Até 55% de descontos" />

      <Image
        src="/frete.png"
        alt=""
        width={0}
        height={0}
        className="xl:w-[98%] w-[95%] md:ml-5 rounded-lg  hidden md:block lg:px-14"
        sizes="100vw"
      />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
