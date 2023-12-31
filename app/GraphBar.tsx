export default function GraphBar({ round }: { round: number }) {
  return (
    <div className="flex gap-0.5 min-[400px]:gap-1 my-1 justify-between w-full px-2 h-3">
      <div
        className={`h-1 w-full rounded-sm ${
          round === 0
            ? "bg-emerald-700"
            : round > 0
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 1
            ? "bg-emerald-700"
            : round > 1
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 2
            ? "bg-emerald-700"
            : round > 2
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 3
            ? "bg-emerald-700"
            : round > 3
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 4
            ? "bg-emerald-700"
            : round > 4
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 5
            ? "bg-emerald-700"
            : round > 5
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 6
            ? "bg-emerald-700"
            : round > 6
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 7
            ? "bg-emerald-700"
            : round > 7
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 8
            ? "bg-emerald-700"
            : round > 8
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 9
            ? "bg-emerald-700"
            : round > 9
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 10
            ? "bg-emerald-700"
            : round > 10
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 11
            ? "bg-emerald-700"
            : round > 11
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 12
            ? "bg-emerald-700"
            : round > 12
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 13
            ? "bg-emerald-700"
            : round > 13
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`h-1 w-full rounded-sm ${
          round === 14
            ? "bg-emerald-700"
            : round > 14
            ? "bg-emerald-400"
            : "bg-gray-800"
        }`}
      ></div>
    </div>
  );
}
