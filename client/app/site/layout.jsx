import { ThemesProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const SiteLayout = ({ children }) => {
  return (
    <ThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />  
      {children}
    </ThemesProvider>
  );
};

export default SiteLayout;
