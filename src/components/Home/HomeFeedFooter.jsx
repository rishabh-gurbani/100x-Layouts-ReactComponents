import PropTypes from 'prop-types'

import HomeIcon from "../../assets/images/home-screen/home-icon.svg"
import ProfileIcon from "../../assets/images/home-screen/profile.svg"

function HomeFeedFooter ({navigate}) {
    return (
        <footer className="fixed bottom-0 py-4 px-6 bg-black w-full border-t border-neutral-800 flex-shrink-0 mt-4">
            <nav>
            <ul className="flex justify-center gap-10">
                <li>
                    <button onClick={()=>{navigate('/home')}}>
                        <img src={HomeIcon} />
                    </button>
                </li>
                <li>
                    <button onClick={()=>{navigate('/profile')}}>
                        <img src={ProfileIcon} className="p-1" />
                    </button>
                </li>
            </ul>
            </nav>
        </footer>
    )
}

HomeFeedFooter.propTypes = {
    navigate: PropTypes.func,
}

export default HomeFeedFooter
