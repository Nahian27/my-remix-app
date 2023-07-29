import { Link, Outlet, useLocation } from "@remix-run/react";
import { useState } from "react";
import { motion } from 'framer-motion'

const tabs = [
  { id: "/", label: "Home" },
  { id: "/about/", label: "About" },
  { id: "/blogs/", label: "Blogs" },
];

export default function Index() {

  const url = useLocation().pathname
  const [activeTab, setActiveTab] = useState(url)


  return (
    <>
      <div className="bg-neutral-950 w-screen md:h-screen p-5 md:w-2/5 fixed bottom-0 md:top-0 md:left-0 md:flex md:items-start md:justify-end md:p-10">
        <nav className="flex items-center justify-evenly md:items-start md:flex md:flex-col gap-2">
          <img
            className="h-16 w-h-16 md:h-32 md:w-32 md:my-4 rounded-md"
            src="/icon.jpg"
          />
          {tabs.map((tab, i) => (
            <Link
              key={i}
              to={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? "" : "md:hover:opacity-50 touch-none"
                } relative md:text-xl py-1 px-3`}
            >
              {activeTab === tab.id && (
                <motion.div layoutId="activePill" transition={{ ease: "backOut", duration: 0.25 }}
                  className="bg-neutral-800 md:ring-2 ring-neutral-700 rounded-md absolute inset-0 -z-50"
                ></motion.div>
              )}
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="md:ms-[40%] py-10 px-10 md:py-32 md:px-5  md:flex md:items-center md:justify-start">
        <Outlet />
      </div>
    </>
  );
}
