'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check, Key } from 'lucide-react'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.password) {
        alert("Password is required");
        return;
        }

        console.log("Form submitted:", formData);
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl" />
            <div className="relative z-10">

                <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/5 to-blue-600/100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <User className="w-15 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
                <p className="text-grey-600">Sign in to continue to your account.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">Email</label>
                    <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email Address"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-none focus:ring-"
                        required
                    />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">Password</label>
                    <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Your Password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-none focus:ring-blue-500"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
                </div>
                
                <button
                type="submit"
                className={"w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all"}
            >
                Login
            </button>
            <div className="text-center">
                <p className="text-sm text-gray-600">
                    Already have an account ?
                    <a href="/Auth/login" className="text-blue-600 hover:underline"> Login</a>
                </p>
            
                </div>
            </form>

            </div>
            </div>
            </div>
            </div>
            
    );
}