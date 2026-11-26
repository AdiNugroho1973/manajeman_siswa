export default function JadwalPage() {
  return (
    <section className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Jadwal Pelajaran</h1>
        <p className="text-muted-foreground">
          Lihat dan kelola jadwal pelajaran.
        </p>
      </div>
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground">Belum ada jadwal pelajaran.</p>
      </div>
    </section>
  );
}
