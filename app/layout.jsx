import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
// import { ToastContainer } from 'react-toastify';
// import { GlobalProvider } from '@/context/GlobalContext';
// import 'react-toastify/dist/ReactToastify.css';
// import 'photoswipe/dist/photoswipe.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RentRover | Find perfect rental properties",
  description: "Property finding made easy",
};

export default function RootLayout({ children }) {
  return (
      // <GlobalProvider>
        <AuthProvider>
          <html lang='en'>
              <body>
              <Navbar />
              <main>{children}</main>
              <Footer />
              {/*<ToastContainer />*/}
              </body>
          </html>
        </AuthProvider>
      // </GlobalProvider>
  );
}