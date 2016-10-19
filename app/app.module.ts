import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AccordionComponent} from "./components/accordion/accordion.component";

// import {enableProdMode} from '@angular/core';
// enableProdMode();

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [AppComponent, AccordionComponent],
    bootstrap: [AppComponent],
})

export class AppModule {}