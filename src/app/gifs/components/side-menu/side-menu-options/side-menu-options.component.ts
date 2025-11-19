import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from 'src/app/gifs/services/gifs.service';

interface MenuOptions {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styles: ``,
})
export class SideMenuOptionsComponent {
  gifService = inject(GifService);

  menuOptions : MenuOptions[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending'
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    }
  ]
}
