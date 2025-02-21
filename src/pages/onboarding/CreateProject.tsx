export const OnboardingStep2 = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Set Up Your Profile</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-2">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border rounded"
                    />
                </div>
            </form>
        </div>
    );
};
