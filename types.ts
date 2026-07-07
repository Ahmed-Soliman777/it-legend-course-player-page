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
