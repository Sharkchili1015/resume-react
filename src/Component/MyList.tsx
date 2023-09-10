import React from "react";
interface RootObject {
  title: string;
  id: number;
}
import { RenderList } from "./render";

const MyList: React.FC<{ list: RootObject[] }> = ({ list }) => {
  console.log("🚀 ~ file: MyList.tsx:11 ~ list:", list);

  return <>{<RenderList list={list} />}</>;
};

export default MyList;
