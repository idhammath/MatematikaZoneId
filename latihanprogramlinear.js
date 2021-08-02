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
    {"t":String.raw`Suatu pesawat udara mempunyai tempat duduk tidak lebih dari ${no1[0]} penumpang. Setiap penumpang kelas utama boleh membawa bagasi ${no1[1]} kg, sedangkan untuk penumpang kelas ekonomi bagasinya dibatsi ${no1[2]} kg. Pesawat tersebut hanya dapat membawa bagasi ${no1[3]} kg. Jika banyaknya penumpang kelas utama dinyatakan dengan <m>x</m> dan banyaknya penumpang kelas ekonomi dinyatakan dengan <m>y</m>, maka model matematika dari persoalan tersebut adalah ....`,"s":[String.raw`<m>{x+y\leq ${no1[0]}}</m>; <m>{${no1[1]}x+${no1[2]}y\leq ${no1[3]}}</m>; <m>{x\geq0}</m>; <m>{y\geq0}</m>`,String.raw`<m>{x+y\geq ${no1[0]}}</m>; <m>{${no1[1]}x+${no1[2]}y\geq ${no1[3]}}</m>; <m>{x\geq0}</m>; <m>{y\geq0}</m>`,String.raw`<m>{x+y\leq ${no1[0]}}</m>; <m>{${no1[1]}x+${no1[2]}y\leq ${no1[3]}}</m>; <m>{x+y\geq0}</m>`,String.raw`<m>{x+y\leq ${no1[0]}}</m>; <m>{${no1[1]}x+${no1[2]}y\leq ${no1[3]}}</m>`,String.raw`<m>{x+y\geq ${no1[0]}}</m>; <m>{${no1[1]}x+${no1[2]}y\geq ${no1[3]}}</m>`]},
    {"t":String.raw`Luas daerah parkir ${no2[8]*no2[3]} m<sup>2</sup>. Luas rata-rata untuk sebuah mobil adalah ${no2[6]} m<sup>2</sup> dan untuk sebuah bus adalah ${no2[7]} m<sup>2</sup>. Daerah parkir tersebut tidak menampung lebih dari ${no2[0]} kendaraan. Jika banyaknya mobil adalah <m>x</m> dan banyaknya bus adalah <m>y</m>, maka model matematika dari permasalahan tersebut adalah ....`,"s":[String.raw`<m>{x+y\leq ${no2[0]}}</m>; <m>{${no2[4]}x+${no2[5]}y\leq ${no2[8]}}</m>; <m>{x\geq0}</m>; <m>{y\geq0}</m>`,String.raw`<m>{x+y\geq ${no2[0]}}</m>; <m>{${no2[4]}x+${no2[5]}y\geq ${no2[8]}}</m>; <m>{x\geq0}</m>; <m>{y\geq0}</m>`,String.raw`<m>{x+y\leq ${no2[0]}}</m>; <m>{${no2[4]}x+${no2[5]}y\leq ${no2[8]}}</m>; <m>{x+y\geq0}</m>`,String.raw`<m>{x+y\leq ${no2[0]}}</m>; <m>{${no2[4]}x+${no2[5]}y\leq ${no2[8]}}</m>`,String.raw`<m>{x+y\geq ${no2[0]}}</m>; <m>{${no2[4]}x+${no2[5]}y\geq ${no2[8]}}</m>`]},
    {"t":String.raw`Seorang pedagang paling sedikit menyewa ${no3[0]} kendaraan untuk jenis truk dan colt, dengan jumlah yang diangkut sebanyak ${no3[8]*no3[3]} karung. Truk dapat mengangkut tidak lebih dari ${no2[6]} karung dan colt ${no2[7]} karung. Jika <m>x</m> menyatakan banyaknya truk dan <m>y</m> menyatakan banyaknya colt, maka model matematika dari permasalahan di atas adalah  ....`,"s":[String.raw`<m>{x+y\geq ${no3[0]}}</m>; <m>{${no3[4]}x+${no3[5]}y\leq ${no3[8]}}</m>; <m>{x\geq0}</m>; <m>{y\geq0}</m>`,String.raw`<m>{x+y\leq ${no3[0]}}</m>; <m>{${no3[4]}x+${no3[5]}y\geq ${no3[8]}}</m>; <m>{x\geq0}</m>; <m>{y\geq0}</m>`,String.raw`<m>{x+y\leq ${no3[0]}}</m>; <m>{${no3[4]}x+${no3[5]}y\leq ${no3[8]}}</m>; <m>{x+y\geq0}</m>`,String.raw`<m>{x+y\leq ${no3[0]}}</m>; <m>{${no3[4]}x+${no3[5]}y\leq ${no3[8]}}</m>`,String.raw`<m>{x+y\geq ${no3[0]}}</m>; <m>{${no3[4]}x+${no3[5]}y\geq ${no3[8]}}</m>`]}
]
var soalising =[
    {"t":String.raw`Sebuah butik memiliki 4 m kain satin dan 5 m kain prada. Dari bahan tersebut akan dibuat dua jenis baju pesta. Baju pesta I memerlukan 2 m kain satin dan 1 m kain prada. Baju pesta II memerlukan 1 m kain satin dan 2 m kain prada. Jika harga jual baju pesta I adalah Rp${no4[0]*no4[1]}.000,00 dan harga jual baju pesta II adalah Rp${no4[0]*4}.000,00 maka hasil penjualan maksimum batik adalah ....<br><b>Keterangan:</b> tulis jawaban akhir saja tanpa Rp, tanda titik pemisah ribuan, dan sen. Contoh, jika hasil akhirnya adalah <b>Rp1.234.000,00</b> maka jawabannya adalah <b>1234000<b>`,"s":`${no4[0]*no4[1]*1000+no4[0]*8000}`},
    {"t":String.raw`Suatu area parkir mempunyai luas 1.760 m<sup>2</sup>. Luas rata-rata untuk mobil kecil 4 m<sup>2</sup> dan mobil besar 20 m<sup>2</sup>. Daya tampung daerah parkir maksimum 200 kendaraan. Biaya parkir mobil kecil Rp${no5[0]*no5[1]}.000,00/jam dan mobil besar Rp${no5[0]*10}.000,00/jam. Jika dalam satu jam daerah parkir terisi penuh dan tidak ada kendaraan yang pergi dan datang, maka penghasilan maksimum tempat parkir itu sebesar ....<br><b>Keterangan:</b> tulis jawaban akhir saja tanpa Rp, tanda titik pemisah ribuan, dan sen. Contoh, jika hasil akhirnya adalah <b>Rp1.234.000,00</b> maka jawabannya adalah <b>1234000<b>`,"s":`${no5[0]*no5[1]*140000+no5[0]*10*60000}`}
]