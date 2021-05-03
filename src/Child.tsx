import React, { useRef } from "react";
interface Dave {
  name: string;
  age: number;
  children: string;
}
export default function Child({ name, age }: Dave) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      {name}
      {age}
      <input ref={inputRef} />
    </div>
  );
}
