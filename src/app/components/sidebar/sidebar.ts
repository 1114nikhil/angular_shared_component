import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, FontAwesomeModule, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isOpen = signal(true);
  isDashboardOpen = signal(false);

  toggleSidebar(){
    this.isOpen.update((value) => !value);
  }
  toggleDashboard(){
    this.isDashboardOpen.update((value) => !value);
  }
  constructor() {
    // Auto close submenu when sidebar collapses
    effect(() => {
      if (!this.isOpen()) {
        this.isDashboardOpen.set(false);
      }
    });
  }
}
