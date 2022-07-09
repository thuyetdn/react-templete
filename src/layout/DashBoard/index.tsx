import { Button } from "@mui/material";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "store";
import { RootState } from "store/reducers";
import useSWR from "swr";

const DashBoard = () => {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  console.log(t);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button
        onClick={() => {
          const newMode = mode === "dark" ? "light" : "dark";
          document.cookie = `mode=${newMode}; expires=; path=/;`;
          dispatch(
            Actions.Web.update({
              key: "mode",
              value: newMode,
            })
          );
        }}
      >
        Switch Mode
      </Button>
      <div className="App">
        <div className="App-header">
          <h2>{t("Welcome to React")}</h2>
          <button onClick={() => changeLanguage("de")}>de</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
        <div className="App-intro">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
          <Trans i18nKey="welcome" />
        </div>
        <div style={{ marginTop: 40 }}>
          Learn more:&nbsp;
          <a href="https://react.i18next.com">https://react.i18next.js</a>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
