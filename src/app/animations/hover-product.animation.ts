import { trigger, state, animate, style, transition } from '@angular/animations';

export function toggleProductHover() {
  return trigger('toggleHover', [
    state('*', style({
        transform: 'scale(.85)',
        filter: 'drop-shadow(2px 2px 2px black)'
    })),
    state('1', style({
        transform: 'scale(1)',
        filter: 'drop-shadow(2px 2px 6px black)'
    })),
    transition('* => 1', animate('300ms ease-in-out')),
    transition('1 => *', animate('300ms ease-in-out'))
  ]);
}