"use client";

//This is a bad example to demonstrate the capabilities of automated tools
//Don't do this! Use the HTML button element instead.
export const BadExampleForAButton = ({ label }: { label: string }) => {
  const submitCallback = () => {
    alert("Submitted");
  };
  return (
    <div
      onClick={() => submitCallback()}
      className={
        "border-1 cursor-pointer border border-gray-500 bg-gray-300 p-4 text-center text-gray-700 hover:bg-gray-200"
      }
    >
      {label}
    </div>
  );
};
