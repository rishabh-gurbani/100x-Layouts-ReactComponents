import {
    useNavigate,
  } from "react-router-dom";
import { useEffect, useState } from "react"

import HomeFeedHeader from "../../components/Home/HomeFeedHeader"
import TabNavigator from "../../components/Home/TabsNavigator"
import Timeline from "../../components/Timeline"
import ActionButton from "../../components/ActionButton"
import RoundedSnackBar from "../../components/RoundedSnackBar"
import HomeFeedFooter from "../../components/Home/HomeFeedFooter";
import tweets from "./tweets";

export default function Home() {

    const navigate = useNavigate();
    const tabs = ['For You', 'Following'];
    const [activeTab, setActiveTab] = useState(tabs[1]);

    const [loading, setLoading] = useState(true);
    
    return (
        <div className='flex flex-col'>
            <HomeFeedHeader />
            <TabNavigator tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="pb-16">
                <Timeline tweets={tweets}/>
            </div>
            <ActionButton />
            <HomeFeedFooter navigate={navigate}/>
        </div>
    )
}
