import { Component } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
expanded$ = this.layout.expanded$;
constructor(private layout: LayoutService) {}

closeSidebar() {
  this.layout.close();
}
}
