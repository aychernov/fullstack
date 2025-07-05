"use client";

import { useEffect, useState } from "react";
import { StatsTable } from "../../components/StatsTable";
import { Button } from "@repo/ui/button";
import { IncrementCountryDto, Stats } from "@repo/types";

export default function AutoPage() {
  const [stats, setStats] = useState<Stats>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAndPost() {
      try {
        const res = await fetch("https://ipapi.co/json");
        const data: { country_code: string } = await res.json();
        const dto: IncrementCountryDto = {
          countryCode: data.country_code.toLowerCase(),
        };

        await fetch(`/stats`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dto),
        });

        const statsRes = await fetch("/stats");
        const statsData: Stats = await statsRes.json();
        setStats(statsData);
      } catch (e) {
        setError("Failed to fetch or send data");
      } finally {
        setLoading(false);
      }
    }

    fetchAndPost();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>Auto Increment & Stats</h1>
      <Button appName={"asds"}>asds</Button>
      <StatsTable stats={stats} />
    </>
  );
}
