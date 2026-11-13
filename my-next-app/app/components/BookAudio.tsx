"use client";

import { useRef, useState } from "react";
import { RiReplay10Line, RiForward10Line } from "react-icons/ri";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

type BookAudioProps = {
  audioLink: string;
  title: string;
  author: string;
  imageLink: string;
};

export default function BookAudio({
  audioLink,
  title,
  author,
  imageLink,
}: BookAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    } else {
      audio.pause();
    }
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return;

    audio.currentTime = Math.max(
      0,
      Math.min(audio.duration, audio.currentTime + seconds),
    );
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#032b41] text-white p-4 flex items-center justify-between gap-6">
      <div className="flex flex-1 items-center gap-4 min-w-0">
        <img
          src={imageLink}
          alt={title}
          className="w-[48px] h-[64px] object-contain"
        />

        <div className="flex flex-col text-sm min-w-0">
          <p className="font-semibold truncate">{title}</p>
          <p className="text-gray-300">{author}</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center gap-6">
        <audio
          ref={audioRef}
          src={audioLink}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={() => setIsPlaying(false)}
        />

        <button onClick={() => skip(-10)}>
          <RiReplay10Line size={28} />
        </button>

        <button onClick={togglePlay}>
          {isPlaying ? <FaPauseCircle size={40} /> : <FaPlayCircle size={40} />}
        </button>

        <button onClick={() => skip(10)}>
          <RiForward10Line size={28} />
        </button>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min={0}
          max={Number.isFinite(duration) ? duration : 0}
          value={currentTime}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = Number(e.target.value);
            }
          }}
          className="w-[250px] cursor-pointer"
        />

        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
