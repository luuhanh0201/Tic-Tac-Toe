/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

function Content() {
    const [avatar, setAvatar] = useState('')


    useEffect(()=>{
        return ()=>{
            URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handleUpdateAvatar = function (e) {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
        console.log(file)
    }

    return (
        <div>
            <img src={avatar.preview} />

            <input
                type='file'
                onChange={handleUpdateAvatar}
            />
        </div>
    );
}

export default Content;