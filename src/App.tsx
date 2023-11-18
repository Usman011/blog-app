import { useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { ThemeVariantsProps, theme } from "theme";
import { ArticlesView } from "components/ArticlesView";
import { TopDestinations } from "components/TopDestinations";
import { Container } from "components/Container";
import { Navbar } from "components/Navbar";

function App() {
  const [mode, setMode] = useState<ThemeVariantsProps>(
    ThemeVariantsProps.light
  );
  const activeTheme = useMemo(() => theme(mode), [mode]);

  const toggleTheme = useCallback(
    () =>
      setMode(
        mode === ThemeVariantsProps.light
          ? ThemeVariantsProps.dark
          : ThemeVariantsProps.light
      ),
    [mode]
  );

  return (
    <ThemeProvider theme={activeTheme}>
      <Navbar theme={mode} toggleTheme={toggleTheme} />
      <Container>
        <ArticlesView />
        <ArticlesView listView />
        <TopDestinations />
      </Container>
    </ThemeProvider>
  );
}
export default App;
