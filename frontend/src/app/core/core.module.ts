import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
  ],
  declarations: []
})
export class CoreModule { }
