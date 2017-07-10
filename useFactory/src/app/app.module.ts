import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from "../../node_modules/ng2-ckeditor";

import { MyApp } from "./my-app.component";

@NgModule({
    imports: [BrowserModule, FormsModule, CKEditorModule ],
    exports: [],
    declarations: [MyApp],
    providers: [],
    bootstrap: [MyApp]
})
export class AppModule {

}
