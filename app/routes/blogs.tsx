import type {V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "My Blogs" },
    { name: "description", content: "Al-Nahian Pulok's Blogs" },
  ];
};

export default () => {
  return (
    <>
      <p className="text-2xl lg:text-4xl">My Blogs</p>
    </>
  );
};
