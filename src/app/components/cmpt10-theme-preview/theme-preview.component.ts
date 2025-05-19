import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core'
import { ThemesService } from "../../services/themes.service"
import { TaskService } from '../../services/task.service'
import { DomSanitizer } from '@angular/platform-browser'
//import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
//import moment from 'moment'
//import { MatIconRegistry } from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router'
import { environment } from '../../../environments/environment'
//import { KatexOptions } from 'ng-katex'
//import { coerceStringArray } from '@angular/cdk/coercion'
//import { Cmpt29EVENTOSComponent } from "../../components/cmpt29-eventos/cmpt29-eventos.component"
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

// import {
//   MatDialog,
//   MatDialogRef,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogTitle,
//   MatDialogContent,
// } from '@angular/material/dialog';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.component.html',
  styleUrls: ['./theme-preview.component.css']
})
export class ThemePreviewComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;
  @ViewChild('contentall') contentall!: ElementRef;
  @ViewChild('tittle') tittle!: ElementRef;


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


  printpdf() {
    let content = this.content.nativeElement;
    let contentall = this.contentall.nativeElement;
    let tittle = this.tittle.nativeElement;
    console.log(this.photo)
    // var ciclo = event.target.value
    // this.loading = "false"
    // const doc = new jsPDF({
    //   // orientation: "landscape",
    //   // unit: "in",
    //   // format: [4, 2]
    // });
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.setFontSize(5)//letter-spacing: 1px;
    var title = this.photo.title
    var titttle = "<div class='border rounded bg-info p-1 w-100 text-center'>" + title + "</div>"
    var datte = "<div class='border rounded bg-light p-1 w-100 text-center'>" + this.photo.dateb + "-" + this.photo.datee + "</div>"
    var getContent = "<div style='font-family: Nunito Sans, sans-serif; font-size:12px; padding: 05px 15px; width:578px'>" + titttle + datte + this.markdown + content.innerHTML + "</div>";

    // doc.html(contentall, {//content 
    doc.html(getContent, {//content 
      callback: function (doc) {
        doc.save(title);
        // doc.text('Hello world.', 20, 20);
      },
      x: 9,
      y: 9,
      // html2canvas: {
      //   scale: 0.6,
      //   width: 1000
      // },
      // autoPaging: 'text',
      html2canvas: {
        scale: 1,
        allowTaint: true,
        // dpi: 300,
        letterRendering: true,
        logging: false,
      },
      // width: 1500,
    });


    // var cntr = doc.internal.pageSize.width / 2
    // doc.text(this.markdown, 10, 10, { maxWidth: 200 });
    // doc.text(this.ussser.mencion == 'P' ? "ARTES PLÁSTICAS (Pintura)" : this.ussser.mencion == 'E' ? "ARTES PLÁSTICAS (Escultura)" :
    //   this.ussser.mencion == 'G' ? "ARTES PLÁSTICAS (Grabado)" : "ARTES PLÁSTICAS Y VISUALES (Educación artística)", cntr, 41, { align: 'center' });
    // // doc.text('CICLO ' + this.ussser.ciclo, cntr, 47, { align: 'center' });




    // var img1 = new Image()
    // img1.src = 'assets/firma.png'
    // doc.addImage(img1, 'JPEG', 59, 170, 91, 41)
    // var img2 = new Image()
    // img2.src = 'assets/bitmap.png'
    // doc.addImage(img2, 'JPEG', 62, 225, 91, 36)
    // Sometimes you might have to call the default function on the export (for example in Deno)
    // doc.autoTable({ html: '#my-table' })
    // doc.save(this.photo.title + ".pdf");

  }

  public Editor = ClassicEditor
  public onChange(event: any) {
    console.log(event.editor.getData())
    var ttt = event.editor.getData()
    this.session = ttt
    this.showww = ttt.replace(new RegExp('<figure class="table">', 'g'), '').replace(new RegExp('</figure>', 'g'), '')//.replace(new RegExp('</p>', 'g'), '').replace(new RegExp('<p>', 'g'), '')
      .replace(/(<script type="math\/tex; mode=display">)(.*)(<\/script>)/g, '$$$$$2$$$$').
      replace(/<figure class="media">/g, '').
      replace(/<\/figure>/g, '')
      .replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)("><\/oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`)
      .replace(/(<script type="math\/tex">)(.*)(<\/script>)/g, '$$$2$$').replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`)
  }


  photo: any = []
  session: string = "www"
  markdown: string = "www"
  showww: string = "www"
  markdown2: string = "www"
  markdown3: string = "www"
  id!: string
  apiUrl = environment.apiURL
  type: string = ""
  name: string = ""
  theme: string = ""
  public archivos: any[] = []
  public photoSelected!: string | ArrayBuffer | null
  public loading!: string
  public _value: number = 0
  public _charge: number = 0
  //currentTime: string = moment().format('M/D/YYYY hh:mm:ss a')


  get value(): number {
    return this._value
  }
  set value(value: number) {
    if (!isNaN(value) && value <= 100) {
      this._value = value
      console.log(this.value)
    }
  }

  get charge(): number {
    return this._charge
  }
  set charge(charge: number) {
    if (!isNaN(charge)) {
      this._charge = charge
      console.log(this.charge, "zzz")
    }
  }


  public progresValue!: number;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var element = document.documentElement,
      body = document.body,
      scrollTop = 'scrollTop',
      scrollHeight = 'scrollHeight';
    this.progresValue =
      (element['scrollTop'] || body['scrollTop']) /
      ((element['scrollHeight'] || body['scrollHeight']) - element.clientHeight) * 100;
  }

  public show!: string

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(Cmpt29EVENTOSComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  constructor(
    //    public dialog: MatDialog,
    private themesService: ThemesService,
    private router: ActivatedRoute,
    private routerr: Router,
    private task: TaskService,
    private modal: NgbModal,
    //iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private elementRef: ElementRef<HTMLElement>

  ) {
    this.progresValue = 0;
    this._charge = 0;


    //     iconRegistry.addSvgIconLiteral('upload', sanitizer.bypassSecurityTrustHtml(`
    // <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="upload_laptop_arrow"><g><g id="laptop_3_"><g><g><g><g><path d="M3.5,26C3.224,26,3,25.776,3,25.5v-16C3,8.673,3.673,8,4.5,8h5.001c0.276,0,0.5,0.224,0.5,0.5         S9.777,9,9.501,9H4.5C4.225,9,4,9.225,4,9.5v16C4,25.776,3.776,26,3.5,26z" fill="#263238"/><path d="M28.5,26c-0.276,0-0.5-0.224-0.5-0.5v-16C28,9.225,27.775,9,27.5,9h-5C22.224,9,22,8.776,22,8.5         S22.224,8,22.5,8h5C28.327,8,29,8.673,29,9.5v16C29,25.776,28.776,26,28.5,26z" fill="#263238"/></g></g></g><g><g><path d="M28.5,30h-25C2.121,30,1,28.879,1,27.5C1,27.224,1.224,27,1.5,27h11c0.276,0,0.5,0.224,0.5,0.5        S12.776,28,12.5,28H2.086c0.206,0.582,0.762,1,1.414,1h25c0.652,0,1.208-0.418,1.414-1H19.5c-0.276,0-0.5-0.224-0.5-0.5        s0.224-0.5,0.5-0.5h11c0.276,0,0.5,0.224,0.5,0.5C31,28.879,29.879,30,28.5,30z" fill="#263238"/></g></g></g></g></g><g><g id="transfer_9_"><g><path d="M13.502,20c-0.276,0-0.5-0.224-0.5-0.5V9h-1.5c-0.183,0-0.352-0.1-0.438-0.261      c-0.088-0.16-0.081-0.355,0.018-0.51l4.5-7c0.186-0.285,0.656-0.285,0.842,0l4.5,7c0.099,0.154,0.105,0.35,0.018,0.51      C20.854,8.9,20.685,9,20.502,9h-1.5v8.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-9c0-0.276,0.224-0.5,0.5-0.5h1.084      l-3.584-5.575L12.418,8h1.084c0.276,0,0.5,0.224,0.5,0.5v11C14.002,19.776,13.778,20,13.502,20z" fill="#263238"/></g></g><circle cx="18.5" cy="19.5" fill="#263238" r="0.5"/></g></g></svg>
    // `))
    //     iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(`
    // <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"/></svg>
    // `))
    //     iconRegistry.addSvgIconLiteral('remove', sanitizer.bypassSecurityTrustHtml(`
    // <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
    // `))
    //     iconRegistry.addSvgIconLiteral('file', sanitizer.bypassSecurityTrustHtml(`
    // <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="48px" id="Layer_1" style="enable-background:new 0 0 64 48" version="1.1" viewBox="0 0 64 48" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Container_1_"><g><path d="M58,8H6c-1.104,0-2,0.896-2,2v23.999C4,35.104,4.896,36,6,36h52c1.104,0,2-0.896,2-2.001V10    C60,8.896,59.104,8,58,8z" style="fill:#B3B3B3"/></g></g><g id="Paper_Tray"><g><path d="M42,0H6C4.896,0,4,0.895,4,2v12c0,1.104,0.896,2,2,2h36c1.104,0,2-0.896,2-2V2    C44,0.895,43.104,0,42,0z" style="fill:#4D4D4D"/></g></g><g id="Shape_2_"><g><path d="M42,32H6c-1.104,0-2,0.895-2,1.999V46c0,1.104,0.896,2,2,2h36c1.104,0,2-0.896,2-2V33.999    C44,32.895,43.104,32,42,32z" style="fill:#999999"/></g></g><g id="Body_10_"><g><path d="M60,12H4c-2.21,0-4,1.79-4,4v24c0,2.208,1.79,4,4,4v-4    c0-2.21,1.791-4,4-4h32c2.209,0,4,1.79,4,4v4h16c2.209,0,4-1.792,4-4V16C64,13.79,62.209,12,60,12z" style="fill-rule:evenoddclip-rule:evenoddfill:#E6E6E6"/></g></g><g id="Grey_Led"><g><circle cx="54" cy="22" r="2" style="fill:#808080"/></g></g><g id="Green_Led"><g><circle cx="46" cy="22" r="2" style="fill:#88C057"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
    // `))
  }
  // https://github.com/isaul32/ckeditor5-math?tab=readme-ov-file
  formshow: boolean = false;

  formshowteacher() {
    if (!this.formshow) {
      this.formshow = true
    } else {
      this.formshow = false
    }
  }

  _id: string = ""
  tasskk: string = ""
  solution: string = ""
  file: string = ""

  // w_ww = (event: any) => {
  //   console.log(event.html)
  //   //this.markdown = event.html
  // }

  public ttrue!: string

  taskssimilarswww(event: any) { console.log(this.ttrue = "false") }
  taskssimilars(event: any) {
    //console.log(event.html) //console.log(this.tasskk)
    //const taskkk = this.tasskk ? this.tasskk.replace(new RegExp(/[0-9]+/, "g"), "?") : ''
    //console.log(this.tasskk)
    console.log(event)
    this.task.updatetaskready(this.tasskk, this.solution, '', this._id, '', this.archivos[0])
      .subscribe((res: any) => {
        this.archivos = []
        //alert("guardado")
        this.ttrue = "true"
        this.gettheme()

      })
    /*
    //task: string, respuesta: string, note: string, id: string, asistence: string, archivo: File
    this.task.updatetaskready(task--, respuesta--, (((nota))), _id--, (asistence)--, this.archivos[0]--)
          .subscribe((res: any) => {
            this.archivos = []
          })
          */
  }
  //"open1(ww, w._id, w.task, w.solution,  w.img?w.img:'')"
  open1(ww: any, _id: string, task: string, solution: string, file: string) {
    this.modal.open(ww, { size: 'xl', scrollable: true })
    this.tasskk = task
    this.file = file
    this._id = _id
    this.solution = this.photo.tassks[solution].solution
    console.log('tasskk', 'file', solution, _id, this.solution)
  }

  get ttasskk(): string {
    return this.tasskk ? this.tasskk.replace(new RegExp("</p><p>", "g"), "").replace(new RegExp("<br>", "g"), "").replace(new RegExp("&amp;", "g"), "&") : ''
  }

  get soluttion(): string {
    //console.log(this.soluttion)
    return this.solution ? this.solution.replace(new RegExp("</p><p>", "g"), "").replace(new RegExp("<br>", "g"), "").replace(new RegExp("&amp;", "g"), "&") : ''
  }

  //similar compañeros
  calification() {
    var ntger = this.photo.integgers
    //console.log(this.photo.task)
    function calculateSimilaritywww(str1 = "", str2 = "") {
      let longer = str1.trim();
      let shorter = str2.trim();
      let a1 = longer.toLowerCase().split(" ");
      let b1 = shorter.toLowerCase().split(" ");
      //let result = a1.every((aa, i) => aa[0] === b1[i][0]);
      if (longer.length < shorter.length) [longer, shorter] = [shorter, longer];
      var arr = [];
      let count = 0;
      for (var i = 0; i < longer.length; i++) {
        if (shorter && shorter.includes(longer[i])) {
          shorter = shorter.replace(longer[i], "")
          count++
        };
      }
      return {
        score: (count * 100) / longer.length
      }
    }
    var dattes = [];

    for (var j = 0; j < ntger.length; j++) {
      if (ntger[j].Usser[0].tassk.length >= 1) {
        dattes.push(Date.parse(ntger[j].Usser[0].tassk[0].createdAt))
      } else {
        console.log("www")
      }
    }


    for (var k = 0; k < ntger.length; k++) {
      this.charge = k + 1; //console.log(k,  this.charrge)
      if (ntger[k].Usser[0].tassk.length >= 1) {
        var www = [];
        var lenghtt = [];
        var ntgerwww = this.photo.integgers
        for (var j = 0; j < ntgerwww.length; j++) {
          if (ntgerwww[j].Usser[0].tassk.length >= 1 && ntgerwww[j].Usser[0].tassk[0]._id != ntger[k].Usser[0].tassk[0]._id) {
            www.push(calculateSimilaritywww(ntgerwww[j].Usser[0].tassk[0].task, ntgerwww[k].Usser[0].tassk[0].task).score);
            lenghtt.push(ntgerwww[j].Usser[0].tassk[0].task.length);
          } else {
            www.push(0);
            lenghtt.push(0);
          }
        }
        var onepoint = (Math.max.apply(Math, dattes) - Math.min.apply(Math, dattes)) / 20
        var alcance = Date.parse(ntger[k].Usser[0].tassk[0].createdAt) - Math.min.apply(Math, dattes)
        const wsum = Object.values(www).reduce((a, b) => a + b, 0)
        var nota = 0.5 * (20 - wsum / (ntger.length - www.filter(w => w === 0).length) * (20 / 100)) + 0.3 * ntgerwww[k].Usser[0].tassk[0].task.length * 20 / Math.max(...lenghtt) + 0.2 * alcance / onepoint
        if (nota) {
          //this.loading = "false"
          this.task.updatetaskready(ntger[k].Usser[0].tassk[0].task, '', Math.round(nota) + '', ntger[k].Usser[0].tassk[0]._id, '', this.archivos[0])
            .subscribe((res: any) => {
              this.archivos = []
            })
        } else {
          //console.log('sin nota')
        }
      } else {
        //console.log("www")
      }
    }
    this.gettheme()
  }

  calificationsimilarone(_id: string, taskk: string, createdAt: string) {
    this.loading = "false"

    function calculateSimilaritywww(str1 = "", str2 = "") {
      let longer = str1.trim();
      let shorter = str2.trim();
      let a1 = longer.toLowerCase().split(" ");
      let b1 = shorter.toLowerCase().split(" ");
      //let result = a1.every((aa, i) => aa[0] === b1[i][0]);
      if (longer.length < shorter.length) [longer, shorter] = [shorter, longer];
      var arr = [];
      let count = 0;
      for (var i = 0; i < longer.length; i++) {
        if (shorter && shorter.includes(longer[i])) {
          shorter = shorter.replace(longer[i], "")
          count++
        };
      }
      return {
        score: (count * 100) / longer.length
      }
    }
    var dattes = [];
    var ntger = this.photo.integgers

    for (var j = 0; j < ntger.length; j++) {
      if (ntger[j].Usser[0].tassk.length >= 1) {
        dattes.push(Date.parse(ntger[j].Usser[0].tassk[0].createdAt))
      } else {
        console.log("www")
      }
    }


    var www = [];
    var lenghtt = [];
    for (var j = 0; j < ntger.length; j++) {
      if (ntger[j].Usser[0].tassk.length >= 1 && ntger[j].Usser[0].tassk[0]._id != _id) {
        www.push(calculateSimilaritywww(ntger[j].Usser[0].tassk[0].task, taskk).score);
        lenghtt.push(ntger[j].Usser[0].tassk[0].task.length);
      } else {
        www.push(0);
        lenghtt.push(0);
      }
    }
    var onepointfecha = (Math.max.apply(Math, dattes) - Math.min.apply(Math, dattes)) / 20
    var alcancefecha = Date.parse(createdAt) - Math.min.apply(Math, dattes)
    const wsum = Object.values(www).reduce((a, b) => a + b, 0)
    var nota = 0.5 * (20 - wsum / (ntger.length - www.filter(w => w === 0).length) * (20 / 100)) + 0.3 * taskk.length * 20 / Math.max(...lenghtt) + 0.2 * alcancefecha / onepointfecha
    if (nota) {
      //this.loading = "false"
      this.task.updatetaskready(taskk, '', Math.round(nota) + '', _id, '', this.archivos[0])
        .subscribe((res: any) => {
          this.archivos = []
        })
    } else {
      //console.log('sin nota')
    }

    this.gettheme()
  }


  //compare tareas solution
  calificationsolution() {
    this.loading = "false"
    var ntger = this.photo.integgers
    //console.log(this.photo.tassks[1].task)
    var www = [];
    function calculateSimilaritywww(str1 = "", str2 = "") {
      let longer = str1.trim();
      let shorter = str2.trim();
      let a1 = longer.toLowerCase().split(" ");
      let b1 = shorter.toLowerCase().split(" ");
      //let result = a1.every((aa, i) => aa[0] === b1[i][0]);
      if (longer.length < shorter.length) [longer, shorter] = [shorter, longer];
      var arr = [];
      let count = 0;
      for (var i = 0; i < longer.length; i++) {
        if (shorter && shorter.includes(longer[i])) {
          shorter = shorter.replace(longer[i], "")
          count++
        };
      }
      return {
        score: (count * 100) / longer.length
      }
    }

    for (var k = 0; k < ntger.length; k++) {
      if (ntger[k].Usser[0].tassk.length >= 1) {
        var numero = Number(ntger[k].Usser[0].tassk[0].solution) ? Number(ntger[k].Usser[0].tassk[0].solution) : 0
        var similaroriginal = calculateSimilaritywww(this.photo.tassks[numero].task, this.photo.tassks[numero].solution).score
        var similar = calculateSimilaritywww(ntger[k].Usser[0].tassk[0].task, this.photo.tassks[numero].task).score
        var nota = (similar - similaroriginal) / ((100 - similaroriginal) / 20)

        //console.log(this.photo.tassks[numero].task,"new")
        if (nota) {
          //this.loading = "false"
          this.task.updatetaskready(ntger[k].Usser[0].tassk[0].task, numero + '', Math.round(nota * 1000) / 1000 + '', ntger[k].Usser[0].tassk[0]._id, '', this.archivos[0])
            .subscribe((res: any) => {
              //this.gettheme()
              this.archivos = []
            })
        } else {
          console.log('wwwww')
        }
      } else {
        console.log('www');
      }
    }
    this.gettheme()
  }

  calificationclean() {
    this.loading = "false"
    var ntger = this.photo.integgers

    for (var k = 0; k < ntger.length; k++) {
      if (ntger[k].Usser[0].tassk.length >= 1) {
        var numero = Number(ntger[k].Usser[0].tassk[0].solution) ? Number(ntger[k].Usser[0].tassk[0].solution) : 0
        // console.log(this.photo.tassks[numero].task, "new")
        this.task.updatetaskready(ntger[k].Usser[0].tassk[0].task, numero + '', '', ntger[k].Usser[0].tassk[0]._id, '', this.archivos[0])
          .subscribe((res: any) => {
            this.gettheme()
            this.archivos = []
          })
      } else {
        console.log('www');
      }
    }
    this.gettheme()
  }


  calificationsolutionone(_id: string, taskk: string, solution: string) {
    //var ntger = this.photo.integgers
    //var www = [];
    function calculateSimilaritywww(str1 = "", str2 = "") {
      let longer = str1.trim();
      let shorter = str2.trim();
      if (longer.length < shorter.length) [longer, shorter] = [shorter, longer];
      var arr = [];
      let count = 0;
      for (var i = 0; i < longer.length; i++) {
        if (shorter && shorter.includes(longer[i])) {
          shorter = shorter.replace(longer[i], "")
          count++
        };
      }
      return {
        score: (count * 100) / longer.length
      }
    }
    var similaroriginal = calculateSimilaritywww(this.photo.tassks[solution].task, this.photo.tassks[solution].solution).score
    var similar = calculateSimilaritywww(taskk, this.photo.tassks[solution].task).score
    console.log(this.photo.tassks[solution].task, "new")
    var nota = (similar - similaroriginal) / ((100 - similaroriginal) / 20)
    console.log(nota)

    this.loading = "false"
    this.task.updatetaskready(taskk, solution + '', Math.round(nota * 1000) / 1000 + '', _id, '', this.archivos[0])
      .subscribe((res: any) => {
        this.archivos = []
        //console.log(res)
        this.gettheme()
      })
  }


  //clean tasks
  cleantasks() {
    if (window.confirm('Desea eliminar la tareas?')) {
      var ntger = this.photo.integgers
      for (var k = 0; k < ntger.length; k++) {
        if (ntger[k].Usser[0].tassk.length >= 1) {
          console.log(ntger[k].Usser[0].tassk[0]._id)
          this.loading = "false"
          this.themesService.deletetask(ntger[k].Usser[0].tassk[0]._id)
            .subscribe(res => {
              this.gettheme()
            })
        } else {
          console.log('www');
        }
        this.gettheme()
      }
    }
  }

  createNotes(event: any) {
    if (window.confirm('Desea introducir nota común a todos?')) {
      var ntger = this.photo.integgers
      var str = new Date()
      for (var k = 0; k < ntger.length; k++) {
        console.log(ntger[k].Usser[0]._id, event.target.value)
        this.loading = "false"
        this.task.savetaskready(event.target.value, "Tarea", "Respuesta", this.photo._id, this.photo.unidad, this.photo.curse, '', '', '', ntger[k].Usser[0]._id, '', 'teacher', str.getFullYear() + '', this.archivos[0])
          .subscribe(
            (res: any) => {
              this.gettheme()
            },
            err => console.log(err)
          )
        //        } else {
        console.log('www');
        //        }
        this.gettheme()
      }
    }
  }

  calificationadd(event: any) {
    var ntger = this.photo.integgers
    for (var k = 0; k < ntger.length; k++) {
      if (ntger[k].Usser[0].tassk.length >= 1) {
        console.log(ntger[k].Usser[0].tassk[0].note - (-event.target.value))
        var www = ntger[k].Usser[0].tassk[0].note - (-event.target.value)
        this.task.updatetaskready(ntger[k].Usser[0].tassk[0].task, '', Math.round(www) + '', ntger[k].Usser[0].tassk[0]._id, '', this.archivos[0])
          .subscribe((res: any) => {
            this.archivos = []
          })
      } else {
      }
    }
    console.log("www")
    this.gettheme()
  }

  //codigo, ciclo, mencion 
  savetask(event: any, theme: string, unity: string, curse: string, user: string, codigo: string, ciclo: string, mencion: string, teacher: string) {
    console.log(event.target.value)
    var str = new Date()
    this.loading = "false"
    if (event.target.value <= 20 && event.target.value >= 0) {
      //console.log(event.target.value, "this.idunity", theme, unity, curse, user)
      this.task.savetaskready(event.target.value, "Tarea", "Respuesta", theme, unity, curse, user, '', codigo, ciclo, mencion, teacher, str.getFullYear() + '', this.archivos[0])
        .subscribe(
          (res: any) => {
            this.gettheme()
          },
          err => console.log(err)
        )
    } else {
      alert("Introdusca nota vigesimal")
      this.gettheme()
    }
  }

  savetasksimilar(theme: string, unity: string, curse: string, user: string) {
    console.log("event.target.value")
    this.loading = "false"
    //if () {
    // this.task.savetaskready('', "Tarea", "Respuesta", theme, unity, curse, user, '', this.archivos[0])
    //   .subscribe(
    //     (res: any) => {
    //       this.gettheme()
    //     },
    //     err => console.log(err)
    //   )
    // } else {
    //   alert("Introdusca nota vigesimal")
    //   this.gettheme()
    // }
  }

  updateTask(event: any, respuesta: string, id: string, task: string, asistence: string) {
    if (event.target.value <= 20 && event.target.value >= 0) {
      this.loading = "false"
      this.task.updatetaskready(task, respuesta, event.target.value, id, asistence ? asistence : '', this.archivos[0])
        .subscribe((res: any) => {
          this.gettheme()
          this.archivos = []
        })
    } else {
      alert("Introdusca nota vigesimalw")
      this.gettheme()

    }
  }

  updateTasksolution(event: any, nota: string, id: string, task: string, asistence: string) {
    this.loading = "false"
    this.task.updatetaskready(task, event.target.value, nota, id, asistence ? asistence : '', this.archivos[0])
      .subscribe((res: any) => {
        this.gettheme()
        this.archivos = []
      })
  }
  /*
    saveasistant(theme: string, unity: string, curse: string, user: string, asistence: string) {
      this.loading = "false"
      //console.log('', "this.idunity", theme, unity, curse, user, asistence)
      this.task.savetaskready('', "Editar registro", theme, unity, curse, user, asistence, this.archivos[0])
        .subscribe(
          (res: any) => {
            this.gettheme()
          },
          err => console.log(err)
        )
  
    }
  
    updateasistant(id: string, task: string, nota: string, asistence: string) {
      this.loading = "false"
      this.task.updatetaskready(task, nota ? nota : '', id, asistence, this.archivos[0])
        .subscribe((res: any) => {
          this.archivos = []
          this.gettheme()
  
        })
    }
  
  
    updatetasskimg(event: any, id: string, task: string, note: string, asistencia: string) {
      //alert(asistencia)
      this.loading = "false"
      if (event.target.files[0]) {
        this.task.updatetask(task, note, id, asistencia, event.target.files[0])
          .subscribe((res: any) => {
            this.value = Math.round((100 / res.total) * res.loaded)
            console.log(res.total)
            console.log(res.loaded)
            if (res.total == res.loaded && res.type > 0) {
              this._value = 0
              this.archivos = []
              this.gettheme()
            }
          })
      }
    }
  */
  createtaskimg(event: any, respuesta: string, theme: string, unity: string, curse: string, user: string) {
    if (event.target.files[0]) {
      this.loading = "false"
      this.task.savetask('', "Tarea entregada", this.photo.dateb, this.photo.datee, "Respuesta", theme, unity, curse, user, 'P', event.target.files[0])
        .subscribe(
          (res: any) => {
            this.value = Math.round((100 / res.total) * res.loaded)
            console.log(res.total)
            console.log(res.loaded)
            if (res.total == res.loaded && res.type > 0) {
              this.value = 0
              this.archivos = []
              this.gettheme()
            }
          },
          err => console.log(err)
        )
    }
  }


  errasetask(idtask: string) {
    if (window.confirm('Desea eliminar la tarea?')) {
      this.loading = "false"
      this.themesService.deletetask(idtask)
        .subscribe(res => {

          this.router.params.subscribe(params => {
            this.theme = params['www']
            this.themesService.gettheme(params['idtheme'], localStorage.getItem('idcurso') || "")
              .subscribe(
                (res: any) => {
                  // console.log(res[0])
                  this.photo = res[0]
                  this.markdown3 = res[0].solution
                  this.markdown2 = res[0].task
                  this.markdown = res[0].description
                  this.id = res[0]._id
                  this.loading = ""
                },
                err => console.log(err)
              )
          })

        })
    }
  }

  markdownchange = () => {
    this.markdown = this.photo.description
    // console.log(event.html)
  }
  onContentChangedw = (event: any) => {
    this.markdown = event.html
    console.log(event.html)
  }
  onContentChangeww = (event: any) => {
    this.markdown2 = event.html
    //console.log(this.markdown2)
  }
  onContentChangewww = (event: any) => {
    this.markdown3 = event.html
    //console.log(this.markdown2)
  }

  public resumena!: number
  public resumenc!: number
  public resumend!: number

  gettheme() {
    this.router.params.subscribe(params => {
      this.theme = params['www']
      this.themesService.gettheme(params['idtheme'], localStorage.getItem('idcurso') || "")
        .subscribe(
          (res: any) => {
            console.log(res[0])
            this.photo = res[0]
            this.markdown3 = res[0].solution
            this.markdown2 = res[0].task
            this.markdown = `<p><strong>SESIÓN DE APRENDIZAJE N° 1</strong></p><p><strong>Título:</strong> ${res[0].title}</p><p><strong>Curso:</strong> ${res[0].curso[0].title}</p><p><strong>Unidad:</strong> ${res[0].unity[0].title}</p><p><strong>Credito del curso:</strong> ${res[0].curso[0].credito}</p><p><strong>Código del curso:</strong> ${res[0].curso[0].codigo}</p><p><strong>DATOS INFORMATIVOS</strong></p><figure class="table"><table><tbody><tr><td><strong>DREA:</strong></td><td>Ayacucho</td><td><strong>SEMESTRE:</strong></td><td>Impar</td></tr><tr><td><strong>E.S.F.A</strong></td><td>Escuela Superior de Bellas Artes “FGPA</td><td><strong>DURACIÓN:</strong></td><td>90 minutos</td></tr><tr><td><strong>ÁREA:</strong></td><td>ARTE</td><td><strong>FECHA:</strong></td><td>18-03-2025</td></tr><tr><td><strong>SERIE</strong></td><td>100</td><td><strong>DOCENTE</strong></td><td>${res[0].userr[0].name}</td></tr></tbody></table></figure><p><strong>PROPÓSITO DE APRENDIZAJE&nbsp;</strong></p><figure class="table"><table><tbody><tr><td><strong>COMPETENCIA</strong></td><td><strong>CAPACIDADES</strong></td><td><strong>CRITERIOS DE EVALUACIÓN</strong></td><td><p><strong>EVIDENCIA</strong></p><p><strong>PRODUCTO</strong></p></td><td><strong>INSTRUMENTO</strong></td></tr><tr><td><strong>Explica el/la ${res[0].title} desde un enfoque moderno</strong></td><td><p>Comprende y usa conocimientos sobre el/la ${res[0].title} y elementos base que la hace posible.</p><p>Evalúa las implicancias del saber y del quehacer científico y tecnológico.</p></td><td><p>Identifica los el/la ${res[0].title} y explica las relaciones necesarias para producir su impacto.</p><p>Comprende la importancia de los/las ${res[0].title} en la sociedad y explica las posibles consecuencias mediatas favorables.</p><p>Aplica las teorías necesarias para generar objetos asociados a el/la ${res[0].title} que interactúen con los humanos para producir el impacto que coadyuve en desarrollo de sociedad.</p><p>Analiza la información y las noticias sobre inteligencia artificial y utiliza esta información para tomar decisiones en la elaboración objetos asociados a el/la ${res[0].title}</p><p>Participa activamente en discusiones y debates sobre la importancia de las nuevas tecnologías de construcciones de objetos artísticos.</p><p>Colabora con otros en la implementación de tecnologías en el/la objetos asociados a el/la ${res[0].title}  y fomenta la cultura de las facetas múltiples.</p></td><td>${res[0].title}. (impresión sicológica eficiente).</td><td>Rúbrica de evaluación</td></tr><tr><td><strong>ENFOQUES</strong></td><td><strong>VALORES</strong></td><td colspan="3"><strong>ACCIONES O ACTITUDES</strong></td></tr><tr><td><strong>ENFOQUE AMBIENTAL&nbsp;</strong></td><td><strong>Valor(es) Respeto a toda forma de vida</strong></td><td colspan="3"><strong>Docentes y estudiantes promueven estilos de vida en armonía con el ambiente, revalorando los saberes locales y el conocimiento ancestral.</strong></td></tr><tr><td colspan="5"><strong>PRÓPOSITO</strong></td></tr><tr><td colspan="5">El propósito de la sesión de aprendizaje es que los estudiantes aprendan a nuevos enfoques de implicación de el/la ${res[0].title}, comprendan la importancia de trascender factores clásicos de la escultura, apliquen recursos que desarrollen su entorno y su comunidad, analicen la información y las noticias sobre el avance de las tecnologías y utilicen esta información para tomar decisiones informadas sobre las construcciones de las esculturas, participen activamente en discusiones y debates sobre la importancia de las esculturas utilitarias e interactivas como medida de desarrollo de ciertas características humanas, y colaboren con otros en la implementación de nuevos enfoques en su comunidad y fomenten la cultura de prospección innovadora.</td></tr></tbody></table></figure><p><strong>SECUENCIA DIDÁCTICA</strong></p><figure class="table"><table><tbody><tr><td><strong>MOMENTO</strong></td><td><p><strong>PROCESOS</strong></p><p><strong>PEDAGÓGICOS</strong></p></td><td><strong>TIEMPO</strong></td></tr><tr><td><strong>INICIO</strong></td><td><p>El docente inicia la sesión recordando los acuerdos de convivencia en el aula y la importancia del trabajo en equipo</p><p>El docente motivará a los estudiantes mostrando un video corto sobre el impacto de el/la ${res[0].title} en una comunidad. Después de ver el video, el docente pedirá a los estudiantes que compartan sus reacciones y pensamientos.</p><p>El docente presentará la pregunta de conflicto cognitivo: ¿Qué medidas de modelos a el/la ${res[0].title} podemos implementar en nuestras comunidades para influir en la sociedad y cómo podemos asegurarnos de que estas interacciones sean efectivas y sostenibles a largo plazo?&nbsp;</p><p>Los estudiantes comparten sus respuestas.&nbsp;</p><p>El docente presentará el propósito de la sesión de aprendizaje: <i>"Modelado digital impresión y interactividad.</i></p></td><td><strong>15 minutos</strong></td></tr><tr><td><strong>DESARROLLO</strong></td><td><p>Los estudiantes tendrán que pensar en la respuesta y anotarla en una hoja.</p><p>El docente pedirá a los estudiantes que compartan sus respuestas iniciales a la pregunta de indagación central.</p><p>El docente presentará una situación significativa:</p><p><i><strong>Contexto:</strong> Un grupo de una población en estados de estrés requiriendo estímulos externos, dejando a la comunidad poco productiva.</i></p><p><i><strong>Problema:</strong> La población no cuenta con información suficiente sobre las medidas de terapias necesarias para reducir el impacto del estrés en sus comunidades.</i></p><p><i><strong>Reto</strong>: ¿Cómo podemos reducir el riesgo de desequilibrios siquicos relacionados con la percepción y personalidad?</i></p><p>El docente presenta una pregunta de indagación central: ¿Cómo pueden los estudiantes diseñar el/la ${res[0].title} y emergencia para situaciones sicológicas en su comunidad y ayudar a promover una comunicación mas efectiva entre la unidad contextual?</p><p>Los estudiantes trabajarán en grupos para elaborar un plan de elaboración de el/la ${res[0].title} para un uso en particular y enfocado en su comunidad. Deberán identificar los requerimientos de sensación y percepción asociados con el/la ${res[0].title}, las medidas de construcción necesarias y cómo procesarlas.</p><p>El docente proporciona actividades y recursos para que los estudiantes puedan responder la pregunta de indagación, como una lectura titulada "<a href="https://hybridart.net/nicolas-schoffer-y-los-origenes-de-la-interactividad-en-el-arte/">Nicolas Schoffer y los orígenes de la interactividad en el arte</a>. (<strong>ANEXO1</strong>)</p><p>Los estudiantes leerán la lectura proporcionada y responderán preguntas de comprensión lectora relacionadas con el tema de la sesión de aprendizaje.</p><p>Los estudiantes compararán su respuesta inicial a la pregunta de indagación central con la información recolectada de las fuentes indagadas y discutirán en grupos cómo esta información puede mejorar la concepción de la escultura.</p><p>Los estudiantes revisarán sus planes de construcción y harán ajustes basados en la nueva información.</p></td><td><strong>60 minutos</strong></td></tr><tr><td><strong>CIERRE</strong></td><td><p>El docente pedirá a los estudiantes que compartan sus planes de construcción revisados y discutirán en clase las mejores prácticas.</p><p>Los estudiantes aplicarán sus planes de construcción a través de una simulación de un entorno determinado en la que deberán poner en práctica las medidas de construcción que elaboraron en sus planes.</p><p>Los estudiantes realizarán una autoevaluación (<strong>ANEXO2</strong>) de su desempeño durante la simulación y compartirán sus resultados con la clase.</p><p>El docente proporcionará actividades de metacognición para que los estudiantes reflexionen sobre el proceso de aprendizaje, como: Responder preguntas como "¿Qué aprendiste hoy?", "¿Qué te pareció más interesante de la sesión de aprendizaje?" y "¿Qué te pareció más difícil?".</p><p>El docente hará preguntas para realizar una retroalimentación formativa a los estudiantes, como:</p><p>¿Cómo te sentiste durante la sesión de aprendizaje?</p><p>¿Qué estrategias utilizaste para diseñar un plan de recreación y producción para solventar e influir sobre las impresiones sicológicas?</p><p>¿Qué aspectos de la sesión de aprendizaje te gustaría profundizar más?</p><p>¿Cómo podrías aplicar lo que aprendiste en tu vida diaria?</p></td><td><strong>15 minutos</strong></td></tr></tbody></table></figure><p><strong>ANEXO1</strong></p><p><strong>Lectura: "</strong><a href="https://hybridart.net/nicolas-schoffer-y-los-origenes-de-la-interactividad-en-el-arte/">Nicolas Schoffer y los orígenes de la interactividad en el arte</a><strong>"</strong></p><p>El escultor y teórico de arte francés de origen húngaro Nicolas Schoffer, desarrolló una interesante investigación en el terreno del arte y la tecnología en un momento en el que esta asociación no era del todo entendida en el mundo del arte. Después de algunos primeros experimentos gráficos vinculados a un repertorio de formas elementales, comenzó a teorizar sobre la ocupación del espacio, el papel de la luz y la estructura en todas sus dimensiones, para terminar encontrando una respuesta a sus preguntas en las nuevas tecnologías de la época, sobre todo en la teoría cibernética y la interactividad. A partir de la palabra «spatiodynamism» surgen sus primeras esculturas dinámicas autómatas que mediante sistemas de sensores, reacciónaban a los movimientos del espectador. Es en este momento cuando nace una nueva forma de interactividad en el arte</p><p>Este interés por el dinamismo artístico fue iniciado originalmente por los cubo-futuristas y luego se intensificó y se solidifica por los artistas Constructivismo ruso, como Naum Gabo, Anton Pevsner, Moholy-Nagy y Ludwig Hirschfeld-Mack. Todos estos artistas estaban preocupados por ir más allás de la forma escultórica tridimensional estática y alcanzar una cuarta dimensión mediante el tiempo y el movimiento</p><p>Schöffer no solo partió del espíritu de las vanguardias de principios de siglo sino que se benefició de las teorías cibernéticas de la época, sistemas de retroalimentación -interactividad- basados principalmente en las ideas de Norbert Wiener. Para Schöffer, estos cruces de pensamiento le permitieron dilucidar relaciones artísticas complejas desde dentro de su propia obra.</p><p><strong>ANEXO2</strong></p><p><strong>RÚBRICA DE EVALUACIÓN DE AUTOEVALUACIÓN&nbsp;</strong></p><figure class="table"><table><thead><tr><th><strong>Criterios de evaluación</strong></th><th><strong>Sí</strong></th><th><strong>No</strong></th></tr></thead><tbody><tr><td>Identifiqué los efectos sicológicos asociados con los comportamientos de objetos tridimensionales interactivos y expliqué los procesos de construcción necesarias para producir su impacto de manera eficaz.</td><td></td><td></td></tr><tr><td>Comprendí la importancia de estar preparados para un entorno competitivo y expliqué las posibles consecuencias de la interacción entre esculturas y humanos de manera variable.</td><td></td><td></td></tr><tr><td>Apliqué las los procesos de contribución necesarias para producir el impacto de una escultura interactiva en mi entorno y en mi comunidad.</td><td></td><td></td></tr><tr><td>Analicé la información y las noticias sobre el/la ${res[0].title} y utilicé esta información para tomar decisiones informadas sobre las interacciones diversas de los humanos.</td><td></td><td></td></tr><tr><td>Participé activamente en discusiones y debates sobre la importancia de las el/la ${res[0].title} relacionados con las nuevas tecnologías.</td><td></td><td></td></tr><tr><td>Colaboré con otros en la implementación de construcción de el/la ${res[0].title} en mi comunidad y fomenté la cultura de investigación y promoción intelectual.</td><td></td><td></td></tr><tr><td>Evalué mi desempeño durante la simulación y compartí mis resultados con la clase.</td><td></td><td></td></tr></tbody></table></figure><p><strong>ANEXO3</strong></p><p><strong>RÚBRICA DE EVALUACIÓN PARA RECONOCIMIENTO DE IMPRESIONES SICOLÓGICAS Y GENERACIÓN PLAN DE RECREACIÓN ESCULTÓRICA EN SU COMUNIDAD</strong></p><figure class="table"><table><thead><tr><th><strong>Criterios de Evaluación</strong></th><th><strong>Nivel de Desempeño Insuficiente (1)</strong></th><th><strong>Nivel de Desempeño Básico(1.5)</strong></th><th><strong>Nivel de Desempeño Satisfactorio(2)</strong></th><th><strong>Nivel de Desempeño Sobresaliente(2.5)</strong></th><th><strong>CALIFICACIÓN</strong></th></tr></thead><tbody><tr><td>Identificación efectos sicológicos (20%)</td><td>No identifica correctamente los elementos asociados con las necesidades en su comunidad.</td><td>Identifica algunos de los elementos asociados con las necesidades en su comunidad.</td><td>Identifica la mayoría de los elementos asociados con las necesidades en su comunidad.</td><td>Identifica de manera precisa y completa los elementos asociados las necesidades en su comunidad.</td><td></td></tr><tr><td><p>Factores y creatividad</p><p>(20%)</p></td><td>No define de manera clara y completa los criterios y factores de los recursos escultóricos de liderar las actividades de construcción e influencia interactiva.</td><td>Define de manera parcial los criterios y factores de los recursos escultóricos de liderar las actividades de construcción e influencia interactiva.</td><td>Define de manera clara y completa los roles y responsabilidades de los encargados de liderar las actividades de construcción e influencia interactiva.</td><td>Define de manera clara y completa los roles y responsabilidades de los encargados de liderar las actividades de creación y producción, e incluye roles y responsabilidades adicionales de otros miembros de la comunidad.</td><td></td></tr><tr><td><p>Técnicas y métodos de construcción escultórica</p><p>(20%)</p></td><td>No diseña medidas adecuadas para producir el impacto de el/la ${res[0].title} en su comunidad.</td><td>Diseña medidas básicas para reducir el impacto de el/la ${res[0].title} en su comunidad.</td><td>Diseña medidas efectivas para reducir el impacto de el/la ${res[0].title} en su comunidad.</td><td>Diseña medidas efectivas y creativas para reducir el impacto de el/la ${res[0].title} en su comunidad, e incluye medidas adicionales de recreación.</td><td></td></tr><tr><td><p>Plan de respuesta y elaboracion</p><p>(20%)</p></td><td>No establece un plan de respuesta y recreación en caso de una escultura interactiva en su comunidad.</td><td>Establece un plan básico de respuesta y recreación en caso de un escultura interactiva en su comunidad.</td><td>Establece un plan efectivo de respuesta y recreación en caso de una escultura interactiva en su comunidad.</td><td>Establece un plan efectivo y detallado de respuesta y elaboración en caso de identificar una necesidad sicológica en su comunidad, e incluye medidas adicionales para influir los daños y restaurar los servicios básicos.</td><td></td></tr><tr><td><p>Comunicación</p><p>(20%)</p></td><td>No establece canales de comunicación efectivos para difundir información relevante sobre las el/la ${res[0].title}</td><td>Establece canales de comunicación básicos para difundir información relevante sobre l as el/la ${res[0].title}</td><td>Establece canales de comunicación efectivos para difundir información relevante sobre las el/la ${res[0].title}</td><td>Establece canales de comunicación efectivos y creativos para difundir información relevante sobre las el/la ${res[0].title}</td><td></td></tr></tbody></table></figure>` 
            //res[0].description
            this.showww = res[0].description.replace(new RegExp('<figure class="table">', 'g'), '').replace(new RegExp('</figure>', 'g'), '')
      .replace(/(<script type="math\/tex; mode=display">)(.*)(<\/script>)/g, '$$$$$2$$$$').
      replace(/<figure class="media">/g, '').
      replace(/<\/figure>/g, '')
      .replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)("><\/oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`)
      .replace(/(<script type="math\/tex">)(.*)(<\/script>)/g, '$$$2$$').replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`)
  
      console.log(res[0].description.replace(new RegExp('<figure class="table">', 'g'), '').replace(new RegExp('</figure>', 'g'), '')
      .replace(/(<script type="math\/tex; mode=display">)(.*)(<\/script>)/g, '$$$$$2$$$$').
      replace(/<figure class="media">/g, '').
      replace(/<\/figure>/g, '')
      .replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)("><\/oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`)
      .replace(/(<script type="math\/tex">)(.*)(<\/script>)/g, '$$$2$$').replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`))
            this.id = res[0]._id
            this.loading = ""

            // console.log(res[0].tassks.length< 1)

            // if (res[0].tassks.length < 1) {
            //   this.task.savetaskready('', "Tarea", "Respuesta", res[0]._id, res[0].unidad, res[0].curse, res[0].user, '', this.archivos[0])
            //     .subscribe(
            //       (res: any) => {
            //         this.gettheme()
            //       },
            //       err => console.log(err)
            //     )
            // } else { console.log("www") }

            var www = [];
            var permisos = [];

            for (var j = 0; j < res[0].curso[0].integgers.length; j++) {
              if (res[0].curso[0].integgers[j].tassk.length >= 1) {
                www.push(Number(res[0].curso[0].integgers[j].tassk[0].note))
                console.log(Number(res[0].curso[0].integgers[j].tassk[0].note))
              } else {
                www.push(0)
              }
              if (res[0].curso[0].integgers[j].tipostd=='P') {
                permisos.push(res[0].curso[0].integgers[j].tipostd)
              }
            }
            this.resumena = www.filter(w => w > 10).length
            this.resumenc = www.filter(w => w == 10).length
            this.resumend = www.filter(w => w < 10).length-permisos.length
          },
          err => console.log(err)
        )
    })
  }

  DateNow: string = ""

  getTimeNow() {
    var str = new Date()
    let day = str.getDate()
    let month = str.getMonth() + 1
    let year = str.getFullYear()
    let hour = str.getHours()
    let mnt = str.getMinutes()
    let scn = str.getSeconds()

    let format1 = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T${hour < 10 ? '0' + hour : hour}:${mnt < 10 ? '0' + mnt : mnt}`
    this.DateNow = format1
    // this.Scn = scn
    // console.log(format1, "kkkkkkkk")
  }

  ngOnInit(): void {
    this.gettheme()
    this.getTimeNow()
    console.log(this.photo)
  }

  public opttions: Object = {
    language: 'es',

  }

  onImgError(event: any) {
    event.target.src = './assets/upload.png'
  }
  capturandoFile(event: any) {
    const ww = event.target.files[0]
    this.archivos = []//resetea la matriz a rango 1

    this.archivos.push(ww)
    console.log(this.archivos[0])
    if (event.target.files[0]) {
      this.type = event.target.files[0].type
      this.name = event.target.files[0].name
      //console.log(event.target.files)
      const reader = new FileReader()
      reader.onload = e => this.photoSelected = reader.result
      reader.readAsDataURL(event.target.files[0])
    }
  }

  updatetask(idtask: string) {
    this.routerr.navigate(['/task', idtask])
    //localStorage.setItem("idunity", idunity)
  }


  updatetheme(title: HTMLInputElement, task: HTMLTextAreaElement, solution: HTMLTextAreaElement, time: HTMLInputElement) {
    console.log(time.value)
    this.themesService.updateTheme(this.id, title.value, this.session, task.value, solution.value, time.value, this.archivos[0])
      .subscribe(
        (res: any) => {
          this.loading = "false"
          this.value = Math.round((100 / res.total) * res.loaded)
          console.log(res)
          //console.log(res.loaded)
          if (res.total == res.loaded && res.type > 0) {
            this.loading = ""
            //this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`])
          }
        },
        err => console.log(err)
      )
    return false
  }

  fechanotastasks(iniciar: HTMLInputElement, culminar: HTMLInputElement) {
    // console.log(title.value, time.value)
    this.task.updaterestricted_datetasks(this.photo._id, iniciar.value, culminar.value).subscribe(
      (res) => {
        this.loading = "";
        console.log(res)
        this.getTimeNow()
        this.photo.dateb = iniciar.value
        this.photo.datee = culminar.value
        //this.usser()
      },
      err => console.log(err)
    )
    return false
  }

  fechanotastheme(iniciar: HTMLInputElement, culminar: HTMLInputElement) {
    console.log(this.photo._id, iniciar.value, culminar.value)
    this.task.updaterestricted_datetheme(this.photo._id, iniciar.value, culminar.value).subscribe(
      (res) => {
        this.loading = "";
        console.log(res)
        //this.usser()
        alert("Fechas guardadas");
      },
      err => console.log(err)
    )
    return false
  }

  onChangetype(title: string, event: any, solution: string, time: string) {
    //this.subtype = event.target.value
    this.loading = "false"
    console.log(this.id, title, this.session, event.target.value, solution, time, this.archivos[0])
    this.themesService.updateTheme(this.id, title, this.session, event.target.value, solution, time, this.archivos[0])
      .subscribe(
        (res: any) => {
          this.loading = "false"
          this.value = Math.round((100 / res.total) * res.loaded)
          console.log(res)
          //console.log(res.loaded)
          if (res.total == res.loaded && res.type > 0) {
            this.loading = ""
            //this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`])
          }
        },
        err => console.log(err)
      )
    return false
  }

}
