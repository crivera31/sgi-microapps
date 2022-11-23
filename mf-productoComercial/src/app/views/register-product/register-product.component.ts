import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoComercial } from 'src/app/mocks/mock.interface';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {
  prueba = {
    "nombre": "Producto enesimo",
    "bin": "QWERTY11",
    "volumenPaquete": 220,
    "descripcion": "Esto es una descripcion de otro producto",
    "sku": "0987ASA",
    "stockMinimo": 170,
    "numeroMesesStockMinimo": 8,
    "consumoPromedio": 210,
    "codigoAfinidad": {
      "id": 1
    },
    "codigoMarcaProductoComercial": {
      "id": 2
    },
    "codigoMarcaTipoProductoComercial": {
      "id": 4
    },
    "codigoTipoTarjeta": {
      "id": 2
    },
    "precio": 125.70
  };
  lstMarca = [
    {
      id: 1,
      name: "marca1"
    },
    {
      id: 2,
      name: "marca2"
    }
  ];
  lstMarcaTipo = [
    {
      id: 1,
      name: "marca-tipo1"
    },
    {
      id: 2,
      name: "marca-tipo2"
    }
  ];
  lstAfinidad = [
    {
      id: 1,
      name: "afinidad1"
    },
    {
      id: 2,
      name: "afinidad2"
    }
  ];
  lstTipoTarjeta = [
    {
      id: 1,
      name: "tipo-tarjeta1"
    },
    {
      id: 2,
      name: "tipo-tarjeta2"
    }
  ];

  public miForm!: FormGroup;
  public productoComercial!: ProductoComercial
  public imgTemp1: any = '';
  public imgTemp2: any = '';
  public fileOg!: File;
  public fileOp!: File;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    
  }

  createForm() {
    this.miForm = this.fb.group({
      imgObligatorio: ['', [Validators.required]],
      imgOpcional: [''],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      bin: ['', [Validators.required]],
      codigoMarcaProductoComercial: ['', [Validators.required]],
      codigoMarcaTipoProductoComercial: ['', [Validators.required]],
      codigoAfinidad: ['', [Validators.required]],
      codigoTipoTarjeta: ['', [Validators.required]],
      volumenPaquete: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      numeroMesesStockMinimo: ['', [Validators.required]],
      consumoPromedio: ['', [Validators.required]],
      stockMinimo: ['', [Validators.required]],
      precio: ['', [Validators.required]]
    });
  }

  onFileOg(event:any){
    this.fileOg = event.target.files[0];

    console.log("fichero", this.fileOg);
    const reader = new FileReader();
    const url64 = reader.readAsDataURL(this.fileOg);

    reader.onloadend = () => {
      this.imgTemp1 = reader.result;
    }
  }

  onFileOp(event:any){
    this.fileOp = event.target.files[0];

    console.log("fichero", this.fileOp);
    const reader = new FileReader();
    const url64 = reader.readAsDataURL(this.fileOp);
    reader.onloadend = () => {
      this.imgTemp2 = reader.result;
    }
  }

  onSave() {
    const { nombre,bin,volumenPaquete,descripcion,sku,stockMinimo,
      numeroMesesStockMinimo,consumoPromedio,codigoAfinidad,precio,
      codigoMarcaTipoProductoComercial,codigoTipoTarjeta,codigoMarcaProductoComercial } = this.miForm.value;
    const body = {
      nombre,bin,volumenPaquete,descripcion,sku,stockMinimo,
      numeroMesesStockMinimo,consumoPromedio,codigoAfinidad,
      codigoMarcaTipoProductoComercial,codigoTipoTarjeta,codigoMarcaProductoComercial,
      img: this.fileOg,
      estado: 1,
      precio
    }
    // console.log(this.miForm.value);
    console.log(body)
  }

}
