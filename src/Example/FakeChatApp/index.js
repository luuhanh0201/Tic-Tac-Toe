import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]
function ChatApp() {

    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = function (e) {
            console.log(e)
        }
        console.log(lessonId)
        window.addEventListener(`lesson-${lessonId}`, handleComment)


        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {
                    lessons.map((lesson, index) => {
                        return (
                            <li

                                key={index}
                                style={{
                                    color: lessonId === lesson.id ? 'red' : '#333'

                                }}
                                onClick={() => setLessonId(lesson.id)}
                            >
                                {lesson.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ChatApp;