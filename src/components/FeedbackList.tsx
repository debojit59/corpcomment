import FeedbackItem from "./FeedbackItem"
import Spinner from "./Spinner"
import ErrorMessage from "./ErrorMessage"
import type { TFeedbackItems } from "../lib/type"

// const feedbackArray =[{
//   upvoteCount : 593,
//   companyIcon : "B",
//   companyName : "Nike",
//   comment : "orem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic saepe, sed aliquid molestias impedit! bla bla",
//   days : 15

// },{
//   upvoteCount : 603,
//   companyIcon : "P",
//   companyName : "Puma",
//   comment : "orem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic saepe, sed aliquid molestias impedit! bla bla",
//   days : 12

// },{
//   upvoteCount : 603,
//   companyIcon : "G",
//   companyName : "Google",
//   comment : "orem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic saepe, sed aliquid molestias impedit! bla bla",
//   days : 10

// }]

type feedbackListProps = {
  feedbackData:TFeedbackItems[],
  isLoading:boolean,
  error:string,

}

export default function FeedbackList({feedbackData,isLoading,error}:feedbackListProps) {
  

  return (
<ol className="feedback-list">
    {isLoading && <Spinner/>}
    {error.length >0 && <ErrorMessage message={"something went wrong man"}/>}

    {feedbackData.map((feedback)=>(
       <FeedbackItem key={feedback.id} feedbackItems={feedback}/>
))}
  
</ol> )
}
