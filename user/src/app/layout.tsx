import "./globals.css";
import Header from "./components/Header";
import { LoginProvider } from "./context/LoginContext"; // ✅ import context

export const metadata = {
  title: "Urological Society of India",
  description: "Official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the app with LoginProvider so Header & pages know login state */}
        <LoginProvider>
          <Header />
          <main>{children}</main>
        </LoginProvider>
      </body>
    </html>
  );
}
