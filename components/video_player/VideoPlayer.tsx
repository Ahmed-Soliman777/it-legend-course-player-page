/**
 * 
 * @title video player component
 * @description this component for playing videos
 * @style VideoPlayer.css
 */

"use client"

import './VideoPlayer.css'

import { useEffect, useRef, useState } from 'react'

import { FaRegCirclePlay } from "react-icons/fa6";



const VideoPlayer = () => {

    // video ref for video dom element property

    const videoRef = useRef<HTMLVideoElement>(null)


    // local states

    const [isTheatre, setIsTheatre] = useState<boolean>(false)

    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const [overlay, setOverlay] = useState<boolean>(true)

    const [windowWidth, setWindowWidth] = useState(0);


    // handle widow resizing

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    // toggle video to toggle from theatre to normal view versa vice

    function toggleVideo() {
        setIsTheatre(vid => !vid)
    }


    // play video function play / pause video

    function playVideo() {
        if (videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
            setOverlay(false)
        }
    }

    return (
        <div className='video-player-container'>

            <video
                src="/file_example.mp4"
                className={`${isTheatre ? 'theatre-video' : ''}`}
                ref={videoRef}
                controls={isPlaying}
            />

            {/* show toggle btn in large screen */}

            {
                windowWidth > 768 &&

                (<button
                    onClick={toggleVideo}
                >
                    {
                        isTheatre ? 'video' : 'theatre'
                    }
                </button>)
            }

            {/* show overlay when page is rendered */}

            {overlay
                &&
                (
                    <div className="video-overlay">
                        <button
                            className="video-overlay-btn"
                            onClick={playVideo}
                        >
                            <FaRegCirclePlay
                                color='#fff'
                                size={windowWidth > 768 ? 100 : 50}
                            />
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default VideoPlayer
