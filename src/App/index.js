import React from "react";
import { ActivityProvider } from "../ActivityContext";

import { AppUI } from "./AppUI";

function App() {
  return (
    <ActivityProvider>
      <AppUI />
    </ActivityProvider>
  );
}

export default App;
