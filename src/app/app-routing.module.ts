import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from "./Profile/my-profile/my-profile.component";
import { AuthGuard } from "./auth.guard";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";

const appRoutes: Routes = [
{ path:'',redirectTo:'/',pathMatch:'full'},
{path:'Profile',component:MyProfileComponent,canActivate:[AuthGuard]},
{path:'Cart',component:ShoppingCartComponent},
{path:'check-out',component:CheckOutComponent}
];
@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] 
  
})
export class AppRoutingModule {
}