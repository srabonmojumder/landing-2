import '@/styles/globals.scss';

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
    <html lang="bn" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
