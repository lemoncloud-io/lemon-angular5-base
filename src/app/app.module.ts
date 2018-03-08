import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { JsonpModule, Http, HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard} from './shared';

import {LoggerService} from './service/logger.service';
import {ConsoleLoggerService} from './service/console-logger.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // CommonModule,
        FormsModule,
        JsonpModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        AuthGuard,
        {provide: LoggerService, useClass: ConsoleLoggerService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
