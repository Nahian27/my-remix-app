import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Link,
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
      <body className="antialiased bg-black text-gray-200 ">
        <div>
          <aside className="md:w-2/5 w-screen md:fixed md:left-0 top-0 md:h-screen bg-neutral-950 py-4 md:p-0">
            <nav className="flex md:-translate-x-6 md:translate-y-20 items-center justify-evenly md:justify-center md:items-end md:flex md:flex-col md:gap-5">
              <img
                height={512}
                width={512}
                alt="Logo of Al-Nahian Pulok"
                className="h-16 w-16 md:h-32 md:w-32 rounded-md grayscale hover:grayscale-0 md:hover:scale-125 transition duration-300"
                src="/icon.jpg"
              />
              {tabs.map((tab, index) => (
                <Link
                  key={tab.route}
                  to={tab.route}
                  prefetch="viewport"
                  onClick={() => setActiveTab(tab.route)}
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
                      className="bg-neutral-800 mix-blend-lighten rounded-md absolute inset-0"
                    ></motion.div>
                  )}
                  {tab.label}
                </Link>
              ))}
            </nav>
          </aside>
          <main className="flex-1 md:ml-[40%] px-5 py-10 md:py-32">
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
