import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { UserRepository } from '../core/repositories/user.repository';
import { UserWebRepositoryService } from '../data/user-web-repository/user-web-repository.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    CoreModule,
    DataModule
  ],
  providers: [
    { provide: UserRepository, useClass: UserWebRepositoryService}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
