import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './user/store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/store/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // StoreModule.forRoot({ reducer }),
    StoreModule.forRoot({ users: reducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
