import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import PostNav from "./components/PostNav";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <PostNav/>
     <Content/>
    </>
  );
};

export default App;
