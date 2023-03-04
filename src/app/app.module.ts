import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalListComponent } from './components/festival/festival-list/festival-list.component';
import { MessageServiceComponent } from './components/festival/message-service/message-service.component';
import { FestivalDetailsComponent } from './components/festival/festival-details/festival-details.component';
import { MessageComponent } from './components/shared/message/message.component';
import { RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root/root.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ConsultFestivalDetailsComponent } from './components/festival/consult-festival-details/consult-festival-details.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { EditeurListComponent } from './components/editeurs/editeur-list/editeur-list.component';
import { FestivalPageComponent } from './pages/festival/festival-page/festival-page.component';
import { EditeurFormComponent } from './components/editeurs/editeur-form/editeur-form.component';
import { JeuxListComponent } from './components/jeux/jeux-list/jeux-list.component';
import { EditeurDetailsComponent } from './components/editeurs/editeur-details/editeur-details.component';
import { EditeurPageComponent } from './pages/editeur/editeur-page/editeur-page.component';
import { JeuxFormComponent } from './components/jeux/jeux-form/jeux-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FestivalListComponent,
    MessageServiceComponent,
    ConsultFestivalDetailsComponent,
    FestivalDetailsComponent,
    MessageComponent,
    RootComponent,
    ConsultFestivalDetailsComponent,
    FestivalPageComponent,
    HeaderComponent,
    EditeurListComponent,
    FestivalPageComponent,
    EditeurFormComponent,
    JeuxListComponent,
    EditeurDetailsComponent,
    EditeurPageComponent,
    JeuxFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: 'festivals', component: AppComponent },
      {
        path: 'festival/:festivalId',
        component: FestivalPageComponent,
      },
      { path: 'editeur/:editeurId', component: EditeurPageComponent },
      // { path: 'App', component: AppComponent },
      { path: '', redirectTo: '/festivals', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent },
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
