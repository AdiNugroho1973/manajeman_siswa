export default function SiswaPage() {
  return (
    <section className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Data Siswa</h1>
        <p className="text-muted-foreground">
          Kelola informasi siswa di sekolah.
        </p>
      </div>
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground">Belum ada data siswa.</p>
      </div>
    </section>
  );
}
