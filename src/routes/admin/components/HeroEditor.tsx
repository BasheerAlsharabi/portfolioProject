import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  loadPortfolioData,
  savePortfolioData,
  type HeroData,
} from "../../../data/portfolioData";

const defaultValues: HeroData = {
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
};

const HeroEditor = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<HeroData>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "roles",
  });

  // Load data on mount
  useEffect(() => {
    const portfolioData = loadPortfolioData();
    if (portfolioData.hero) {
      Object.entries(portfolioData.hero).forEach(([key, value]) => {
        setValue(key as keyof HeroData, value);
      });
    }
    // eslint-disable-next-line
  }, []);

  const onSubmit = (data: HeroData) => {
    const portfolioData = loadPortfolioData();
    portfolioData.hero = data;
    savePortfolioData(portfolioData);
    alert("Hero section saved successfully!");
  };

  const heroData = watch();

  return (
    <form
      className="space-y-10"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Edit Hero Section
          </h2>
          <p className="text-gray-400 mb-2 text-base">
            Customize your hero section content and messaging.
          </p>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Info */}
        <div className="space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">
            Basic Information
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Greeting Text
            </label>
            <input
              {...register("greeting", { required: true })}
              type="text"
              className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
            {errors.greeting && (
              <span className="text-red-400 text-xs">Required</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
            {errors.firstName && (
              <span className="text-red-400 text-xs">Required</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              type="text"
              className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
            {errors.lastName && (
              <span className="text-red-400 text-xs">Required</span>
            )}
          </div>
        </div>

        {/* Roles */}
        <div className="space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">
              Professional Roles
            </h3>
            <button
              type="button"
              onClick={() => append("New Role")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow"
            >
              Add Role
            </button>
          </div>
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2 gap-2">
                <input
                  {...register(`roles.${index}` as const, { required: true })}
                  type="text"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300 text-lg"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            ))}
            {errors.roles && (
              <span className="text-red-400 text-xs">
                At least one role is required
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
          rows={4}
          className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none transition-all"
        />
        {errors.description && (
          <span className="text-red-400 text-xs">Required</span>
        )}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Primary Button Text
          </label>
          <input
            {...register("primaryButtonText", { required: true })}
            type="text"
            className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
          />
          {errors.primaryButtonText && (
            <span className="text-red-400 text-xs">Required</span>
          )}
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Secondary Button Text
          </label>
          <input
            {...register("secondaryButtonText", { required: true })}
            type="text"
            className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
          />
          {errors.secondaryButtonText && (
            <span className="text-red-400 text-xs">Required</span>
          )}
        </div>
      </div>

      {/* Preview */}
      <div className="mt-10 p-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-6">Preview</h3>
        <div className="w-full max-w-2xl mx-auto text-center space-y-4">
          <div>
            <span className="text-purple-400 text-lg font-medium tracking-wide">
              {heroData.greeting}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
            {heroData.firstName}{" "}
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {heroData.lastName}
            </span>
          </h1>
          <div>
            <span className="text-2xl text-gray-300">
              I'm a{" "}
              <span className="text-purple-400 font-semibold">
                {heroData.roles?.[0]}
              </span>
            </span>
          </div>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-lg">
            {heroData.description}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all text-lg">
              {heroData.primaryButtonText}
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all text-lg">
              {heroData.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default HeroEditor;
