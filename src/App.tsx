import { Content } from "./components/content"
import Footer from "./components/footer"
import Navbar from "./components/navbar/navbar"
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Navbar />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}

export default App
