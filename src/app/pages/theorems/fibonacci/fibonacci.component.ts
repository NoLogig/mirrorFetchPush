import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent {
  title = 'fibonacci';

  fibonacciLookup = [
    // tslint:disable-next-line:max-line-length
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025, 20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920, 2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994, 190392490709135, 308061521170129, 498454011879264, 806515533049393, 1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757, 8944394323791464
  ];
  constructor() { }

    /* #### Fibonacci ( Phi Φ ) ####
     *  Bench Profile with 79 numbers
     *  original: 890088ns
     *  memoized: 366415ns
     *  formula:  309792ns
     *  lookup:   191683ns
     */

    // Fibonacci Recursive Generator #worst
    * fibonaccibRecursive(n: number, current = 0, next = 1): IterableIterator<number> {

      if (n === 0) { return 0; }

      yield current;
      yield* this.fibonaccibRecursive(n - 1, next, current + next);
  }

  // Fibonacci Iterative Generator #best if calculate
  * fibonaccibIterative(n: number): IterableIterator<number> {

      const isInfinite = isFinite(n);
      let current = 0,
          next = 1;

      while (!isInfinite || n--) {
          yield current;
          [current, next] = [next, current + next];
      }
  }

  // Fibonacci lookup Array #best if memory is wayne
  * fibonacciLookupGenerator(n: number): IterableIterator<number> {

      if (n > 79) { throw new Error('Not available for n > 79.'); }
      yield* this.fibonacciLookup.slice(0, n);
  }

  // Formula way is fastest as values don’t need to be higher than `75`
  * fibonacciFormula(n: number): IterableIterator<number> {

      const isInfinite = isFinite(n);
      let current = 0;

      while (!isInfinite || n--) {
          yield this.fibFormulaCalc(current);
          current++;
      }
  }
  fibFormulaCalc(n: number): number {
      return Math.round((1 / Math.sqrt(5)) * ( Math.pow(((1 + Math.sqrt(5)) * .5), n) - Math.pow(((1 - Math.sqrt(5)) * .5), n)));
  }


}
