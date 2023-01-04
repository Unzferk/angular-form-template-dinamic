import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080 ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(100),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  validField(field: string) {
    return (
      this.miFormulario.controls[field].errors &&
      this.miFormulario.controls[field].touched
    );
  }
  save() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'rtx',
      precio: 400,
      existencias: 3,
    });
  }
}
