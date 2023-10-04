import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  constructor(private router: Router) {}

  menuVisible = false;
  usuario = '';
  ngOnInit(): void {
    this.menuVisible = false;
  }

  openMenu() {
    if (this.menuVisible) {
      this.menuVisible = false;
    } else {
      this.menuVisible = true;
    }
  }

  validaToken() {
    const sessao = sessionStorage.getItem('usuario_logado');
    if (sessao == null) {
      this.router.navigate(['/login']);
    } else {
    }
  }
}
