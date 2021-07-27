function ac(angka){
    return Math.floor(Math.random()*angka)
}

var no1 = [2+ac(2)];
var no1a = ["a","b","c","d","f","g","h","j","k","m","p","q","r","t","u","v","w","y"]
no1[1]=no1a[ac(no1a.length)]


var no2 = [no1a[ac(no1a.length)],no1a[ac(no1a.length)]];
while(no2[0]==no2[1]){
    no2[0]=no1a[ac(no1a.length)];
    no2[1]=no1a[ac(no1a.length)];
}
no2[2]=10+ac(50);

 var no3=[2+ac(8)];
 no3[1]=no3[0]+1+ac(50);

 var no5=[2+ac(8)];
 no5[1]=no5[0]+1+ac(50);

 var no6=[10+ac(20),10+ac(20)];
 var no7=[2+ac(9),2+ac(9)];
 var no8=[10+ac(80)];
 var no10=[10+ac(20),10+ac(20)];
 var no11=[10+ac(20),10+ac(20)];
 var no12=[1000+ac(9000)]
 
var soalpg = [
    {"t":String.raw`<m>\left(${no1[0]}${no1[1]}\right)^4=</m> ....`,"s":[String.raw`<m>${Math.pow(no1[0],4)}${no1[1]}^4</m>`,String.raw`<m>${Math.pow(no1[0],4)}${no1[1]}</m>`,String.raw`<m>${no1[0]}${no1[1]}^4</m>`,String.raw`<m>${no1[0]}${no1[1]}</m>`]},
    {"t":String.raw`<m>\left(\dfrac{${no2[0]}}${no2[1]}\right)^{${no2[2]}}=</m> ....`,"s":[String.raw`<m>\dfrac{${no2[0]}^{${no2[2]}}}{${no2[1]}^{${no2[2]}}}`,String.raw`<m>\dfrac{${no2[0]}}{${no2[1]}^{${no2[2]}}}`,String.raw`<m>\dfrac{${no2[0]}^{${no2[2]}}}{${no2[1]}}`,String.raw`<m>\dfrac{${no2[0]}}{${no2[1]}}`]},
    {"t":String.raw`<m>a^{\frac{${no3[0]}}{${no3[1]}}}=</m> ....`,"s":[String.raw`<m>\sqrt[${no3[1]}]{a^{${no3[0]}}}</m>`,String.raw`<m>\sqrt{a^{${no3[0]}}}</m>`,String.raw`<m>\sqrt[${no3[1]}]{a}</m>`,String.raw`<m>\sqrt{a}</m>`]},
    {"t":String.raw`<m>a^{\frac12}=</m> ....`,"s":[String.raw`<m>\sqrt{a}</m>`,String.raw`<m>a</m>`,String.raw`<m>a^2</m>`,String.raw`<m>\dfrac1a</m>`]},
    {"t":String.raw`<m>\sqrt[${no5[1]}]{a^{${no5[0]}}}=a^{\cdots}</m>`,"s":[String.raw`<m>\dfrac{${no5[0]}}{${no5[1]}}</m>`,String.raw`<m>\dfrac1{${no5[1]}}</m>`,String.raw`<m>${no5[1]}</m>`,String.raw`<m>${no5[0]}</m>`]}
]
var soalising =[
    {"t":String.raw`<m>2^{${no6[0]}}\times2^{${no6[1]}}=2^{\cdots}</m>`,"s":`${no6[0]+no6[1]}`},
    {"t":String.raw`<m>\left(p^{${no7[0]}}\right)^{${no7[1]}}=p^{\cdots}</m>`,"s":`${no7[0]*no7[1]}`},
    {"t":String.raw`<m>m^{-${no8[0]}}=\dfrac1{m^{\cdots}}</m>`,"s":`${no8[0]}`},
    {"t":String.raw`<m>\dfrac1{m^{-${no8[0]}}}=m^{\cdots}</m>`,"s":`${no8[0]}`},
    {"t":String.raw`<m>b^{${no10[0]}}\times b^{-${no10[1]}}=b^{\cdots}</m>`,"s":`${no10[0]-no10[1]}`},
    {"t":String.raw`<m>\dfrac{c^{-${no11[0]}}}{c^{-${no11[1]}}}=c^{\cdots}</m>`,"s":`${no11[1]-no10[0]}`},
    {"t":String.raw`<m>${no12[0]}^0</m>`,"s":`1`}
]