import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { Cmpt15RHComponent } from './components/cmpt15-rh/cmpt15-rh.component';
// import { Cmpt16AUTORIDADESComponent } from './components/cmpt16-autoridades/cmpt16-autoridades.component';
// import { Cmpt17ADMINISTRATIVOSComponent } from './components/cmpt17-administrativos/cmpt17-administrativos.component';
// import { Cmpt18CONSEJOESTUDIANTILComponent } from './components/cmpt18-consejoestudiantil/cmpt18-consejoestudiantil.component';
// import { Cmpt19EDUCACIONComponent } from './components/cmpt19-educacion/cmpt19-educacion.component';
// import { Cmpt21APGComponent } from './components/cmpt21-ap-g/cmpt21-ap-g.component';
// import { Cmpt20APPComponent } from './components/cmpt20-ap-p/cmpt20-ap-p.component';
// import { Cmpt23TESISComponent } from './components/cmpt23-tesis/cmpt23-tesis.component';
// import { Cmpt24BIBLIOTECAComponent } from './components/cmpt24-biblioteca/cmpt24-biblioteca.component';
// import { Cmpt26PREComponent } from './components/cmpt26-pre/cmpt26-pre.component';
// import { Cmpt28EGRESADOSComponent } from './components/cmpt28-egresados/cmpt28-egresados.component';
// import { Cmpt29EVENTOSComponent } from './components/cmpt29-eventos/cmpt29-eventos.component';
// import { CmptPromocionComponent } from './components/cmpt-promocion/cmpt-promocion.component';
import { LandwwwComponent } from './components/landwww/landwww.component';
import { Cmpt14MVComponent } from './components/cmpt14-mv/cmpt14-mv.component';
import { Cmpt22APEComponent } from './components/cmpt22-ap-e/cmpt22-ap-e.component';
import { Cmpt30DOCUMENTOSComponent } from './components/cmpt30-documentos/cmpt30-documentos.component';
import { PhotosListComponent } from './components/cmpt1-land/photos-list.component'
import { LoginComponent } from './components/cmpt5-login/login.component';
import { PhotoPreviewComponent } from './components/cmpt7-curse-preview/curse-preview.component'
import { UserPreviewComponent } from './components/cmpt4-user-preview/user-preview.component';
import { UserComponent } from './components/cmpt3-user-register/user.component';
import { LandComponent } from "./components/cmpt2-users/land.component";
import { AsignatureComponent } from "./components/cmpt6-curse/asignature.component";
import { TasksComponent } from "./components/cmpt11-tasks/tasks.component";
import { ThemePreviewComponent } from './components/cmpt10-theme-preview/theme-preview.component'
import { UnityPreviewComponent } from './components/cmpt9-unity-preview/unity-preview.component'
import { TaskPreviewComponent } from './components/cmpt12-task-preview/task-preview.component'
import { UsersCurseComponent } from './components/cmpt8-integer/integer.component'
import { FileComponent } from './components/cmpt13-file/file.component'
// import { CmptDocentesComponent } from './components/cmpt-docentes/cmpt-docentes.component';
// import { CmptStoreEsfaComponent } from './components/cmpt-store-esfa/cmpt-store-esfa.component';


