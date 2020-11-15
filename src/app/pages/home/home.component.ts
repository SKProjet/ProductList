import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(public apiService: ApiService) { }


  ngOnInit(): void  {

    this.apiService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });
  }

}
