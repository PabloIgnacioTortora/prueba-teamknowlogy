import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HttpClientModule,
  HttpClient,
} from "@angular/common/http";

import { routing, appRoutingProviders } from "./app.routing";
import { AppComponent } from "./app.component";
import { CharjsComponent } from "./components/charjs/charjs.component";
import { AdnCheckComponent } from "./components/adn-check/adn-check.component";
import { AdnVerifyService } from "./shared/services/adn-verify.service";
import { FormsModule } from "@angular/forms";

// Modulos Material
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, AdnCheckComponent, CharjsComponent],
  imports: [
    routing,
    FormsModule, 
    BrowserModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [appRoutingProviders, AdnVerifyService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
