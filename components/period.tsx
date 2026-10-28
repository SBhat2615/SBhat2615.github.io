export function Period({ value }: { value: string }) {
  const [start, end] = value.split("—").map((part) => part.trim());

  if (!end) {
    return <p className="text-xs leading-5 text-muted-foreground sm:pt-1">{value}</p>;
  }

  return (
    <p className="text-xs leading-5 text-muted-foreground sm:pt-1">
      <span className="block">{start}</span>
      <span className="block">{end}</span>
    </p>
  );
}
