import React, { useState, useRef } from "react";

interface Props {
  state: number | string;
  inputElement: HTMLInputElement;
}

export default function State() {
  const [count, setCount] = useState<number | string>(5);
  const inputRef = useRef<HTMLInputElement>(null);

  const takeThisJs = () => {
    inputRef.current?.focus();
    inputRef.current?.classList.add("Hey");
  };
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount("gs");
          takeThisJs();
        }}
      >
        Button
      </button>
      <input ref={inputRef} />
    </div>
  );
}
