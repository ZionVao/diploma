import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { MenuItemComponent } from './homepage/menu/menu-item/menu-item.component';
import { BasePageComponent } from './homepage/pages/page/page.component';
import { SocialWrapperComponent } from './common/social-wrapper/social-wrapper.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    BasePageComponent,
    SocialWrapperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
