import FooterList from '../../../features/FooterList'
import { list1, list2, list3 } from '../../../fixtures/listData'
import './style.css'

function Footer() {

  return ( 
    <div className="footer-wrapper">
        <FooterList linkList={list1} />
        <FooterList linkList={list2} />
        <FooterList linkList={list3} />
    </div>
  )
}

export default Footer
