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
  options: FilterOption[];
};
