
type hashTagItemProps ={
    company:string
    onSelectCompany: (company:string)=>void;
}
export default function HastagItem({company,onSelectCompany}:hashTagItemProps) {
  return (
        <li>
            <button onClick={()=>onSelectCompany(company)}>
              #{company}
            </button>
        </li>
  )
}
