let cups = 15.678;
let plates = 123.965;
let spoons = 90.2345;
console.log(cups);
console.log(plates);
console.log(spoons);
let maxPrice = (Math.max(cups, plates, spoons));
let minPrice = (Math.min(cups, plates, spoons));
let allItems = (cups + plates + spoons);
console.log(allItems);
let allItemsWithoutCents = (Math.floor(cups) + Math.floor(plates) + Math.floor(spoons));
console.log(allItemsWithoutCents);
let priceOfAllItemsRounded = (Math.floor(allItemsWithoutCents));
console.log(priceOfAllItemsRounded);
let sumToHundreds=Math.round((cups + plates + spoons)/100)*100;
console.log(sumToHundreds);
let isPriceRoundedToPair = true;
if (true) {
  let massage = ('Правда');
  console.log(massage);
} else {
  let massage = ('Не правда');
  console.log(massage);
}
let pay = 500;
let moneyAfterPay = (pay - allItems);
console.log(moneyAfterPay);
let midPrice = ((cups + plates + spoons)/3).toFixed(2);
console.log(midPrice);
let randomPrice = (Math.random() * 100);
console.log(randomPrice);
let discount = (allItems * randomPrice/100).toFixed(2);
let specialPrice = (allItems - discount);
console.log(specialPrice);
let pricePerMade = (allItems / 2);
console.log(pricePerMade);
let profit = (pricePerMade - specialPrice);
console.log(profit);
//advanced
let container=document.querySelector("#container");
container.innerHTML=`
<p>Чашки ціна: ${cups};</p>
<p>Тарілки ціна: ${plates};</p>
<p>Ложки ціна: ${spoons};</p>
<p>Найвища ціна: ${maxPrice};</p>
<p>Найнижча ціна: ${minPrice};</p>
<p>Сума товарів: ${allItems};</p>
<p>Сума товарів товарів без копійок: ${allItemsWithoutCents};</p>
<p>Сума округлена до сотень: ${sumToHundreds};</p>
<p>Парне/непарне число: ${isPriceRoundedToPair};</p>
<p>Решта: ${moneyAfterPay};</p>
<p>Середнє значення цін: ${midPrice};</p>
<p>Дисконт: ${discount}; </p>
<p>Чистий прибуток: ${profit};</p>
`;