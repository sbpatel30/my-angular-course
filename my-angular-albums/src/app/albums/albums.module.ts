import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlbumCardComponent } from "./album-card/album-card.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [AlbumListComponent, AlbumCardComponent],
  imports: [CommonModule, AlbumsRoutingModule]
})
export class AlbumsModule {}
