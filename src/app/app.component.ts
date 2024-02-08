
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = 'Biblioteca';
  sidebarMode: 'true' | 'false' = 'true';

  onToggleSidebar() {
    this.sidebarMode = this.sidebarMode === 'true' ? 'false' : 'true';
  }
}