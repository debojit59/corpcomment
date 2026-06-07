import { useEffect, useState } from "react"
import FeedbackItem from "./FeedbackItem"


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
  const [feedbackData , setFeedBackData] = useState([]);

  useEffect(function(){
    async function FetchData(){
      const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
      const data = await res.json()
      console.log (data)
      setFeedBackData(data.feedbacks)
    }
    FetchData()
  },[])

  return (
<ol className="feedback-list">
    {feedbackData.map((feedback)=>(
       <FeedbackItem key={feedback.id} feedbackItems={feedback}/>
))}
  
</ol> )
}
