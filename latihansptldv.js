function ac(angka){
    return Math.floor(Math.random()*angka)
}
function pembagi(n) {
    if (n < 1)
        throw "Argument error";
    var small = [];
    var large = [];
    var end = Math.floor(Math.sqrt(n));
    for (var i = 1; i <= end; i++) {
        if (n % i == 0) {
            small.push(i);
            if (i * i != n)  // Don't include a square root twice
                large.push(n / i);
        }
    }
    large.reverse();
    return small.concat(large);
}

FaktorTerkecil = function(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n==0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;  
    if (n%3==0) return 3;  
    if (n%5==0) return 5;  
    var m = Math.sqrt(n);
    for (var i=7;i<=m;i+=30) {
     if (n%i==0)      return i;
     if (n%(i+4)==0)  return i+4;
     if (n%(i+6)==0)  return i+6;
     if (n%(i+10)==0) return i+10;
     if (n%(i+12)==0) return i+12;
     if (n%(i+16)==0) return i+16;
     if (n%(i+22)==0) return i+22;
     if (n%(i+24)==0) return i+24;
    }
    return n;
   }
   
   // Optimized version of FaktorTerkecil for Opera, Chrome, Firefox.
   // In these browsers, "i divides n" is much faster as
   // (q=n/i)==Math.floor(q)  than  n%i==0
   if (
       navigator.userAgent.indexOf('Opera')  !=-1
    || navigator.userAgent.indexOf('Chrome') !=-1
    || navigator.userAgent.indexOf('Firefox')!=-1 )
   {
    FaktorTerkecil = function(n) {
     if (isNaN(n) || !isFinite(n)) return NaN;   
     if (n==0) return 0;  
     if (n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     var q, m = Math.sqrt(n);
     for (var i=7;i<=m;i+=30) {
      if ((q=n/i)==Math.floor(q))      return i;
      if ((q=n/(i+4))==Math.floor(q))  return i+4;
      if ((q=n/(i+6))==Math.floor(q))  return i+6;
      if ((q=n/(i+10))==Math.floor(q)) return i+10;
      if ((q=n/(i+12))==Math.floor(q)) return i+12;
      if ((q=n/(i+16))==Math.floor(q)) return i+16;
      if ((q=n/(i+22))==Math.floor(q)) return i+22;
      if ((q=n/(i+24))==Math.floor(q)) return i+24;
     }
     return n;
    }
   }
   
   // Optimized version for Internet Explorer avoids IE's 
   // "slow script" warning at 5000000 script statements
   // by grouping 48 divisibility checks into a single statement
   
   if (navigator.userAgent.indexOf('MSIE')!=-1)
   {
    FaktorTerkecil = function(n){
     if (isNaN(n)) return NaN;  
     if (n==0) return 0;  
     if (!isFinite(n) || n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     if (n%7==0) return 7;  
     var m = Math.sqrt(n);
     for (var i=11;i<=m;i+=210) {
      if (n%i && n%(i+2) && n%(i+6) && n%(i+8)&& n%(i+12)&& n%(i+18)&& n%(i+20)&& n%(i+26)
      && n%(i+30) && n%(i+32) && n%(i+36) && n%(i+42) && n%(i+48) && n%(i+50) && n%(i+56)
      && n%(i+60) && n%(i+62) && n%(i+68) && n%(i+72) && n%(i+78) && n%(i+86)
      && n%(i+90) && n%(i+92) && n%(i+96) && n%(i+98) && n%(i+102)&& n%(i+110)&& n%(i+116)
      && n%(i+120)&& n%(i+126)&& n%(i+128)&& n%(i+132)&& n%(i+138)&& n%(i+140)&& n%(i+146)
      && n%(i+152)&& n%(i+156)&& n%(i+158)&& n%(i+162)&& n%(i+168)&& n%(i+170)&& n%(i+176)
      && n%(i+180)&& n%(i+182)&& n%(i+186)&& n%(i+188)&& n%(i+198)&& n%(i+200)
      ) continue;
      for (var j=0;j<210;j+=2) {if (n%(i+j)==0) return i+j; }
     }
     return n;
    }
   }
   
   // function cekPrima(n) returns:
   // - false if n is NaN or not a finite integer
   // - true  if n is prime
   // - false otherwise
   
   cekPrima = function(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    if (n==FaktorTerkecil(n)) return true;
    return false;
   }
   function fpb2(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  function fpb (a) {
    return a.reduce(fpb2)
  }

var tandfull = ["+","-"];
var no1 = [2+ac(8),2+ac(8)];
while(no1[0]==no1[1]){
    no1[0]=2+ac(8);
    no1[1]=2+ac(8);
}
no1[2]=no1[0]*no1[1];
var fpbno1 = fpb2(no1[0],no1[1]);
no1[3]=no1[0]/fpbno1;
no1[4]=no1[1]/fpbno1;
no1[5]=no1[2]/fpbno1;
if(no1[3]==1){
    no1[3]="";
}
if(no1[4]==1){
    no1[4]="";
}

var no2 = [2+ac(8),2+ac(8)];
while(no2[0]==no2[1]){
    no2[0]=2+ac(8);
    no2[1]=2+ac(8);
}
no2[2]=no2[0]*no2[1];
var fpbno2 = fpb2(no2[0],no2[1]);
no2[3]=no2[0]/fpbno2;
no2[4]=no2[1]/fpbno2;
no2[5]=no2[2]/fpbno2;
if(no2[3]==1){
    no2[3]="";
}
if(no2[4]==1){
    no2[4]="";
}

 var no3=[2+ac(7)];
 no3[1]=no3[0]+1+ac(9-no3[0]);
 var fpbno3 = fpb2(no3[0],no3[1]);
 no3[2]=no3[0]*no3[1];
 no3[3]=no3[0]/fpbno3;
 no3[4]=no3[1]/fpbno3;
 no3[5]=no3[2]/fpbno3;
 if(no3[3]==1){
     no3[3]="";
 }
 if(no3[4]==1){
     no3[4]="";
 }

 var no4=[2+ac(7)];
 no4[1]=no4[0]+1+ac(9-no4[0]);
 var fpbno4 = fpb2(no4[0],no4[1]);
 no4[2]=no4[0]*no4[1];
 no4[3]=no4[0]/fpbno4;
 no4[4]=no4[1]/fpbno4;
 no4[5]=no4[2]/fpbno4;
 if(no4[3]==1){
     no4[3]="";
 }
 if(no4[4]==1){
     no4[4]="";
 }

 var no5=[3+ac(7),2+ac(11)];
 
 
var soalpg = [
    {"t":String.raw`Daerah penyelesaian dari pertidaksamaan <m>${no1[3]}x+${no1[4]}y\geq${no1[5]}</m> adalah ....`,"s":[String.raw`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.07" width="60%" height="60%"><defs><style>.cls-1{fill:#d7df23;}.cls-2,.cls-5{fill:none;stroke-miterlimit:10;}.cls-2{stroke:#231f20;}.cls-3,.cls-4,.cls-6{fill:#231f20;}.cls-4{font-size:6px;}.cls-4,.cls-6{font-family:Times New Roman;}.cls-5{stroke:#2e3192;}.cls-6{font-size:8px;}</style></defs><title>kurva</title><polygon class="cls-1" points="18.33 5.67 86.01 5.67 86.01 82.45 77.89 82.45 18.33 5.67"/><line class="cls-2" y1="47.91" x2="85.22" y2="47.91"/><path class="cls-3" d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)"/><line class="cls-2" x1="38.74" y1="87.07" x2="38.74" y2="6.05"/><path class="cls-3" d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)"/><text class="cls-4" transform="translate(86.71 54.06)">X</text><text class="cls-4" transform="translate(40.71 4.99)">Y</text><line class="cls-5" x1="79.3" y1="84.27" x2="16.92" y2="3.85"/><text class="cls-6" transform="translate(48.11 54.36)">${no1[0]}</text><text class="cls-6" transform="translate(33.94 36.62)">${no1[1]}</text></svg>`,String.raw`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.07" width="60%" height="60%"><defs><style>.cls-1{fill:#d7df23;}.cls-2,.cls-5{fill:none;stroke-miterlimit:10;}.cls-2{stroke:#231f20;}.cls-3,.cls-4,.cls-6{fill:#231f20;}.cls-4{font-size:6px;}.cls-4,.cls-6{font-family:Times New Roman;}.cls-5{stroke:#2e3192;}.cls-6{font-size:8px;}</style></defs><title>kurva</title><polygon class="cls-1" points="18.33 5.67 86.01 5.67 86.01 82.45 77.89 82.45 18.33 5.67"/><line class="cls-2" y1="47.91" x2="85.22" y2="47.91"/><path class="cls-3" d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)"/><line class="cls-2" x1="38.74" y1="87.07" x2="38.74" y2="6.05"/><path class="cls-3" d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)"/><text class="cls-4" transform="translate(86.71 54.06)">X</text><text class="cls-4" transform="translate(40.71 4.99)">Y</text><line class="cls-5" x1="79.3" y1="84.27" x2="16.92" y2="3.85"/><text class="cls-6" transform="translate(48.11 54.36)">${no1[1]}</text><text class="cls-6" transform="translate(33.94 36.62)">${no1[0]}</text></svg>`,String.raw`<svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.07" width="60%" height="60%"><defs><style>.cls-1{fill:#d7df23;}.cls-2,.cls-5{fill:none;stroke-miterlimit:10;}.cls-2{stroke:#231f20;}.cls-3,.cls-4,.cls-6{fill:#231f20;}.cls-4{font-size:6px;}.cls-4,.cls-6{font-family:Times New Roman;}.cls-5{stroke:#2e3192;}.cls-6{font-size:8px;}</style></defs><title>kurva1</title><path class="cls-1" d="M8.12,8.61l15.52-.14L83.36,85.53,8.12,85.11V8.61Z" transform="translate(-5.6 -3.22)"/><line class="cls-2" y1="47.91" x2="85.22" y2="47.91"/><path class="cls-3" d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)"/><line class="cls-2" x1="38.74" y1="87.07" x2="38.74" y2="6.05"/><path class="cls-3" d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)"/><text class="cls-4" transform="translate(86.71 54.06)">X</text><text class="cls-4" transform="translate(40.71 4.99)">Y</text><line class="cls-5" x1="79.3" y1="84.27" x2="16.92" y2="3.85"/><text class="cls-6" transform="translate(48.11 54.36)">${no1[0]}</text><text class="cls-6" transform="translate(33.94 36.62)">${no1[1]}</text></svg>`,String.raw`<svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.07" width="60%" height="60%"><defs><style>.cls-1{fill:#d7df23;}.cls-2,.cls-5{fill:none;stroke-miterlimit:10;}.cls-2{stroke:#231f20;}.cls-3,.cls-4,.cls-6{fill:#231f20;}.cls-4{font-size:6px;}.cls-4,.cls-6{font-family:Times New Roman;}.cls-5{stroke:#2e3192;}.cls-6{font-size:8px;}</style></defs><title>kurva1</title><path class="cls-1" d="M8.12,8.61l15.52-.14L83.36,85.53,8.12,85.11V8.61Z" transform="translate(-5.6 -3.22)"/><line class="cls-2" y1="47.91" x2="85.22" y2="47.91"/><path class="cls-3" d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)"/><line class="cls-2" x1="38.74" y1="87.07" x2="38.74" y2="6.05"/><path class="cls-3" d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)"/><text class="cls-4" transform="translate(86.71 54.06)">X</text><text class="cls-4" transform="translate(40.71 4.99)">Y</text><line class="cls-5" x1="79.3" y1="84.27" x2="16.92" y2="3.85"/><text class="cls-6" transform="translate(48.11 54.36)">${no1[1]}</text><text class="cls-6" transform="translate(33.94 36.62)">${no1[0]}</text></svg>`]},
    {"t":String.raw`Daerah penyelesaian dari pertidaksamaan <m>-${no2[3]}x+${no2[4]}y\leq${no2[5]}</m> adalah ....`,"s":[`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.44 87.07" width="60%" height="60%"><title>kurva2</title><path d="M62.52,9.73H91.06L90.5,81.48,6.3,81.2Z" transform="translate(-5.21 -3.22)" style="fill:#d7df23"/><line x1="0.39" y1="47.91" x2="85.61" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><line x1="39.13" y1="87.07" x2="39.13" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><text transform="translate(87.11 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(41.11 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="0.39" y1="79.1" x2="58.57" y2="5.25" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(23.19 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">-${no2[0]}</text><text transform="translate(33.77 30.6)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no2[1]}</text></svg>`,`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.44 87.07" width="60%" height="60%"><title>kurva2</title><path d="M62.52,9.73H91.06L90.5,81.48,6.3,81.2Z" transform="translate(-5.21 -3.22)" style="fill:#d7df23"/><line x1="0.39" y1="47.91" x2="85.61" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><line x1="39.13" y1="87.07" x2="39.13" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><text transform="translate(87.11 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(41.11 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="0.39" y1="79.1" x2="58.57" y2="5.25" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(23.19 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">-${no2[1]}</text><text transform="translate(33.77 30.6)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no2[0]}</text></svg>`,`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.44 87.07" width="60%" height="60%"><title>kurva3</title><path d="M6.3,10.71l56.64-.84L6.44,81.48,6.3,81.2V10.71Z" transform="translate(-5.21 -3.22)" style="fill:#d7df23"/><line x1="0.39" y1="47.91" x2="85.61" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><line x1="39.13" y1="87.07" x2="39.13" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><text transform="translate(87.11 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(41.11 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="0.39" y1="79.1" x2="58.57" y2="5.25" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(23.19 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">-${no2[1]}</text><text transform="translate(33.77 30.6)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no2[0]}</text></svg>`,`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.44 87.07" width="60%" height="60%"><title>kurva3</title><path d="M6.3,10.71l56.64-.84L6.44,81.48,6.3,81.2V10.71Z" transform="translate(-5.21 -3.22)" style="fill:#d7df23"/><line x1="0.39" y1="47.91" x2="85.61" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><line x1="39.13" y1="87.07" x2="39.13" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.21 -3.22)" style="fill:#231f20"/><text transform="translate(87.11 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(41.11 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="0.39" y1="79.1" x2="58.57" y2="5.25" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(23.19 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">-${no2[0]}</text><text transform="translate(33.77 30.6)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no2[1]}</text></svg>`]},
    {"t":String.raw`Daerah penyelesaian dari sistem pertidaksamaan <br><m>${no3[3]}x+${no3[4]}y\leq${no3[5]}</m><br><m>${no3[4]}x+${no3[3]}y\geq${no3[5]}</m><br> adalah ....`,"s":[String.raw`<svg id="00a3d9b2-c7c6-474a-a1e0-0eb40de7dfd4" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva6</title><polygon points="64.45 85.93 85.45 85.93 85.45 54.06 46.92 39.14 64.45 85.93" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text></svg>`,String.raw`<svg id="fddb0461-7e62-4b04-bfda-f987652a71d7" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva4</title><polygon points="35.05 7.46 46.43 38.95 82.26 52.75 85.73 52.75 85.73 7.46 35.05 7.46" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text></svg>`,String.raw`<svg id="6c1dac3f-a625-405a-a55f-e16f0d513f83" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva7</title><polygon points="64.4 85.79 1.68 85.79 1.68 21.71 46.92 39.14 64.4 85.79" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text></svg>`,String.raw`<svg id="0bda4add-c014-462c-a97b-45dae534f533" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva5</title><polygon points="34.52 6.05 2.38 6.05 2.38 21.98 46.43 38.95 34.52 6.05" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no3[0]}</text></svg>`]},
    {"t":String.raw`Daerah penyelesaian dari sistem pertidaksamaan <br><m>${no4[3]}x+${no4[4]}y\leq${no4[5]}</m><br><m>${no4[4]}x+${no4[3]}y\leq${no4[5]}</m><br><m>x\geq0</m><br><m>y\geq0</m><br> adalah ....`,"s":[String.raw`<svg id="e8072caa-024b-4435-8044-043954070ee5" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva8</title><polygon points="38.74 47.91 38.74 35.99 46.92 39.14 50.21 47.91 38.74 47.91" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text></svg>`,String.raw`<svg id="e57d6d6b-624b-4bd1-b9b3-96b5e89e19f0" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva9</title><polygon points="38.74 35.99 46.92 39.14 38.74 17.31 38.74 35.99" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text></svg>`,String.raw`<svg id="889c47f4-0118-4739-b23a-a01fdbc7120e" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva11</title><polygon points="38.74 6.79 38.74 17.31 46.92 39.14 69.7 47.91 84.61 47.91 84.61 6.79 38.74 6.79" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text></svg>`,String.raw`<svg id="1aebf8fa-f767-455d-92f4-34d6d67b50aa" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.05 87.25" width="60%" height="60%"><title>kurva10</title><polygon points="50.21 47.91 46.92 39.14 69.7 47.91 50.21 47.91" style="fill:#d7df23"/><line y1="47.91" x2="85.22" y2="47.91" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M93.29,51.13a12.39,12.39,0,0,0-3.5,1.95l0.71-1.95-0.71-1.95A12.38,12.38,0,0,0,93.29,51.13Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><line x1="38.74" y1="87.07" x2="38.74" y2="6.05" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M44.34,6.37a14.51,14.51,0,0,0,2.28,4.1l-2.28-.83-2.28.83A14.49,14.49,0,0,0,44.34,6.37Z" transform="translate(-5.6 -3.22)" style="fill:#231f20"/><text transform="translate(86.71 54.06)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">X</text><text transform="translate(40.71 4.99)" style="font-size:6px;fill:#231f20;font-family:Times New Roman">Y</text><line x1="64.88" y1="87.07" x2="34.13" y2="4.99" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(46.43 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text><text transform="translate(34.08 22.35)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><line x1="83.5" y1="53.22" x2="0.7" y2="21.34" style="fill:none;stroke:#2e3192;stroke-miterlimit:10"/><text transform="translate(66.65 54.78)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[1]}</text><text transform="translate(34.08 41.93)" style="font-size:8px;fill:#231f20;font-family:Times New Roman">${no4[0]}</text></svg>`]}
]
var soalising =[
    {"t":String.raw`Nilai maksimum <m>f(x,y)=10x+10y</m> dari sistem pertidaksamaan<br><m>${no5[0]-1}x+y\leq${no5[0]*no5[0]-no5[0]}</m><br><m>x+${no5[0]-1}y\leq${no5[0]*no5[0]-no5[0]}</m><br><m>x\geq0</m><br><m>y\geq0</m><br> adalah ....`,"s":`${2*no5[1]*(no5[0]-1)}`}
]