import "../styles/tailwind.css";
import Navbar from "../components/Navbar";
import {ThemeProvider} from "next-themes";
import Footer from "../components/Footer";


function MyApp({Component, pageProps}) {


  return (
      <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
  );
}

export default MyApp;