import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss']
})
export class PageTitle {
    // now I'm setting the page title dynamically, using
    // data that was passed in from the main view
    @Input() title: string;
}
