import { useState } from "react"

type handleAddToListProps ={
  handleAddToList:(text:string)=> void;
}

export default function FeedbackForm({handleAddToList}:handleAddToListProps) {

  const [text,setText] = useState('');
  const [showValidIndicator , setShowValidIndicator]=useState(false)
  const [showinvalidIndicator,setShowInvalidIndicator]=useState(false)



  const HandleValueChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)}

  const MaxLength = 150
  const CharLength = MaxLength- text.length ;

  const HandleSubmit =(e:React.SubmitEvent<HTMLFormElement>)=> {
    e.preventDefault()

    if(text.length>0 && text.includes("#")){
      setShowValidIndicator(true)
      setTimeout(() => {
        setShowValidIndicator(false)
        
      }, 500);
    }
    else {
      setShowInvalidIndicator(true)
      setTimeout(() => {
        setShowInvalidIndicator(false)
        
      }, 500);
    }

    handleAddToList(text)
    setText("")

  }

  return (
    <form onSubmit={HandleSubmit} className={`form ${
      showinvalidIndicator? "form--invalid":""
    } ${showValidIndicator?"form--valid": ""}`}>
      <textarea id="feedback-form" placeholder="bla bla" 
      value ={text}
      onChange={HandleValueChange}
      maxLength={MaxLength}/>
      <label htmlFor="feedback-form"> 
        Share your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{CharLength}</p>
        <button>
          <span>
            submit
          </span>
        </button>
      </div>
      
    </form>
  )
}
