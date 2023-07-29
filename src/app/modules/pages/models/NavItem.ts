export interface NavItem {
  label: string;
  link?: string;
  children: NavItem[];
  isExpanded: boolean;
  level: number;
}
