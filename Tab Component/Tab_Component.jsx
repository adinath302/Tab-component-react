import React, { useState } from 'react';
import New_Tab from './Tab';
import { motion } from "motion/react"

const tabsData = [
    {
        id: 1,
        title: 'Overview',
        content: 'This tab provides a general overview of the product, its purpose, and how it can help users solve their problems efficiently.',
    },
    {
        id: 2,
        title: 'Features',
        content: 'Explore the powerful features including real-time collaboration, intuitive design, and seamless integration with your favorite tools.',
    },
    {
        id: 3,
        title: 'Pricing',
        content: 'Choose from flexible pricing plans to suit individuals, small teams, and large enterprises. No hidden fees, cancel anytime.',
    },
    {
        id: 4,
        title: 'FAQs',
        content: 'Find answers to frequently asked questions about our product, setup, billing, and customer support.',
    },
    {
        id: 5,
        title: 'Contact',
        content: 'Need help? Reach out to our support team via email or chat. We’re here to help 24/7.',
    },
];

const Tab_Component = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <div className="m-4 flex flex-col items-center">
            <h1 className="text-center font-serif mb-5 text-2xl">Tab Component</h1>
            <New_Tab
                item={tabsData}
                renderitem={(item) => (
                    <button
                        key={item.id}
                        className={`px-4 py-2 rounded-t-xl border font-medium ${activeTab === item.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                            }`}
                        onClick={() => setActiveTab(item.id)} // update the active tab
                    // aria-selected={activeTab === item.id} // used to indicate the selected tab to screen readers from the tab panel
                    // role="tab" // set the role to "tab"
                    >
                        {item.title}
                    </button>
                )}
            />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: activeTab * 0.5 }}
                // role="tabpanel"
                className="border w-[520px] p-4 h-[125px] overflow-auto mt-2"
            >
                {tabsData.find((item) => item.id === activeTab)?.content || "The Content Is not available"}
            </motion.div>
        </div>
    );
};

export default Tab_Component;