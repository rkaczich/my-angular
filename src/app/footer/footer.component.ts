// 2. Input Deklaration importieren
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  // 3. Property mit @Input() anlegen
  @Input() copyright:string = "";

  @Input() redCssStyle = "";

  @Input() textContent = "";

  text = "Ein ganzer Satz....";

  constructor() {
  }

  ngOnInit(): void {
  }

}
