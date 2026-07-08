// types file

// course materials component type

export interface CommentsType {
  image: string;
  name: string;
  date: string;
  comment: string;
}

// ask question component type

export type AskQuestionProps = {
  isOpen: boolean;
  value: string;
  onClose: () => void;
  onChange: (value: string) => void;
};

// course topics data

export type CourseTopic = {
  topic: string;
  questions_no?: number;
  duration?: number;
};

// course topics component props type

export type CourseTopicsProps = {
  title: string;
  duration: string;
  description: string;
  data: CourseTopic[];
};

// exam card component props type

export type ExamCardProps = {
  question: {
    id: number;
    question: string;
    options: string[];
  };
  questionIndex: number;
  selectedValue?: string;
  onAnswerSelect: (value: string) => void;
};

// exam props types

export type ExamProps = {
  duration: number;
  examKey: string;
  onClose: () => void;
};

// question type

export type Question = {
  id: number;
  question: string;
  options: string[];
};
