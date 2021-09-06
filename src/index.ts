import { fromEvent, interval, Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { concatMap, exhaustMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';

let style = 'background: #214361; color: #fabd05; font-weight: bold; font-size: 16px; padding: 5px 15px 5px 5px;'

//esempio 1
//let interval$ = interval(1000).pipe(take(10));

//interval$
//     .pipe(
//         map(x => x * 50)
//     ).subscribe(x => {
//         console.debug(x);
//     });


//esempio 2
// let interval$ = interval(1000).pipe(take(10));

// interval$
//     .pipe(
//         tap(x => console.debug('tick', x)),
//         map(x => innerObservable()),
//         //mergeMap(x => innerObservable$.pipe(map(y => x))),
//         take(1)
//     ).subscribe(x => {
//         console.debug('subscribed tick', x);
//     });

// function innerObservable(tickIndex: number) {
//     return new Observable<number>(x => {
//          x.next(tickIndex);
//          x.complete();
//     });
// }


//concatMap
//console.debug('%c ConcatMap', style);
// let interval$ = interval(1).pipe(take(10));

// interval$
//     .pipe(
//         tap(x => console.debug('tick', x)),
//         concatMap(x => innerObservable(x)),
//     ).subscribe(x => {
//         console.debug('processed tick', x);
//     }, (err)=>{

//     }, ()=>{
//         console.debug('completed');
//     });

// function innerObservable(tickIndex: number) {
//     return new Observable<number>(x => {
//         setTimeout(() => {
//             x.next(tickIndex);
//             x.complete();
//         }, generateRandom(1, 2000));
//     });
// }
//fine concatMap


//mergeMap
//console.debug('%c MergeMap', style);
// let interval$ = interval(1).pipe(take(3));

// interval$
//     .pipe(
//         tap(x => console.debug('tick', x)),
//         mergeMap(x => innerObservable(x)),
//     ).subscribe(x => {
//         console.debug('processed tick', x);
//     }, (err) => {

//     }, () => {
//         console.debug('completed');
//     });

// function innerObservable(tickIndex: number) {
//     return new Observable<number>(x => {
//         setTimeout(() => {
//             x.next(tickIndex);
//             x.complete();
//         }, generateRandom(1, 2000));
//     });
// }
//fine mergeMap


//switchMap
//console.debug('%c SwitchMap', style);
// let interval$ = interval(500).pipe(take(10));

// interval$
//     .pipe(
//         tap(x => console.debug('tick', x)),
//         switchMap(x => innerObservable(x)),
//     ).subscribe(x => {
//         console.debug('processed tick', x);
//     }, (err) => {

//     }, () => {
//         console.debug('completed');
//     });

// function innerObservable(tickIndex: number) {
//     return new Observable<number>(x => {
//         setTimeout(() => {
//             x.next(tickIndex);
//             x.complete();
//         }, generateRandom(1, 1000));
//     });
// }


// let searchField = document.getElementById('search');
// let searchText$ = fromEvent<any>(searchField, 'keyup');

// searchText$
//     .pipe(
//         map(x => x.target.value),
//         tap(x => console.debug('keyup ', x)),
//         switchMap(x => search(x))
//     ).subscribe(x => {
//         console.debug('search result', x);
//     });

// function search(searchTerm: string) {
//     let checkNotification$ = new Observable<string>(x => {
//         setTimeout(() => {
//             x.next(searchTerm);
//             x.complete();
//         }, 1000);
//     });
//     return checkNotification$;
// }
//end switchMap


//exhaustMap
console.debug('%c ExhaustMap', style);
let interval$ = interval(1000).pipe(take(10));

interval$
    .pipe(
        tap(x => console.debug('tick ', x)),
        exhaustMap(x => innerObservable(x)),
        take(3)
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
        }, 4000);
    });
}








function generateRandom(min: number, max: number) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}