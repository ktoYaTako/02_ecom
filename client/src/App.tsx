import { Global } from "@emotion/react";
import { FC } from "react";
import { GLOBAL_STYLES } from "./styles/global.styles";

import "./styles/styles.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
