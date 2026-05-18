import { Component, OnInit } from '@angular/core';
import { Svc14MVService } from '../../services/svc14-mv.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import '../../../assets/calligra-normal';

@Component({
  selector: 'app-cmpt30-documentos',
  templateUrl: './cmpt30-documentos.component.html',
  styleUrls: ['./cmpt30-documentos.component.css']
})
export class Cmpt30DOCUMENTOSComponent implements OnInit {
  public Editor = ClassicEditor
  public title!: string;
  public description!: string;
  public img!: string;
  markdown!: string;
  public loading!: string;
  public _value: number = 0;
  data: any = [];
  public photoSelected!: string | ArrayBuffer | null;
  type!: string;
  name!: string;
  id!: string;
  public archivos: any = [];
  apiUrl = environment.apiURL;
  rol = localStorage.getItem('rol')

  constructor(
    private router: ActivatedRoute,
    private routerr: Router,
    private Service: Svc14MVService,
    private modal: NgbModal,
  ) { }

  public configg = { language: 'es', toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "|", "indent", "outdent", "|", "blockQuote", "insertTable", "|", "undo", "redo"], placeholder: 'Descripción' }
  //  public configg = { language: 'es', toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "|", "indent", "outdent", "|", "blockQuote", "insertTable", "math", "mediaEmbed", "|", "undo", "redo"] }

  //   var pl = new Preloader();
  // pl.setPicture("pdf/a.jpg");
  // pl.setPicture("pdf/b.jpg");
  // pl.setPicture("pdf/c.jpg");

  // pl.onpicturesloaded = function() {
  //     var doc = new jsPDF();
  //     var pic = pl.pictures["a"];
  //     doc.addImage(pic.img, "jpg", 10, 10, 100, 100, pic.img.alt, "FAST");
  //     // add more images, print text, and so on
  //     doc.save('mydocument.pdf');
  // };  
  // pl.loadPictures()

  onchange() {
    const wwwww =
    {
      "_id": "62cf8d3194bde2c00225a36f",
      "title": "Random Text Generator is a web application",
      "institute": "Random Text Generator is a web application Random Text Generator is a web application",
      "code": "62cf8d3194bde2c00225a36f",
      "description": "Random Text Generator is a web application which provides true random text which you can use in your documents or web designs. How does it work? First we took many books available on project Gutenberg and stored their contents in a database. Then a computer algorithm takes the words we stored earlier and shuffles them into sentences and paragraphs. The algorithm takes care to create text that looks similar to an ordinary book but without any real meaning. The reason we want our text to be meaningless is that we want the person viewing the resulting random text to focus on the design we are presenting, rather than try to read and understand the text. Its better than Lorem ipsum because it can produce text in many languages and in particular: Chinese, Dutch, English, Finnish, French, German, Greek, Hebrew, Italian, Japanese, Latin, Polish, Portuguese, Russian, Serbian and Spanish. Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing",
      "new": "The reason we want our text to be meaningless is that we want the person viewing the resulting random text to focus on the design we are presenting, rather than try to read and understand the text. Its better than Lorem ipsum because it can produce text in many languages and in particular: Chinese, Dutch, English, Finnish, French, German, Greek, Hebrew, Italian, Japanese, Latin, Polish, Portuguese, Russian, Serbian and Spanish. Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing",
      "user": "George, Charles Edward",
      "type": "DIPLOMADO",
      "signature1": "George, Charles Edward",
      "signature2": "George, Charles Edward",
      "signature3": "George, Charles Edward",
      "updatedAt": "2026-02-17T02:27:57.149Z",
      "__v": 0,
      "responce": null,
      "file": "uploads/collection/4e464faa-430e-4b3b-ae50-71a7a0db3a1b.jpg"
    }
    const doc = new jsPDF({ unit: 'cm', orientation: "landscape", format: [32, 21] })
    // 2. Create an Image object
    var myImage = new Image();
    myImage.src = './assets/logo.png'; // Specify the path to your PNG
    console.log(myImage.outerHTML)
    // 3. Use the onload event
    myImage.onload = function () {
      // Add the image to the PDF once it is loaded
      // Parameters: image object, format ('PNG'), x-coordinate, y-coordinate, width, height
      doc.addImage(myImage, 'PNG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
      let logo = '<svg width="234px" height="74px" x="0px" y="0px" viewBox="0 0 234 74" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="234" height="74" style="fill:#ffffff;"/><g transform="translate(10, 10)" style="fill:#000000;"><text style="font: 12px monospace" text-anchor="start" x="0" y="54">2</text></g><g transform="translate(34, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="48"/><rect x="4" y="0" width="2" height="48"/><text style="font: 12px monospace" text-anchor="middle" x="3" y="62"></text></g><g transform="translate(40, 10)" style="fill:#000000;"><rect x="6" y="0" width="2" height="40"/><rect x="10" y="0" width="4" height="40"/><rect x="20" y="0" width="2" height="40"/><rect x="24" y="0" width="4" height="40"/><rect x="30" y="0" width="2" height="40"/><rect x="36" y="0" width="6" height="40"/><rect x="44" y="0" width="2" height="40"/><rect x="50" y="0" width="6" height="40"/><rect x="62" y="0" width="4" height="40"/><rect x="68" y="0" width="2" height="40"/><rect x="72" y="0" width="2" height="40"/><rect x="78" y="0" width="6" height="40"/><text style="font: 12px monospace" text-anchor="middle" x="42" y="54">990000</text></g><g transform="translate(124, 10)" style="fill:#000000;"><rect x="2" y="0" width="2" height="48"/><rect x="6" y="0" width="2" height="48"/><text style="font: 12px monospace" text-anchor="middle" x="5" y="62"></text></g><g transform="translate(134, 10)" style="fill:#000000;"><rect x="0" y="0" width="6" height="40"/><rect x="10" y="0" width="2" height="40"/><rect x="14" y="0" width="6" height="40"/><rect x="24" y="0" width="2" height="40"/><rect x="28" y="0" width="4" height="40"/><rect x="36" y="0" width="4" height="40"/><rect x="42" y="0" width="4" height="40"/><rect x="50" y="0" width="4" height="40"/><rect x="56" y="0" width="4" height="40"/><rect x="64" y="0" width="4" height="40"/><rect x="70" y="0" width="2" height="40"/><rect x="76" y="0" width="6" height="40"/><text style="font: 12px monospace" text-anchor="middle" x="42" y="54">001115</text></g><g transform="translate(218, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="48"/><rect x="4" y="0" width="2" height="48"/><text style="font: 12px monospace" text-anchor="middle" x="3" y="62"></text></g></svg>'
      doc.addSvgAsImage(logo, 1, 1, 10, 10)



      doc.advancedAPI(() => {
        doc.saveGraphicsState();
        // Use DOMMatrix to create a transformation matrix (translate, rotate, scale)
        let { a, b, c, d, e, f } = new DOMMatrix()
          .translate(-5, doc.internal.pageSize.height / 2)
          .rotate(-45);

        doc.setCurrentTransformationMatrix(doc.Matrix(a, b, c, d, e, f));
        // Draw the shape at a relative origin (e.g., 0, 0)
        for (let i = 1; i < 6; i++) {
          // doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'S');
          doc.setLineWidth(5 / i)
          doc.setDrawColor(155, 155, 35 * i)
          // doc.setFillColor(155, 155, 155)
          let offset = 10;
          doc.rect(-3 + i, 1 + i, 36 - (2 * i), 23 - (2 * i), 'S');
          // doc.rect(0, 0, doc.internal.pageSize.width - i, doc.internal.pageSize.height - i, 'S');
        }
        doc.fill();
        doc.restoreGraphicsState();
      })

      doc.setLineWidth(.1)
      doc.setFillColor(255, 255, 255)

      doc.setDrawColor(255, 255, 255)
      doc.roundedRect(.5, .5, doc.internal.pageSize.width - 1, doc.internal.pageSize.height - 1, 1, 1, 'S')
      doc.setDrawColor(255, 35, 0)
      doc.roundedRect(1, 1, doc.internal.pageSize.width - 2, doc.internal.pageSize.height - 2, 1, 1, 'FD')

      const widthh = doc.internal.pageSize.width
      const heightt = doc.internal.pageSize.height

      var ytag = 3;
      doc.setFontSize(21)
      var splittedText = doc.splitTextToSize(wwwww.institute, 2 * widthh / 3)
      var lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      var blockHeight = splittedText.length * lineHeight
      doc.text(splittedText, widthh / 2, ytag, { maxWidth: 2 * widthh / 3, align: 'center' })
      ytag += blockHeight + .5

      doc.setFontSize(29)
      var splittedText = doc.splitTextToSize(wwwww.title, widthh / 2)
      var lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      var blockHeight = splittedText.length * lineHeight
      doc.text(splittedText, widthh / 2, ytag, { maxWidth: widthh / 2, align: 'center' })
      ytag += blockHeight + .5

      doc.setFontSize(14)
      doc.text(wwwww.description, widthh / 19, ytag, { maxWidth: 17 * widthh / 19, align: 'justify' })
      var splittedText = doc.splitTextToSize(wwwww.description, 17 * widthh / 19)
      var lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      var blockHeight = splittedText.length * lineHeight
      ytag += blockHeight + .5

      doc.text(wwwww.new, widthh / 19, ytag, { maxWidth: 17 * widthh / 19, align: 'justify' })
      var splittedText = doc.splitTextToSize(wwwww.new, 17 * widthh / 19)
      var lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      var blockHeight = splittedText.length * lineHeight

      ytag += blockHeight + .5
      doc.text(wwwww.updatedAt, widthh / 19, ytag, { maxWidth: 17 * widthh / 19, align: 'justify' })
      ytag += 1
      doc.text(wwwww.code, widthh / 19, ytag, { maxWidth: 17 * widthh / 19, align: 'justify' })
      ytag += 1
      doc.text(wwwww.code, widthh / 19, ytag, { maxWidth: 17 * widthh / 19, align: 'justify' })

      doc.setFont('courier', 'bold')
      doc.setFontSize(19)
      doc.setTextColor(1, 198, 255);

      doc.text(wwwww.signature1, 1 * widthh / 6, 15 * heightt / 16, { maxWidth: 2 * widthh / 6, align: 'center' });
      doc.text(wwwww.signature2, 3 * widthh / 6, 15 * heightt / 16, { maxWidth: 2 * widthh / 6, align: 'center' });
      doc.text(wwwww.signature3, 5 * widthh / 6, 15 * heightt / 16, { maxWidth: 2 * widthh / 6, align: 'center' });


      // Save the generated PDF
      doc.save('downloaded-pdf-with-image.pdf');
    };


    // Handle potential errors if the image fails to load
    myImage.onerror = function () {
      console.error("Error loading image");
    };

  }

  capturandoFile(event: any) {
    const ww = event.target.files[0];
    this.archivos = [];
    this.archivos.push(ww);
    if (event.target.files[0]) {
      this.type = event.target.files[0].type;
      this.name = event.target.files[0].name;
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  get value(): number {
    return this._value;
  }
  set value(value: number) {
    if (!isNaN(value) && value <= 100) {
      this._value = value;
    }
  }

  onImgError(event: any) {
    event.target.src = './assets/negz.png'
  }

  options = {
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
      "pinned": "bounceInDown",
      "unpinned": "bounceOutUp"
    }
  };

  gets() {
    this.Service.gets("DOCUMENTOS")
      .subscribe(
        (res: any) => {
          this.data = res;
          console.log(res);
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(localStorage.getItem('idcurso') || "")
      this.gets()
    });
  }

  create() {
    this.Service.save(localStorage.getItem('id') || "", "DOCUMENTOS")
      .subscribe(
        (res: any) => {
          console.log(res);
          this.gets()
        },
        err => console.log(err)
      )
  }


  delete(id: string) {
    if (window.confirm('Desea borrar este documento?')) {
      this.Service.remove(id)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.gets()
          },
          err => console.log(err)
        )
    }
  }

  open1(ww: any, id: string, title: string, description: string, file: string) {
    this.id = id;
    this.title = title;
    this.img = file;
    this.markdown = description;
    this.modal.open(ww, { size: 'xl', scrollable: false })
  }

  open2(w: any, id: string, title: string, description: string, file: string) {
    this.id = id;
    this.title = title;
    this.img = file;
    this.markdown = description;
    this.modal.open(w, { size: 'xl', scrollable: false })
  }

  updatenews(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.Service.update(this.id, title.value, description.value, this.archivos[0])
      .subscribe(
        (res: any) => {
          this.loading = "false";
          this.value = Math.round((100 / res.total) * res.loaded);
          console.log(res.total);
          console.log(res.loaded);
          if (res.total == res.loaded && res.type > 0) {
            this.loading = "";
            this.modal.dismissAll();
            this.gets()
            this.img = "";
            this.value = 0;
            this.name = "";
            this.photoSelected = ""
          }
        },
        err => console.log(err)
      )
  }

}
