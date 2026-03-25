import "./globals.css";

export const metadata = {
  title: "SearchMate 💕 — Temukan Partner Virtualmu",
  description: "Platform hiburan untuk memilih partner virtual. Modern, seru, dan aman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts loaded via link tag (safer with Tailwind v4) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-gray-50 min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

