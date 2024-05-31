import { ApolloWrapper } from "@/lib/apollo-wrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Header />

          {children}
          <Footer />
          </ApolloWrapper>
      </body>
    </html>
  );
}
