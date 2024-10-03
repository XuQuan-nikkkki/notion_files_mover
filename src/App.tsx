import React, { CSSProperties } from "react";
import { Layout } from "antd";

const { Header } = Layout;

const layoutStyle: CSSProperties = {
  height: "100vh",
};

const headerStyle: CSSProperties = {
  color: "#fff",
  fontSize: 18,
  fontWeight: 800,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const App = () => {
  return (
    <div className="app">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Notion Files Transfer Tool</Header>
      </Layout>
    </div>
  );
};

export default App;
