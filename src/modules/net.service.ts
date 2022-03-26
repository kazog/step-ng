/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 
 @Injectable()
 export class NetService {
   constructor(private http: HttpClient) { }
 }