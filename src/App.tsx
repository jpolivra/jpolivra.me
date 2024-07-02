import React from "react";
import "./index.css";
import Header from "@components/Header";
import Description from "@components/Description";
import ThemeProvider from "@providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Description />
    </ThemeProvider>
  );
}
