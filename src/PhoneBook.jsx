import { useState } from "react";

// function saveToLocal(obj) {}

export default function PhoneBook() {
  const [records, setRecords] = useState([]);

  function addRecord(record) {
    // records.push(record);
    // setRecords(records);
    // react tepki verebilmek için değişiklik algılamalı
    // diziler ve obj referans tip olduğu için react değişikliği algılayamıyor. çünkü yaptığımız şey
    // referans yazdı
    // bu durumu aşmak için yapmamız gereken tek şey referansı kırmak
    // spread ... operatörü ile referansları kolayca kırabiliriz
    // const dizi1 = [1,2,3];
    // const dizi2 = dizi1;
    // dizi2 değer yerine dizi1 deki referansı alır
    // dolayısı ile dizi1'de ne olursa otomatik olarak dizi2'de de olur
    // bu sebeple ikisi her zaman eşittir. değişiklik bağımsız yapılamaz.
    // const dizi1 = [1,2,3];
    // const dizi2 = [...dizi1];
    // bu yaklaşım ile önce [] yeni dizi oluşturduk. ... yani spread (yayma) operatörü ile
    // dizi1 içindeki tüm elemanları değer olarak getirip oraya ekledik.
    // güzel kısmı ise eleman gibi davranması örn: [-2, -1, 0, ...dizi1, 5, 6, 7]
    setRecords([...records, record]);
  }

  function removeRecord(id) {
    setRecords(records.filter((x) => x.id !== id)); // ilgili id'nin olmadığı yepyeni tertemiz bir dizi oluşturmak
    // kaçıncı indexte olduğunu bulup splice
  }

  return (
    <>
      <h3 style={{ textTransform: "uppercase" }}>Telefon Defteri</h3>
      {/* yeni ekleme */}
      {/* listeleme */}
      {/* listeleme içinde silme */}
      <div className="row">
        <div className="col-4">
          <AddRecordForm addRecord={addRecord} />
        </div>
        <div className="col-8">
          <h4>Kayıtlar {records.length > 0 && `(${records.length})`}</h4>
          <ListRecords records={records} removeRecord={removeRecord} />
        </div>
      </div>
    </>
  );
}

function AddRecordForm({ addRecord }) {
  function handleSubmit(e) {
    e.preventDefault();
    // e.target -> form elementini getirdi. event'ten aldı getirdi.
    // camelCase ve PascalCase farklarına dikkat edin
    // aşağıda formData değişken ismi
    // FormData -> js'deki formdata api
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);
    formObj.id = crypto.randomUUID(); // henüz backend'im olmadığı için kendi id'mi kendim oluşturdum
    addRecord(formObj);
    // kaydı servise gönder, id sini al ya da id'li kaydı al state gönder
    form.reset();
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h4>Yeni Ekle</h4>
      <p>
        <input required type="text" name="name" placeholder="Ad Soyad" />
      </p>
      <p>
        <input
          required
          type="tel"
          name="phoneNumber"
          placeholder="Telefon Numarası"
        />
      </p>
      <p>
        <input
          required
          type="email"
          name="emailAddress"
          placeholder="E-Posta Adresi"
        />
      </p>
      <p>
        <button className="btn btn-primary">Ekle</button>
      </p>
    </form>
  );
}

function ListRecords({ records, removeRecord }) {
  // kayıt yoksa boş dizi olur
  const recordList = records.map((x) => (
    <li key={x.id}>
      {x.name} (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          removeRecord(x.id);
        }}
        className="text-danger"
      >
        sil
      </a>
      )<br />
      {x.phoneNumber} - {x.emailAddress}
    </li>
  ));
  // eğer fonksiyon tanımını yaptığım scope'da id varsa o zaman func içinde erişirim.
  // ama scope'dan çıkarsam o zaman scope içindeki değere nasıl ulaşcam??

  // dinamik dillerde 0 ve 1, belirli durumlarda false ve true gibi de çalışır
  return (
    <>
      {records.length ? (
        <ul>{recordList}</ul>
      ) : (
        <div className="alert alert-dismissible alert-info">
          Henüz kayıt yok.
        </div>
      )}
    </>
  );
}

// localStorage
// düzenleme
// sıralama
