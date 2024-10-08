import { useState, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  GiftIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  PencilIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../assets/LogoGemara.png";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const products = [
  {
    name: "Kumpulan Pakaian",
    description: "Kumpulan pakaian terbaru sesuai pilhanmu",
    href: "#",
    icon: AcademicCapIcon,
  },
  {
    name: "Peralatan Olahraga",
    description: "Segala peralatan olahraga terlengkap",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Sepatu & Sandal",
    description: "Sepatu & sandal terbaru dan terupdate",
    href: "#",
    icon: GiftIcon,
  },
  {
    name: "Mainan & Hobby",
    description: "Temukan mainan dan peralatan hobby pilihanmu",
    href: "#",
    icon: PuzzlePieceIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const NavbarComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("");
  const [textColor, setTextColor] = useState("text-white");
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    // Listener untuk scroll navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg(
          "bg-white shadow-xl shadow-primary/50 transition ease-in-out"
        );
        setTextColor("text-gray-700");
      } else {
        setNavbarBg("");
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed inset-x-0 top-0 z-50 ${navbarBg}`}>
      <header>
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={Logo} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
            <Popover className="relative">
              <PopoverButton
                className={`flex items-center gap-x-1 text-sm font-semibold leading-6 font-raleway ${textColor}`}
              >
                Categories
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 group-hover:text-secondary"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-slate-300 hover:text-black"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-500 hover:bg-gray-100"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a
              href="#"
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 font-raleway ${textColor}`}
            >
              Features
            </a>
            <a
              href="#"
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 font-raleway ${textColor}`}
            >
              About Us
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!Cookies.get("token") && (
              <Link to="/login">
                <ButtonComponent name="primary" title="Sign In" />
              </Link>
            )}
            {Cookies.get("token") && (
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white font-raleway">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>
                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 origin-top-right rounded-xl border border-white bg-white p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <MenuItem className="hover:bg-gray-200">
                    <Link
                      to="/edit-profile"
                      className="text-gray-600 flex w-full items-center gap-2 rounded-lg py-1.5 px-3"
                    >
                      <PencilIcon className="size-4 fill-gray-600" />
                      Edit Profile
                    </Link>
                  </MenuItem>
                  <div className="my-1 h-px bg-gray-300" />
                  <MenuItem className="hover:bg-gray-200">
                    <Link
                      // onClick={() => Cookies.remove("token")}
                      onClick={() => setOpenModal(true)}
                      className="text-gray-600 flex w-full items-center gap-2 rounded-lg py-1.5 px-3"
                    >
                      <ArrowLeftStartOnRectangleIcon className="size-4 fill-gray-600" />
                      Sign Out
                    </Link>
                  </MenuItem>
                  {openModal && (
                    <Modal
                      show={openModal}
                      size="md"
                      popup={true}
                      onClose={() => setOpenModal(false)}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to sign out?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="failure"
                              onClick={() => {
                                Cookies.remove("token");
                                setOpenModal(false);
                              }}
                              href="/login"
                            >
                              Yes, sign out
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => setOpenModal(false)}
                            >
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  )}
                </MenuItems>
              </Menu>
            )}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={Logo} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-raleway font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-raleway font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 rounded-full bg-white px-3.5 py-2.5 text-base font-raleway font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default NavbarComponent;
