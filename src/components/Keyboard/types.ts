// export type RightKeyProps = { key_id: string; key_label_color: string };

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
  theme_name: string;
  description: string;
  keyboard_size: string;
  keyboard_layout: string;
  platform: string;
  image_path: string;
}
