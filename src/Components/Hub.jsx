import React from 'react'
import Homeheader from './Homeheader'
import Homebuttom from './Homebuttom'
import { NavLink } from "react-router-dom";
import {Mail, Gift, CreditCard, Wallet, Send, Download, DollarSign, Scan, RefreshCw, BookOpen, MessageCircle, Users, HelpCircle } from "lucide-react";
const Hub = () => {
  return (
    <div>
      <Homeheader />
      <div className="p-2 max-w-md mx-auto text-gray-700 bg-white rounded-xl shadow-md space-y-6 ">
      {/* Referral & Gift */}
      <div>
        
        <h2 className="text-lg font-semibold mb-2">Referral & Gift</h2>
        <div className="flex space-x-6">
        <div className="flex flex-col items-center">
            <Mail size={28} />
            <span className="text-sm">Referral</span>
          </div>
          <div className="flex flex-col items-center">
            <Gift size={28} />
            <span className="text-sm">Gift</span>
          </div>
        </div>
        
      </div>
      
      {/* Card Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Card</h2>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <CreditCard size={28} />
            <span className="text-sm">Apply</span>
          </div>
          <div className="flex flex-col items-center">
            <Wallet size={28} />
            <span className="text-sm">Priority</span>
          </div>
        </div>
      </div>
      
      {/* Transaction Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Transaction</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <Download size={28} />
            <span className="text-sm">Deposit</span>
          </div>
          <div className="flex flex-col items-center">
            <Send size={28} />
            <span className="text-sm">Withdraw</span>
          </div>
          <div className="flex flex-col items-center">
            <Send size={28} />
            <span className="text-sm">Send</span>
          </div>
          <div className="flex flex-col items-center">
            <DollarSign size={28} />
            <span className="text-sm">Receive</span>
          </div>
          <div className="flex flex-col items-center">
            <Scan size={28} />
            <span className="text-sm">Scan</span>
          </div>
          <div className="flex flex-col items-center">
            <RefreshCw size={28} />
            <span className="text-sm">Convert</span>
          </div>
        </div>
      </div>
      
      {/* Support Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Support</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <BookOpen size={28} />
            <span className="text-sm">Learn</span>
          </div>
          <div className="flex flex-col items-center">
            <HelpCircle size={28} />
            <span className="text-sm">Q&A</span>
          </div>
          <NavLink to="/community" className="flex flex-col items-center text-gray-700 hover:text-black">
      <Users size={28} />
      <span className="text-sm">Community</span>
    </NavLink>
          <div className="flex flex-col items-center">
            <MessageCircle size={28} />
            <span className="text-sm">Chat</span>
          </div>
        </div>
      </div>
    </div>
      <Homebuttom />
    </div>
  )
}

export default Hub
