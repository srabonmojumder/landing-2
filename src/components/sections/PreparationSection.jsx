import Image from 'next/image';
import { Utensils, Sparkles } from 'lucide-react';

export default function PreparationSection() {
  const steps = [
    {
      num: '১',
      text: 'এক গ্লাস হালকা কুসুম গরম দুধ বা পানিতে ২-৩ চা চামচ SMD হেলদি মিক্স ভালো করে মিশিয়ে নিন।'
    },
    {
      num: '২',
      text: 'মেশানোর পর ৫ থেকে ১০ মিনিট ভিজিয়ে রাখুন যাতে উপাদানগুলো স্বাভাবিক নরম ও পুষ্টিকর হয়ে ওঠে।'
    },
    {
      num: '৩',
      text: 'প্রতিদিন সকালে নাশতার পূর্বে খালি পেটে অথবা রাতে ঘুমানোর আগে নিয়মিত সেবন করলে সর্বোত্তম ফল পাবেন।'
    }
  ];

  return (
    <section className="preparation-section">
      <div className="container">
        <div className="prep-grid">
          {/* Left Bowl Visual */}
          <div className="bowl-visual-wrap">
            <div className="bowl-image-frame">
              <Image
                src="/images/bowl-mix.jpg"
                alt="Delicious healthy mix bowl preparation"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>

          {/* Right Instructions Card */}
          <div className="prep-instruction-card">
            <h3 className="prep-card-title">
              <Utensils size={28} color="#4f7447" />
              <span>প্রস্তুত প্রণালী:</span>
            </h3>

            <div className="prep-steps-list">
              {steps.map((step, idx) => (
                <div className="step-item" key={idx}>
                  <div className="step-number">{step.num}</div>
                  <div className="step-text">{step.text}</div>
                </div>
              ))}
            </div>

            <div className="prep-tip">
              💡 <strong>বিশেষ পরামর্শ:</strong> মিষ্টি স্বাদের জন্য চিনির পরিবর্তে ১ চামচ খাঁটি মধু যোগ করতে পারেন।
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
