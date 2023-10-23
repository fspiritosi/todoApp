import { Typography } from "@material-tailwind/react";

export function NavList() {
    const colorItems = 'white'
    const sizeItems = 'medium'
    const nameItems = [
      { url: "/", name: "Home" },
      { url: "/about", name: "About" },
      { url: "/services", name: "Services" },
      { url: "/contact", name: "Contact" },
    ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {nameItems.map((item, index) => (
        <Typography
        as="li"
        variant={sizeItems}
        color={colorItems}
        className="p-1 font-bold"
        key={index}
      >
        <a
          href={item.url}
          className="flex items-center hover:text-gray-500 transition-colors"
        >
          {item.name}
        </a>
      </Typography>
        ))}
    </ul>
  );
}
