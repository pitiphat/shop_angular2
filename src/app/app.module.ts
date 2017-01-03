import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ตรงนี้
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageListComponent } from './pages/page-list/page-list.component';




import { PageService } from './pages/shared/page.service';





@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    HeaderComponent, 
    PageListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // จ๊ะเอ๋
   routing
  ],
  providers: [PageService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}




