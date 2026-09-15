import { Hind_Siliguri, Outfit } from 'next/font/google';
import '@/styles/globals.scss';

const hindSiliguri = Hind_Siliguri({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'SMD Healthy Mix | প্রোটিন সমৃদ্ধ সুপার ফুড হেলদি মিক্স',
  description: '২০টি পুষ্টিকর উপাদানে তৈরি ১০০% প্রিমিয়াম ও খাঁটি SMD হেলদি মিক্স। অগ্রিম পেমেন্ট ছাড়াই দ্রুত ক্যাশ অন ডেলিভারিতে অর্ডার করুন।',
  keywords: 'smd healthy mix, protein mix bd, superfood bangladesh, organic dry fruits mix, nuts and seeds',
  openGraph: {
    title: 'SMD Healthy Mix | প্রোটিন সমৃদ্ধ সুপার ফুড হেলদি মিক্স',
    description: '২০টি পুষ্টিকর উপাদানে তৈরি ১০০% প্রিমিয়াম ও খাঁটি SMD হেলদি মিক্স।',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
