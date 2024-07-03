import React from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Home } from "./screens/Home";
import "./index.css";

export default function Root() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}
