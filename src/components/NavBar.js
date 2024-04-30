import React from 'react'




export default function NavBar() {
    return (
       <><div class="nav-bar-other">
            <div class="nav-container-other">
                <div class="logo-other">
                    <a href="/home" class="a-logo-other">Green Energy Tracker</a>
                </div>
                <form class="form-block-other">
                    <input type="text" name="Post Code" id="postCode" placeholder="Post Code" class="post-code-input-other" />
                    <input type="submit" name="Go" id="Go" value="Go" class="go-button-other" />
                </form>
            </div>
        </div></>
    )
}