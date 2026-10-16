import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GlobalNetwork from "@/components/GlobalNetwork";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Figma fades a #F8F8F8 band from the pricing title down through the partner logos. */}
        <div className="mt-24 bg-[linear-gradient(to_bottom,var(--color-surface),transparent)] lg:mt-[131px]">
          <Pricing />
          <GlobalNetwork />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
