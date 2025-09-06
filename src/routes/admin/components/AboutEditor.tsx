import { useState } from "react";

const AboutEditor = () => {
  const [aboutData, setAboutData] = useState({
    title: "About Me",
    description:
      "I'm a passionate full-stack developer with a love for creating exceptional digital experiences. With expertise spanning frontend, backend, and mobile development, I bring ideas to life through clean code and innovative design.",
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "30+", label: "Happy Clients" },
      { number: "99%", label: "Client Satisfaction" },
    ],
    skills: [
      {
        name: "Frontend Development",
        icon: "🎨",
        description: "React, Vue, TypeScript, Tailwind CSS",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Backend Development",
        icon: "⚙️",
        description: "Node.js, Python, Express, FastAPI",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Mobile Development",
        icon: "📱",
        description: "React Native, Flutter, iOS, Android",
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "DevOps & Cloud",
        icon: "☁️",
        description: "AWS, Docker, CI/CD, Kubernetes",
        color: "from-orange-500 to-red-500",
      },
    ],
  });

  const handleInputChange = (field: string, value: any) => {
    setAboutData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStatChange = (
    index: number,
    field: "number" | "label",
    value: string
  ) => {
    const newStats = [...aboutData.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setAboutData((prev) => ({
      ...prev,
      stats: newStats,
    }));
  };

  const handleSkillChange = (
    index: number,
    field: "name" | "icon" | "description" | "color",
    value: string
  ) => {
    const newSkills = [...aboutData.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setAboutData((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };

  const addStat = () => {
    setAboutData((prev) => ({
      ...prev,
      stats: [...prev.stats, { number: "0", label: "New Stat" }],
    }));
  };

  const removeStat = (index: number) => {
    setAboutData((prev) => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    setAboutData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          name: "New Skill",
          icon: "⭐",
          description: "Description here",
          color: "from-gray-500 to-gray-600",
        },
      ],
    }));
  };

  const removeSkill = (index: number) => {
    setAboutData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Edit About Section
        </h2>
        <p className="text-gray-400 mb-8">
          Customize your about section content, stats, and skills.
        </p>
      </div>

      {/* Basic Info */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">Basic Information</h3>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Section Title
          </label>
          <input
            type="text"
            value={aboutData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={aboutData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Statistics</h3>
          <button
            onClick={addStat}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Add Stat
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutData.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">
                  Stat {index + 1}
                </span>
                <button
                  onClick={() => removeStat(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  value={stat.number}
                  onChange={(e) =>
                    handleStatChange(index, "number", e.target.value)
                  }
                  placeholder="Number (e.g., 5+)"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) =>
                    handleStatChange(index, "label", e.target.value)
                  }
                  placeholder="Label (e.g., Years Experience)"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Skills</h3>
          <button
            onClick={addSkill}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Add Skill
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutData.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">
                  Skill {index + 1}
                </span>
                <button
                  onClick={() => removeSkill(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) =>
                    handleSkillChange(index, "name", e.target.value)
                  }
                  placeholder="Skill Name"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <input
                  type="text"
                  value={skill.icon}
                  onChange={(e) =>
                    handleSkillChange(index, "icon", e.target.value)
                  }
                  placeholder="Icon (emoji)"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <input
                  type="text"
                  value={skill.description}
                  onChange={(e) =>
                    handleSkillChange(index, "description", e.target.value)
                  }
                  placeholder="Description"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <select
                  value={skill.color}
                  onChange={(e) =>
                    handleSkillChange(index, "color", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="from-blue-500 to-cyan-500">
                    Blue to Cyan
                  </option>
                  <option value="from-green-500 to-emerald-500">
                    Green to Emerald
                  </option>
                  <option value="from-purple-500 to-pink-500">
                    Purple to Pink
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
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {aboutData.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {aboutData.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;
