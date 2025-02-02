import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from 'src/app/features/header/header.component';
import { SidebarComponent } from '../../features/sidebar/sidebar.component';
import { TableviewComponent } from '../../features/tableview/tableview.component';
import { NavbarComponent } from '../../features/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    TableviewComponent,
    NavbarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  // Signal để quản lý trạng thái của Sidebar
  protected readonly sidebarOpen = signal(false);
  protected readonly data = signal([
    {
      title: 'Danh mục',
      children: [
        { title: 'Loại tiền' },
        { title: 'Mã sản phẩm' },
        { title: 'Tài khoản hạch toán' },
        { title: 'Mã hạch toán' },
        { title: 'Bút toán cơ bản' },
        { title: 'Bút toán chi tiết' },
      ],
    },
    {
      title: 'Đọc file quyết toán',
      children: [
        { title: 'Danh mục con 1' },
        { title: 'Danh mục con 2' },
        { title: 'Danh mục con 3' },
      ],
    },
    {
      title: 'Đối soát',
      children: [{ title: 'Đối chiếu dữ liệu giao dịch thẻ' }],
    },
    {
      title: 'Báo cáo',
      children: [
        { title: 'Danh mục con 1' },
        { title: 'Danh mục con 2' },
        { title: 'Danh mục con 3' },
      ],
    },
  ]);

  getData() {
    return this.data();
  }
  // Hàm toggle Sidebar
  toggleSidebar() {
    this.sidebarOpen.set(!this.sidebarOpen()); // Đảo trạng thái
  }
}
