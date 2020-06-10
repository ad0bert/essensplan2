import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, MatDividerModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCheckboxModule } from '@angular/material'

import { FlexLayoutModule } from '@angular/flex-layout'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch, faUser, faAngleRight, faAngleLeft, faCalendarWeek, faInfo, faAt } from '@fortawesome/free-solid-svg-icons';
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
import { AccountComponent } from './component/application/user/account/account.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Sidenav } from './component/application/sidenav/sidenav';
import { ContactComponent } from './component/application/contact/contact.component';
import { AboutComponent } from './component/application/about/about.component';
import { RecipeComponent } from './component/application/recipe/recipe.component';

library.add(fas, faSearch, faUser, faAngleLeft, faAngleRight, faCalendarWeek, faInfo, faAt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    AboutComponent,
    ContactComponent,
    RecipeComponent,
    DateCardComponent,
    DateCardWrapperComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    Sidenav,
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
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    UserComponent
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
