import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    /*return this.http.post('https://http-start-f75e2.firebaseio.com/data.json',
      servers, {headers: headers});*/
    return this.http.put('https://http-start-f75e2.firebaseio.com/data.json',
      servers, {headers: headers});

  }

  getServers() {
    return this.http.get('https://http-start-f75e2.firebaseio.com/data.json');
  }
}
