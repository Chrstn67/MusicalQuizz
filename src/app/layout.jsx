import "./globals.css"

export const metadata = {
  title: "Quiz Musical - The Voice Edition",
  description: "Un quiz musical inspiré par The Voice",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
