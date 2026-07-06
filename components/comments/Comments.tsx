/**
 * @title Comments component
 * @description display comments for a course
 * @props 
 */

"use client"

import './Comments.css'

import { CommmentsData } from '@/data'

import Image from 'next/image'


import { useEffect, useState } from 'react';


const Comments = () => {


    const [windowWidth, setWindowWidth] = useState<number>(0);

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


    return (
        <section className='comment-section'>


            {CommmentsData.map((comment, i) => (
                <div className="comment-container container" key={i}>
                    
                    <div className="image-container">
                        <Image src='/profile.jpg/profile.jpg' alt={comment.name} width={100} height={100} />
                    </div>

                    <span>
                        <h3>{comment.name}</h3>
                        <h5>{comment.date}</h5>
                        <p>{comment.comment}</p>
                    </span>
                </div>
            ))}

            <form
                className="comment-input-container container">
                <textarea
                    name="comment-area"
                    id="comment-text-area"
                    placeholder='write a comment'
                    style={{ width: `${windowWidth - 90}px` }}
                />
                <button
                    className='add-commment-btn
                '>
                    Submit Review
                </button>
            </form>

        </section>
    )
}

export default Comments
