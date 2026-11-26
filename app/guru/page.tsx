export default function GuruPage() {
  return (
    <section className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Data Guru</h1>
        <p className="text-muted-foreground">
          Kelola informasi guru di sekolah.
        </p>
      </div>
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground">Belum ada data guru.</p>
      </div>
    </section>
  );
}
