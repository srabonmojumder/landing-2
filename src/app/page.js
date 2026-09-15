import TopNoticeBar from '@/components/layout/TopNoticeBar';
import HeroVideoSection from '@/components/sections/HeroVideoSection';
import ProductHighlight from '@/components/sections/ProductHighlight';
import BenefitsSection from '@/components/sections/BenefitsSection';
import PreparationSection from '@/components/sections/PreparationSection';
import CustomerReviews from '@/components/sections/CustomerReviews';
import TrustGuarantees from '@/components/sections/TrustGuarantees';
import HotlineBanner from '@/components/sections/HotlineBanner';
import OrderForm from '@/components/sections/OrderForm';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import ScrollRevealObserver from '@/components/common/ScrollRevealObserver';

export default function Home() {
  return (
    <main className="landing-wrapper">
      <ScrollRevealObserver />
      <TopNoticeBar />
      <HeroVideoSection />
      <ProductHighlight />
      <BenefitsSection />
      <PreparationSection />
      <CustomerReviews />
      <TrustGuarantees />
      <HotlineBanner />
      <OrderForm />
      <Footer />
      <FloatingActions />
    </main>
  );
}
