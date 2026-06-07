import { useEffect, useState } from "react"
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


export default function FeedbackList() {
  const [feedbackData, setFeedBackData] = useState<TFeedbackItems[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(false)
  const [error,setError] = useState<string>("")

  useEffect(function(){
    async function FetchData(){
      try {
        setIsLoading(true)
        setError("")
        const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
        if (!res.ok) {
          throw new Error("something went wrong man");
        }
        const data = await res.json()
        console.log(data)
        setFeedBackData(data.feedbacks)
      }
      catch (err) {
        setError("Something wrong happened")
      }
      setIsLoading(false)
    }

    FetchData()
  },[])

  return (
<ol className="feedback-list">
    {isLoading && <Spinner/>}
    {error.length >0 && <ErrorMessage message={"something went wrong man"}/>}

    {feedbackData.map((feedback)=>(
       <FeedbackItem key={feedback.id} feedbackItems={feedback}/>
))}
  
</ol> )
}
