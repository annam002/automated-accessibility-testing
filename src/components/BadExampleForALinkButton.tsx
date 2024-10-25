"use client";

//This is a bad example to demonstrate the capabilities of automated tools
//Don't do this! Links need an href to work. If you need an onclick javascript action,
//use an HTML button element instead.
export const BadExampleForALinkButton = ({ label }: { label: string }) => {
  const clickCallback = () => {
    alert("Clicked");
  };
  return (
    <a
      onClick={() => clickCallback()}
      className={
        "border-1 cursor-pointer border border-gray-500 bg-gray-300 p-4 text-center text-gray-700 hover:bg-gray-200"
      }
    >
      {label}
    </a>
  );
};
