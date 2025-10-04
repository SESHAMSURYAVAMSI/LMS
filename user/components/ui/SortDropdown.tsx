"use client";

export default function SortDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
    >
      <option value="newest">Newest First</option>
      <option value="popular">Popularity</option>
    </select>
  );
}
