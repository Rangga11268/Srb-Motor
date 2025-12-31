"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { MotorSpec } from "@/lib/motor-data";

interface CompareContextType {
  selectedMotors: MotorSpec[];
  addToCompare: (motor: MotorSpec) => void;
  removeFromCompare: (motorId: string) => void;
  isInCompare: (motorId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [selectedMotors, setSelectedMotors] = useState<MotorSpec[]>([]);

  const addToCompare = (motor: MotorSpec) => {
    if (selectedMotors.length >= 3) {
      alert("Maksimal 3 motor untuk perbandingan.");
      return;
    }
    if (!selectedMotors.find((m) => m.id === motor.id)) {
      setSelectedMotors([...selectedMotors, motor]);
    }
  };

  const removeFromCompare = (motorId: string) => {
    setSelectedMotors(selectedMotors.filter((m) => m.id !== motorId));
  };

  const isInCompare = (motorId: string) => {
    return selectedMotors.some((m) => m.id === motorId);
  };

  return (
    <CompareContext.Provider
      value={{ selectedMotors, addToCompare, removeFromCompare, isInCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
