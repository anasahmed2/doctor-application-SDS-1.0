import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../../assets/LogoJEV.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Doctors", "Book a appointment"];

  return (
    <Navbar
      className="!fixed bg-tranparent"
      isBordered
      isBlurred={true}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit"><img src={Logo} alt="logo" /></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link className="text-[#0078aa] hover:text-teal-500 active:text-teal-500 transition-all duration-[2s] font-semibold" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#0078aa] hover:text-teal-500 active:text-teal-500 transition-all duration-[2s] font-semibold" href="#" aria-current="page">
            Doctors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#0078aa] hover:text-teal-500 active:text-teal-500 transition-all duration-[2s] font-semibold" href="#">
            Book a appointment
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="scrollbar-hide">
        <NavbarMenuItem>
          <Link
            className="w-full text-[#0078aa] hover:text-teal-500 active:text-teal-500 transition-all duration-[2s] font-semibold"
            onClick={() => setIsMenuOpen(false)}
            href="/#about"
            size="lg"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-[#0078aa] hover:text-teal-500 active:text-teal-500 transition-all duration-[2s] font-semibold"
            onClick={() => setIsMenuOpen(false)}
            href="/#timeline"
            size="lg"
          >
            Doctors
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-[#0078aa] hover:text-teal-500 active:text-teal-500 transition-all duration-[2s] font-semibold"
            onClick={() => setIsMenuOpen(false)}
            href="/#help"
            size="lg"
          >
            Book an appointment
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;