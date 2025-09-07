import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="relative py-8 md:py-14 px-2 sm:px-4 lg:px-6 max-w-7xl mx-auto"
  >
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-4 md:p-8">
      {children}
    </div>
  </section>
);

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
};

const Component = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
        <Header />
      </div>
      <div className="pt-20">
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <SectionWrapper id="services">
          <Services />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Component;
