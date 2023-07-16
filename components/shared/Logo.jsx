import Image from "next/image";

export const Logo = ({ className }) => {
  return (
    <Image
      src="/images/logo.svg"
      alt="Rentacar"
      width={40}
      height={40}
      className={className}
    />
  );
};
