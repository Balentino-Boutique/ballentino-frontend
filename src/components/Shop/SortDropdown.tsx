'use client';

interface SortDropdownProps {
  value: string;
  onChange: (value: any) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-700 rounded-md py-2 px-4 bg-black text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
    >
      <option value="newest">Newest</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="popular">Popular</option>
    </select>
  );
} 