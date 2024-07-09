import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ReduxProvider from "./store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

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
