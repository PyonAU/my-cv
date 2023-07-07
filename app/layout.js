import MenuBar from '@components/MenuBar';
import './globals.css';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My CV',
  description: 'This is my portfolio and to show what I have created so far. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MenuBar />
        {children}
      </body>
    </html>
  );
}

// className={inter.className}
