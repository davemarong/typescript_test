import React from "react";
interface Props {
  dave: string;
}
export default function Names({ dave }: Props) {
  return <div>{dave}</div>;
}
