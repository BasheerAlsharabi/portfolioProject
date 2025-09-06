import { useState, useEffect } from "react";
import {
  loadPortfolioData,
  savePortfolioData,
  type HeroData,
} from "../../../data/portfolioData";

const HeroEditor = () => {
  const [heroData, setHeroData] = useState<HeroData>({
    greeting: "Hello, I'm",
    firstName: "Willie",
    lastName: "Garrett",
    roles: [
      "Full Stack Developer",
      "UI/UX Designer",
      "Mobile Developer",
      "Tech Enthusiast",
    ],
    description:
      "Passionate about creating exceptional digital experiences through clean code, innovative design, and cutting-edge technology. Let's build something amazing together.",
    primaryButtonText: "View My Work",
    secondaryButtonText: "Get In Touch",
  });

  useEffect(() => {
    const portfolioData = loadPortfolioData();
    setHeroData(portfolioData.hero);
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setHeroData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const portfolioData = loadPortfolioData();
    portfolioData.hero = heroData;
    savePortfolioData(portfolioData);
    alert("Hero section saved successfully!");
  };

  const handleRoleChange = (index: number, value: string) => {
    const newRoles = [...heroData.roles];
    newRoles[index] = value;
    setHeroData((prev) => ({
      ...prev,
      roles: newRoles,
    }));
  };

  const addRole = () => {
    setHeroData((prev) => ({
      ...prev,
      roles: [...prev.roles, "New Role"],
    }));
  };

  const removeRole = (index: number) => {
    setHeroData((prev) => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Edit Hero Section
          </h2>
          <p className="text-gray-400 mb-8">
            Customize your hero section content and messaging.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
        >
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Basic Information
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Greeting Text
            </label>
            <input
              type="text"
              value={heroData.greeting}
              onChange={(e) => handleInputChange("greeting", e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={heroData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={heroData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Roles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Professional Roles
            </h3>
            <button
              onClick={addRole}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Add Role
            </button>
          </div>

          <div className="space-y-3">
            {heroData.roles.map((role, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => handleRoleChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => removeRole(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          value={heroData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Primary Button Text
          </label>
          <input
            type="text"
            value={heroData.primaryButtonText}
            onChange={(e) =>
              handleInputChange("primaryButtonText", e.target.value)
            }
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Secondary Button Text
          </label>
          <input
            type="text"
            value={heroData.secondaryButtonText}
            onChange={(e) =>
              handleInputChange("secondaryButtonText", e.target.value)
            }
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
        <div className="text-center">
          <div className="mb-4">
            <span className="text-purple-400 text-lg font-medium">
              {heroData.greeting}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {heroData.firstName}
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {heroData.lastName}
            </span>
          </h1>
          <div className="mb-4">
            <span className="text-xl text-gray-300">
              I'm a{" "}
              <span className="text-purple-400 font-semibold">
                {heroData.roles[0]}
              </span>
            </span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {heroData.description}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full">
              {heroData.primaryButtonText}
            </button>
            <button className="border border-purple-400 text-purple-400 px-6 py-2 rounded-full">
              {heroData.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;
