
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
//----------------------------------------------------------------------------------------------
//calculate Candle Trend and Ratio
function calculateCandleDetails() {
  // Get values from input fields
  const open = parseFloat(document.getElementById("rt_open_price_txt").value);
  const high = parseFloat(document.getElementById("rt_high_price_txt").value);
  const low = parseFloat(document.getElementById("rt_low_price_txt").value);
  const close = parseFloat(document.getElementById("rt_close_price_txt").value);

  // Validate inputs
  if (isNaN(open) || isNaN(high) || isNaN(low) || isNaN(close)) {
    alert("Please enter valid numeric values for all inputs.");
    return;
  }

  // Calculate components
  const bodySize = Math.abs(close - open);
  const upperWick = close > open ? high - close : high - open;
  const lowerWick = close > open ? open - low : close - low;
  const wickSize = upperWick + lowerWick;

  const candleRange = high - low;

  // Calculate percentages (rounded to 2 decimals)
  const wickPercent = ((wickSize / candleRange) * 100).toFixed(2);
  const bodyPercent = ((bodySize / candleRange) * 100).toFixed(2);

  // Calculate body-wick ratio (rounded to 2 decimals)
  const bodyWickRatio = wickSize === 0 ? "∞" : (bodySize / wickSize).toFixed(2);

  // Determine candle type
  const candleType = wickSize > bodySize ? "Base" : "Exciting";

  // Determine trend
  let candleTrend = "Null";
  if (candleType === "Exciting") {
    candleTrend = close > open ? "Bullish" : "Bearish";
  }

  // Determine colour
  let candleColour = close > open ? "green" : "red";

  // Display results in labels
  document.getElementById("rt_body_wick_ratio_lbl").innerText = bodyWickRatio;
  document.getElementById("rt_wick_size_lbl").innerText = wickPercent + " %";
  document.getElementById("rt_body_size_lbl").innerText = bodyPercent + " %";
  document.getElementById("rt_candle_type_lbl").innerText = candleType;
  document.getElementById("rt_candle_trend_lbl").innerText = candleTrend;
  document.getElementById("rt_candle_colour_txt").style.backgroundColor = candleColour;
}
//-----------------------------------------------------------------------------------------------
 
