import Header from "./Header";
import Footer from "./Footer";
import { Nunito_Sans } from 'next/font/google'
const nunito_sans = Nunito_Sans({subsets: ["latin"]});

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={`${nunito_sans.className} bg-background`}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;