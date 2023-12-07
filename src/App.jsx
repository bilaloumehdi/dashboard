import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "./theme";
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashdoard/Dashboard";

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
