//REACT
import { useState } from 'react';
//ALERTS
import { errorAlert } from '../alerts';
//AWS-AMPLIFY
import { signOut } from 'aws-amplify/auth';


export default function Home(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>('Dashboard');
    const handleTabChange = (tab: string) => setActiveTab(tab);


    return (
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">CoreAssetTracker</h1>
                <p className="text-lg sm:text-xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus augue.</p>
                <div className="flex justify-center flex-col sm:flex-row gap-4 mb-8">
                    {['Dashboard', 'Accounting', 'Payroll', 'Contact us'].map((tab: string) => (
                        <button
                            key={tab}
                            className={`w-40 sm:w-auto mx-auto sm:mx-0 text-white font-medium py-1.5 px-2.5 sm:py-3 sm:px-6 rounded-md flex items-center justify-center transition-all duration-200 hover:shadow-lg text-xs sm:text-sm ${activeTab === tab ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="bg-white text-gray-800 p-6 rounded-md shadow-lg">
                    {activeTab === 'Dashboard' && <p>Dashboard Content</p>}
                    {activeTab === 'Accounting' && <p>Accounting Content</p>}
                    {activeTab === 'Payroll' && <p>Payroll Content</p>}
                    {activeTab === 'Contact us' && <p>Contact Us Content</p>}
                </div>
            </div>

            <button
                className="bg-blue-500 text-white font-medium py-1.5 px-2.5 sm:py-3 sm:px-6 rounded-md flex items-center justify-center transition-all duration-200 hover:shadow-lg text-xs sm:text-sm"
                onClick={async () => {
                    try {
                        await signOut();
                        console.log('successfully logout');
                        localStorage.removeItem("accessToken");
                        window.location.reload();
                    }
                    catch (error: any) {
                        console.log('error logout:', error);
                        errorAlert(error);
                    }
                }}
            >
                Logout
            </button>
        </div>
    );
}