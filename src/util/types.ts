import React from "react";

export type FilterOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type FilterSection = {
  id: string;
  name: string;
  defaultOpen?: boolean;
  onChange: (value: string) => void;
  options?: FilterOption[];
  element?: React.ReactNode;
};

export type ThemeData = {
  themeTitle: string;
  themeDesc: string;
};

export interface DesignModalProps {
  themeData: ThemeData;
  setThemeData: (themeData: ThemeData) => void;
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
  handleSave: () => void;
}
