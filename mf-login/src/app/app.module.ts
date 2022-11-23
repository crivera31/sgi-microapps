import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UserRepository } from './core/repositories/user.repository';
import { DataModule } from './data/data.module';
import { UserWebRepositoryService } from './data/user-web-repository/user-web-repository.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    CoreModule,
    DataModule
  ],
  providers: [
    { provide: UserRepository, useClass: UserWebRepositoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
