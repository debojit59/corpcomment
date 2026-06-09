import { useEffect, useState } from "react";
import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"
import HastagList from "./components/hashtag/HastagList"
import type { TFeedbackItems } from "./lib/type";





function App() {

  const [feedbackData, setFeedBackData] = useState<TFeedbackItems[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(false)
  const [error,setError] = useState<string>("")
  const[selectedComapany,setSelectedCompany] = useState("")

  const companyList = feedbackData.reduce<string[]>((acc,item)=>{
    if(!acc.includes(item.company)){
      acc.push(item.company)
    }
    return acc
  },[])

  const filteredFeedbackData = selectedComapany? feedbackData.filter((item)=>item.company===selectedComapany):feedbackData;

  const handleSelectedCompany = (company :string)=>{
    setSelectedCompany(company)
  }  

  async function postFeedback(newItem: TFeedbackItems) {
    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: `application/json`,
        "Content-Type": `application/json`
      }
    })
  }

  const handleAddToList = async (text: string) => {
    const companyName = text.split(" ").find((word: string) => word.includes("#"))!.substring(1);

    const newItem: TFeedbackItems = {
      text: text,
      id: new Date().getTime(),
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    }
    setFeedBackData((prev) => [...prev, newItem])
    await postFeedback(newItem)
  }

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
   <div className="app">
    <Footer/>
    <Container feedbackData={filteredFeedbackData} isLoading={isLoading} error={error} handleAddToList={handleAddToList}/>
    <HastagList companyList={companyList} onSelectCompany ={handleSelectedCompany}/>
   </div>


   
  )
}

export default App
