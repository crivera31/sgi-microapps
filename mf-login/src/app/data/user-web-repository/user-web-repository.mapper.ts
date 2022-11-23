import { Mapper } from "src/app/core/base/mapper";
import { UserModel } from "src/app/core/domain/user.model";
import { UserWebEntity } from "./user-web.entity";

export class UserWebRepositoryMapper extends Mapper<UserWebEntity, UserModel> {

    // transform(param: UserMockEntity[]): Observable<UserModel[]> {
    //   param.map( item => {
    //     return {
    //       name: item.name,
    //       username: item.username
    //     }
    //   })
    // }
  
    createFromObjects(objs: any): UserModel[] {
      if (objs instanceof Array) {
        return objs.map(item => this.createFromObject(item));
      }
      return [];
    }
  
    createFromObject(obj: any): UserModel {
      if (obj) {
        const newObj = new UserModel;
        newObj.name = obj.name;
        newObj.username = obj.username;
        newObj.phone = obj.phone;
        // newObj.idDrink = ValidateHelper.toNumber(obj.idDrink);
        // newObj.strDrink = ValidateHelper.toString(obj.strDrink);
        // newObj.strDrinkAlternate = ValidateHelper.toString(obj.strDrinkAlternate);
        // newObj.strTags = ValidateHelper.toString(obj.strTags);
        // newObj.strDrink = ValidateHelper.toString(obj.strDrink);
        return newObj;
      }
      
      return null;
    }
  
    mapFrom(param: UserWebEntity): UserModel {
      // throw new Error('Method not implemented.');
      return {
        name:     param.name,
        username: param.username,
        email:    param.email,
        phone:    param.phone,
        website:  param.website
      };
    }
    mapTo(param: UserModel): UserWebEntity {
      // throw new Error('Method not implemented.');
      return {
        id:       0,
        name:     param.name,
        username: param.username,
        email:    param.email,
        phone:    param.phone,
        website:  param.website
      };
    }
  
  }