import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDrawer } from '@taiga-ui/kit';
import { TuiAccordion } from '@taiga-ui/experimental';
import { TuiPopup } from '@taiga-ui/core';
import { SidebarService } from 'src/app/services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TuiDrawer, TuiAccordion, TuiPopup],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // @Input() data = [
  //   {
  //     title: 'Danh mục',
  //     children: [
  //       { title: 'Loại tiền' },
  //       { title: 'Mã sản phẩm' },
  //       { title: 'Tài khoản hạch toán' },
  //       { title: 'Mã hạch toán' },
  //       { title: 'Bút toán cơ bản' },
  //       { title: 'Bút toán chi tiết' },
  //     ],
  //   },
  //   {
  //     title: 'Đọc file quyết toán',
  //     children: [
  //       { title: 'Danh mục con 1' },
  //       { title: 'Danh mục con 2' },
  //       { title: 'Danh mục con 3' },
  //     ],
  //   },
  //   {
  //     title: 'Đối soát',
  //     children: [{ title: 'Đối chiếu dữ liệu giao dịch thẻ' }],
  //   },
  //   {
  //     title: 'Báo cáo',
  //     children: [
  //       { title: 'Danh mục con 1' },
  //       { title: 'Danh mục con 2' },
  //       { title: 'Danh mục con 3' },
  //     ],
  //   },
  // ];
  // @Input() data = [] as any;
  @Input() open = false;
  sidebarData: any[] = [];
  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.sidebarService.currentSidebarContent.subscribe((data) => {
      this.sidebarData = data;
    });
  }
}
