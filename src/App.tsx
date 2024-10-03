import React, { CSSProperties, useState } from "react";
import { Layout, Radio } from "antd";

import { Language, LANGUAGE_MAP, LANGUAGES, TITLE_MAP } from "./constant";

const { Header } = Layout;

const DefaultLanguage: Language = "English";

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
  const [language, setLanguage] = useState<Language>(DefaultLanguage);

  const renderLanguageSelector = () => {
    return (
      <Radio.Group size="small" defaultValue={language}>
        {LANGUAGES.map((lang: Language) => (
          <Radio.Button
            key={lang}
            value={lang}
            checked={lang === language}
            onChange={() => setLanguage(lang)}
          >
            {LANGUAGE_MAP[lang]}
          </Radio.Button>
        ))}
      </Radio.Group>
    );
  };

  return (
    <div className="app">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          {TITLE_MAP[language]}
          {renderLanguageSelector()}
        </Header>
      </Layout>
    </div>
  );
};

export default App;
