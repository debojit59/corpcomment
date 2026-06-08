import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

type handleAddToListProps = {
    handleAddToList: (text:string)=> void;

}

export default function Header({handleAddToList}:handleAddToListProps) {
  return (
     <header className="header">
      <Pattern/>
      <Logo/>
      <PageHeading/>
      <FeedbackForm handleAddToList={handleAddToList}/>
     </header>
  )
}
