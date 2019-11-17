function range(a, b) {
        if (a >= b) return [];
        const arr = [];
        for (let i = a; i <= b; i++) arr.push(i);
        return arr;
    }
    document.querySelector('.goNumber').onclick = ()=>{
        findNumber(range(1,100))
    };
    
    function findNumber(arr) {
        let out = document.querySelector('.outNum');
        const anyNumber = document.querySelector('.num').value;
        console.log(anyNumber)
        function getTrueNumber(min, max) {
            let average = Math.floor((min + max)/2);
            if(average == anyNumber){
                console.log('congratylaton');
                out.textContent = average;
                return average;
            }else{
                if(average < anyNumber){
                    min = average;
                    console.log(average)
                }else{
                    max = average;
                    console.log(average)
                }
            }
            getTrueNumber(min, max)
        }
        getTrueNumber(0, arr.length + 1)
        
    }
// letter
// document.querySelector('.goLetter').onclick = ()=>{
//     findLetter(arrRu)
// }
//     let arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
//     function findLetter(arr) {
//         let out = document.querySelector('.outLetter');
//         let anyLetter = document.querySelector('.letter').value;
//         function getIndex() {
//             for (let i = 0; i < arr.length; i++) {
//                 if(anyLetter == arr[i])
//                 return i;
//             }
        
//         }
//         function getTrueNumber(min, max, index) {
//             let average = Math.floor((min + max)/2);
//             if(average == index){
//                 console.log('congratylaton');
//                 out.textContent = anyLetter;
//                 return anyLetter;
//             }else{
//                 if(average < index){
//                     min = average;
//                     console.log(average)
//                 }else{
//                     max = average;
//                     console.log(average)
//                 }
//             }
//             getTrueNumber(min, max,index);
//         }
//         getTrueNumber(0, arr.length, getIndex());
//     }