import { NavCompComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InhaltComponent } from './inhalt/inhalt.component';




import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { Footer } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { JobsComponent } from "./jobs/jobs.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        HomeComponent,
        NavCompComponent,
        MatButtonModule,
        MatBadgeModule,
        MatMenuModule,
        InhaltComponent,
        Footer,
        FormComponent,
        JobsComponent
    ]
})
export class AppComponent {}
