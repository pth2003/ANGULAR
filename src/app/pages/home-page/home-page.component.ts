import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from 'src/app/features/header/header.component';
import { SidebarComponent } from '../../features/sidebar/sidebar.component';
import { TableviewComponent } from '../../features/tableview/tableview.component';
import { NavbarComponent } from '../../features/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  // Signal để quản lý trạng thái của Sidebar
  protected readonly sidebarOpen = signal(false);

  // Hàm toggle Sidebar
  toggleSidebar() {
    this.sidebarOpen.set(!this.sidebarOpen()); // Đảo trạng thái
  }
}
