import { NavItem } from './NavItem';

export class NavItemsController<T> {
  items: NavItem[];

  constructor(
    private sourceItems: T[],
    private label: (item: T) => string,
    private link: (item: T) => string | undefined,
    private children: (item: T) => T[] | undefined,
  ) {
    this.items = this.toNavItems(this.sourceItems, 0);
  }

  private toNavItems(items: T[], level: number): NavItem[] {
    return items.map((item) => {
      return {
        label: this.label(item),
        link: this.link(item),
        children: this.toNavItems(this.children(item) ?? [], level + 1),
        isExpanded: false,
        level: level,
      };
    });
  }
}
