import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Aca comienza el proyecto de alquiler de mascotas {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
