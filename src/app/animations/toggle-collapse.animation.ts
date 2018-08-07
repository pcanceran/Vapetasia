import { trigger, state, animate, style, transition } from '@angular/animations';

export function toggleCollapsedAnimations() {
  return trigger('toggleCollapse', [
    state('open', style({
      height: '*'
    })),
    state('closed', style({
      height: '0px'
    })),
    transition('open => closed', animate('500ms ease-in-out')),
    transition('closed => open', animate('500ms ease-in-out'))
  ]);
}