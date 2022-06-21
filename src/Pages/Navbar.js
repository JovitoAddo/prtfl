import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="fixed sticky top-0 w-full bg-inherit z-50"
      style={{ opacity: "0.5" }}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* BURGER MENU LOGO */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-zinc-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex grow items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 text-white">
                    <Link to="/">
                      <div className=" px-2 py-2 hover:px-2 py-2 hover:text-zinc-50 hover:bg-slate-700 hover:rounded">
                        Home
                      </div>
                    </Link>
                    <Link to="projects">
                      <div className="px-2 py-2 hover:px-2 py-2 hover:text-zinc-50 hover:bg-slate-700 hover:rounded">
                        Past Projects
                      </div>
                    </Link>
                    <Link to="about">
                      <div className="px-2 py-2 hover:px-2 py-2 hover:text-zinc-50 hover:bg-slate-700 hover:rounded">
                        About Me
                      </div>
                    </Link>
                    <Link to="comments">
                      <div className="px-2 py-2 hover:px-2 py-2 hover:text-zinc-50 hover:bg-slate-700 hover:rounded">
                        Comments
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Link to="contacts" className="text-white px-3" style={{}}>
                  <div className="px-2 py-2 hover:px-2 py-2 hover:text-zinc-50 hover:bg-slate-700 hover:rounded ">
                    Contact Me
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* BURGER MENU  */}
          <Disclosure.Panel className="relative sm:hidden">
            <div className="fixed px-2 pt-2 pb-3 space-y-1 w-2/5 text-zinc-50 focus: bg-slate-700 focus: rounded">
              <Link to="/">
                <div className="text-white px-3 py-2 hover:bg-slate-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </div>
              </Link>

              <Link to="projects">
                <div className="text-white px-3 py-2 hover:bg-slate-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium ">
                  Past Projects
                </div>
              </Link>

              <Link to="about">
                <div className="text-white px-3 py-2 hover:bg-slate-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium ">
                  About Me
                </div>
              </Link>

              <Link to="comments">
                <div className="text-white px-3 py-2 hover:bg-slate-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium ">
                  Comments
                </div>
              </Link>

              <Link to="contacts">
                <div className="text-white px-3 py-2 hover:bg-slate-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium ">
                  Contact Me
                </div>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
