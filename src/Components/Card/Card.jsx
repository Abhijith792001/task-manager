import React from 'react'

function Card() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Flutter</h3>
                </div>

                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors">
                    Mark Done
                </button>
            </div>

            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                I need to study Flutter app development and understand the framework basics
            </p>

            <div className="flex items-center justify-between">
                <span className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm font-medium rounded-full border border-amber-200">
                    In Progress
                </span>
                <span className="text-xs text-gray-400 font-medium">Today</span>
            </div>
        </div>
    )
}

export default Card
