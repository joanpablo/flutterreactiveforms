import { Component } from '@angular/core';
import { IconsService } from '@icons/services/icons.service';
import { NavItemsController } from '@pages/models/NavItemsController';
import { PageLink } from '@pages/models/PageLink';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  pageLinks: PageLink[] = [
    { label: 'Why Reactive Forms?', link: 'why_reactive_forms' },
    { label: 'Getting started', link: 'getting_started' },
    { label: 'Concepts', link: 'concepts' },
    {
      label: 'Validators',
      children: [
        { label: 'Custom Validators', link: 'custom_validators' },
        { label: 'Built-in Validators', link: 'validators' },
      ],
    },
  ];

  navItems: NavItemsController<PageLink>;

  constructor(public icons: IconsService) {
    this.navItems = new NavItemsController<PageLink>(
      this.pageLinks,
      (item) => item.label,
      (item) => item.link,
      (item) => item.children,
    );
  }
}
