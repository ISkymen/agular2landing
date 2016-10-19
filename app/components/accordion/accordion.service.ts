import {Injectable} from "@angular/core";
import {Accordion} from "./accordion.model";
import {ACCORDION_DATA} from "./accordion.data";

@Injectable()
export class AccordionService {
    getTabs(): Promise<Accordion[]> {
        return Promise.resolve(ACCORDION_DATA);
    }
}