import "./globals.css";

export const metadata = {
  title: "NeoEngine Status",
  description: "NeoEngine Validator Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
