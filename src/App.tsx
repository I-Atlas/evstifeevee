import { FC } from "react";
import { GlobalStyle, AppContainer } from "./App.style";
import { Main, Timeline, Contact } from "./components";

export const App: FC = () => {
  return (
    <>
      <AppContainer>
        <Main />
        <Timeline />
        <Contact />
      </AppContainer>
      <GlobalStyle />
    </>
  );
};
