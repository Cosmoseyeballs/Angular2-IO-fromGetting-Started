import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/about.component.html'
})
export class AboutComponent {
    pageTitle: string = 'About The independent shop'; 
    bodyText:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    
    info:any = [
        "501 Buckland Rd, Matamata 3472",
        "+64 7-888 1505",
        "bilbo@baggins.nz"
    ]

    showInfo: boolean = false;

    showInfoClick():void {
        this.showInfo = !this.showInfo;
    }

}




