import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material'

import { FlexLayoutModule } from '@angular/flex-layout'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch, faUser, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchbarComponent } from './component/application/searchbar/searchbar.component';
import { DateCardComponent } from './component/application/date-card-wrapper/date-card/date-card.component';
import { MatCardModule } from '@angular/material/card';
import { DateCardWrapperComponent } from './component/application/date-card-wrapper/date-card-wrapper.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/application/user/login/login.component';
import { RegisterComponent } from './component/application/user/register/register.component';
import { UserComponent } from './component/application/user/user.component';
import { AccountComponent } from './component/application/account/account.component';

library.add(fas, faSearch, faUser, faAngleLeft, faAngleRight);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    DateCardComponent,
    DateCardWrapperComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatCardModule,
    AppRoutingModule
  ],
  entryComponents: [
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
