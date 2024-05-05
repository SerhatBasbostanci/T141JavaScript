ogrenci= {
   ad:'Elif',
   soyad:'Basbostanci',
   number:'3',
   okul:'ABC Universty'

}
 // Bir nesne olustururken JSON data ozelliginden faydalanilir. Olusturulan nesnenin icine 
 // {} arasinda kalmak sarti ile 


console.log(ogrenci.ad)
console.log(ogrenci.soyad)

ogrenci.ad='Inci Lale'
console.log(ogrenci.ad)
console.log(ogrenci.soyad)
console.log(ogrenci["number"])
console.log(ogrenci.number)
console.log(ogrenci["okul"])
console.log(ogrenci.okul)