import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count: number = 0;

  ngOnInit() {
    timer(2500, 5000)
      .subscribe(() => this.count++);
  }
}
