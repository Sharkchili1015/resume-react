import React from "react";
interface RootObject {
  title: string;
  id: number;
}
export const RenderList: React.FC<{ list: RootObject[] }> = ({ list }) => {
  return list.map((product) => {
    return (
      <div key={product.id}>
        <h1>{product.title}</h1>
      </div>
    );
  });
};
