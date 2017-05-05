import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<!--h1>Hello {{name}}</h1-->

            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <span  class="navbar-brand">The independent shop</span>
                    </div>
                    <ul class="nav navbar-nav">
                        <li routerLinkActive="active"><a routerLink="/welcome" >Home</a></li>
                        <li routerLinkActive="active"><a routerLink="/about" >about</a></li>
                        
                        
                    </ul>
                </div>
            </nav>

             <router-outlet></router-outlet>
            `,
})
export class AppComponent  { name = 'Angular'; }





// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//              <button (click)='sayHello()'>Say hello</button>
//             `,   
// })
// export class AppComponent  { 
//     name:string = 'Angular'; 

//     sayHello():void{
//         this.name = "Mellon";
//     }
// }