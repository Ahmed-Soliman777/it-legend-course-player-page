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

import { TbTheater } from "react-icons/tb";

import { MdOutlineFeaturedVideo } from "react-icons/md";
import CurriculumIcon from '../curriculum_icon/CurriculumIcon';



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
        <div className="page-container">
            <h1>Starting SEO as your Home</h1>
            {
                // sticky video in small screens
                windowWidth < 850 ?
                    (
                        <div className="sm-video-player-container">
                            <div className='video-player-container'>
                                <video
                                    src="/file_example.mp4"
                                    className={`${isTheatre ? 'theatre-video' : ''}`}
                                    ref={videoRef}
                                    controls={isPlaying}
                                    style={{ height: `${windowWidth * 0.5}px` }}
                                />

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
                                    )}
                            </div>
                        </div>
                    )
                    :
                    (
                        // normal video with theatre option for large screen
                        <div
                            className='video-player-container'
                            style={{ width: `${isTheatre ? '100%' : '70%'}` }}
                        >
                            <video
                                src="/file_example.mp4"
                                className={`${isTheatre ? 'theatre-video' : 'video-lg'} `}
                                ref={videoRef}
                                controls={isPlaying}
                                style={{ height: `${!isTheatre && windowWidth * 0.25}px` }}
                            />

                            {/* show toggle btn in large screen */}

                            {
                                !overlay && (
                                    <button
                                        onClick={
                                            toggleVideo
                                        }
                                    >
                                        {
                                            isTheatre ? <>
                                                <MdOutlineFeaturedVideo /> normal view
                                            </> :
                                                <>
                                                    <TbTheater /> theatre view
                                                </>
                                        }
                                    </button>
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
                                        >
                                            <FaRegCirclePlay
                                                color='#fff'
                                                size={windowWidth > 768 ? 100 : 50}
                                            />
                                        </button>
                                    </div>
                                )}
                        </div>
                    )
            }

            {/* curriculum icon component */}

            <CurriculumIcon />

        </div>
    )
}

export default VideoPlayer
