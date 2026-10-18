/**
 * @title Comments component
 * @description display comments for a course
 * @props 
 */

"use client"

import './Comments.css'

import { CommmentsData } from '@/data'

import { CommentsType } from '@/types'

import Image from 'next/image'

import { FormEvent, useState } from 'react';


const Comments = () => {

    const [comments, setComments] = useState<CommentsType[]>(CommmentsData);
    const [commentText, setCommentText] = useState<string>('');


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!commentText.trim()) return;

        const newComment: CommentsType = {
            image: "/profile.jpg",
            name: "You",
            date: new Date().toISOString().slice(0, 10),
            comment: commentText.trim(),
        };

        setComments((prev) => [...prev, newComment]);
        setCommentText('');
    }


    return (
        <section id="comments-section" className='comment-section'>

            {/* comment data */}

            {comments.map((comment, i) => (
                <div className="comment-container container" key={i}>

                    <div className="image-container">
                        <Image src={comment.image} alt={comment.name} width={100} height={100} />
                    </div>

                    <span>
                        <h3>{comment.name}</h3>
                        <h5>{comment.date}</h5>
                        <p>{comment.comment}</p>
                    </span>
                </div>
            ))}


            {/* comment input */}

            <form
                className="comment-input-container container"
                onSubmit={handleSubmit}>
                <textarea
                    name="comment-area"
                    id="comment-text-area"
                    placeholder='write a comment'
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                    className='add-comment-btn'
                >
                    Submit Review
                </button>
            </form>

        </section>
    )
}

export default Comments
