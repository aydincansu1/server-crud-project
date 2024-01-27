# Vite Proje icin adimlar

- npm create vite dosya ismi > klsor olusturur
- npm install > node-moduls paketini yuklenir
- npm run dev > proojeyi ayaga kaldiri

# Vite artilaari

- proje olusturma projeyi ayaga kaldirma islemlerinni cok daha hizli yapar
- gereksiz kod ve dosyalardan arindirilmis bir react projesi olusturur

# Degisenler

- App.js ve Index.js yerini App.jsx ve main.jsx aldi

# JSON-SERVER

- Sadece kendi bilgisayarimizda calisan fake API olusturmaya yarar
- Kendimizi gelistirmek icin basit yazdigimiz uygulamalarin bakend ihtiyacini karsilar
- Hizli Prototipleme: Baxken Dev. API yi iolusturdugu surecte uygulamanin temel ozelliklerini gelistirebilmek adina gecici bir sure kullanilabilir.

# Kurulum

- npm i json-server
- db.json dosyasi olustur ve duzenle
- packe.jsona serveri ayaga kaldirma komutu yaz
- komutu calistir

## CRUD (Create Read Update Delete)

- Olusturmna Okuma Duxenleme ve silme islemleri

# AXIOS

- HTTP istekleri icin modern cozum
- yerlesik degil pakedini indirmek gerekli
- npm i axios
- isteklerde fetche gore daha az kod yazariz
- hatalari daha detayli bir sekilde gosterir
- alinan veri icin .json() methodu ile yaptigimiz formatlama islemlerini otomatik olarak yurutur
- veri gonderirken otomatik olarak stringfy yapar ve veriyi otomatik olarak body kismina kaydeder

## Get karsilastirma

### Fetch

`fetch("http://localhost:3000/todos")
.then((res) => res.json())
.then((data) => setTodos(data));`

### Axios

axios
.get("http://localhost:3000/todos")
.then((res) => setTodos(res.data));

## POST karsilastirma

### Fetch

`fetch("http://localhost:3000/todos",{
method: "POST"
body: JSON.stringfy(newTodo)
}).then(() => setTodos((todos) => [...todos, newTodo]))
//ap istegi basarisiz olursa
.catch(() => alert("Uzgunuz hata olustu"));

### Axios

axios
.post("http://localhost:3000/todos", newTodo)
// api istegi basarili olursa newTodoyu state ekle
.then(() => setTodos((todos) => [...todos, newTodo]))
//ap istegi basarisiz olursa
.catch(() => alert("Uzgunuz hata olustu"));

## PUI karsilastirma

### Fetch

### Axios
