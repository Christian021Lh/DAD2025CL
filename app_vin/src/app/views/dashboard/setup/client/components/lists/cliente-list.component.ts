import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { abcForms } from '../../../../../../../environments/generals';
import { Cliente } from '../../models/cliente';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-clientes-list',
    imports: [
        CommonModule,
        RouterOutlet,
        MatButtonModule,
        MatIconModule
    ],
    standalone: true,
    template: `
        <div class="w-full mx-auto p-6 bg-white rounded-xl shadow-md">
            <!-- Encabezado principal -->
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white p-5 rounded-lg shadow-sm">
                <h2 class="text-2xl font-bold tracking-tight">
                    Lista de <span class="text-white/90 underline underline-offset-4">Clientes</span>
                </h2>

                <button
                    mat-flat-button
                    color="accent"
                    class="mt-4 sm:mt-0 bg-white text-sky-600 hover:bg-gray-100 transition font-semibold shadow-md rounded px-4 py-2 flex items-center gap-2"
                    (click)="goNew()"
                >
                    <mat-icon [svgIcon]="'heroicons_outline:plus'" class="text-sky-600"></mat-icon>
                    <span>Nuevo Cliente</span>
                </button>
            </div>
        </div>


        <!-- Tabla de clientes -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <div class="p-2 overflow-x-auto">
                <table class="w-full table-fixed">
                    <thead class="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white">
                    <tr>
                        <th class="w-1/6 text-center px-4 py-3 border-r font-semibold">#</th>
                        <th class="w-2/6 text-center px-4 py-3 border-r font-semibold">DNI</th>
                        <th class="w-1/6 text-center px-4 py-3 border-r font-semibold">Nombre</th>
                        <th class="w-2/6 text-center px-4 py-3 border-r font-semibold">Apellidos</th>
                        <th class="w-2/6 text-center px-4 py-3 border-r font-semibold">Teléfono</th>
                        <th class="w-1/6 text-center px-4 py-3 border-r font-semibold">Correo Electrónico</th>
                        <th class="w-2/6 text-center px-4 py-3 font-semibold">Dirección</th>
                    </tr>
                    </thead>
                    <!-- <tbody> ... </tbody> -->


        <tbody *ngFor="let cliente of clientes; let i = index" class="bg-white">
                        <tr class="hover:bg-gray-100">
                            <td class="w-1/6 p-2 text-center border-b">{{ i }}</td>
                            <td class="w-2/6 p-2 text-start border-b text-sm">{{ cliente.dni }}</td>
                            <td class="w-2/6 p-2 text-start border-b text-sm">{{ cliente.nombre }}</td>
                            <td class="w-2/6 p-2 text-start border-b text-sm">{{ cliente.apellidos }}</td>
                            <td class="w-2/6 p-2 text-start border-b text-sm">{{ cliente.telefono }}</td>
                            <td class="w-2/6 p-2 text-start border-b text-sm">{{ cliente.correoElectronico }}</td>
                            <td class="w-2/6 p-2 text-start border-b text-sm">{{ cliente.direccion }}</td>
                            <td class="w-2/6 p-2 text-center border-b text-sm">
                                <div class="flex justify-center space-x-3">
                                    <mat-icon
                                        class="text-amber-400 hover:text-amber-500 cursor-pointer"
                                        (click)="goEdit(cliente.id)">
                                        edit
                                    </mat-icon>
                                    <mat-icon
                                        class="text-rose-500 hover:text-rose-600 cursor-pointer"
                                        (click)="goDelete(cliente.id)">
                                        delete_sweep
                                    </mat-icon>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    `
})
export class ClientListComponent implements OnInit {
    abcForms: any;
    @Input() clientes: Cliente[] = [];
    @Output() eventNew = new EventEmitter<boolean>();
    @Output() eventEdit = new EventEmitter<number>();
    @Output() eventDelete = new EventEmitter<number>();

    constructor(private _matDialog: MatDialog) {}

    ngOnInit(): void {
        this.abcForms = abcForms;
    }

    public goNew(): void {
        this.eventNew.emit(true);
    }

    public goEdit(id: number): void {
        this.eventEdit.emit(id);
    }

    public goDelete(id: number): void {
        this.eventDelete.emit(id);
    }
}
