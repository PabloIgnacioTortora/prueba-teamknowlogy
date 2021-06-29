import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharjsComponent } from "./components/charjs/charjs.component";
import { AdnCheckComponent } from "./components/adn-check/adn-check.component";

const routes: Routes = [
  { path: '', component: CharjsComponent },
  { path: 'mutation', component: AdnCheckComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);