import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
