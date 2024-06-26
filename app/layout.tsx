import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import FAPIAO from './dashboard/invoices/page';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <FAPIAO />
        {children}
        </body>
    </html>
  );
}