import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatar, TuiTabs } from '@taiga-ui/kit';

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
}
