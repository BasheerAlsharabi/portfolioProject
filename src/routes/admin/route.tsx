import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "./Login";
import HeroEditor from "./components/HeroEditor";
import AboutEditor from "./components/AboutEditor";
import ProjectsEditor from "./components/ProjectsEditor";
import ContactEditor from "./components/ContactEditor";
import ServicesEditor from "./components/ServicesEditor";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const tabs = [
    { id: "hero", name: "Hero Section", icon: "🏠" },
    { id: "about", name: "About Section", icon: "👤" },
    { id: "projects", name: "Projects", icon: "💼" },
    { id: "services", name: "Services", icon: "⚙️" },
    { id: "contact", name: "Contact", icon: "📞" },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case "hero":
        return <HeroEditor />;
      case "about":
        return <AboutEditor />;
      case "projects":
        return <ProjectsEditor />;
      case "services":
        return <ServicesEditor />;
      case "contact":
        return <ContactEditor />;
      default:
        return <HeroEditor />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Admin Header */}
      <div className="pt-16">
        <div className="bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio Admin
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Edit Sections
              </h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {renderActiveTab()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
