export default function Card({ bgColor, txtColor, icon, label }) {
  return (
    <div
      className={`rounded-xl ${bgColor} bg-opacity-10 px-7 py-5 w-40 ${txtColor} space-y-4`}
    >
      <div className="my-5">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
