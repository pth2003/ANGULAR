import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatar, TuiTabs } from '@taiga-ui/kit';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TuiTabs, TuiAvatar],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  data = [
    'Trả góp',
    'Phát Hành Thẻ',
    'Tra Soát Khiếu Nại',
    'Đối Soát',
    'Sao Kê',
    'Thu Nợ TTD',
    'ATM',
    'Tham Số POS',
    'Phân Bổ Phí',
    'Quản Trị',
  ];
  // Object ánh xạ menu tiếng Việt sang path tiếng Anh
  menuRoutes: { [key: string]: string } = {
    'Trả góp': 'installment',
    'Phát Hành Thẻ': 'card-issuance',
    'Tra Soát Khiếu Nại': 'dispute-complaints',
    'Đối Soát': 'reconciliation',
    'Sao Kê': 'statement',
    'Thu Nợ TTD': 'debt-collection',
    ATM: 'atm',
    'Tham Số POS': 'pos-parameters',
    'Phân Bổ Phí': 'fee-allocation',
    'Quản Trị': 'administration',
  };
  constructor(private sidebarService: SidebarService, private router: Router) {}

  changeSidebar(menu: string) {
    this.sidebarService.updateSidebarContent(menu);
  }
  onMenuClick(menu: string) {
    this.sidebarService.updateSidebarContent(menu);
    const routePath = this.menuRoutes[menu]; // Lấy đường dẫn tiếng Anh
    if (routePath) {
      this.router.navigate([routePath]); // Điều hướng đến path tương ứng
    } else {
      console.error('Menu không có route tương ứng:', menu);
    }
  }
}
