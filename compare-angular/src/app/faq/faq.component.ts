import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Array<any>;

  constructor(private http: HttpClient) { 
    this.http.get<any>('http://jsonplaceholder.typicode.com/posts').subscribe( res => this.faqs = res)      
  }

  ngOnInit() {
  }

}
