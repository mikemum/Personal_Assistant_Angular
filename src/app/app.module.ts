import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { VirtualAssistantComponent } from './components/virtual-assistant/virtual-assistant.component';
import { SpeechService } from './speech.service';
import { HttpClientModule } from '@angular/common/http';
import { RequestInterceptorInterceptor } from './request-interceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';

import { environment } from '../environments/environment';
const config: SocketIoConfig = { url: environment.chatServerUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MainNavComponent,
    MainNavComponent,
    HomeComponent,
    CarouselComponent,
    VirtualAssistantComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    SpeechService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
