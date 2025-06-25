import Providers from './components/Providers'
import './globals.css'


export const metadata = {
  title: 'Artistly',
  description: 'Hire the best artists for your event',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers> 
      </body>
    </html>
  )
}
