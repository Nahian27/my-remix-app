import { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Al-Nahian Pulok" },
        { name: "description", content: "Welcome to Al-Nahian Pulok Personal Website" },
    ];
};

export default (() => {
    return (
        <>
            <p className="text-2xl lg:text-4xl">Hey,I'm Al-Nahian Pulok 👋</p>
        </>
    );
});