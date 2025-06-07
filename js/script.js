
function calculateSum() {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  document.getElementById('result').value = num1 + num2;
}

function priceDifference(){
  const A = parseFloat(document.getElementById('num1').value) || 0;
  const B = parseFloat(document.getElementById('num2').value) || 0;
  if (A === 0) {
    document.getElementById('result').value = "Invalid (A is 0)";
    return;
  }
  let percentChange = ((B - A) / A) * 100;
  let floored = floorTo2Decimals(percentChange)
  document.getElementById('result').value = floored;
}

function floorTo2Decimals(num) {
  return Math.floor(num * 100) / 100;
}

function calculateProfit(){
  const A = parseFloat(document.getElementById('lot').value) || 0;
  const B = parseFloat(document.getElementById('point').value) || 0; 
  let profit = (A*B)/10;
  document.getElementById('profit').value = profit;
}

function ohlcPriceDifference(){
  const o = parseFloat(document.getElementById('open_price_txt').value) || 0;
  const h = parseFloat(document.getElementById('high_price_txt').value) || 0; 
  const l = parseFloat(document.getElementById('low_price_txt').value) || 0;
  const c = parseFloat(document.getElementById('close_price_txt').value) || 0; 
  const diff = parseFloat(document.getElementById('difference_percentage_txt').value) || 0; 
  let o1 = o + (o * diff / 100);
  let h1 = h + (h * diff / 100);
  let l1 = l + (l * diff / 100);
  let c1 = c + (c * diff / 100);
  document.getElementById('open_price_d_txt').value = o1;
  document.getElementById('high_price_d_txt').value = h1; 
  document.getElementById('low_price_d_txt').value = l1;
  document.getElementById('close_price_d_txt').value = c1;
}
//number + (number * percent / 100);
//3315.503
//3289.665
 //Live Reload is not possible without a head or body tag.
 
 open_price_txt
high_price_txt
low_price_txt
close_price_txt
difference_percentage_txt
open_price_d_txt
high_price_d_txt
low_price_d_txt
close_price_d_txt
