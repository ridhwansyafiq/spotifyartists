import { Component, EventEmitter, Output } from "@angular/core";
import { SpotifyService } from "../spotify.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr: string;
  listOfMusic = null;
  searchKeyupStream$ = new Subject();
  @Output() emitSearchKey = new EventEmitter();
  constructor(private spotifyService: SpotifyService) {}

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(
      (response: any) => {
        console.log(response);
        this.listOfMusic = response.artists.items;
        console.log(this.listOfMusic, "Result Display");
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    );
  }
}
