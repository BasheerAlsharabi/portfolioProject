import { useState } from "react";

const ContactEditor = () => {
  const [contactData, setContactData] = useState({
    title: "Let's Connect",
    description:
      "Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.",
    contactInfo: {
      email: "willie@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
    },
    socialLinks: [
      {
        name: "LinkedIn",
        icon: "💼",
        url: "https://www.linkedin.com/in/joshua-harris-321a24190/",
        color: "hover:bg-blue-500",
      },
      {
        name: "GitHub",
        icon: "🐙",
        url: "https://github.com/joshua-harris",
        color: "hover:bg-gray-800",
      },
      {
        name: "Twitter",
        icon: "🐦",
        url: "https://twitter.com",
        color: "hover:bg-blue-400",
      },
      {
        name: "Email",
        icon: "📧",
        url: "mailto:willie@example.com",
        color: "hover:bg-red-500",
      },
    ],
    formLabels: {
      name: "Name",
      email: "Email",
      message: "Message",
      submitButton: "Send Message",
    },
  });

  const handleInputChange = (field: string, value: any) => {
    setContactData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setContactData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value,
      },
    }));
  };

  const handleSocialLinkChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newSocialLinks = [...contactData.socialLinks];
    newSocialLinks[index] = { ...newSocialLinks[index], [field]: value };
    setContactData((prev) => ({
      ...prev,
      socialLinks: newSocialLinks,
    }));
  };

  const handleFormLabelChange = (field: string, value: string) => {
    setContactData((prev) => ({
      ...prev,
      formLabels: {
        ...prev.formLabels,
        [field]: value,
      },
    }));
  };

  const addSocialLink = () => {
    setContactData((prev) => ({
      ...prev,
      socialLinks: [
        ...prev.socialLinks,
        {
          name: "New Social",
          icon: "🔗",
          url: "https://example.com",
          color: "hover:bg-gray-500",
        },
      ],
    }));
  };

  const removeSocialLink = (index: number) => {
    setContactData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Contact Section
        </h2>
        <p className="text-gray-400 mb-8">
          Manage your contact information and social media links.
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
            value={contactData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Section Description
          </label>
          <textarea
            value={contactData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={contactData.contactInfo.email}
              onChange={(e) => handleContactInfoChange("email", e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={contactData.contactInfo.phone}
              onChange={(e) => handleContactInfoChange("phone", e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              value={contactData.contactInfo.location}
              onChange={(e) =>
                handleContactInfoChange("location", e.target.value)
              }
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Social Media Links
          </h3>
          <button
            onClick={addSocialLink}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Add Social Link
          </button>
        </div>

        <div className="space-y-4">
          {contactData.socialLinks.map((social, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">
                  Social Link {index + 1}
                </span>
                <button
                  onClick={() => removeSocialLink(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  value={social.name}
                  onChange={(e) =>
                    handleSocialLinkChange(index, "name", e.target.value)
                  }
                  placeholder="Platform Name"
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <input
                  type="text"
                  value={social.icon}
                  onChange={(e) =>
                    handleSocialLinkChange(index, "icon", e.target.value)
                  }
                  placeholder="Icon (emoji)"
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) =>
                    handleSocialLinkChange(index, "url", e.target.value)
                  }
                  placeholder="URL"
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <select
                  value={social.color}
                  onChange={(e) =>
                    handleSocialLinkChange(index, "color", e.target.value)
                  }
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="hover:bg-blue-500">Blue</option>
                  <option value="hover:bg-gray-800">Gray</option>
                  <option value="hover:bg-blue-400">Light Blue</option>
                  <option value="hover:bg-red-500">Red</option>
                  <option value="hover:bg-green-500">Green</option>
                  <option value="hover:bg-purple-500">Purple</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Labels */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">Form Labels</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name Field Label
            </label>
            <input
              type="text"
              value={contactData.formLabels.name}
              onChange={(e) => handleFormLabelChange("name", e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Field Label
            </label>
            <input
              type="text"
              value={contactData.formLabels.email}
              onChange={(e) => handleFormLabelChange("email", e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message Field Label
            </label>
            <input
              type="text"
              value={contactData.formLabels.message}
              onChange={(e) => handleFormLabelChange("message", e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Submit Button Text
            </label>
            <input
              type="text"
              value={contactData.formLabels.submitButton}
              onChange={(e) =>
                handleFormLabelChange("submitButton", e.target.value)
              }
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {contactData.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Preview */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">📧</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">
                    {contactData.contactInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">📱</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">
                    {contactData.contactInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">
                    {contactData.contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                {contactData.socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white text-lg hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Preview */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {contactData.formLabels.name}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {contactData.formLabels.email}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {contactData.formLabels.message}
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                {contactData.formLabels.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEditor;
