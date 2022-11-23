import { Component, OnInit } from '@angular/core';
import { MockService } from './mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lstMenu = [
    {
      titulo: 'Producto Comercial',
      submenu: [
        {
          titulo: 'Agregar',
          url: 'producto-comercial/registrar'
        },
        {
          titulo: 'Editar',
          url: 'producto-comercial/editar'
        }
      ]
    },
    {
      titulo: 'Proveedores',
      submenu: [
        {
          titulo: 'Agregar',
          url: 'proveedores/listar'
        },
      ]
    }
  ]

  lstData = [];
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    console.log('asas')
    this.mockService.getMock().subscribe(
      res => {
        this.lstData = res;
        console.log(typeof res)
      }
    )
  }

}
