import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers, Response} from '@angular/http';
import {map} from 'rxjs/operators';

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
    return this.http.get('https://http-start-f75e2.firebaseio.com/data.json').pipe(map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    ));
  }
}
