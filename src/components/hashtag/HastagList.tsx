import HastagItem from "./HastagItem"

type hashtagListProps ={
  companyList : string[]
  onSelectCompany:(company:string)=>void;
}

export default function HastagList({companyList,onSelectCompany}:hashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company)=>{
        return (
          <HastagItem key={company} company={company} onSelectCompany={onSelectCompany}/>
          
        )
      })}
    </ul>
  )
}
