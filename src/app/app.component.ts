import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { CatService } from './cat/cat.service';

import { LifeMovieComponent } from './life-movie/life-movie.component';
import { CatComponent } from './cat/cat.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, 
    LifeMovieComponent, CatComponent],
  template: `<h1>{{title}}</h1>
            <cat/>`,
  providers: [ProductService, CatService],      
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '나의 첫번째 앵귤러 앱!';

  // constructor(private _catService: CatService) {
  //   this._catService.getCatData()
  //     .subscribe(data => console.log(data));
  // }
}
