import './css.css'
import { listVideo as Data } from './Data'
function Youtube({ newClass,children}) {
    const listData = Data.map((value, index) => {
        
        index === 1 ? newClass = "new-class" : newClass = ""
        console.log()
        return (
            <div key={index} className={`item-video ${newClass}`}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className='img-video' src={value.img} />

                <div className="avatar">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={value.avatar} />
                    <h2 className="title">{value.title}</h2>
                </div>

                <p className="name-channel">{value.nameChannel || 'No name'}</p>
                <div className="info">
                    <span className="view">{value.view}</span>
                    <span className="time">{value.timeUpload}</span>
                </div>
            </div>
        )
    })
    return (
        
        <div className='main'>{listData}<h1>{children}</h1></div>
    );
}

export default Youtube;