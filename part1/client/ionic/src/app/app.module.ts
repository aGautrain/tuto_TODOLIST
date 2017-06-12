import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ZetaPushClientConfig, ZetaPushModule } from 'zetapush-angular';
import { NotesApiProvider } from '../api/notes-api.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ZetaPushModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotesApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: ZetaPushClientConfig, useValue: {sandboxId: 'Lg9ZWAt9'} }
  ]
})
export class AppModule {}