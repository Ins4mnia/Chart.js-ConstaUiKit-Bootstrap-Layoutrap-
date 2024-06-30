import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { IconsProvider } from "@consta/icons/IconsProvider";
import Dashboard from "../Dashboard/Dashboard";

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <IconsProvider>
        <Dashboard />
      </IconsProvider>
    </Theme>
  );
}

export default App;
