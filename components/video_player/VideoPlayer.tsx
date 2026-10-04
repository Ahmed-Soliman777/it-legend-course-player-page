/**
 * 
 * @title video player component
 * @description this component for playing videos
 * @style VideoPlayer.css
 */

"use client"

import './VideoPlayer.css'

import { useRef, useState } from 'react'

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
        <>
            <div className="video-sticky-wrapper">
                <div className="page-container">
                    <div
                        className='video-player-container'
                        style={{ width: '100%' }}
                    >
                        <video
                            src="/file_example.mp4"
                            className={`${isTheatre ? 'theatre-video' : 'video-lg'} `}
                            ref={videoRef}
                            controls={isPlaying}
                        />

                        {/* show toggle btn in large screen */}

                        {
                            !overlay && (
                                <button
                                    className="theatre-toggle-btn"
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
                                            className="play-icon"
                                        />
                                    </button>
                                </div>
                            )}
                    </div>

                    {/* curriculum icon component */}


                </div>
            </div>
            <CurriculumIcon />
        </>
    )
}

export default VideoPlayer
