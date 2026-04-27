import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const monttserrat = Montserrat({
  variable: "--font-monttserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Dreagon News",
  description: "A news website built with Next.js, showcasing the latest news articles and updates in various categories. Stay informed with our comprehensive coverage and user-friendly interface.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${popins.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
