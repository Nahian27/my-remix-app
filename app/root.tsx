import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/blogs", label: "Blogs" },
];

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const [activeTab, setActiveTab] = useState(useLocation().pathname);
  const isJavascriptEnabled = typeof window !== "undefined";
  const outlet = useOutlet();

  return (
    <html lang="en" className="overscroll-none">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased text-gray-200 bg-black ">
        <div>
          <aside className="top-0 w-screen py-4 md:w-2/6 md:fixed md:left-0 md:h-screen bg-neutral-950 md:p-0">
            <nav className="flex items-center md:-translate-x-6 md:translate-y-20 justify-evenly md:justify-center md:items-end md:flex md:flex-col md:gap-5">
              <img
                height={512}
                width={512}
                alt="Logo of Al-Nahian Pulok"
                className="w-16 h-16 transition duration-300 rounded-md md:h-32 md:w-32 grayscale hover:grayscale-0 md:hover:scale-125"
                src="/icon.jpg"
              />
              {tabs.map((tab, index) => (
                <Link
                  key={index}
                  to={tab.route}
                  prefetch="viewport"
                  onClick={() => {
                    setActiveTab(tab.route);
                  }}
                  className={`${
                    activeTab === tab.route
                      ? ""
                      : "md:hover:opacity-50 transition"
                  } relative md:text-xl py-1 px-3`}
                >
                  {activeTab === tab.route && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ duration: 0.5, type: "spring" }}
                      className="absolute inset-0 rounded-md bg-neutral-800 mix-blend-lighten"
                    >
                    </motion.div>
                  )}
                  {tab.label}
                </Link>
              ))}
            </nav>
          </aside>
          <main className="flex-1 md:ml-[33.333333%] px-5 py-10 md:py-32">
            <AnimatePresence mode={"wait"} initial={false}>
              <motion.div
                key={activeTab}
                initial={{ opacity: isJavascriptEnabled ? 0 : 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {outlet}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
