import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RentRover | Find perfect rental properties",
  description: "Property finding made easy",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}