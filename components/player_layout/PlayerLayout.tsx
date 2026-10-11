/**
 * @title player layout component
 * @description page grid for the course player. owns the wide view state so the
 * video can span the full width and move the course content below it
 * @props { materials, topics, comments }
 * @style PlayerLayout.module.css
 */

"use client"

import { useState } from 'react'
import type { ReactNode } from 'react'

import VideoPlayer from '../video_player/VideoPlayer'

import CurriculumIcon from '../curriculum_icon/CurriculumIcon'

import styles from './PlayerLayout.module.css'


type PlayerLayoutProps = {
  materials: ReactNode
  topics: ReactNode
  comments: ReactNode
}


const PlayerLayout = ({ materials, topics, comments }: PlayerLayoutProps) => {

  const [isWide, setIsWide] = useState<boolean>(false)

  return (
    <main className={`${styles.layout} ${isWide ? styles.wide : ''}`}>

      {/* sticky on mobile: stays on top while the content scrolls under it */}

      <div className={styles.video}>
        <VideoPlayer
          isWide={isWide}
          onToggleWide={() => setIsWide(wide => !wide)}
        />
      </div>

      <div className={styles.actions}>
        <CurriculumIcon />
      </div>

      <div className={styles.materials}>{materials}</div>

      <aside className={styles.topics}>{topics}</aside>

      <div className={styles.comments}>{comments}</div>

    </main>
  )
}

export default PlayerLayout