const routes: Routes = [
  // { path: '', component: LandwwwComponent },
  // { path: 'Cmpt14MVComponent', loadComponent: () => import('./components/cmpt14-mv/cmpt14-mv.component').then(m => m.Cmpt14MVComponent) },
  // { path: 'Cmpt15RHComponent', loadComponent: () => import('./components/cmpt15-rh/cmpt15-rh.component').then(m => m.Cmpt15RHComponent) },
  // { path: 'Cmpt16AUTORIDADESComponent', loadComponent: () => import('./components/cmpt16-autoridades/cmpt16-autoridades.component').then(m => m.Cmpt16AUTORIDADESComponent) },
  // { path: 'Cmpt17ADMINISTRATIVOSComponent', loadComponent: () => import('./components/cmpt17-administrativos/cmpt17-administrativos.component').then(m => m.Cmpt17ADMINISTRATIVOSComponent) },
  // { path: 'Cmpt18CONSEJOESTUDIANTILComponent', loadComponent: () => import('./components/cmpt18-consejoestudiantil/cmpt18-consejoestudiantil.component').then(m => m.Cmpt18CONSEJOESTUDIANTILComponent) },
  // { path: 'Cmpt19EDUCACIONComponent', loadComponent: () => import('./components/cmpt19-educacion/cmpt19-educacion.component').then(m => m.Cmpt19EDUCACIONComponent) },
  // { path: 'Cmpt21APGComponent', loadComponent: () => import('./components/cmpt21-ap-g/cmpt21-ap-g.component').then(m => m.Cmpt21APGComponent) },
  // { path: 'Cmpt20APPComponent', loadComponent: () => import('./components/cmpt20-ap-p/cmpt20-ap-p.component').then(m => m.Cmpt20APPComponent) },
  // { path: 'Cmpt22APEComponent', loadComponent: () => import('./components/cmpt22-ap-e/cmpt22-ap-e.component').then(m => m.Cmpt22APEComponent) },
  // { path: 'Cmpt23TESISComponent', loadComponent: () => import('./components/cmpt23-tesis/cmpt23-tesis.component').then(m => m.Cmpt23TESISComponent) },
  // { path: 'Cmpt24BIBLIOTECAComponent', loadComponent: () => import('./components/cmpt24-biblioteca/cmpt24-biblioteca.component').then(m => m.Cmpt24BIBLIOTECAComponent) },
  // { path: 'Cmpt26PREComponent', loadComponent: () => import('./components/cmpt26-pre/cmpt26-pre.component').then(m => m.Cmpt26PREComponent) },
  // { path: 'Cmpt28EGRESADOSComponent', loadComponent: () => import('./components/cmpt28-egresados/cmpt28-egresados.component').then(m => m.Cmpt28EGRESADOSComponent) },
  // { path: 'Cmpt30DOCUMENTOSComponent', loadComponent: () => import('./components/cmpt30-documentos/cmpt30-documentos.component').then(m => m.Cmpt30DOCUMENTOSComponent) },
  // { path: 'Cmpt29EVENTOSComponent', loadComponent: () => import('./components/cmpt29-eventos/cmpt29-eventos.component').then(m => m.Cmpt29EVENTOSComponent) },
  // { path: 'CmptPromocionComponent', loadComponent: () => import('./components/cmpt-promocion/cmpt-promocion.component').then(m => m.CmptPromocionComponent) },
  // { path: 'dashboard', loadComponent:()=>import('./components/cmpt1-land/photos-list.component').then(m=>m.PhotosListComponent) },
  // { path: 'login', loadComponent:()=>import('./components/cmpt5-login/login.component').then(m=>m.LoginComponent) },
  // { path: 'cursoup/:id', loadComponent:()=>import('./components/cmpt7-curse-preview/curse-preview.component').then(m=>m.PhotoPreviewComponent) },
  // { path: 'user/:id', loadComponent:()=>import('./components/cmpt4-user-preview/user-preview.component').then(m=>m.UserPreviewComponent) },
  // { path: 'registro', loadComponent:()=>import('./components/cmpt3-user-register/user.component').then(m=>m.UserComponent) },
  // { path: 'user', loadComponent:()=>import("./components/cmpt2-users/land.component").then(m=>m.LandComponent) },
  // { path: 'curso/:idcurso', loadComponent:()=>import("./components/cmpt6-curse/asignature.component").then(m=>m.AsignatureComponent) },
  // { path: 'tema/:idtheme/:idunity', loadComponent:()=>import("./components/cmpt11-tasks/tasks.component").then(m=>m.TasksComponent) },
  // { path: 'theeme/:idtheme/:www', loadComponent:()=>import('./components/cmpt10-theme-preview/theme-preview.component').then(m=>m.ThemePreviewComponent) },
  // { path: 'unity/:idunity', loadComponent:()=>import('./components/cmpt9-unity-preview/unity-preview.component').then(m=>m.UnityPreviewComponent) },
  // { path: 'task/:idtask', loadComponent:()=>import('./components/cmpt12-task-preview/task-preview.component').then(m=>m.TaskPreviewComponent) },
  // { path: 'integers/:idcurso', loadComponent:()=>import('./components/cmpt8-integer/integer.component').then(m=>m.UsersCurseComponent) },
  // { path: 'file/:iduser', loadComponent:()=>import('./components/cmpt13-file/file.component').then(m=>m.FileComponent) },
  // { path: 'CmptDocentesComponent', loadComponent:()=>import('./components/cmpt-docentes/cmpt-docentes.component').then(m=>m.CmptDocentesComponent) },
  // { path: 'CmptStoreEsfaComponent', loadComponent:()=>import('./components/cmpt-store-esfa/cmpt-store-esfa.component').then(m=>m.CmptStoreEsfaComponent) },
  // // /* { path: '', redirectTo: '/photos', pathMatch: 'full' } */
  // { path: 'theme/:idtheme', component: ThemePreviewComponent },

  // { path: 'Cmpt15RHComponent', component: Cmpt15RHComponent },
  // { path: 'Cmpt16AUTORIDADESComponent', component: Cmpt16AUTORIDADESComponent },
  // { path: 'Cmpt17ADMINISTRATIVOSComponent', component: Cmpt17ADMINISTRATIVOSComponent },
  // { path: 'Cmpt18CONSEJOESTUDIANTILComponent', component: Cmpt18CONSEJOESTUDIANTILComponent },
  // { path: 'Cmpt19EDUCACIONComponent', component: Cmpt19EDUCACIONComponent },
  // { path: 'Cmpt21APGComponent', component: Cmpt21APGComponent },
  // { path: 'Cmpt20APPComponent', component: Cmpt20APPComponent },
  // { path: 'Cmpt23TESISComponent', component: Cmpt23TESISComponent },
  // { path: 'Cmpt24BIBLIOTECAComponent', component: Cmpt24BIBLIOTECAComponent },
  // { path: 'Cmpt26PREComponent', component: Cmpt26PREComponent },
  // { path: 'Cmpt28EGRESADOSComponent', component: Cmpt28EGRESADOSComponent },
  // { path: 'Cmpt29EVENTOSComponent', component: Cmpt29EVENTOSComponent },
  // { path: 'CmptPromocionComponent', component: CmptPromocionComponent },
  // https://stackoverflow.com/questions/73005064/error-assertion-error-ngmodule-object-module-is-not-a-subtype-of-ngmodule
  { path: '', component: LandwwwComponent },
  { path: 'Cmpt30DOCUMENTOSComponent', component: Cmpt30DOCUMENTOSComponent },
  { path: 'Cmpt14MVComponent', component: Cmpt14MVComponent },
  { path: 'Cmpt22APEComponent', component: Cmpt22APEComponent },
  { path: 'dashboard', component: PhotosListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserPreviewComponent },
  { path: 'registro', component: UserComponent },
  { path: 'curso/:idcurso', component: AsignatureComponent },
  { path: 'cursoup/:id', component: PhotoPreviewComponent },
  { path: 'tema/:idtheme/:idunity', component: TasksComponent },
  { path: 'theeme/:idtheme/:www', component: ThemePreviewComponent },
  { path: 'unity/:idunity', component: UnityPreviewComponent },
  { path: 'task/:idtask', component: TaskPreviewComponent },
  { path: 'integers/:idcurso', component: UsersCurseComponent },
  { path: 'file/:iduser', component: FileComponent },
  { path: 'user', component: LandComponent },
  // { path: 'user', loadChildren: () => import("./components/cmpt2-users/land.component").then(m => m.LandComponent) },
  // { path: 'user', loadChildren: () => import('./components/cmpt2-users/land.component').then(m => m.LandComponent) },
  // {
  //   path: 'user',
  //   loadComponent: async () =>
  //     (await import('./components/cmpt1-land/land/land.module')).LandModule
  // },


  // { path: 'CmptDocentesComponent', component: CmptDocentesComponent },
  // { path: 'CmptStoreEsfaComponent', component: CmptStoreEsfaComponent },
  // // /* { path: '', redirectTo: '/photos', pathMatch: 'full' } */
  // { path: 'theme/:idtheme', component: ThemePreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
