import { Component } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

    categoriesList: any = [];
    categoriesListDisplay: any = [];
    strSearch: any;

    constructor(private service: CategoriesService) { }

    async ngOnInit() {
        try {
            this.categoriesList = await this.service.getCategories();
            this.categoriesListDisplay = this.categoriesList.categories;
            console.log(this.categoriesList);
        } catch (error) {
            console.log(error);
        }
    }

    searchList() {
        let defaultTableData: any;

        defaultTableData = this.categoriesList.categories;
        this.categoriesListDisplay = defaultTableData.filter((str: any) => {
            return str.toLowerCase().indexOf(this.strSearch.toLowerCase()) !== -1;
        });
    }

}
