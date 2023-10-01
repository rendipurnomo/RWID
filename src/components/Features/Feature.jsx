import Modals from '../modals/Modals';

const Feature = () => {
  return (
    <section className="flex max-md:flex-col gap-4 py-24 sm:grid sm:grid-cols-2">
      <div className="col-span-2">
        <Modals
          icon="udemy"
          title="Satu kali membayar"
          desc="Untuk semua materi yang tersedia di Udemy berikut course-course
              baru: free. Lifetime. Kamu tidak perlu berpikir, “Beli course
              Flutter atau Python ya? Atau UX aja? Atau ..?”. Biaya pembayaran
              awalmu akan kami push untuk menghasilkan course-course baru
              untukmu. Karena itu biaya menjadi member RWID bukan sekedar 99rb
              atau 150rb, tapi jutaan. Is it worth it? You decide!"
          action="Temukan Course di Udemy"
        />
      </div>
      <div className="">
        <Modals
          icon="zoom"
          title="Zoom Rutin"
          desc="Secara mingguan akan ada zoom dengan mentor, member yang menembus
            remote work dan CEO/Founder RWID untuk memberikanmu skill baru,
            insight remote work, sharing tentang pengalaman menembus remote work
            dan meningkatkan scope karirmu! Khusus untuk peserta Super
            Intensive, kamu akan dapat zoom secara rutin 2-3x dengan mentor di
            satu WhatsApp group bersama-sama. Untuk kelas VIP, kamu akan berada
            di satu WhatsApp Group dengan saya dan mentor yang sedang aktif."
          action="Daftar SIM"
        />
      </div>

      <div className="">
        <Modals
          icon="english"
          title="Mentoring Bahasa Inggris"
          desc="Kamu juga akan mendapat mentoring speaking khusus dalam Bahasa Inggris setiap hari Rabu 20.00 WIB. Be there, and be confident!"
          action="Daftar SIM"
        />
      </div>

      <div className="">
        <Modals
          icon="vps"
          title="Layanan VPS"
          desc="Bagi kamu yang developer, kamu akan memiliki akses ke VPS untuk membuatmu bisa melakukan proses deployment dan menguji aplikasimu. Lifetime."
          action="Daftar SIM"
        />
      </div>

      <div className="">
        <Modals
          icon="canva"
          title="Layanan Canva Pro"
          desc="Berbagi sharing akses aplikasi yang memudahkan kerjamu, sebagai contoh Canva Pro."
          action="Daftar SIM"
        />
      </div>
    </section>
  );
};

export default Feature;
