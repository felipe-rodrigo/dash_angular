import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    codigo: null,
    nomeCompleto: [null, Validators.required],
    cpf: [null, Validators.required],
    rg: [null, Validators.required],
    endereco: null,
    numero: [null, Validators.required],
    complemento: [null, Validators.required],
    bairro: [null, Validators.required],
    cidade: [null, Validators.required],
    estado: [null, Validators.required],
    cep: [null, Validators.required],
    telefone1: [null, Validators.required],
    telefone2: [null, Validators.required],
    email: [null, Validators.required],
    observacao: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    // shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  estados = [
    {name: 'Acre', abbreviation: 'AC'},
    {name: 'Alagoas', abbreviation: 'AL'},
    {name: 'Amapá', abbreviation: 'AP'},
    {name: 'Amazonas', abbreviation: 'AM'},
    {name: 'Bahia', abbreviation: 'BA'},
    {name: 'Ceará', abbreviation: 'CE'},
    {name: 'Distrito Federal', abbreviation: 'DF'},
    {name: 'Espírito Santo', abbreviation: 'ES'},
    {name: 'Goiás', abbreviation: 'GO'},
    {name: 'Maranhão', abbreviation: 'MA'},
    {name: 'Mato Grosso', abbreviation: 'MT'},
    {name: 'Mato Grosso do Sul', abbreviation: 'MS'},
    {name: 'Minas Gerais', abbreviation: 'MG'},
    {name: 'Pará', abbreviation: 'PA'},
    {name: 'Paraíba', abbreviation: 'PB'},
    {name: 'Paraná', abbreviation: 'PR'},
    {name: 'Pernambuco', abbreviation: 'PE'},
    {name: 'Piauí', abbreviation: 'PI'},
    {name: 'Rio de Janeiro', abbreviation: 'RJ'},
    {name: 'Rio Grande do Norte', abbreviation: 'RN'},
    {name: 'Rio Grande do Sul', abbreviation: 'RS'},
    {name: 'Rondônia', abbreviation: 'RO'},
    {name: 'Roraima', abbreviation: 'RR'},
    {name: 'Santa Catarina', abbreviation: 'SC'},
    {name: 'São Paulo', abbreviation: 'SP'},
    {name: 'Sergipe', abbreviation: 'SE'},
    {name: 'Tocantins', abbreviation: 'TO'}
  ];


  onSubmit(): void {
    alert('Thanks!');
  }
}
