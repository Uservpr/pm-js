# pm-js

**pm-js** adalah library minimalis untuk mempermudah operasi CRUD (Create, Read, Update, Delete) menggunakan HTTP request di Node.js. Dibangun sebagai alternatif ringan dari aplikasi Postman, library ini memungkinkan kamu untuk berinteraksi dengan API dengan kode yang singkat dan jelas.

## Daftar Isi

- [Fitur](#fitur)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
  - [GET Request](#get-request)
  - [POST Request](#post-request)
  - [PUT Request](#put-request)
  - [DELETE Request](#delete-request)
- [Dokumentasi API](#dokumentasi-api)
- [Contoh Penggunaan](#contoh-penggunaan)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Fitur

- **Kesederhanaan**: Mengurangi boilerplate code untuk operasi CRUD.
- **Ringan**: Dibangun di atas axios untuk performa yang cepat.
- **Fleksibel**: Mudah dikembangkan untuk mendukung metode HTTP lainnya di versi selanjutnya.
- **Callback Friendly**: Mendukung callback untuk memproses respon dan error.
- **Pengembangan Berkelanjutan**: Fitur tambahan seperti CLI mode akan ditambahkan di masa mendatang.

## Instalasi

Pasang **pm-js** melalui npm:

```bash
npm install pm-js
```

## Penggunaan

Berikut contoh penggunaan dasar untuk masing-masing metode:

### GET Request

Mengambil data dari URL tertentu:

```javascript
const pm = require('pm-js');

pm.get('https://jsonplaceholder.typicode.com/todos/1', (data) => {
  console.log('GET Response:', data);
});
```

### POST Request

Mengirim data ke server:

```javascript
const pm = require('pm-js');

const newPost = {
  title: 'Hello World',
  body: 'This is a test post',
  userId: 1
};

pm.post('https://jsonplaceholder.typicode.com/posts', newPost, (data, res) => {
  console.log('POST Response:', data);
});
```

### PUT Request

Memperbarui resource yang sudah ada:

```javascript
const pm = require('pm-js');

const updatedData = {
  title: 'Updated Title'
};

pm.put('https://jsonplaceholder.typicode.com/posts/1', updatedData, (err, data) => {
  if (err) {
    console.error('PUT Error:', err);
  } else {
    console.log('PUT Response:', data);
  }
});
```

### DELETE Request

Menghapus resource:

```javascript
const pm = require('pm-js');

pm.del('https://jsonplaceholder.typicode.com/posts/1', (err, data) => {
  if (err) {
    console.error('DELETE Error:', err);
  } else {
    console.log('DELETE Response:', data);
  }
});
```

## Dokumentasi API

### pm.get(url, callback)

- **Parameter**:
  - `url` (String): URL yang dituju untuk request GET.
  - `callback` (Function): Fungsi callback yang menerima data respon.

**Contoh Penggunaan**:

```javascript
pm.get('https://example.com/api', (data) => { 
  console.log(data); 
});
```

### pm.post(url, data, callback)

- **Parameter**:
  - `url` (String): URL yang dituju untuk request POST.
  - `data` (Object): Payload yang dikirim ke server.
  - `callback` (Function): Fungsi callback yang menerima data dan respon.

**Contoh Penggunaan**:

```javascript
pm.post('https://example.com/api', { key: 'value' }, (data, res) => {
  console.log(data);
});
```

### pm.put(url, data, callback)

- **Parameter**:
  - `url` (String): URL yang dituju untuk request PUT.
  - `data` (Object): Data yang akan diperbarui.
  - `callback` (Function): Fungsi callback yang menerima error (jika ada) dan data respon.

**Contoh Penggunaan**:

```javascript
pm.put('https://example.com/api/1', { key: 'new value' }, (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

### pm.del(url, callback)

- **Parameter**:
  - `url` (String): URL untuk request DELETE.
  - `callback` (Function): Fungsi callback yang menerima error (jika ada) dan data respon.

**Contoh Penggunaan**:

```javascript
pm.del('https://example.com/api/1', (err, data) => {
  if (err) console.error(err);
  else console.log('Deleted', data);
});
```

## Kontribusi

Kontribusi sangat diterima! Jika kamu memiliki saran, perbaikan bug, atau ingin menambahkan fitur baru, silakan buat issue atau pull request. Pastikan untuk mengikuti panduan gaya kode dan menambahkan dokumentasi untuk fitur baru.

## Lisensi

Project ini dilisensikan di bawah Lisensi ISC.