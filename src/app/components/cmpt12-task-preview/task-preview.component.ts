import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service'
import { AuthService } from '../../services/auth.service'
import { UsersService } from '../../services/users.service'
import { environment } from '../../../environments/environment';
import { Title } from '@angular/platform-browser'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import isReadOnly from '@ckeditor/ckeditor5-build-classic';
// import Math from '@isaul32/ckeditor5-math/src/math';
// import AutoformatMath from '@isaul32/ckeditor5-math/src/autoformatmath';

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.css']
})

export class TaskPreviewComponent implements OnInit {

  
  apiUrl = environment.apiURL;
  photo: any = [];

  tasknew: string = ''
  solution: string = ''
  note: string = ''
  hiden: string = ''
  rol = localStorage.getItem('rol')
  type: string = ''
  name: string = ''
  public read = isReadOnly
  public Editor = ClassicEditor 
  public Editorw = ClassicEditor


  public conf = {
    language: 'es', toolbar: {
      items: [
        'Math',
        'blockQuote',
        'bulletedList',
        'numberedList',
        'bold',
        'italic',
        'indent',
        'outdent',
        'undo',
        'redo']
    }
  }

  options = {
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
      //"pinned": "flipInX",
      //"unpinned": "flipOutX"
      //"pinned": "bounceInDown",
      //"unpinned": "bounceOutUp"
      //"pinned": "swingInX",
      //"unpinned": "swingOutX"
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  };

  // @ViewChild("wwwww") myNameElem: ElementRef;
  // @ViewChild("myNameElem") myNameElemwww: ElementRef;
  // getValue() {
  //   const wwwww = this.myNameElem.nativeElement + ''.replace(/\<div[^>]*>(.*?)\<\/div>/g, (match, key) => {
  //     if (key) {
  //       this.keyy=key
  //       console.log(key);
  //       return key;
  //     }
  //     return ''
  //   })
  //   this.myNameElemwww.nativeElement.innerHTML = wwwww;
  // }

  showtask: boolean = true;
  showTask() {
    if (!this.showtask) {
      this.showtask = true
    } else {
      this.showtask = false
    }
  }
  one: number = 3


  public onChange(event: any) {
    var nw = new Date()
    var dateb = new Date(this.photo.dateb)
    var datee = new Date(this.photo.datee)

    if (dateb < nw && nw < datee) {
      this.showtask = true
      this.one = 3
      console.log(this.one)
    } else {
      if (this.rol == '3') {
        this.one = this.one + 1
        console.log(this.one)
        this.showtask = false
        if (this.one < 7) {
          this.savetask()
          console.log("Culmino el examen, guarde y regrese al curso")
        }
      }
    }
  }

  convertir() {

    const message = this.tasknew + ''
    const replacedMessage = message.replace(/\<blockquote[^>]*>(.*?)\<\/blockquote>/g, (match, key) => {
      if (key === key) {
        return '<blockquote>' + key.replace(/\\left\\{(.*)\\right\\}/g, '\\left\\{?\\right\\}').replace(/\d+/g, '?').replace(/\d/g, '?').replace(/\<script[^>]*>(.{1,7})\<\/script>/g, '<script type="math/tex">?</script>').replace(/\(.{1,8}\)/g, '(?)') + '</blockquote>';
      }
      return ''
    })
    this.solution = replacedMessage

  }

  savetask() {
    this.loading = "false"
    this.task.updatetaskready(this.tasknew, this.solution, this.note ? this.note : this.photo.note, this.router.snapshot.paramMap.get('idtask') + '', this.photo.asistence, this.archivos[0])
      .subscribe((res: any) => {
        this.gettheme()
      });
    return false;
  }

  savetaskgetout() {
    if (window.confirm('Se recomienda guardar cambios antes de ir al curso?. Recuerde que puede volver a editar esta tarea, mientras la fecha este habilitada')) {
    }
    this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
    return false;
  }

  gobackcurse() {
    if (window.confirm('Se recomienda guardar cambios antes de ir al curso?. Recuerde que puede volver a editar esta tarea, mientras la fecha este habilitada')) {
      this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`])
    }
  }


  public archivos: any[] = [];
  public photoSelected!: string | ArrayBuffer | null;
  public loading!: string;
  public _value: number = 0;

  get value(): number {
    return this._value;
  }
  set value(value: number) {
    if (!isNaN(value) && value <= 100) {
      this._value = value;
    }
  }

  constructor(
    private router: ActivatedRoute, private routerr: Router,
    private task: TaskService,
    private authservice: AuthService,
    private Tw: Title,
    private userservice: UsersService,
  ) { }

  gettheme() {
    this.router.params.subscribe(params => {
      //console.log(this.router.snapshot.paramMap.get('idtask') + '')
      this.task.getTask(this.router.snapshot.paramMap.get('idtask') + '')
        .subscribe(
          (res: any) => {
            if (res) {
              this.photo = res;
              this.Tw.setTitle("Tarea")
              console.log(res)
              this.loading = "";
              this.tasknew = res.task == '' ? 'www' : res.task.replace(new RegExp('<script type="math/tex"></script>', 'g'), '').replace(new RegExp('<script type="math/tex; mode=display"></script>', 'g'), '')
              // this.hiden = res.task
              this.solution = res.solution
              this.note = res.note
              // const www = `www`
              // const wwwww = www.replace(/\<script[^>]*>(.*?)\<\/script>/g, (match, key) => {
              //   if (key === key) {
              //     console.log(key);

              //     return '<script type="math/tex">' + key.replace(/\{.*?\}/g, '{?}') + '</script>';
              //   }
              //   return ''
              // })
              // console.log(wwwww);

            } else {
              this.routerr.navigate(['/dashboard'])
              //console.log("res.task")
            }
          },
          err => console.log(err)
        )
    });
  }

  ngOnInit(): void {

    if (localStorage.getItem('id')) {
      this.userservice.getUser()
        .subscribe(
          (res: any) => {
            const data = localStorage.getItem('user') 
            //console.log(localStorage.getItem('user'))
            console.log(data)
             console.log(res[0])

            // if (res[0].logindate != data?.length) {
            //   this.authservice.logout()
            // }
          },
          err => console.log(err)
        );
    };


    if (!localStorage.getItem('idcurso')) {
      this.routerr.navigate(['/dashboard'])
    }
    this.gettheme()

  }


  onImgError(event: any) {
    event.target.src = './assets/upload.png'
  }

  capturandoFile(event: any) {
    const ww = event.target.files[0];
    this.archivos = [];//resetea la matriz a rango 1
    this.archivos.push(ww);
    //console.log(event.target.files);
    if (event.target.files[0]) {
      this.type = event.target.files[0].type
      this.name = event.target.files[0].name
      //console.log(event.target.files);
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
