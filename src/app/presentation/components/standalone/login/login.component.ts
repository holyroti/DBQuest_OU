import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared-services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Player } from '../shared-services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

//Login and register component.
export class LoginComponent {
  // Login fields
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showRegisterModal = false;

  // Registration fields
  regUsername: string = '';
  regDisplayName: string = '';
  regPassword: string = '';

  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService) { }

  //Authenticate the user with the authService. If validated, redirects to the landing page. Otherwise display an error log
  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe({
      next: (user) => {
        this.router.navigate(['/landing']);
        this.toastr.info(`Login succesvol, welkom ${user.DISPLAYNAME}!`, 'Welkom!');
      },
      error: (err) => {
        this.errorMessage = err?.message || 'Login gefaald';
        this.toastr.info('Ongeldige Gebruikersnaam of Wachtwoord. Inloggegevens kwijt? Registreer je dan opnieuw!', 'Fout');
      }
    });
  }

  openRegisterModal(): void {
    this.showRegisterModal = true;
  }

  closeRegisterModal(): void {
    this.showRegisterModal = false;
  }

  //Validate the register form fields, registers and redirects to the landing page
  register(): void {
    const payload = {
      username: this.regUsername,
      displayName: this.regDisplayName,
      password: this.regPassword,
      icon: 'assets/avatars/icon3.png',
    };

    // simple form checking
    if (!payload.username || !payload.displayName || !payload.password) {
      this.toastr.error('Vul alle velden in.');
      return;
    }

    this.authService.register(payload).subscribe({
      next: () => {
        this.toastr.info('Je bent succesvol geregistreerd!', 'Welkom!');
        this.closeRegisterModal();

        // redirects to the landing page
        this.authService.authenticate(payload.username, payload.password).subscribe({
          next: (user: Player) => {
            this.router.navigate(['/landing']);
            this.toastr.info(`Welkom ${user.DISPLAYNAME}!`, 'Ingelogd');
          },
          error: (err) => {
            this.toastr.error(err?.message || 'Fout bij automatisch inloggen');
          }
        });
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || 'Registratie mislukt');
      }
    });
  }
}
