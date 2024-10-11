//1. getOtosLotteryNumbers - Ötöslottó számokat generál le véletlenszerűen, 
//melyeket egy tömbben ad vissza.
const otoslotto = [];

for(let i = 0; i < 5; i++){
    let j = Math.floor(Math.random() * 90) + 1;
    if(j[i] != j[i+1]){
        otoslotto.push(j);
    }
    else{
        j = Math.floor(Math.random() * 90) + 1;
        otoslotto.push(j);
    }
}
console.log("Ötöslottó nyerőszámai: " + otoslotto.toString());

//2. getSortedtLotteryNumbers - paraméterrként kapott tömböt növekvő sorrendbe rendezi, 
//a rendezett tömböt visszaadja
console.log("Az ötöslottó nyerőszámai növekvő sorrendben: " + otoslotto.toSorted(function(a, b){return a - b}));

//3. getNumberOfHits - két paramétert kap, egy tömböt lottószámokkal és 
//egy tömböt a tippekkel. Visszaadja, hogy a tippekből ány egyezett meg a lottószámokkal


//4. getMonthlyLotteryArrayNumbers - négy hét lottószámait adja vissza egy tömbben, 
//mely a heti lottószámok tömbjét tartalmazza (meghívja a getOtosLotteryNumbers függvényt)


//5. getMonthlyLotteryArrayNumbers - paraméterként kapja a négy hét lottószámainak tömbjét 
//és visszaadja, hogy a hónapban mely számokat húzták ki. 
//A viszatérő listában, minden szám csak egyszer szerepelhet.


//6. monthlyStatistics - paranéterként kapha a havi lottószámok tömbjét. 
//Egy tömböt ad vissza, melynek elemei tömbök, melyben az első elem a lottószám, 
//a második eleme, hogy a hónapban a számot hányszor húzták ki.