/**
 * Public Home Component.
 * 
 */
import {Component, OnInit} from "@angular/core";
import { routerTransition } from '../router.animations';

import {LoggerService} from '../service/logger.service';

@Component({
    selector: 'home-angular2-app',
    templateUrl: './home.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {

    constructor(private logger: LoggerService) {
        this.logger.info("HomeComponent constructor");
    }

    ngOnInit() {
    }
}

@Component({
    selector: 'home-angular2-app',
    template: '<p>Hello Lemon!</p>'
})
export class AboutComponent {

}
