import { Component, Injectable } from '@angular/core';

@Injectable()
export class saborModel {

    constructor() {}
    
    //parametros utilizados na visualização
    id: number;
    name: string;
    quantidade_sabores: number;

}