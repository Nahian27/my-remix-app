import { Link, Outlet, useLocation } from "@remix-run/react";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/blogs", label: "Blogs" },
];

export default function Index() {
  const url = useLocation().pathname;
  const [activeTab, setActiveTab] = useState(url);

  return (
    <>
      <div className="bg-neutral-950 w-screen md:h-screen p-5 md:w-2/5 fixed bottom-0 md:top-0 md:left-0 md:flex md:items-start md:justify-end md:p-10">
        <nav className="flex items-center justify-evenly md:items-start md:flex md:flex-col gap-5">
          <img
            height={512}
            width={512}
            alt="Logo of Al-Nahian Pulok"
            className="h-16 w-16 md:h-32 md:w-32 md:my-4 outline outline-1 md:outline-2 outline-neutral-700 rounded-md grayscale hover:grayscale-0 md:hover:scale-125 transition duration-300"
            src="/icon.jpg"
          />
          {tabs.map((tab, i) => (
            <Link
              key={i}
              to={tab.route}
              prefetch="viewport"
              onClick={() => setActiveTab(tab.route)}
              className={`${
                activeTab === tab.route ? "" : "md:hover:opacity-50 transition"
              } relative md:text-xl py-1 px-3`}
            >
              {activeTab === tab.route && (
                <motion.div
                  layoutId="activePill"
                  transition={{ duration: 0.5, type: "spring" }}
                  className="bg-neutral-800 outline outline-1 md:outline-2 rounded-md outline-neutral-700 absolute inset-0 -z-50"
                ></motion.div>
              )}

              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="md:ms-[40%] py-10 px-10 md:py-32 md:px-5  ">
        <Outlet />
      </div>
    </>
  );
}
