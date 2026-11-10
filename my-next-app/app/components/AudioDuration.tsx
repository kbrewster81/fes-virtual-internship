"use client";

import { useEffect, useState } from "react";

export default function AudioDuration({
  audioLink,
  long = false,
}: {
  audioLink: string;
  long?: boolean;
}) {
  const [duration, setDuration] = useState("--:--");

  useEffect(() => {
    if (!audioLink) return;

    const audio = new Audio();
    audio.preload = "metadata";

    const handleMetadata = () => {
      if (!Number.isFinite(audio.duration)) return;

      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);

      setDuration(
        long
          ? `${minutes} mins ${seconds} secs`
          : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      );
    };

    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.src = audioLink;

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeAttribute("src");
      audio.load();
    };
  }, [audioLink]);

  return <span>{duration}</span>;
}
