import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  loadPortfolioData,
  savePortfolioData,
  type PortfolioData,
  defaultPortfolioData,
} from "../data/portfolioData";

interface PortfolioContextType {
  portfolioData: PortfolioData;
  updatePortfolioData: (data: PortfolioData) => void;
  refreshData: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [portfolioData, setPortfolioData] =
    useState<PortfolioData>(defaultPortfolioData);

  useEffect(() => {
    const data = loadPortfolioData();
    setPortfolioData(data);
  }, []);

  const updatePortfolioData = (data: PortfolioData) => {
    setPortfolioData(data);
    savePortfolioData(data);
  };

  const refreshData = () => {
    const data = loadPortfolioData();
    setPortfolioData(data);
  };

  return (
    <PortfolioContext.Provider
      value={{ portfolioData, updatePortfolioData, refreshData }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
