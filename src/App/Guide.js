import React,{useState} from 'react'
import { useTranslation,Trans  } from 'react-i18next';
import { motion,AnimatePresence } from "framer-motion"
import {month_data, data_9,data} from './ScheduleData'
function Guide() {
  const { t, i18n } = useTranslation();
  const [currentData, setCurrentData] = useState(data[0])
  const [show , setShow] = useState(true)
  const handleMonthClick = (index)=>{
    setShow(false)
    
    setTimeout(()=>{
      setCurrentData(data[index])
      setShow(true)
    },1000)
    
  }
  return (
    <div className='guide'>
      <div className="container">
          <div className="main-title">
            <h1>{t('guide_title')}</h1>
          </div>
      </div>
      
      <div className="container">
        <div className="items">
          <div className="content">
            <div className='data-list'>
              {month_data.map((item,index)=>{
                return(
                  <div key={index} onClick={()=>handleMonthClick(index)}>
                    {item.title}
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="table-title">{currentData.title}</div>
          <div className="table-subtitle">10/14(五) 13:00-15:00 不對外開放</div>
          <AnimatePresence>
          {currentData.data && show && ( 
            <motion.div 
              className="content" 
              key='1'
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{type:'spring' , stiffness:100,delay:0.5}}
            >
              
              <table className='guide_table'  width="100%" cellSpacing="0" cellPadding="0" align="center">
                <thead>
                  <tr>
                    <th>時間 Time</th>
                    <th>主題 Show</th>
                    <th>類型 Title</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    currentData.data.map((item,index)=>{
                      return(
                        <tr key={index}>
                          <td className='time'>{item.time}</td>
                          <td>{item.show}</td>
                          <td>{item.title}</td>
                        </tr>
                        )
                    })
                  }
                </tbody>
              </table>
            </motion.div>
          )}
          </AnimatePresence>
          
          
        </div>

      </div>
    </div>
  )
}

export default Guide