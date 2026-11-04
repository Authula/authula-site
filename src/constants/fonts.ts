import { JetBrains_Mono, Raleway } from "next/font/google";

export const primaryFont = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});
