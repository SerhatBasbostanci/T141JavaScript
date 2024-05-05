// Bos bir array olusturalim

let array=[];

// Stringlerden olusan bir array olusturalim

let colors = ["red", "green", "gray", "white", "black"];

// Numbers lardan olusan bir array

var numbers=[1,23,4,65,6,7,89];  // 3. index 65 i verir

        //   0 1  2  3 4 5  6   indexler 0 dan baslar 


console.log(colors[4]) // black yazdirir
console.log(numbers[3])  // 65 yazdirir

// push(): dizinin sonuna yeni bir oge ekler

colors.push("yellow")
console.log(colors)


// pop(): dizinin son elamaini siliyor ve donduruyor

let lastcolor=colors.pop()

colors.pop()
console.log(colors)
console.log(lastcolor)


// shift(): dizinin basindaki elemani siler ve dondurur

let firstcolar=colors.shift()
console.log(colors)
console.log(firstcolar)


//  splice(): diziyi herhangi bir elemandan itibaren ekler veya kaldirir parcalama ve birlestirme islemi yapiyor diyebiliriz


numbers.splice(2,1,"868")  // 2. indexten basla 1 ogeyi kaldir yerine yeni degeri 868 ata
console.log(numbers)


// concat(): iki veya daha fazla array'i birlestiriyor


let newArray=colors.concat(numbers)

console.log(newArray)






