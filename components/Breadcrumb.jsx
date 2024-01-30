import Link from "next/link"

const Breadcrumb = ({pageTitle,productName }) => {
  return (
<div className="text-sm breadcrumbs my-5 px-5">
  <ul>
    <li><Link href={`/${pageTitle}`}>{pageTitle}</Link></li> 
    {productName ? <li>{productName}</li> : null} 
  </ul>
</div>
  )
}

export default Breadcrumb