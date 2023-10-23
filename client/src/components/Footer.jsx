import { Typography } from "@material-tailwind/react";
import logo from "../assets/codeEmprendeLogo.png";



export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src={logo}
          alt="logo CodeEmprende"
          className="h-20 w-20 rounded-full object-cover object-center"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Desarrollado por @fspiritosi
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 codeEmprende
      </Typography>
    </footer>
  );
}
