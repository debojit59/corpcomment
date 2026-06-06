import { useState } from "react"

export default function FeedbackForm() {

  const [text,setText] = useState('');


  const HandleValueChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)}

  const MaxLength = 150
  const CharLength = MaxLength- text.length ;

  return (
    <form className="form">
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
