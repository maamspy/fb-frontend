// app/dashboard/page.jsx

export default function Dashboard() {
  return (
    <div className="flex flex-1 py-16 items-center justify-center">
      <div className="text-4xl font-semibold text-center">
        Only authenticated users can see this page.
      </div>
    </div>
  );
}
