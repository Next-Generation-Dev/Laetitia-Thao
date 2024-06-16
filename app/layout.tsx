import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.scss";
import { Providers } from "@/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ogcool from "ogcool";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laetitia Thao - Assistante maternelle Agréée",
  description: "Laetitia Thao - Assistante maternelle Agréée",
  openGraph: {
    images: [
      ogcool("Branding 5", {
        modifications: [
          { name: "Text", text: "Laetitia Thao" },
          { name: "Image", src: "@/assets/img1.png" },
        ],
      }),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className="overflow-x-hidden">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
