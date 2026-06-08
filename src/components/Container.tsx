import type { TFeedbackItems } from "../lib/type";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type feedbackListProps = {
  feedbackData:TFeedbackItems[],
  isLoading:boolean,
  error:string,
  handleAddToList: (text:string)=> void;

}

export default function Container({feedbackData,isLoading,error,handleAddToList}:feedbackListProps) {
  return (
    <main className="container">
        <Header handleAddToList={handleAddToList}/>
        <FeedbackList feedbackData ={feedbackData} isLoading ={isLoading} error ={error}/>
    </main>
  )
}
