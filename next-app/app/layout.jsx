import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

export const metadata = {
  title: "MyPov - Edit Your Point of View",
  description: "Create cinematic photos with AI-powered editing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Importing the fonts that were in the style tag of the original file */}
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double+Ink:wght@100..900&family=Bitcount+Prop+Double+Ink:wght@100..900&family=Comic+Relief:wght@400;700&family=Darumadrop+One&family=Londrina+Shadow&family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-outfit text-gray-900 bg-white selection:bg-blue-200 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
