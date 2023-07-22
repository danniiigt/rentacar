import Image from "next/image";

export const Logo = ({ className }) => {
  return (
    <Image
      src="/images/logo.svg"
      alt="Rentacar"
      width={72}
      height={72}
      className={className}
    />
  );
};
