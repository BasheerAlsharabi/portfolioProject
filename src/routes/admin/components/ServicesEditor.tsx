import { useState } from "react";

const ServicesEditor = () => {
  const [servicesData, setServicesData] = useState({
    title: "Services I Offer",
    description:
      "From concept to deployment, I provide end-to-end development services to bring your ideas to life.",
    services: [
      {
        id: 1,
        name: "Web Development",
        icon: "🌐",
        description:
          "Custom web applications built with modern frameworks like React, Vue, and Next.js. Responsive, fast, and SEO-optimized.",
        features: [
          "React/Vue/Next.js",
          "TypeScript",
          "Responsive Design",
          "SEO Optimization",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 2,
        name: "Mobile Development",
        icon: "📱",
        description:
          "Cross-platform mobile apps using React Native and Flutter. Native performance with shared codebase.",
        features: [
          "React Native",
          "Flutter",
          "iOS & Android",
          "App Store Deployment",
        ],
        color: "from-purple-500 to-pink-500",
      },
      {
        id: 3,
        name: "Backend Development",
        icon: "⚙️",
        description:
          "Scalable backend systems and APIs using Node.js, Python, and cloud services. Database design and optimization.",
        features: [
          "Node.js/Python",
          "RESTful APIs",
          "Database Design",
          "Cloud Deployment",
        ],
        color: "from-green-500 to-emerald-500",
      },
    ],
  });

  const handleInputChange = (field: string, value: any) => {
    setServicesData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceChange = (index: number, field: string, value: any) => {
    const newServices = [...servicesData.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setServicesData((prev) => ({
      ...prev,
      services: newServices,
    }));
  };

  const handleFeatureChange = (
    serviceIndex: number,
    featureIndex: number,
    value: string
  ) => {
    const newServices = [...servicesData.services];
    newServices[serviceIndex].features[featureIndex] = value;
    setServicesData((prev) => ({
      ...prev,
      services: newServices,
    }));
  };

  const addFeature = (serviceIndex: number) => {
    const newServices = [...servicesData.services];
    newServices[serviceIndex].features.push("New Feature");
    setServicesData((prev) => ({
      ...prev,
      services: newServices,
    }));
  };

  const removeFeature = (serviceIndex: number, featureIndex: number) => {
    const newServices = [...servicesData.services];
    newServices[serviceIndex].features = newServices[
      serviceIndex
    ].features.filter((_, i) => i !== featureIndex);
    setServicesData((prev) => ({
      ...prev,
      services: newServices,
    }));
  };

  const addService = () => {
    const newId = Math.max(...servicesData.services.map((s) => s.id)) + 1;
    setServicesData((prev) => ({
      ...prev,
      services: [
        ...prev.services,
        {
          id: newId,
          name: "New Service",
          icon: "⭐",
          description: "Service description here",
          features: ["Feature 1", "Feature 2"],
          color: "from-blue-500 to-cyan-500",
        },
      ],
    }));
  };

  const removeService = (index: number) => {
    setServicesData((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Services Section
        </h2>
        <p className="text-gray-400 mb-8">
          Manage your services and what you offer to clients.
        </p>
      </div>

      {/* Section Info */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">
          Section Information
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Section Title
          </label>
          <input
            type="text"
            value={servicesData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Section Description
          </label>
          <textarea
            value={servicesData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Services */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <button
            onClick={addService}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Add Service
          </button>
        </div>

        <div className="space-y-6">
          {servicesData.services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">
                  Service {index + 1}
                </h4>
                <button
                  onClick={() => removeService(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  Remove Service
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Name
                    </label>
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) =>
                        handleServiceChange(index, "name", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Icon (emoji)
                    </label>
                    <input
                      type="text"
                      value={service.icon}
                      onChange={(e) =>
                        handleServiceChange(index, "icon", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Color Gradient
                    </label>
                    <select
                      value={service.color}
                      onChange={(e) =>
                        handleServiceChange(index, "color", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    >
                      <option value="from-blue-500 to-cyan-500">
                        Blue to Cyan
                      </option>
                      <option value="from-purple-500 to-pink-500">
                        Purple to Pink
                      </option>
                      <option value="from-green-500 to-emerald-500">
                        Green to Emerald
                      </option>
                      <option value="from-orange-500 to-red-500">
                        Orange to Red
                      </option>
                      <option value="from-indigo-500 to-purple-500">
                        Indigo to Purple
                      </option>
                      <option value="from-yellow-500 to-orange-500">
                        Yellow to Orange
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={service.description}
                      onChange={(e) =>
                        handleServiceChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Features
                      </label>
                      <button
                        onClick={() => addFeature(index)}
                        className="text-purple-400 hover:text-purple-300 text-sm"
                      >
                        Add Feature
                      </button>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) =>
                              handleFeatureChange(
                                index,
                                featureIndex,
                                e.target.value
                              )
                            }
                            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          />
                          <button
                            onClick={() => removeFeature(index, featureIndex)}
                            className="text-red-400 hover:text-red-300 transition-colors duration-300"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {servicesData.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/5 rounded-lg p-6 text-center border border-white/10"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">
                {service.name}
              </h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesEditor;
