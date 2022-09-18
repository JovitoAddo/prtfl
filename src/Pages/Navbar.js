import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { HashLink as Link } from "react-router-hash-link";

export default function Example() {
  return (
    <Disclosure as="nav" className="sticky top-0 w-full z-40 bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* BURGER MENU LOGO */}
                <div className="dropdown sm:hidden">
                  <Disclosure.Button
                    tabIndex={0}
                    className="btn bg-transparent border-base-100 border-0 inline-flex items-center justify-center p-2 rounded-md text-neutral-focus hover:text-cust2 hover:bg-neutral-content focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cust4"
                  >
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel
                    tabIndex={0}
                    className="dropdown-content menu p-2 relative sm:hidden shadow rounded-box w-52 bg-cust2"
                  >
                    <Link to="#top">
                      <div className="px-3 py-2 hover:text-cust3 hover:px-3,py-2 rounded-md text-sm font-medium">
                        Home
                      </div>
                    </Link>
                    <Link to="#projects" smooth>
                      <div className="px-3 py-2  hover:text-cust3 hover:px-3,py-2 rounded-md text-sm font-medium ">
                        Past Projects
                      </div>
                    </Link>

                    <Link to="#certificate" smooth>
                      <div className="px-3 py-2  hover:text-cust3 hover:px-3,py-2 rounded-md text-sm font-medium ">
                        Certificate
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </div>
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-cust2 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cust4">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              {/* NAVBAR MENU FULLSCREEN */}
              <div className="flex-1 flex grow items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 text-neutral-focus">
                    <Link to="#top">
                      <div className=" px-2 py-2 hover:px-2,py-2 hover:text-cust3 hover:rounded hover:shadow-xl">
                        Home
                      </div>
                    </Link>
                    <Link to="#projects" smooth>
                      <div className="px-2 py-2 hover:px-2,py-2 hover:text-cust3 hover:rounded hover:shadow-xl">
                        Past Projects
                      </div>
                    </Link>
                    <Link to="#certificate" smooth>
                      <div className="px-2 py-2 hover:px-2,py-2 hover:text-cust3 hover:rounded hover:shadow-xl">
                        Certificate
                      </div>
                    </Link>
                    {/* <Link to="about">
                      <div className="px-2 py-2 hover:px-2,py-2 hover:text-cust3 hover:rounded">
                        About Me
                      </div>
                    </Link> */}
                    {/* <Link to="comments">
                      <div className="px-2 py-2 hover:px-2,py-2 hover:text-cust3 hover:rounded">
                        Comments
                      </div>
                    </Link> */}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Link
                  to="#contacts"
                  smooth
                  className="text-neutral-focus px-3 opacity-90"
                  style={{}}
                >
                  <div className="px-2 py-2 hover:px-2,py-2 rounded-md border-cust4 hover:text-cust3 border-2 shadow-md hover:shadow-xl">
                    Contact Me
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* BURGER MENU  */}

          {/* <Disclosure.Panel className="relative sm:hidden">
            <div className="fixed px-2 pt-2 pb-3 space-y-1 w-2/5 text-black border-2 border-cust3 focus: bg-cust2 focus: rounded">
              <Link to="#top">
                <div className="px-3 py-2 hover:bg-slate-700 hover:text-cust3 hover:px-3,py-2 rounded-md text-sm font-medium">
                  Home
                </div>
              </Link>

              <Link to="#projects" smooth>
                <div className="px-3 py-2 hover:bg-slate-700 hover:text-cust3 hover:px-3,py-2 rounded-md text-sm font-medium ">
                  Past Projects
                </div>
              </Link>

              <Link to="#certificate" smooth>
                <div className="px-3 py-2 hover:bg-slate-700 hover:text-cust3 hover:px-3,py-2 rounded-md text-sm font-medium ">
                  Certificate
                </div>
              </Link>

            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
