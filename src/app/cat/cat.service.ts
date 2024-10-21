import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
}

@Injectable()
export class CatService {
    constructor(private _http: HttpClient) {

    }

    getCatData(): Observable<Cat> {
        return this._http.get<Cat>(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        )
    }
}