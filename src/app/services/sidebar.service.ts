import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SIDEBAR_DATA } from '../data/sidebar-data';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sideBarContent = new BehaviorSubject<any[]>(SIDEBAR_DATA['Trả góp']);
  currentSidebarContent = this.sideBarContent.asObservable();
  updateSidebarContent(menu: string) {
    const newData = SIDEBAR_DATA[menu] || [];
    this.sideBarContent.next(newData);
  }

  constructor() {}
}
