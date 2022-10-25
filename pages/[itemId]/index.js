import { useRouter } from "next/router";
import React from "react";

function Item() {
  const { query } = useRouter();
  return <div>{query.itemId}</div>;
}

export default Item;
