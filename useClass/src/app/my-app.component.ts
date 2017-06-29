import { Component } from '@angular/core';

import { User } from "./user.model";

@Component({
  selector: 'my-app',
  templateUrl: `my-app.component.html`,
  providers: [User]
})
export class MyApp{
  private userObject: Object = {
    id: 5,
    name: "Desktop"
  };

  constructor(private user: User) {
    this.user = this.user.convertToUser(this.userObject);
    console.log(this.user);
  }

}