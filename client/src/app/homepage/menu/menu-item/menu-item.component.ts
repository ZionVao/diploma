import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { openCloseAnimation } from 'src/app/common';

export interface Child {
  title: string;
  path?: string;
  isOpened?: boolean;
  icon?: string;
  children?: Child[];
  isNew?: boolean;
  externalUrl?: string;
  isPending?: boolean;
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [openCloseAnimation],
})
export class MenuItemComponent {
  @Input() isOpen = false;
  @Input() children: Child[] = [];
  @Input() path?: string;
  @Input() title?: string;
  @Input() icon?: string;
  @Input() externalUrl?: string;
  @Input() isNew?: boolean;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
