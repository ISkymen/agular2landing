import {Component} from '@angular/core';
import {AccordionComponent} from "./components/accordion/accordion.component";
import {AccordionService} from "./components/accordion/accordion.service";

@Component ({
    selector: 'landing',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
  //  directives: [AccordionComponent],
    providers: [AccordionService]
})

export class AppComponent {}
