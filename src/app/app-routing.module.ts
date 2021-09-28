import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/auth/forgot/forgot.component';
import { LoginComponent } from './auth/auth/login/login.component';
import { LogoutComponent } from './auth/auth/logout/logout.component';
import { NewUserComponent } from './auth/auth/new-user/new-user.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: NewUserComponent},
  {path: 'forgot-password', component: ForgotComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'dashboard', component: DashboardComponent},

  { path: 'customers', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'payments', loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'invoices', loadChildren: () => import('./modules/invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'loans', loadChildren: () => import('./modules/loans/loans.module').then(m => m.LoansModule) },
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'loan-types', loadChildren: () => import('./modules/loan-types/loan-types.module').then(m => m.LoanTypesModule) },

  { path: 'activity', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
