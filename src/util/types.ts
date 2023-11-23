import React from "react";
export interface ErrorResponse {
  code: string;
  details: string;
  hint: string | null;
  message: string;
}

export type FilterOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type FilterSection = {
  id: string;
  name: string;
  defaultOpen?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options?: FilterOption[];
  element?: React.ReactNode;
};

export type ThemeData = {
  themeName: string;
  description: string;
  keyboardColor: string;
  keyCapColor: string;
  keyboardShape: string;
  keyboardSize: string;
  keyboardLayout: string;
  platform: string;
  owner?: string;
  imagePath: string;
};

export interface DesignModalProps {
  themeData: ThemeData;
  setThemeData: (themeData: ThemeData) => void;
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
  handleSave: () => void;
}

interface KeyPropsBase {
  key_id: string;
}

export interface KeyProps extends KeyPropsBase {
  label: string;
  width: string;
  row: string;
  flexGrow?: boolean;
  font_size?: string;
  key_label_color?: string;
}

export interface RightKeyProps extends KeyPropsBase {
  key_label_color: string;
}

export interface KeyboardProps {
  id: string;
  theme_name: string;
  description: string;
  key_cap_color: string;
  keyboard_color: string;
  keyboard_shape: string;
  keyboard_size: string;
  keyboard_layout: string;
  platform: string;
  image_path: string;
  owner: string;
  keyboard_theme_keys?: RightKeyProps[];
}

export interface KeyBoardComponentProps {
  keys: KeyProps[];
  color: string;
  keyCapColor: string;
  shape: string;
  selectedColor: string;
  handleOnClick: (key_id: string) => void;
}
