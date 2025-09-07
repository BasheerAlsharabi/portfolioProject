import { useState, useEffect } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";

const Hero = () => {
  const { portfolioData } = usePortfolio();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % portfolioData.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [portfolioData.hero.roles.length]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-2 py-8 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Greeting */}
          <div className="mb-4">
            <span className="text-purple-400 text-base font-medium">
              {portfolioData.hero.greeting}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {portfolioData.hero.firstName}
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {portfolioData.hero.lastName}
            </span>
          </h1>

          {/* Dynamic role */}
          <div className="mb-6 h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-gray-300">
              I'm a{" "}
              <span className="text-purple-400 font-semibold animate-pulse">
                {portfolioData.hero.roles[currentRole]}
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">
                {portfolioData.hero.primaryButtonText}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {portfolioData.hero.secondaryButtonText}
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-1 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
