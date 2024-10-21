import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'life-movie',
    templateUrl: './life-movie.component.html'
})

export class LifeMovieComponent {
    movies = ["어벤져스1", "어벤져스2 에이지 오브 울트론",
        "어벤져스3 인피니티 워",
        "어벤져스4 엔드 게임"
    ]
}