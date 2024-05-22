import { Skeleton } from "@/components/UI/Skeleton";

export default function Fallback() {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton height={2} width={18} rounded={"rounded"} />
      <div className="flex flex-col gap-4">
        <Skeleton height={4} rounded={"rounded"} />
        <Skeleton height={4} rounded={"rounded"} />
        <Skeleton height={4} rounded={"rounded"} />
      </div>
    </div>
  );
}
