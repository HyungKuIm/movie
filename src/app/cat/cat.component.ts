import { Component } from "@angular/core";
import { CatService } from "./cat.service";

@Component({
    standalone: true,
    selector: 'cat',
    templateUrl: './cat.component.html'
})
export class CatComponent {
    constructor(private _catService: CatService) {

    }

    cats: any = [];

    ngOnInit() {
        this._catService.getCatData()
            .subscribe(data => {
                console.log(data);
                this.cats = data;
            });
    }
}