import { Component } from '@angular/core';

@Component({
    selector: 'app-question-1',
    templateUrl: './question-1.component.html',
    styleUrls: ['./question-1.component.css']
})
export class Question1Component {

    number: any;
    selectValue: string = 'isPrime';
    resultValue: any;

    constructor() { }

    async ngOnInit() { }

    setValueNumber() {
        if (this.number) {
            this.number = this.number.toFixed(0);
            if (this.number < 0) {
                this.number = 1;
            }

            if (this.selectValue == 'isPrime') {
                this.resultValue = this.checkIsPrime(this.number);
            } else {
                this.resultValue = this.checkIsFibonacci(this.number);
            }
        }
    }

    checkIsPrime(value: any) {
        for (let i = 2, s = Math.sqrt(value); i <= s; i++)
            if (value % i === 0) return false;
        return value > true;
    }

    checkIsFibonacci(value: any) {
        let a = 0;
        let b = 1;
        if (value == a || value == b) return true;
        let c = a + b;
        while (c <= value) {
            if (c == value) return true;
            a = b;
            b = c;
            c = a + b;
        }
        return false;
    }

    changeSelect() {
        if (this.selectValue == 'isPrime') {
            this.resultValue = this.checkIsPrime(this.number);
        } else {
            this.resultValue = this.checkIsFibonacci(this.number);
        }
    }

}
