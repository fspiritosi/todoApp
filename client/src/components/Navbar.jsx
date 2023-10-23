import {
  Navbar,
  IconButton,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import { NavList } from "./Navlist";
import {ProfileMenu} from './ProfileMenu'
//import logo from "../assets/codeEmprendeLogo.png";
import logo1 from "../assets/codeEmprende.png";

export function NavbarDark() {

  return (
    <Navbar
      color="grey-900"
      variant="gradient"
      fullWidth
      className="w-full bg-gray-900 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <img
          src={logo1}
          alt="logo CodeEmprende"
          className="h-10 w-40 rounded-full object-cover object-center"
        />
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="white">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="flex gap-5">
          <NavList />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}
