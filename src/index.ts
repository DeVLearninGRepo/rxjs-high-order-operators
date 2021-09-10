import { interval, Observable } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';

let style = 'background: #1f1f1f; color: #dcdcdc; font-weight: bold; font-size: 16px; padding: 5px 15px 5px 5px;'

console.debug("%c exhaustMap", style);

let interval$ = interval(1000).pipe(take(10));

interval$.pipe(
  tap(x => console.debug('tick', x)),
  exhaustMap(x => innerObservable(x))
).subscribe(x => {
  console.debug('processed tick', x);
}, (err) => {

}, () => {
  console.debug('completed');
});

function innerObservable(tickIndex: number) {
  return new Observable<number>(x => {
    setTimeout(() => {
      x.next(tickIndex);
      x.complete();
    }, generateRandom(1, 2000));
  });
}

function generateRandom(min: number, max: number) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}