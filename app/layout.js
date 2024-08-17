import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ReduxProvider from "./store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });
// const IBMPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight:["100", "200", "300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Wörterbuch",
  description: "***",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
