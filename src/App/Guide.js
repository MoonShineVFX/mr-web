import React from 'react'
import { useTranslation,Trans  } from 'react-i18next';
function Guide() {
  const { t, i18n } = useTranslation();
  const data = [
    { time:"14:00 - 14:30",	show:"河馬圓舞曲 + 帝江化生",	title:"MR 互動體驗"},
    { time:"15:00 - 15:30",	show:"光電音造盤絲洞",	title:"沉浸式投影"},
    { time:"15:30 – 16:00",	show:"桃符",	title:"沉浸式投影"},
    { time:"16:00 – 16:30",	show:"鶴之舞 + 河馬圓舞曲",	title:"MR 互動體驗"},
    { time:"17:00 – 17:30",	show:"光電音造盤絲洞",	title:"沉浸式投影"},
    { time:"17:30 – 18:00",	show:"桃符",	title:"沉浸式投影"},
    { time:"18:00 - 18:30",	show:"帝江化生 + 鶴之舞",	title:"MR 互動體驗"}
  ]
  const data_9 = [
    { time:"14:00 - 14:30",	show:"光電音造盤絲洞",	title:"沉浸式投影"},
    { time:"14:30 - 15:00",	show:"杏仁 ミル",	title:"MR 互動體驗"},
    { time:"15:00 – 15:30",	show:"杏仁 ミル",	title:"MR 互動體驗"},
    { time:"16:00 – 16:30",	show:"鶴之舞 + 河馬圓舞曲",	title:"MR 互動體驗"},
    { time:"17:00 – 17:30",	show:"河馬圓舞曲 + 帝江化生",	title:"MR 互動體驗"},
    { time:"18:00 – 18:30",	show:"桃符",	title:"沉浸式投影"},
    { time:"18:30 - 19:00",	show:"光電音造盤絲洞",	title:"沉浸式投影"}
  ]
  
  return (
    <div className='guide'>
      <div className="container">
          <div className="main-title">
            <h1>{t('sep_title')}</h1>
          </div>
      </div>
      <div className="container">
        <div className="items">
          <div className="content">
            <div className="title">{t('guide_date_title')}</div>
            <div className="item dates_info" data-aos="fade-up">
              <div className='dates_date'>
                <span>每週五六日</span>  
                <div>*9/17(六) 特別休館*</div>
              </div>

            </div>
          </div>
          <div className="content">
            <table className='guide_table'  width="100%" cellspacing="0" cellpadding="0" align="center">
              <thead>
                <tr>
                  <th>時間 Time</th>
                  <th>主題 Show</th>
                  <th>類型 Title</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item,index)=>{
                    return(
                      <tr>
                        <td className='time'>{item.time}</td>
                        <td>{item.show}</td>
                        <td>{item.title}</td>
                      </tr>
                      )
                  })
                }

                
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Guide