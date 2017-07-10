import { Component } from '@angular/core';

import { User } from "./user.model";

@Component({
  selector: 'my-app',
  templateUrl: `my-app.component.html`,
  providers: [
    {
      provide: User,
      useFactory: () => {
        let user = new User();
        user.name = "ABC";
        user.id = 5;
        return user;
      }
    }
  ]
})
export class MyApp {
  constructor(private user: User) {
    console.log(this.user);
  }

}