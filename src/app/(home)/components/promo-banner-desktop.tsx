import Image, { ImageProps } from "next/image";

const PromoBannerDesktop = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      alt={alt}
      className="h-auto w-full hidden md:block"
      sizes="100vw"
      {...props}
    />
  );
};

export default PromoBannerDesktop;
