import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AlbumsModule } from './albums/albums.module';
import { AddAlbumComponent } from './albums/add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStrPipe,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    AddAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
