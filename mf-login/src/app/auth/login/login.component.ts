import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/domain/user.model';
import { GetAllUsersUsecase } from 'src/app/core/usescases/get-all-users.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [GetAllUsersUsecase]
})
export class LoginComponent implements OnInit {

  lstUsers: UserModel[] = [];

  constructor(private getAllUsersUsecase: GetAllUsersUsecase) { }

  ngOnInit(): void {
    this.getAllUsersUsecase.execute(null).subscribe(
      res => {
        this.lstUsers = res;
        console.log(res)
      }
    )
    // this.getAllUsersUsecase.execute(null).subscribe((value: UserModel) => {
    //   this.lstUsers.push(value);
    // });

    // this.getUserById.execute(1).subscribe( res => {
    //   console.log(res)
    // })
  }

}
