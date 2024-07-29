import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { QuillModule } from 'ngx-quill'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDocViewerModule } from "ngx-doc-viewer";
import { KatexModule } from 'ng-katex';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
 
// import { CKEditorModule } from 'ckeditor4-angular';
// import { CKEditorModule } from 'ckeditor4-angular';
//import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
//import { MarkdownModule } from 'ngx-markdown';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { SwiperModule } from 'swiper/angular';
import { NgxHeadroomModule } from 'ngx-headroom';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPrintModule } from 'ngx-print';

import { NavigationComponent } from './components/cmpt2-navigation/navigation.component';
import { PhotosListComponent } from './components/cmpt1-land/photos-list.component';
import { PhotoPreviewComponent } from './components/cmpt7-curse-preview/curse-preview.component';
import { UserComponent } from './components/cmpt3-user-register/user.component';
import { LoginComponent } from './components/cmpt5-login/login.component';
import { LandComponent } from "./components/cmpt2-users/land.component";
import { UserPreviewComponent } from './components/cmpt4-user-preview/user-preview.component';
import { AsignatureComponent } from './components/cmpt6-curse/asignature.component';
import { TasksComponent } from './components/cmpt11-tasks/tasks.component';
import { UnityPreviewComponent } from './components/cmpt9-unity-preview/unity-preview.component';
import { ThemePreviewComponent } from './components/cmpt10-theme-preview/theme-preview.component';
import { TaskPreviewComponent } from './components/cmpt12-task-preview/task-preview.component';
import { UsersCurseComponent } from './components/cmpt8-integer/integer.component';
import { FileComponent } from './components/cmpt13-file/file.component';
import { Cmpt14MVComponent } from './components/cmpt14-mv/cmpt14-mv.component';
import { Cmpt15RHComponent } from './components/cmpt15-rh/cmpt15-rh.component';
import { Cmpt16AUTORIDADESComponent } from './components/cmpt16-autoridades/cmpt16-autoridades.component';
import { Cmpt17ADMINISTRATIVOSComponent } from './components/cmpt17-administrativos/cmpt17-administrativos.component';
import { Cmpt18CONSEJOESTUDIANTILComponent } from './components/cmpt18-consejoestudiantil/cmpt18-consejoestudiantil.component';
import { Cmpt19EDUCACIONComponent } from './components/cmpt19-educacion/cmpt19-educacion.component';
import { Cmpt21APGComponent } from './components/cmpt21-ap-g/cmpt21-ap-g.component';
import { Cmpt20APPComponent } from './components/cmpt20-ap-p/cmpt20-ap-p.component';
import { Cmpt22APEComponent } from './components/cmpt22-ap-e/cmpt22-ap-e.component';
import { Cmpt23TESISComponent } from './components/cmpt23-tesis/cmpt23-tesis.component';
import { Cmpt24BIBLIOTECAComponent } from './components/cmpt24-biblioteca/cmpt24-biblioteca.component';
import { Cmpt26PREComponent } from './components/cmpt26-pre/cmpt26-pre.component';
import { Cmpt28EGRESADOSComponent } from './components/cmpt28-egresados/cmpt28-egresados.component';
import { Cmpt30DOCUMENTOSComponent } from './components/cmpt30-documentos/cmpt30-documentos.component';
import { CmptPromocionComponent } from './components/cmpt-promocion/cmpt-promocion.component';
import { CmptDocentesComponent } from './components/cmpt-docentes/cmpt-docentes.component';
import { CmptStoreEsfaComponent } from './components/cmpt-store-esfa/cmpt-store-esfa.component';

import { LandwwwComponent } from './components/landwww/landwww.component';






//import { NgxMarkdownItModule } from "ngx-markdown-it";
//import { NgxMarkdownItConfig } from "ngx-markdown-it";

//import { default as markmapPlugin } from 'markdown-it-markmap';
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        PhotosListComponent,
        LandComponent,
        LoginComponent,
        UserComponent,
        PhotoPreviewComponent,
        UserPreviewComponent,
        AsignatureComponent,
        TasksComponent,
        UnityPreviewComponent,
        ThemePreviewComponent,
        TaskPreviewComponent,
        UsersCurseComponent,
        FileComponent,
        Cmpt14MVComponent,
        Cmpt15RHComponent,
        Cmpt16AUTORIDADESComponent,
        Cmpt17ADMINISTRATIVOSComponent,
        Cmpt18CONSEJOESTUDIANTILComponent,
        Cmpt19EDUCACIONComponent,
        Cmpt21APGComponent,
        Cmpt20APPComponent,
        Cmpt22APEComponent,
        Cmpt23TESISComponent,
        Cmpt24BIBLIOTECAComponent,
        Cmpt26PREComponent,
        Cmpt28EGRESADOSComponent,
        Cmpt30DOCUMENTOSComponent,
        CmptPromocionComponent,
        CmptDocentesComponent,
        CmptStoreEsfaComponent,
        LandwwwComponent,
    ],
    imports: [
        BrowserModule,
        NgxDocViewerModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        CommonModule,
        // DragDropModule,
        MatIconModule,
        NgbModule,
        KatexModule,
        SwiperModule,
        NgxPrintModule,
        //NgxHideOnScrollModule,
        HttpClientModule,
        NgxYoutubePlayerModule.forRoot(),
        NgxHeadroomModule,
        //MarkdownModule.forRoot(),
        // QuillModule.forRoot(),
        //NgxMarkdownItModule.forRoot(
        //{
        //plugins: [
        //	 markmapPlugin
        //]
        //}
        //),
        MatProgressBarModule,
        CKEditorModule,
        BrowserAnimationsModule,
        NgxExtendedPdfViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
