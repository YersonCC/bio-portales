import React from "react";

export default function Sidebar({ tabs, activeTab, setActiveTab }) {
  return (
    <aside className="bg-gray-100 border border-black/10 rounded-xl p-3 flex flex-col gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`text-left px-4 py-2 rounded-lg border border-black/10 flex justify-between items-center transition-all ${
            activeTab === tab.id
              ? "bg-gradient-to-r from-emerald-200/60 to-orange-200/60"
              : "hover:bg-emerald-100/40"
          }`}
        >
          {tab.label} <span>{tab.icon}</span>
        </button>
      ))}
    </aside>
  );
}
