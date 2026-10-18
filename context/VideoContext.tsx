/**
 * @title VideoContext
 * @description Global context that stores the currently selected video URL
 *   and exposes a setter so any descendant component can update it.
 */

"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface VideoContextValue {
  videoUrl: string;
  setVideoUrl: (url: string) => void;
}

const VideoContext = createContext<VideoContextValue | null>(null);

interface VideoProviderProps {
  children: ReactNode;
  initialUrl?: string;
}

export const VideoProvider = ({
  children,
  initialUrl = "",
}: VideoProviderProps) => {
  const [videoUrl, setVideoUrl] = useState<string>(initialUrl);

  const value = useMemo<VideoContextValue>(
    () => ({ videoUrl, setVideoUrl }),
    [videoUrl]
  );

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

export const useVideo = (): VideoContextValue => {
  const ctx = useContext(VideoContext);
  if (!ctx) {
    throw new Error("useVideo must be used inside a <VideoProvider>");
  }
  return ctx;
};
