function time_taken( start , end ){
    if( start > end ) return console.log(`End time cannot be before start time`);
    return (( end - start))
}

function insertion_sort( array ){
    let start_time = Date.now(),
    end_time = 0;
    ;
    for(let i = 1  ; i < array.length ; i++){
        let j = i -1;
        let temp = array[i];
        while( j >= 0 && array[j] > temp ){
            array[ j + 1] =array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    end_time = Date.now();
    const time = time_taken( start_time , end_time);
    return { array , time };
}

function array_generator( size ){
    let arr = []
    for( let i =0; i < size ; i++) arr.push(
        Math.floor( 100 + (Math.random() * 1000000))
    )
    return arr;
}
const array = array_generator(20000);

function avarage_time( times , size ){
    if(!(times > 0)) return console.log(`Times should be > 0. Times is currently ${times}`)
    let time = 0,
    array = array_generator(size),
    sorted;
    ;
    for(let i = 0; i < times ;i++){
        sorted = insertion_sort(array);
        console.log(sorted.array)
        time += sorted.time;
    }
    const avarage = time / times;
    console.log(`Avarage time taken to sort array ${times && times} time${times == 1 ? '' : 's'} is ${ avarage && avarage} milliseconds`)
}

avarage_time( 10 , 10000)