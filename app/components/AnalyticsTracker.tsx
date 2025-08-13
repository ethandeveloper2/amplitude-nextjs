// app/_components/AnalyticsTracker.tsx
'use client';
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const url = pathname + (search?.toString() ? `?${search}` : "");
    // @ts-expect-error - 전역 amplitude 사용
    window.amplitude?.track?.("page_view", { path: url });
  }, [pathname, search]);

  return null;
}