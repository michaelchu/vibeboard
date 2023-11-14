export type LeftKeyProps = Omit<KeyProps, "key_label_color">;
export type RightKeyProps = { key_id: string; key_label_color: string };

export type KeyProps = {
  key_id: string;
  label: string;
  width: string;
  row: string;
  flexGrow?: boolean;
  font_size?: string;
  key_label_color: string;
};

export type KeyboardProps = {
  theme_name: string;
  description: string;
  keyboard_size: string;
  keyboard_layout: string;
  platform: string;
  image_path: string;
};
