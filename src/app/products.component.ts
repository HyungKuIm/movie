import { Component } from "@angular/core";
import { ProductService } from "./product.service";
@Component({
    standalone:true,
    selector: 'products',
    template: `<h2>Products</h2>
                <ul>
                    @for (product of products; 
                        track product) {
                        <li>
                            {{product}}
                        </li>
                    }
                </ul>`
})
export class ProductsComponent {
    products;

    constructor(productService: ProductService) {
        this.products = productService.getProducts();
    }
}