import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule} from 'ngx-loading';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent, HomeComponent} from './home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslateModule,
        HomeRoutingModule,
        LoadingModule,
        // LoginModule,
    ],
    declarations: [
        AboutComponent, 
        HomeComponent,
    ]
})
export class HomeModule {
}
