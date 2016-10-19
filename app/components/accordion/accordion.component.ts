import {Component, OnInit} from "@angular/core";
import {Accordion} from "./accordion.model";
import {AccordionService} from "./accordion.service";

@Component ({
    selector: 'accordion',
    templateUrl: './app/components/accordion/accordion.component.html',
    styleUrls: ['./app/components/accordion/accordion.component.css']
})

export class AccordionComponent implements OnInit {
    tabs: Accordion[];

    constructor(private accordionService: AccordionService) {}

    getTabs(): void {
        this.accordionService.getTabs().then(tabs => this.tabs = tabs);
    }

    ngOnInit(): void {
        this.getTabs();
    }


}
