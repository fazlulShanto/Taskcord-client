import { motion } from "framer-motion";
import {
    UsersIcon,
    ClockIcon,
    ChartBarIcon,
    ChartGanttIcon,
} from "lucide-react";

function LandingPage() {
    return (
        <div
            id="landing-page-container"
            className="bg-gray-900 text-white min-h-screen flex flex-col"
        >
            <header className="flex justify-between items-center p-6">
                <h1 className="text-3xl font-bold">Taskcord</h1>
                <nav>
                    <a href="#features" className="px-4 hover:text-gray-400">
                        Features
                    </a>
                    <a href="#about" className="px-4 hover:text-gray-400">
                        About
                    </a>
                    <a href="#contact" className="px-4 hover:text-gray-400">
                        Contact
                    </a>
                </nav>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center">
                <motion.h2
                    className="text-4xl font-extrabold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Manage Your Tasks Seamlessly with Discord Integration
                </motion.h2>
                <p className="text-lg mb-8">
                    Create organizations, invite team members, assign tasks, and
                    set deadlines—all from Discord and our platform.
                </p>
                <motion.button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Get Started
                </motion.button>
            </main>

            <section id="features" className="py-20 bg-gray-800">
                <h3 className="text-3xl font-bold text-center mb-10">
                    Features
                </h3>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-xs m-4 p-6 bg-gray-700 rounded-lg shadow-lg">
                        <ChartGanttIcon className="h-10 w-10 text-blue-400 mb-4" />
                        <h4 className="text-xl font-semibold">
                            Discord Integration
                        </h4>
                        <p>Manage tasks and updates directly from Discord.</p>
                    </div>
                    <div className="max-w-xs m-4 p-6 bg-gray-700 rounded-lg shadow-lg">
                        <UsersIcon className="h-10 w-10 text-blue-400 mb-4" />
                        <h4 className="text-xl font-semibold">
                            Team Collaboration
                        </h4>
                        <p>Invite team members and collaborate on projects.</p>
                    </div>
                    <div className="max-w-xs m-4 p-6 bg-gray-700 rounded-lg shadow-lg">
                        <ClockIcon className="h-10 w-10 text-blue-400 mb-4" />
                        <h4 className="text-xl font-semibold">
                            Task Management
                        </h4>
                        <p>Assign tasks, set deadlines, and track progress.</p>
                    </div>
                    <div className="max-w-xs m-4 p-6 bg-gray-700 rounded-lg shadow-lg">
                        <ChartBarIcon className="h-10 w-10 text-blue-400 mb-4" />
                        <h4 className="text-xl font-semibold">
                            Analytics & Logs
                        </h4>
                        <p>
                            View detailed analytics and logs for your projects.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 p-6 text-center">
                <p>&copy; 2025 Taskcord. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
