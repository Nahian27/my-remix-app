import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Al-Nahian Pulok" },
    {
      name: "description",
      content: "Welcome to Al-Nahian Pulok Personal Website",
    },
  ];
};

export default () => {
  return (
    <>
      <p className="text-2xl font-semibold md:text-4xl">Hey, I'm Nahian 👋</p>
      <p className="py-10 md:text-xl text-neutral-400">
        I am a student of Daffodil Internation University,
        <br />
        currently working as a Software Developer at Arogga Ltd.
        <br />I focus on learning new things and keep up with the ever growing
        tech communities.
      </p>
    </>
  );
};
