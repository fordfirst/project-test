import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'any' })
export class CategoriesService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    async getCategories() {
        let url = `https://api.publicapis.org/categories`;

        return this.httpClient.get<any>(url).toPromise();
    }

}
