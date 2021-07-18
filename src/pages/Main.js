import Card from '../components/Card'
import './Main.css'

const Main = () => {
  return (
   
      <div className="wrapper row">
        <div className="title">
                <h1>This is my Card Section <span>😀</span></h1>  
          </div>
        <div className="container">
            <Card/>
            <Card/>
            <Card/>
         
        </div>
      </div>
  
  )

}

export default Main