import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
//import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private www: UsersService, private router: Router, private authservice:AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('id')) {
      this.router.navigate(['/dashboard'])
    }
  }

  loginw(email: HTMLInputElement, password: HTMLInputElement) {
    this.www
      .sign(email.value, password.value)
      .subscribe(
        res => {
          if (res.user._id) {
            console.log(res);
            localStorage.setItem('id', res.user._id);
            localStorage.setItem('rol', res.user.rol);
            localStorage.setItem('imguser', res.user.foto);
            localStorage.setItem('logindate', res.user.logindate);
            this.router.navigate(['/dashboard'])
          } else {
            alert(res.user.msg)
            // console.log(res)
          }
          this.www.updaterestricted_datelogin().subscribe(
            res => {
              
            },
            err => console.log(err)
          )
        },
        err => console.log(err)
      )
    return false;
  }


/*   Images: Array<object> = [
    {
      src: 'assets/negy.jpg',
      alt: 'Image 1',
    }, {
      src: 'assets/negx.jpg',
      alt: 'Imagewwwwwwwwwww 2'
    }, {
      src: 'assets/posx.jpg',
      alt: 'Imagewwwwwwwwwww 3'
    }, {
      src: 'assets/negy.jpg',
      alt: 'Imagewwwwwwwwwww 4'
    }, {
      src: 'assets/posy.jpg',
      alt: 'Imagewww'
    },
  ]

  config: SwiperOptions = {
    autoplay: {
      delay: 600,
      disableOnInteraction: false
    },
    speed: 800,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 15,
      stretch: 15,
      depth: 5,
      modifier: 5
    }
  };
 */}
