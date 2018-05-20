// just to demonstrate context access from nested component
import React from "react";
import Header from "./Header";

export default function HeaderWrapper() {
  return (
    <div>
      <Header />
    </div>
  );
}
