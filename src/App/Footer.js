import React , {useEffect , useState} from 'react'

function Footer() {
    const [people , setPeople] = useState()
    useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/peoples.json`)
        .then((r) => r.json())
        .then((data) =>{
            console.log(data.data)
            setPeople(data.data)
      })
     
    })
    
    return (
        <div className="footer" >
            <div>© 2020 - Moondream Reality</div> 
            {/* <div>瀏覽人次: {parseInt(7237) +parseInt(people)}</div>   */}
        </div>
    )
}

export default Footer
