import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import {LoggerService} from '../../service/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private logger: LoggerService) { }

    canActivate() 
    {
        if (localStorage.getItem('isLoggedin')) {
            this.logger.info('INFO! isLoggedin is true!');
            return true;
        }
        
        // 첫화면에서 로그인체크후, 로그인이 안되어 있을 경우 이동할 기본 라우팅을 지정한다.
        this.router.navigate(['/home']);

        return false;
    }
}
