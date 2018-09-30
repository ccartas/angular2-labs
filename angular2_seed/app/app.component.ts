import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
        <h1>My first component</h1>
        <h3>Hello {{name}}</h3>
        <notes></notes>
    `
})
export class AppComponent {
    name: string = "Cosmin";
}