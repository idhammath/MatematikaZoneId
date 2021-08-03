function ac(angka){
    return Math.floor(Math.random()*angka)
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

var no1 = [6+ac(4),2+ac(2)];

var no2 = [10+ac(10),10+ac(10),10+ac(10),10+ac(10),"+","+"];
while(no2[0]==no2[2]){
    no2[0]=10+ac(10);
    no2[2]=10+ac(10);
}
while(no2[1]==no2[3]){
    no2[1]=10+ac(10);
    no2[3]=10+ac(10);
}
if(no2[3]-no2[1]<0){
    no2[4]=""
}
if(no2[3]-no2[1]>0){
    no2[5]=""
}

var no3 = [10+ac(10),5+ac(3),10+ac(10),5+ac(3)];
while(no3[1]==no3[3]){
    no3[1]=5+ac(3);
}

var no4 = [10+ac(50),5+ac(3)]

var no5 = 10+ac(90)

 var no6=[2+ac(8),2+ac(8),10+ac(10)];
 var no7=11+ac(5);
 var no8=[2+ac(18),2+ac(18)];
 while(no8[0]==no8[1]){
    no8[0]=2+ac(18);
}
 
var soalpg = [
    {"t":String.raw`<m>\sqrt{${no1[0]*no1[0]*no1[1]}}=</m> ....`,"s":[String.raw`<m>${no1[0]}\sqrt{${no1[1]}}</m>`,String.raw`<m>${no1[1]}\sqrt{${no1[0]}}</m>`,String.raw`<m>${no1[0]*no1[0]}\sqrt{${no1[1]}}</m>`,String.raw`<m>${no1[1]}\sqrt{${no1[0]*no1[0]}}</m>`]},
    {"t":String.raw`<m>${no2[0]}\sqrt2-${no2[1]}\sqrt3-${no2[2]}\sqrt2+${no2[3]}\sqrt3=</m> ....`,"s":[String.raw`<m>${no2[0]-no2[2]}\sqrt2${no2[4]}${no2[3]-no2[1]}\sqrt3</m>`,String.raw`<m>${no2[2]-no2[0]}\sqrt2${no2[4]}${no2[3]-no2[1]}\sqrt3</m>`,String.raw`<m>${no2[0]-no2[2]}\sqrt2${no2[5]}${no2[1]-no2[3]}\sqrt3</m>`,String.raw`<m>${no2[2]-no2[0]}\sqrt2${no2[5]}${no2[1]-no2[3]}\sqrt3</m>`]},
    {"t":String.raw`<m>${no3[0]}\sqrt{${no3[1]}}\times ${no3[2]}\sqrt{${no3[3]}}=</m> ....`,"s":[String.raw`<m>${no3[0]*no3[2]}\sqrt{${no3[1]*no3[3]}}</m>`,String.raw`<m>${no3[0]+no3[2]}\sqrt{${no3[1]*no3[3]}}</m>`,String.raw`<m>${no3[0]*no3[2]}\sqrt{${no3[1]+no3[3]}}</m>`,String.raw`<m>${no3[0]+no3[2]}\sqrt{${no3[1]+no3[3]}}</m>`,String.raw`<m>${no3[0]}\sqrt{${no3[1]}}+ ${no3[2]}\sqrt{${no3[3]}}</m>`]},
    {"t":String.raw`<m>\dfrac{${no4[0]}}{\sqrt{${no4[1]}}+\sqrt2}=</m> ....`,"s":[String.raw`<m>\dfrac{${no4[0]}\sqrt{${no4[1]}}-${no4[0]}\sqrt2}{${no4[1]-2}}</m>`,String.raw`<m>\dfrac{${no4[0]}\sqrt{${no4[1]}}+${no4[0]}\sqrt2}{${no4[1]-2}}</m>`,String.raw`<m>\dfrac{${no4[0]}\sqrt{${no4[1]}}-${no4[0]}\sqrt2}{${no4[1]+2}}</m>`,String.raw`<m>\dfrac{${no4[0]}\sqrt{${no4[1]}}+${no4[0]}\sqrt2}{${no4[1]+2}}</m>`]}
]
var soalising =[
    {"t":String.raw`<m>\sqrt{${no5}}\times \sqrt{${no5}}=</m> ....`,"s":no5},
    {"t":String.raw`<m>${no6[0]}\sqrt{${no6[2]}}\times ${no6[1]}\sqrt{${no6[2]}}=</m> ....`,"s":no6[0]*no6[1]*no6[2]},
    {"t":String.raw`<m>\sqrt{${no7*no7}}=</m> ....`,"s":no7},
    {"t":String.raw`<m>\left(\sqrt{${no8[0]}}+\sqrt{${no8[1]}}\right)\left(\sqrt{${no8[0]}}-\sqrt{${no8[1]}}\right)=</m> ....`,"s":no8[0]-no8[1]}
]