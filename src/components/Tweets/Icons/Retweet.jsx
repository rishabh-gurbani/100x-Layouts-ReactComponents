import PropType from 'prop-types'

const Retweet = ({className}) => {
    return (
        <svg width={20} height={15} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="Group 26840">
                <path id="Vector 5" d="M3.40304 1.46069L1.24615 3.6176M3.40304 1.46069L5.55994 3.6176M3.40304 1.46069L3.40304 10.6959C3.40304 12.2663 4.67611 13.5394 6.24652 13.5394L11.1679 13.5394" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector 4" d="M16.9328 13.5396L19.0897 11.3826M16.9328 13.5396L14.7759 11.3826M16.9328 13.5396L16.9328 4.30436C16.9328 2.73395 15.6597 1.46088 14.0893 1.46088L9.16792 1.46088" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    )
}

Retweet.propTypes = {
    className: PropType.string,
}

export default Retweet