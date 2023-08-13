import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "About Me" },
    { name: "description", content: "About Al-Nahian Pulok's Personal" },
  ];
};

export default () => {
  return (
    <>
      <p className="text-2xl lg:text-4xl">About Me</p>
    </>
  );
};
