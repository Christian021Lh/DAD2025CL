import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { abcForms } from '../../../../../../../environments/generals';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-category-list',
    imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
    standalone: true,
    template: `
        <div class="w-full mx-auto p-6 bg-white rounded-xl overflow-hidden shadow-lg">
            <!-- Encabezado principal -->
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white p-5 rounded-lg shadow-sm">
                <h2 class="text-2xl font-bold tracking-tight">
                    Lista de <span class="underline underline-offset-4 decoration-white/60">Productos</span>
                </h2>

                <button
                    mat-flat-button
                    color="accent"
                    class="mt-4 sm:mt-0 bg-white text-sky-600 hover:bg-gray-100 transition font-semibold shadow-md rounded px-4 py-2 flex items-center gap-2"
                    (click)="goNew()"
                >
                    <mat-icon [svgIcon]="'heroicons_outline:plus'" class="text-sky-600"></mat-icon>
                    <span>Nuevo Producto</span>
                </button>
            </div>
        </div>

        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <div class="p-2 overflow-x-auto">
                <table class="w-full table-fixed">
                    <thead class="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white">
                    <tr>
                        <th class="w-1/6 text-center px-5 py-3 border-r font-semibold">#</th>
                        <th class="w-2/6 text-center px-5 py-3 border-r font-semibold">Nombre</th>
                        <th class="w-2/6 text-center px-5 py-3 border-r font-semibold">Descripción</th>
                        <th class="w-2/6 text-center px-5 py-3 border-r font-semibold">Código</th>
                        <th class="w-2/6 text-center px-5 py-3 font-semibold">Acciones</th>
                    </tr>
                    </thead>
                    <!-- <tbody> ... </tbody> -->
                </table>


        <tbody
                            class="bg-white"
                            *ngFor="let r of categories; let i = index">
                        <tr class="hover:bg-gray-100">
                            <td class="w-1/6 p-2 text-center border-b">
                                {{ i }}
                            </td>
                            <td class="w-2/6 p-2  text-start border-b text-sm">
                                {{ r.name }}
                            </td>
                            <td class="w-2/6 p-2  text-start border-b text-sm">
                                {{ r.description }}
                            </td>
                            <td class="w-2/6 p-2  text-start border-b text-sm">
                                {{ r.code }}
                            </td>
                            <td class="w-2/6 p-2 text-center border-b text-sm">
                                <div class="flex justify-center space-x-3">
                                    <mat-icon class="text-amber-400 hover:text-amber-500 cursor-pointer"
                                              (click)="goEdit(r.id)">edit
                                    </mat-icon>

                                    <mat-icon class="text-rose-500 hover:text-rose-600 cursor-pointer"
                                              (click)="goDelete(r.id)">delete_sweep
                                    </mat-icon>
                                    <!-- <mat-icon
                                         class="text-sky-400 hover:text-sky-600 cursor-pointer"
                                         (click)="goAssign(r.id)"
                                         >swap_horiz
                                     </mat-icon>-->
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    <!--<div class="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button class="text-sm text-primary-50 transition duration-150 hover:bg-primary-500 bg-primary-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            &nbsp; &nbsp;
                            <button class="text-sm text-primary-50 transition duration-150 hover:bg-primary-500 bg-primary-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>-->
                </div>
            </div>

    `,
})
export class ClientListComponent implements OnInit {
    abcForms: any;
    @Input() categories: Category[] = [];
    @Output() eventNew = new EventEmitter<boolean>();
    @Output() eventEdit = new EventEmitter<number>();
    @Output() eventDelete = new EventEmitter<number>();
    @Output() eventAssign = new EventEmitter<number>();

    constructor(private _matDialog: MatDialog) {}

    ngOnInit() {
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
