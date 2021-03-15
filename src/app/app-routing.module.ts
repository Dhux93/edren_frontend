import { viewClassName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEdrenComponent } from './components/app-edren/app-edren.component';
import { ArchiveroNewFormComponent } from './components/archivero-new-form/archivero-new-form.component';
import { ArchiverosComponent } from './components/archiveros/archiveros.component';
import { AutorNewFormComponent } from './components/autor-new-form/autor-new-form.component';
import { AutoresComponent } from './components/autores/autores.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { EditPdfComponent } from './components/edit-pdf/edit-pdf.component';
import { EditarArchiveroComponent } from './components/editar-archivero/editar-archivero.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { EditarUserComponent } from './components/editar-user/editar-user.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';
import { NewImageComponent } from './components/new-image/new-image.component';
import { NewPdfComponent } from './components/new-pdf/new-pdf.component';
import { PdfsComponent } from './components/pdfs/pdfs.component';
import { RegisterComponent } from './components/register/register.component';
import { UserNewFormComponent } from './components/user-new-form/user-new-form.component';
import { UsersComponent } from './components/users/users.component';
import { ViewComicsFreeComponent } from './components/view-comics-free/view-comics-free.component';
import { ViewComicsPremiumComponent } from './components/view-comics-premium/view-comics-premium.component';
import { ViewLibrosFreeComponent } from './components/view-libros-free/view-libros-free.component';
import { ViewLibrosPremiumComponent } from './components/view-libros-premium/view-libros-premium.component';
import { ViewMusicaFreeComponent } from './components/view-musica-free/view-musica-free.component';
import { ViewMusicaPremiumComponent } from './components/view-musica-premium/view-musica-premium.component';
import { ViewPeliculasFreeComponent } from './components/view-peliculas-free/view-peliculas-free.component';
import { ViewPeliculasPremiumComponent } from './components/view-peliculas-premium/view-peliculas-premium.component';
import { ViewRevistasFreeComponent } from './components/view-revistas-free/view-revistas-free.component';
import { ViewRevistasPremiumComponent } from './components/view-revistas-premium/view-revistas-premium.component';
import { ViewVideosFreeComponent } from './components/view-videos-free/view-videos-free.component';
import { ViewVideosPremiumComponent } from './components/view-videos-premium/view-videos-premium.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app-edren/:id',
    component: AppEdrenComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'userNew',
    component: UserNewFormComponent
  },
  {
    path: 'userEdit/:id',
    component: EditarUserComponent
  },
  {
    path: 'autores',
    component: AutoresComponent
  },
  {
    path: 'autorNew',
    component: AutorNewFormComponent
  },
  {
    path: 'autorEdit/:id',
    component: EditarAutorComponent
  },
  {
    path: 'archiveros',
    component: ArchiverosComponent
  },
  {
    path: 'archiveroNew',
    component: ArchiveroNewFormComponent
  },
  {
    path: 'archiveroEdit/:id',
    component: EditarArchiveroComponent
  },
  {
    path: 'pdf',
    component: PdfsComponent
  },
  {
    path: 'newPdf',
    component: NewPdfComponent
  },
  {
    path: 'editPdf/:id',
    component: EditPdfComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'newImage',
    component: NewImageComponent
  },
  {
    path: 'editImage/:id',
    component: EditImageComponent
  },
  {
    path: 'viewLibrosFree',
    component: ViewLibrosFreeComponent
  },
  {
    path: 'viewLibrosPremium',
    component: ViewLibrosPremiumComponent
  },
  {
    path: 'viewRevistasFree',
    component: ViewRevistasFreeComponent
  },
  {
    path: 'viewRevistasPremium',
    component: ViewRevistasPremiumComponent
  },
  {
    path: 'viewComicsFree',
    component: ViewComicsFreeComponent
  },
  {
    path: 'viewComicsPremium',
    component: ViewComicsPremiumComponent
  },
  {
    path: 'viewMusicaFree',
    component: ViewMusicaFreeComponent
  },
  {
    path: 'viewMusicaPremium',
    component: ViewMusicaPremiumComponent
  },
  {
    path: 'viewPeliculasFree',
    component: ViewPeliculasFreeComponent
  },
  {
    path: 'viewPeliculasPremium',
    component: ViewPeliculasPremiumComponent
  },
  {
    path: 'viewVideosFree',
    component: ViewVideosFreeComponent
  },
  {
    path: 'viewVideosPremium',
    component: ViewVideosPremiumComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
