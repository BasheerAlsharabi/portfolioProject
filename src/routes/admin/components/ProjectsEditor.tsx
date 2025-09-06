import { useState } from "react";

const ProjectsEditor = () => {
  const [projectsData, setProjectsData] = useState({
    title: "Featured Projects",
    description:
      "Here are some of my recent projects that showcase my skills and expertise. Each project represents a unique challenge and solution in modern web development.",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
        category: "Web Development",
        color: "from-blue-500 to-cyan-500",
        icon: "🛒",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
        category: "Mobile Development",
        color: "from-purple-500 to-pink-500",
        icon: "📋",
      },
      {
        title: "AI-Powered Analytics Dashboard",
        description:
          "A comprehensive analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
        technologies: ["Python", "React", "TensorFlow", "D3.js", "PostgreSQL"],
        category: "Data Science",
        color: "from-green-500 to-emerald-500",
        icon: "📊",
      },
    ],
  });

  const handleInputChange = (field: string, value: any) => {
    setProjectsData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProjectChange = (index: number, field: string, value: any) => {
    const newProjects = [...projectsData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjectsData((prev) => ({
      ...prev,
      projects: newProjects,
    }));
  };

  const handleTechnologyChange = (
    projectIndex: number,
    techIndex: number,
    value: string
  ) => {
    const newProjects = [...projectsData.projects];
    newProjects[projectIndex].technologies[techIndex] = value;
    setProjectsData((prev) => ({
      ...prev,
      projects: newProjects,
    }));
  };

  const addTechnology = (projectIndex: number) => {
    const newProjects = [...projectsData.projects];
    newProjects[projectIndex].technologies.push("New Technology");
    setProjectsData((prev) => ({
      ...prev,
      projects: newProjects,
    }));
  };

  const removeTechnology = (projectIndex: number, techIndex: number) => {
    const newProjects = [...projectsData.projects];
    newProjects[projectIndex].technologies = newProjects[
      projectIndex
    ].technologies.filter((_, i) => i !== techIndex);
    setProjectsData((prev) => ({
      ...prev,
      projects: newProjects,
    }));
  };

  const addProject = () => {
    setProjectsData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "New Project",
          description: "Project description here",
          technologies: ["Technology 1", "Technology 2"],
          category: "Web Development",
          color: "from-blue-500 to-cyan-500",
          icon: "⭐",
        },
      ],
    }));
  };

  const removeProject = (index: number) => {
    setProjectsData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Projects Section
        </h2>
        <p className="text-gray-400 mb-8">
          Manage your featured projects and showcase your work.
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
            value={projectsData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Section Description
          </label>
          <textarea
            value={projectsData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Projects</h3>
          <button
            onClick={addProject}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Add Project
          </button>
        </div>

        <div className="space-y-6">
          {projectsData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">
                  Project {index + 1}
                </h4>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  Remove Project
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(index, "title", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      value={project.category}
                      onChange={(e) =>
                        handleProjectChange(index, "category", e.target.value)
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
                      value={project.icon}
                      onChange={(e) =>
                        handleProjectChange(index, "icon", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Color Gradient
                    </label>
                    <select
                      value={project.color}
                      onChange={(e) =>
                        handleProjectChange(index, "color", e.target.value)
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
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
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
                        Technologies
                      </label>
                      <button
                        onClick={() => addTechnology(index)}
                        className="text-purple-400 hover:text-purple-300 text-sm"
                      >
                        Add Technology
                      </button>
                    </div>
                    <div className="space-y-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="text"
                            value={tech}
                            onChange={(e) =>
                              handleTechnologyChange(
                                index,
                                techIndex,
                                e.target.value
                              )
                            }
                            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          />
                          <button
                            onClick={() => removeTechnology(index, techIndex)}
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
            {projectsData.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {projectsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
            >
              <div
                className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="text-4xl opacity-80">{project.icon}</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-3 rounded text-sm">
                    View Project
                  </button>
                  <button className="flex-1 border border-purple-400 text-purple-400 py-2 px-3 rounded text-sm">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsEditor;
