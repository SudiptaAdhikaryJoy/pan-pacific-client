"use client";

import Image from "next/image";
import logo from "../../../../../public/assets/indentaImage.png";
import Link from "next/link";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarContent,
} from "@nextui-org/react";

const Header = () => {
  return (
    <>
      <Navbar isBordered className={`bg-slate-800 text-white `}>
        {/* <div className=" grid grid-cols-3"> */}
        <NavbarContent>
          <div className="flex items-center justify-center">
            <Image src={logo} alt="hotelLogo" width={100} height={100} />
          </div>
        </NavbarContent>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <div className="flex items-center justify-center gap-2">
            <Link href="/">Home</Link>
            <Link href="/AboutUs">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/dinning">Dinning</Link>
          </div>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <div className="flex items-center justify-center gap-3">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              // startContent={<SearchIcon size={18} />}
              type="search"
            />
            <div className="flex items-center gap-4">
              <h1>Login</h1>

              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </NavbarContent>

        {/* </div>       */}
      </Navbar>
      <div className="grid grid-cols-8 items-center justify-items-center gap-4">
        <Link
          href="/dinning"
          className="col-span-2 col-start-1 text-center text-lg antialiased hover:subpixel-antialiased "
        >
          Dining
        </Link>
        <Link
          href="/book"
          className="text-center text-lg antialiased hover:subpixel-antialiased"
        >
          Book
        </Link>
        <Link
          href="/room"
          className="col-span-2 text-center text-lg antialiased hover:subpixel-antialiased"
        >
          Rooms and Suites
        </Link>
        <Link
          href="/experience"
          className="text-center text-lg antialiased hover:subpixel-antialiased"
        >
          Experiences
        </Link>
        <Link
          href="/offers"
          className="text-center text-lg antialiased hover:subpixel-antialiased"
        >
          Offers
        </Link>
      </div>
    </>
  );
};

export default Header;
