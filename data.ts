/**
 * @title data file
 * @description store dummy data here
 */

import { CommentsType, Question } from "./types";

// comment data

export const CommmentsData: CommentsType[] = [
  {
    image: "./profile.jpg",
    name: "Insert your name here",
    date: "2026-10-1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor expedita eligendi quae? Minus, iste delectus vero quidem aliquam, qui, harum hic tempore velit labore iusto dolore laborum ex quis eligendi iure consequatur eius esse eveniet facere possimus. Facilis dolorum iusto odio tenetur consequatur quos ab praesentium, quo ipsa eius!",
  },
  {
    image: "./profile.jpg",
    name: "Insert your name here",
    date: "2026-10-1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor expedita eligendi quae? Minus, iste delectus vero quidem aliquam, qui, harum hic tempore velit labore iusto dolore laborum ex quis eligendi iure consequatur eius esse eveniet facere possimus. Facilis dolorum iusto odio tenetur consequatur quos ab praesentium, quo ipsa eius!",
  },
];

// leaderboard data

export const LeaderboardData: object[] = [
  {},
  {},
  {},
  {},
  {},
  {},
];


// exam data

export const questions: Question[] = [
  {
    id: 1,
    question: 'What is the primary purpose of the course player interface?',
    options: ['To manage course content', 'To display the exam score only', 'To replace the browser', 'To create new files']
  },
  {
    id: 2,
    question: 'Which interaction helps a learner move to the next question?',
    options: ['Selecting an answer', 'Refreshing the page', 'Closing the tab', 'Hovering the title']
  },
  {
    id: 3,
    question: 'How is progress for each exam stored?',
    options: ['In session storage', 'In local file system', 'In the URL only', 'In a cookie without a key']
  },
  {
    id: 4,
    question: 'What does the step indicator help users understand?',
    options: ['Current question position', 'System date', 'Browser version', 'Theme color']
  }
];