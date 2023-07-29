import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-dart';

declare let Prism: { highlightAll: () => void };

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
