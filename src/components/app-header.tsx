"use client";
import { useState, useEffect } from "react";

export function AppHeader() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [machineHours, setMachineHours] = useState(0); // Replace with actual machine hours source

  useEffect(() => {
    setCurrentTime(new Date());

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium">
            Current Time:{" "}
            {currentTime
              ? currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--"}
          </span>
          <span className="text-sm font-medium">
            Machine Hours: {machineHours}
          </span>
        </div>
      </div>
    </header>
  );
}
