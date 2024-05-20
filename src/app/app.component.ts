import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderNavbarComponent } from './shared/components/header-navbar/header-navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent { }
