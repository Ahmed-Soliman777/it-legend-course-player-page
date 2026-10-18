/**
 * 
 * @title video player component
 * @description this component for playing videos
 * @style VideoPlayer.css
 */

"use client"

import './VideoPlayer.css'

import { useCallback, useEffect, useRef, useState } from 'react'

import { FaRegCirclePlay } from "react-icons/fa6";

import { MdOutlineFeaturedVideo, MdFullscreen, MdFullscreenExit } from "react-icons/md";

import { RiSplitCellsHorizontal } from "react-icons/ri";

import { useVideo } from '@/context/VideoContext';


type VideoPlayerProps = {
    isWide: boolean;
    onToggleWide: () => void;
};

const VideoPlayer = ({ isWide, onToggleWide }: VideoPlayerProps) => {

    // pull the active video URL from global context
    const { videoUrl } = useVideo();

    // video ref for video dom element property

    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)


    // local states

    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const [overlay, setOverlay] = useState<boolean>(true)

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)


    // reset player UI whenever the selected lesson changes

    useEffect(() => {
        if (!videoUrl) return;
        // pause any in-progress playback
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.load();
        }
        setIsPlaying(false);
        setOverlay(true);
    }, [videoUrl]);


    // sync fullscreen state with browser events

    const handleFullscreenChange = useCallback(() => {
        const fsElement = document.fullscreenElement;
        setIsFullscreen(!!fsElement && fsElement === containerRef.current);
    }, []);

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, [handleFullscreenChange]);


    // play video function play / pause video

    function playVideo() {
        if (videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
            setOverlay(false)
        }
    }


    // fullscreen toggle

    async function toggleFullscreen() {
        const container = containerRef.current;
        if (!container) return;

        if (document.fullscreenElement) {
            // exit fullscreen
            try {
                if ((screen.orientation as any).unlock) {
                    (screen.orientation as any).unlock();
                }
            } catch { }
            await document.exitFullscreen().catch(() => { });
            return;
        }

        // try standard Fullscreen API
        try {
            await container.requestFullscreen();
            // try to lock orientation to landscape
            try {
                await (screen.orientation as any).lock('landscape');
            } catch { }
        } catch { }
    }

    return (
        <div className="page-container">
            {/* fallback when no video URL is available */}
            {!videoUrl ? (
                <div className="video-fallback">
                    <MdOutlineFeaturedVideo className="video-fallback-icon" />
                    <p>Select a lesson to start watching</p>
                </div>
            ) : (
                <div
                    className='video-player-container'
                    ref={containerRef}
                    style={{ width: '100%' }}
                >
                    <video
                        key={videoUrl}
                        src={videoUrl}
                        className="video-element"
                        ref={videoRef}
                        controls={isPlaying}
                        playsInline
                    />
                    {/* show wide + fullscreen buttons after play */}

                    {
                        !overlay && (
                            <div className="video-controls-row">
                                <button
                                    className="wide-toggle-btn"
                                    onClick={onToggleWide}
                                    aria-label={isWide ? 'Exit wide view' : 'Enter wide view'}
                                >
                                    {
                                        isWide ? <>
                                            <MdOutlineFeaturedVideo /> normal view
                                        </> :
                                            <>
                                                <RiSplitCellsHorizontal /> wide view
                                            </>
                                    }
                                </button>
                                <button
                                    className="fullscreen-toggle-btn"
                                    onClick={toggleFullscreen}
                                    aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                                >
                                    {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
                                </button>
                            </div>
                        )
                    }


                    {/* show overlay when page is rendered */}

                    {overlay
                        &&
                        (
                            <div className="video-overlay">
                                <button
                                    className="video-overlay-btn"
                                    onClick={playVideo}
                                    aria-label="Play video"
                                >
                                    <FaRegCirclePlay
                                        color='#fff'
                                        className="play-icon"
                                    />
                                </button>
                            </div>
                        )}
                </div>
            )}
        </div>
    )
}

export default VideoPlayer
