import { Component, OnInit } from '@angular/core';
import { Typed } from 'typed.ts/lib/cjs/typed';

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.scss']
})
export class TelainicialComponent implements OnInit {

  TextDigitalizer:string='';

  constructor(){
    window.addEventListener('scroll',()=>{
      this.Menu();

    })
  }

  ngOnInit(): void {
    this.TypedText();
  }

  Menu(){
    var home = document.querySelectorAll('[data-button]');
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    home.forEach((element:any)=>{
      var btn = document.getElementById('btnUp') as HTMLElement;
        if((windowTop) > element.offsetTop){
          btn.style.display = 'block';
        }else{
          btn.style.display = 'none';
        }
    })
  }

  MenuHidden() {
    let menu = document.querySelector('.nav-contentt') as HTMLElement;
    let bar = document.getElementById('bar') as HTMLElement;
    let barclose = document.getElementById('barclose') as HTMLElement;

    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      barclose.style.display = "none";
      bar.style.display = "block";
    }
     else{
      menu.classList.add('open');
      bar.style.display = "none";
      barclose.style.display = "block";
   }
     document.querySelectorAll(".navText").forEach(element => {
        element.addEventListener("click", () =>{
          menu.classList.remove('open');
          bar.style.display = "block";
          barclose.style.display = "none";
        })
     });
   }

   btnReset(){
    var btn = document.getElementById('btnUp')  as HTMLElement;
    if(document.documentElement.scrollTop >90){
      btn.style.display = "block";
      window.scrollTo(0, 0);
    }
  }

  TypedText(){
    var id = document.getElementById('fsd') as HTMLElement;
   }



}
