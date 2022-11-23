import { NgModule } from "@angular/core";
import { defineCustomElements } from "@web-components/loader";
import { MyComponent } from "./stencil-generated/proxies";

defineCustomElements(window);
@NgModule({
    declarations: [MyComponent],
    imports: [],
    exports: [MyComponent]
})
export class WebComponentsModule {   
}