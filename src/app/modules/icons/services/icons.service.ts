import { Injectable } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Injectable()
export class IconsService {
  get github() {
    return faGithub;
  }

  get menu() {
    return faBars;
  }

  get angleRight() {
    return faAngleRight;
  }

  get angleDown() {
    return faAngleDown;
  }

  get close() {
    return faXmark;
  }
}
