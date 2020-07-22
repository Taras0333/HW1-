const cups = 15.678;
const plates = 123.965;
const spoons = 90.2345;
const maxPrice = (Math.max(cups, plates, spoons));
const minPrice = (Math.min(cups, plates, spoons));
const allItems = (cups + plates + spoons);
console.log(allItems);
const allItemsWithoutCents = (Math.floor(cups) + Math.floor(plates) + Math.floor(spoons));
console.log(allItemsWithoutCents);
const priceOfAllItemsRounded = (Math.floor(allItemsWithoutCents));
console.log(priceOfAllItemsRounded);
const sumToHundreds=Math.round((cups + plates + spoons)/100)*100;
console.log(sumToHundreds);
let massage = 'False';
if (priceOfAllItemsRounded % 2 == 0) {
  massage = ('True');
}
 console.log(massage);

const pay = 500;
const moneyAfterPay = (pay - allItems);
console.log(moneyAfterPay);
const midPrice = ((cups + plates + spoons)/3).toFixed(2);
console.log(midPrice);
const randomPrice = (Math.random() * 10);
console.log(randomPrice);
const discount = (allItems * randomPrice/100).toFixed(2);
const specialPrice = (allItems - discount);
console.log(specialPrice);
const pricePerMade = (allItems / 2);
console.log(pricePerMade);
const profit = (pricePerMade - discount);
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
<p>Парне/непарне число: ${massage};</p>
<p>Решта: ${moneyAfterPay};</p>
<p>Середнє значення цін: ${midPrice};</p>
<p>Дисконт: ${discount}; </p>
<p>Чистий прибуток: ${profit};</p>
`;