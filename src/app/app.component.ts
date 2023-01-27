import { Component } from '@angular/core';
import {JSONPlaceholderService} from './services/jsonplaceholder.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   url = 'https://jsonplaceholder.typicode.com/posts';
items=[];
  constructor(private http : HttpClient){
     this.http.get(this.url).toPromise().then(data =>{
console.log(data)
for(let key in data)
if(data.hasOwnProperty(key))
this.items.push(data[key]);
     });
   
}
}
