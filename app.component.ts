import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'y';
  number = 1;
  itemImageUrl =
    "https://akcdn.detik.net.id/visual/2020/07/02/toyota-alphard_169.png?w=650'";
  serverName = '';
  onUpdateServerName(event: any): any {
    console.log(event); // dilihat dulu hasil returnnya
    this.serverName = (<HTMLInputElement>event.target).value;
    // HTMLInputElement ini interface dari event.target
    // atau bisa juga dengan penulisan (event.target as HTMLInputElement)
  }
  change(): any {
    this.number++;
  }
}
