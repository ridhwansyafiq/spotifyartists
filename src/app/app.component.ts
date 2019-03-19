import { Component } from "@angular/core";
import { SpotifyService } from "./spotify.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "spotify";
  listOfMusic = null;
  constructor(private spotifyService: SpotifyService) {}
}
