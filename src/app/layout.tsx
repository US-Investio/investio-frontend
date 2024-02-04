import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import 'styles/reset.css';
import 'styles/globals.scss';

export const metadata: Metadata = {
  title: 'Investio',
  description: '투자 인사이트를 키워가는 나만의 공간',
};

const notoSansKR = Noto_Sans_KR({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
