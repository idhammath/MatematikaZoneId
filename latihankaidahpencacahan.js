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

var no1 = [20+ac(80),20+ac(80),20+ac(80),((1001+ac(8999))/1000).toFixed(3)];

var no2 = [20+ac(80),1+ac(9),1+ac(9),4+ac(4)];
while(no2[1]==no2[2]){
    no2[1]=1+ac(9);
    no2[2]=1+ac(9);
}
var no2a = fpb2(no2[1],no2[2]);
no2[4]=no2[1]/no2a;
no2[5]=no2[2]/no2a;
no2[6] = no2[4]*no2[3];
no2[7] = no2[5]*no2[3];
no2[8]=20+ac(70);
if(no2[4]==1){
    no2[4]=""
}
if(no2[5]==1){
    no2[5]=""
}

var no3 = [20+ac(80),1+ac(9),1+ac(9),4+ac(4)];
while(no3[1]==no3[2]){
    no3[1]=1+ac(9);
    no3[2]=1+ac(9);
}
var no3a = fpb2(no3[1],no3[2]);
no3[4]=no3[1]/no3a;
no3[5]=no3[2]/no3a;
no3[6] = no3[4]*no3[3];
no3[7] = no3[5]*no3[3];
no3[8]=20+ac(70);
if(no3[4]==1){
    no3[4]=""
}
if(no3[5]==1){
    no3[5]=""
}

var no4 = [10+ac(133),3+ac(5)]

var no5 = [1+ac(9),3+ac(7)]

 var no6=[10+ac(20),10+ac(20)];
 var no7=[2+ac(9),2+ac(9)];
 var no8=[10+ac(80)];
 var no10=[10+ac(20),10+ac(20)];
 var no11=[10+ac(20),10+ac(20)];
 var no12=[1000+ac(9000)]
 
var soalpg = [
    {"t":String.raw`<m>2\sqrt2\times3\sqrt2=</m> ....`,"s":[String.raw`<m>12</m>`,String.raw`<m>10</m>`,String.raw`<m>5\sqrt2</m>`,String.raw`<m>6\sqrt2</m>`]}
]
var soalising =[
    {"t":String.raw`Udin akan membeli sebuah mobil di sebuah showroom yang menyediakan ${no1[0]} jenis mobil sedan, ${no1[1]} jenis mobil SUV, ${no1[2]} mobil MPV. Berapa banyak pilihan Udin untuk membeli mobil?`,"s":`${no1[0]+no1[1]+no1[2]}`},
    {"t":String.raw`Ojan memiliki ${no2[0]} baju dan ${no2[1]} celana, berapa banyak cara Ojan memasangkan baju dan celana yang dimilikinya?`,"s":`${no2[0]*no2[1]}`},
    {"t":String.raw`Tantan memiliki ${no3[0]} mobil, ${no3[1]} sepeda motor, ${no3[2]} sepeda. Berapa banyak cara Tantan pergi ke kantor dengan kendaraan yang dimilikinya?`,"s":`${no3[0]+no3[1]+no3[2]}`},
    {"t":String.raw`Candil hendak mendengarkan lagu yang terdiri dari ${no4[0]} lagu dangdut, ${no4[1]} lagu pop, dan ${no4[0]} lagu rok. Berapa banyak cara Candil memilih lagu yang akan didengar?`,"s":`${no4[0]+no4[1]+no4[0]}`},
    {"t":String.raw`Panjul memiliki ${no5[0]} kemeja, ${no5[1]} celana, dan ${no5[2]} sepatu. Berapa banyak cara Panjul memasangkan pakaian yang dimilikinya?`,"s":`${no5[0]*no5[1]*no5[2]}`},
    {"t":String.raw`Dari kota A menuju kota C harus melalui kota B. Kota A ke kota B dihubungkan oleh ${no6[0]} jalur berbeda, dan kota B ke kota C dihubungkan oleh ${no6[1]} jalur berbeda. Berapa banyak cara kita dapat pergi dari kota A ke kota C?`,"s":`${no6[0]*no6[1]}`},
    {"t":String.raw`Sebuah pesawat terbang dapat memilih jalur penerbangan dari Balikpapan ke Samarinda melalui ${no7[0]} jalur, Samarinda - Jakarta ${no7[1]} jalur, Balikpapan - Jakarta ${no7[2]} jalur. Banyak pilihan jalur penerbangan yang dapat dipilih dari Balikpapan ke Jakarta melalui Samarinda ataupun langsung adalah ....`,"s":`${no7[0]*no7[1]+no7[2]}`}
]