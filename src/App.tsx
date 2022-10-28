import React, { FC, StrictMode } from "react";

import { Header } from "./components/Layouts/Header";
import { getMockText } from "./utils/getMockText";
import Layout from "./components/Layouts/Layout";
import Block from "./components/Layouts/Block";

import "./styles.scss";

export const App: FC = () => {
  return (
    <StrictMode>
      <Layout>
        <Block>
          <h1>{getMockText(20)}</h1>
          <h2>{getMockText(100)}</h2>
          <h3>{getMockText(90)}</h3>
          <span>{getMockText(100)}</span>
          <p>{getMockText(100)}</p>
          <button>click</button>
        </Block>
        <Block />
        <Block />
        <Header />
      </Layout>
    </StrictMode>
  );
};
