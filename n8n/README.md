# Workflow n8n — myJurusan Rekomendasi

Workflow yang mengolah 5 jawaban esai kuis myJurusan menjadi rekomendasi jurusan (PPLG / Akuntansi / Perhotelan) memakai **NVIDIA Nemotron** (endpoint OpenAI-compatible) lalu mengembalikan JSON ke frontend.

## Alur workflow

```
Webhook (POST /webhook/myjurusan)
   │  body: { jawaban_1..jawaban_5 }
   ▼
Siapkan Prompt (Code) ──→ Nemotron AI (HTTP Request) ──→ Normalisasi Hasil (Code) ──→ Respond to Webhook
```

Respons JSON yang dikembalikan ke frontend:

```json
{
  "nama_jurusan": "PPLG | Akuntansi | Perhotelan",
  "alasan": "string",
  "persentase_akuntansi": 20,
  "persentase_pplg": 65,
  "persentase_hotel": 15
}
```

## Prasyarat

- Instance n8n (yang sama dengan chatbot).
- API key NVIDIA (`build.nvidia.com` / NIM) dengan akses ke model Nemotron.
- Nama model Nemotron yang dipakai (mis. `nvidia/llama-3.1-nemotron-nano-8b-v1`, `nvidia/nemotron-prime-8b`, dst.).

## Setup

### 1. Buat kredensial di n8n

1. **Credentials → Add credential → HTTP Header Auth**.
2. Nama credential: `NVIDIA Nemotron API`.
3. **Name**: `Authorization`
4. **Value**: `Bearer <API_KEY_NVIDIA_KAMU>`
5. Simpan.

### 2. Import workflow

1. Di n8n: **Workflows → ⋯ → Import from File**.
2. Pilih `n8n/myjurusan-recommendation.workflow.json`.
3. Atau buka file, salin seluruh isinya, lalu **Import from JSON / Clipboard**.

### 3. Konfigurasi node

- **Node `Siapkan Prompt`** (Code): ganti `"nvidia/GANTI_DENGAN_NAMA_MODEL_NEMOTRON"` dengan nama model Nemotron kamu. (Model ada di bagian `requestBody.model`.)
- **Node `Nemotron AI`** (HTTP Request): pilih credential `NVIDIA Nemotron API` pada field **Credential for HTTP Header Auth** (kalau belum terpasang otomatis).
- **Node `Webhook`**: pastikan **Respond** = `Using 'Respond to Webhook' node`. Kalau path ingin diganti (bukan `myjurusan`), ganti juga di `.env.local`.
- **Node `Respond to Webhook`**: set **Respond With** = `First Incoming Item` (biarkan default bawaan dari file import). Ini penting — kalau `All Incoming Items`, n8n membungkus respons jadi array `[...]` dan frontend menolaknya.

### 4. Test

1. Aktifkan workflow (toggle **Active**).
2. Buka URL **Test Webhook** (tombol pada node Webhook → **Listen for test event**, atau salin dari panel).
3. Kirim request uji:

```powershell
$body = '{
  "jawaban_1": "suka ngoding dan ngoprek komputer",
  "jawaban_2": "matematika, karena suka pola dan logika",
  "jawaban_3": "bikin presentasi dan mengatur bagian teknis",
  "jawaban_4": "kerja sendirian fokus di depan komputer",
  "jawaban_5": "semangat, soalnya menantang"
}'
Invoke-RestMethod -Method Post -Uri "<TEST_WEBHOOK_URL>" -ContentType "application/json" -Body $body
```

Harus balas JSON `{ nama_jurusan, alasan, persentase_* }`.

### 5. Hubungkan ke frontend

1. Salin **Production URL** (jalur *Production* pada panel Webhook).
2. Set di `.env.local`:

```env
VITE_N8N_WEBHOOK_URL=https://<host-n8n>/webhook/<path-produksi>
VITE_N8N_WEBHOOK_SECRET=
```

3. Jalankan `npm run dev` dan tes kuis myJurusan.

> Kalau frontend gagal kena CORS, tambahkan origin website di **Webhook → Options → Allowed Origins (CORS)**.

## Troubleshooting

| Gejala | Penyebab | Solusi |
|--------|----------|--------|
| `Unexpected end of JSON input` | Webhook balas 200 tapi body kosong — workflow tidak punya `Respond to Webhook` yang benar / belum aktif / gagal di tengah eksekusi | Pastikan node `Respond to Webhook` ada & terhubung, workflow **Active**, dan cek **Executions** untuk error. |
| `Webhook error: 404` | Workflow tidak aktif atau path salah | Aktifkan workflow; samakan path dengan `VITE_N8N_WEBHOOK_URL`. |
| HTTP 401/403 dari Nemotron | API key salah/kadaluarsa | Cek kredensial `NVIDIA Nemotron API`. |
| HTTP 4xx `model not found` | Nama model salah | Perbarui `requestBody.model` dengan nama model yang valid. |
| AI balas bukan JSON | Model kadang menambahkan markdown | Node `Normalisasi Hasil` sudah punya fallback parse; jika sering gagal, naikkan tuntutan di prompt. |
