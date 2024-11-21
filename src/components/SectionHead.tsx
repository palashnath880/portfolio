import React from "react";

export default function SectionHead({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1 bg-[#fafdff] shadow px-4 py-4  border-l-primary border-l-4">
      <h1 className="text-2xl text-primary uppercase">{title}</h1>
      {subtitle && (
        <h5 className="text-sm text-primary text-opacity-60">{subtitle}</h5>
      )}
    </div>
  );
}
