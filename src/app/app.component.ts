import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular13Project';
  transformValue = "translateX(17rem)"

  private isOpen = false;

  constructor(private el: ElementRef) {

  }

  onClick() {
    console.log("On Click Works");
    this.isOpen = !this.isOpen;
    // const element = this.el.nativeElement.getElementsByClassName('side-menu')[0] as HTMLElement;

    // console.log(element.);
    // element.tra
    // element.style.transform = 'translateX(0)';
    this.transformValue = !this.isOpen ? "translateX(17rem)" : "translateX(0)";
  }
}
