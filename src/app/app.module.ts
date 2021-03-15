import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminInterceptor } from './interceptors/admin-interceptor';
import { HTTP_INTERCEPTORS,HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { UserNewFormComponent } from './components/user-new-form/user-new-form.component';
import { EditarUserComponent } from './components/editar-user/editar-user.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutorNewFormComponent } from './components/autor-new-form/autor-new-form.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { ArchiverosComponent } from './components/archiveros/archiveros.component';
import { EditarArchiveroComponent } from './components/editar-archivero/editar-archivero.component';
import { ArchiveroNewFormComponent } from './components/archivero-new-form/archivero-new-form.component';
import { PdfsComponent } from './components/pdfs/pdfs.component';
import { NewPdfComponent } from './components/new-pdf/new-pdf.component';
import { EditPdfComponent } from './components/edit-pdf/edit-pdf.component';
import { ImagesComponent } from './components/images/images.component';
import { NewImageComponent } from './components/new-image/new-image.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ViewLibrosFreeComponent } from './components/view-libros-free/view-libros-free.component';
import { ViewLibrosPremiumComponent } from './components/view-libros-premium/view-libros-premium.component';
import { ViewRevistasPremiumComponent } from './components/view-revistas-premium/view-revistas-premium.component';
import { ViewRevistasFreeComponent } from './components/view-revistas-free/view-revistas-free.component';
import { ViewComicsFreeComponent } from './components/view-comics-free/view-comics-free.component';
import { ViewComicsPremiumComponent } from './components/view-comics-premium/view-comics-premium.component';
import { ViewMusicaFreeComponent } from './components/view-musica-free/view-musica-free.component';
import { ViewMusicaPremiumComponent } from './components/view-musica-premium/view-musica-premium.component';
import { ViewPeliculasFreeComponent } from './components/view-peliculas-free/view-peliculas-free.component';
import { ViewPeliculasPremiumComponent } from './components/view-peliculas-premium/view-peliculas-premium.component';
import { ViewVideosFreeComponent } from './components/view-videos-free/view-videos-free.component';
import { ViewVideosPremiumComponent } from './components/view-videos-premium/view-videos-premium.component';
import { AppEdrenComponent } from './components/app-edren/app-edren.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    UserNewFormComponent,
    EditarUserComponent,
    AutoresComponent,
    AutorNewFormComponent,
    EditarAutorComponent,
    ArchiverosComponent,
    EditarArchiveroComponent,
    ArchiveroNewFormComponent,
    PdfsComponent,
    NewPdfComponent,
    EditPdfComponent,
    ImagesComponent,
    NewImageComponent,
    EditImageComponent,
    ViewLibrosFreeComponent,
    ViewLibrosPremiumComponent,
    ViewRevistasPremiumComponent,
    ViewRevistasFreeComponent,
    ViewComicsFreeComponent,
    ViewComicsPremiumComponent,
    ViewMusicaFreeComponent,
    ViewMusicaPremiumComponent,
    ViewPeliculasFreeComponent,
    ViewPeliculasPremiumComponent,
    ViewVideosFreeComponent,
    ViewVideosPremiumComponent,
    AppEdrenComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
