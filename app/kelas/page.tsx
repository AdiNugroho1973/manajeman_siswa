export default function KelasPage() {
  return (
    <section className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Data Kelas</h1>
        <p className="text-muted-foreground">
          Kelola informasi kelas di sekolah.
        </p>
      </div>
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground">Belum ada data kelas.</p>
      </div>
    </section>
  );
}