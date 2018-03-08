import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {LoggerService} from './service/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private translate: TranslateService, private logger: LoggerService) {
        translate.addLangs(['en', 'ko']);
        translate.setDefaultLang('ko');
        const browserLang = translate.getBrowserLang();
        
        //! Set default Language.
        // translate.use(browserLang.match(/en|fr|ur|es|it|fa/) ? browserLang : 'en');
        // translate.use(browserLang.match(/en|fr|ur|es|it|fa/) ? browserLang : 'ko');

        //! logger test
        logger.invokeConsoleMethod('info', 'AppComponent()...', 'hi');
        logger.info('INFO! AppComponent()...');
    }
    
    ngOnInit() {
        this.logger.info("AppComponent: Checking if the user is already authenticated");
    }
}
