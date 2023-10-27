import PropTypes from 'prop-types'

export default function TabNavigator ({tabs=['active'], activeTab = 0}) {

    const tabComponents = tabs.map(tab => {
        if(tab===tabs[activeTab]){
            return (
                <div key={tab} className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
                    <div className="flex items-end py-4 text-neutral-400 font-medium text-16">
                        {tab}
                    </div>
                    <div className="w-20 rounded-full h-1 absolute bottom-0" />
                </div>
            )
        } else {
            return (
                <div key={tab} className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
                    <div className="flex items-end py-4 text-neutral-50 font-medium text-16">
                        {tab}
                    </div>
                    <div className="bg-twitter-blue w-14 rounded-full h-1 absolute bottom-0" />
                </div>
            )
        }
    })

    return (
        <section className="w-full flex-shrink-0">
            <div className="flex w-full border-b border-neutral-700">
                {tabComponents}
            </div>
        </section>
    )
}

TabNavigator.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeTab: PropTypes.number.isRequired,
}
