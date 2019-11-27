import { ApiService } from './../../api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor(
    private apiService: ApiService
  ) { }

  getLatest() {
    return this.apiService.get('').pipe(map((data: any[]) => data[data.length - 1]));
  }
}
