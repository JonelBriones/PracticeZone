import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  //   children: React.ReactNode;
}

const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Child;
