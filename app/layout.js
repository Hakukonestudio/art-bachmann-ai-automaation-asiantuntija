import '../styles/globals.css'

export const metadata = {
  title: 'Ohjelma on valmisteilla',
  description: 'Pysy kuulolla, tulossa pian!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  )
}