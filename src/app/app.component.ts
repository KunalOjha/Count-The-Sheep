import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Howl, Howler } from 'howler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count: number = 0;
  sheep = new Howl({
    src: ['../assets/audio/sheep.wav']
  });

  ngOnInit() {
    this.initApp();
  }

  initApp() {
    this.startBackgroundAudio();
    this.startSheepCounter();
  }

  private startSheepCounter() {
    timer(2500, 5000)
      .subscribe(() => {
        this.count++;
        this.sheep.play();
      });
  }

  private startBackgroundAudio() {
    const sound = new Howl({
      src: ['../assets/audio/night-time.mp3'],
      autoplay: true,
      loop: true
    });

    sound.play();
  }
}
