import { useState } from "react"

const User = (props) => {
    return (
        <div className="user">
            <div className="user-field">[props.user.firstName]</div>
            <div className="user-field">[props.user.lastName]</div>
            <div className="user-field">[props.user.age]</div>
            <div className="user-field">[props.user.password]</div>
        </div>
    )
}
export default User;