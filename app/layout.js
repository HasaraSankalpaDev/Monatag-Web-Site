import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Watch Full Video Now!",
  description:
    "Exclusive videos and stories. Click below or wait to be redirected.",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="monetag" content="a3e9b641052667f743aa454d82a9fcf4"></meta>
        <script
          src="https://fpyf8.com/88/tag.min.js"
          data-zone="174864"
          async
          data-cfasync="false"
        ></script>
      </head>
      <script
        src="https://fpyf8.com/88/tag.min.js"
        data-zone="175815"
        async
        data-cfasync="false"
      ></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
