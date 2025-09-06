import { usePortfolio } from "../contexts/PortfolioContext";

const Services = () => {
  const { portfolioData } = usePortfolio();
  const services = portfolioData.services.services;

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {portfolioData.services.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Offer
          </span>
        </h3>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {portfolioData.services.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {service.name}
              </h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="space-y-2">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-gray-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
