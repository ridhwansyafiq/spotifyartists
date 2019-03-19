import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCjH8Xpdo7AMFhvoLsyA-ScVyeqqYEjWyw5EbeN5b_kDT0jmQhqegmzkbP9PvL9aiHR0HdZR2K5w_mWWy01pHBeEQMJZfXyEGgJwCGgtjaiWjl8d3YEiq2n6hbZgyENYLYkq5Ls_UAPjbQHQwjZW3RbJqGx2LxA-QrJ2VuErksQ92VSsxxpM6PpbaJMDfPP2nE-tfjdzKTwoU2DD66ZiknvihQAkTskb08-cfWELNaOdldyFC79bER9xMA7x5_thi-mQJdG8bgXxM7r3u0llFvINHzY153atCY"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
