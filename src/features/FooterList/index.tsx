import type { RowType } from "../../types/list"

type FooterListProps = {
    linkList: RowType[]
}

function FooterList(props: FooterListProps) {
  return (
    <>
        <ul>
            {
                props.linkList.map((listItem, index) => {
                    return <li value={index} key={index}><a href={listItem.link}>{listItem.text}</a></li>
                })
            }
        </ul>
    </>
  )
}

export default FooterList
