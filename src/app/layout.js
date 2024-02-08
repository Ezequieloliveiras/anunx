export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import './globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>{children}</body>
    </html>
  )
}
