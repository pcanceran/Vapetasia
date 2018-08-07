import { trigger, state, animate, style, transition } from '@angular/animations';

export function slideOutRight() {
  return trigger('outRight', [
    state('*', style({
        transform: 'translateX(0)',
        opacity: 1
    })),
    state('void', style({
        transform: 'translateX(25%)',
        opacity: 0
    })),
    transition('* => void', animate('250ms ease-in-out')),
  ]);
}