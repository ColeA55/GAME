import { useState, useMemo } from 'react';
import { Monitor, AlertCircle, Mail, User, Phone, Skull, Trophy, RefreshCw, Coffee, Video } from 'lucide-react';

const Defs = () => (
  <defs>
    <pattern id="sl" width="2" height="4" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="rgba(0,0,0,0.18)"/></pattern>
    <linearGradient id="sk" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f7dcc0"/><stop offset="100%" stopColor="#c9a58a"/></linearGradient>
    <linearGradient id="psk" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fbe5cc"/><stop offset="100%" stopColor="#d4b49a"/></linearGradient>
    <linearGradient id="tsk" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e8b894"/><stop offset="100%" stopColor="#a67e5e"/></linearGradient>
    <radialGradient id="rgbg"><stop offset="0%" stopColor="#ff00ff" stopOpacity="0.4"/><stop offset="50%" stopColor="#00ffff" stopOpacity="0.2"/><stop offset="100%" stopColor="#000" stopOpacity="0"/></radialGradient>
  </defs>
);

const Frame = ({ children, bg = "#1a2e1a" }) => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <Defs/>
    <rect width="300" height="200" fill={bg}/>
    {children}
    <rect width="300" height="200" fill="url(#sl)" opacity="0.5"/>
    <rect x="1" y="1" width="298" height="198" fill="none" stroke="#4ade80" strokeWidth="2" opacity="0.5"/>
    <circle cx="15" cy="15" r="3" fill="#ef4444"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
    <text x="25" y="19" fontSize="9" fill="#ef4444" fontFamily="monospace">REC</text>
    <text x="240" y="19" fontSize="9" fill="#4ade80" fontFamily="monospace">CAM-4</text>
  </svg>
);

const Sweat = ({ x, y }) => <g transform={`translate(${x} ${y})`}><path d="M 0 0 Q -2.5 6 0 8 Q 2.5 6 0 0" fill="#7dd3fc" stroke="#0284c7" strokeWidth="0.3"/></g>;
const AngerLines = ({ x, y }) => <g transform={`translate(${x} ${y})`} stroke="#ef4444" strokeWidth="1.2" fill="none"><path d="M -5 0 L 5 0"/><path d="M -6 -4 L 6 -4"/><path d="M -5 4 L 5 4"/></g>;

const SCENES = {
  gary_monitor: (<Frame><rect x="0" y="0" width="300" height="130" fill="#a89878"/><rect x="0" y="130" width="300" height="70" fill="#6b4a2a"/><rect x="85" y="65" width="130" height="90" fill="#2a2a2a" stroke="#888" strokeWidth="2"/><rect x="90" y="70" width="120" height="78" fill="#000"/><rect x="95" y="78" width="110" height="40" fill="#1a1a3e"/><text x="150" y="94" fontSize="9" fill="#ff6b9d" fontFamily="monospace" textAnchor="middle" fontWeight="bold">🔥 HOT SINGLES 🔥</text><text x="150" y="108" fontSize="7" fill="#ff6b9d" fontFamily="monospace" textAnchor="middle">WANT TO MEET GARY_47!</text><g transform="translate(150 45)"><ellipse rx="22" ry="26" fill="url(#psk)"/><path d="M -22 -8 Q -24 -28 0 -30 Q 24 -28 22 -8 Q 18 -15 0 -13 Q -18 -15 -22 -8" fill="#e8e8e8"/><rect x="-14" y="-1" width="12" height="9" fill="none" stroke="#333" strokeWidth="1.2" rx="1"/><rect x="2" y="-1" width="12" height="9" fill="none" stroke="#333" strokeWidth="1.2" rx="1"/><circle cx="-8" cy="3" r="1" fill="#4a6a8a"/><circle cx="8" cy="3" r="1" fill="#4a6a8a"/><path d="M -6 15 Q 0 18 6 15" stroke="#333" strokeWidth="1.5" fill="none"/></g><text x="260" y="80" fontSize="20">😵‍💫</text></Frame>),

  gary_phishing: (<Frame><rect x="0" y="0" width="300" height="140" fill="#a89878"/><rect x="0" y="140" width="300" height="60" fill="#6b4a2a"/><rect x="70" y="40" width="160" height="120" fill="#2a2a2a" stroke="#888" strokeWidth="2"/><rect x="75" y="45" width="150" height="110" fill="#fff"/><rect x="75" y="45" width="150" height="14" fill="#c4302b"/><text x="150" y="55" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle">📧 PRINCE BABAJIDE (47)</text><text x="80" y="70" fontSize="5" fill="#000" fontFamily="monospace">&gt; Re: Re: Re: URGENT $47M</text><text x="80" y="80" fontSize="5" fill="#000" fontFamily="monospace">Dear Gary, my brother, friend —</text><text x="80" y="90" fontSize="5" fill="#000" fontFamily="monospace">I need just your SSN, routing #,</text><text x="80" y="100" fontSize="5" fill="#000" fontFamily="monospace">mother's maiden name, selfie.</text><text x="80" y="128" fontSize="5" fill="#060" fontFamily="monospace">&gt; Gary replied 47 times</text><g transform="translate(35 75)"><ellipse rx="18" ry="22" fill="url(#psk)"/><path d="M -18 -7 Q -20 -22 0 -25 Q 20 -22 18 -7" fill="#e8e8e8"/><circle cx="-7" cy="1" r="0.8" fill="#222"/><circle cx="7" cy="1" r="0.8" fill="#222"/><path d="M -5 10 Q 0 14 5 10" stroke="#333" strokeWidth="1.2" fill="none"/></g><text x="30" y="125" fontSize="9" fill="#f00" fontFamily="monospace">💸 sent: $40k</text></Frame>),

  gary_google: (<Frame><rect x="0" y="0" width="300" height="140" fill="#a89878"/><rect x="0" y="140" width="300" height="60" fill="#6b4a2a"/><rect x="80" y="40" width="140" height="110" fill="#2a2a2a" stroke="#888" strokeWidth="2"/><rect x="85" y="45" width="130" height="100" fill="#fff"/><rect x="85" y="45" width="130" height="14" fill="#4285f4"/><text x="150" y="55" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle">🔒 VERIFY YOUR IDENTITY</text><text x="95" y="73" fontSize="6" fill="#000" fontFamily="monospace">Code sent to: (***)***-****</text><text x="95" y="83" fontSize="5" fill="#666" fontFamily="monospace">(phone you had in 2007)</text><rect x="95" y="92" width="110" height="12" fill="#eee" stroke="#ccc"/><text x="95" y="120" fontSize="5" fill="#f00" fontFamily="monospace">attempt 47/47 — LOCKED</text><g transform="translate(35 80)"><ellipse rx="20" ry="25" fill="url(#psk)"/><path d="M -20 -8 Q -22 -26 0 -28 Q 22 -26 20 -8" fill="#ddd"/><circle cx="-7.5" cy="2" r="0.8" fill="#222"/><circle cx="7.5" cy="2" r="0.8" fill="#222"/><path d="M -6 13 L 6 13" stroke="#222" strokeWidth="1.5"/></g><Sweat x={20} y={60}/><Sweat x={52} y={65}/><text x="240" y="70" fontSize="9" fill="#f00" fontFamily="monospace">"GOOGLE</text><text x="240" y="82" fontSize="9" fill="#f00" fontFamily="monospace">HOLDS ME</text><text x="240" y="94" fontSize="9" fill="#f00" fontFamily="monospace">HOSTAGE"</text></Frame>),

  frank_keyboard: (<Frame bg="#3a2d1a"><rect x="0" y="135" width="300" height="65" fill="#5a3a1a"/><rect x="30" y="145" width="230" height="42" fill="#666" rx="2"/><g fill="#e8d89a" opacity="0.9"><path d="M 45 155 Q 70 148 95 158 Q 120 168 145 160 Q 170 152 195 162 Q 220 170 245 158 L 245 185 L 45 185 Z"/></g><g fill="#c9b57a" opacity="0.8"><ellipse cx="80" cy="170" rx="12" ry="4"/><ellipse cx="170" cy="175" rx="15" ry="5"/></g><rect x="110" y="155" width="28" height="9" fill="#6b3410" rx="1" transform="rotate(12 124 159)"/><g fill="#ff7722" opacity="0.7"><ellipse cx="200" cy="168" rx="10" ry="3"/><ellipse cx="90" cy="155" rx="6" ry="2"/></g><g transform="translate(260 148)"><ellipse rx="2.5" ry="3.5" fill="#0a0a0a"/></g><g transform="translate(130 65)"><path d="M -12 25 L 12 25 L 12 40 L -12 40 Z" fill="#c9a58a"/><path d="M -28 -8 Q -28 -25 0 -28 Q 28 -25 28 -8 Q 30 15 20 25 Q 0 30 -20 25 Q -30 15 -28 -8 Z" fill="url(#tsk)"/><path d="M -26 -10 Q -20 -32 0 -34 Q 20 -32 26 -10 Q 18 -25 10 -22 Q 0 -28 -10 -22 Q -18 -25 -26 -10" fill="#3a2a1a"/><g fill="#1a0a00">{[...Array(15)].map((_,i)=><circle key={i} cx={-14+i*2} cy={10+(i%2)*2} r="0.5"/>)}</g><ellipse cx="-10" cy="-3" rx="3" ry="2" fill="#fff"/><ellipse cx="10" cy="-3" rx="3" ry="2" fill="#fff"/><circle cx="-10" cy="-2" r="1.5" fill="#4a5a3a"/><circle cx="10" cy="-2" r="1.5" fill="#4a5a3a"/><circle cx="-10" cy="-2" r="0.7" fill="#000"/><circle cx="10" cy="-2" r="0.7" fill="#000"/><path d="M -16 -10 Q -10 -13 -4 -10" stroke="#2a1a0a" strokeWidth="1.5" fill="none"/><path d="M 4 -9 Q 10 -14 16 -10" stroke="#2a1a0a" strokeWidth="1.5" fill="none"/><ellipse cx="-17" cy="8" rx="3.5" ry="2" fill="#c0342a" opacity="0.8"/><ellipse cx="0" cy="15" rx="8" ry="4" fill="#2a1a0a"/><rect x="-5" y="13" width="2.5" height="4" fill="#d4b478"/><rect x="-1.5" y="13" width="2.5" height="4" fill="#d4b478"/><rect x="2" y="13" width="2.5" height="4" fill="#d4b478"/><circle cx="0" cy="17" r="2.5" fill="#8b4513"/></g><path d="M 98 120 L 162 120 L 172 200 L 88 200 Z" fill="#c4c48a"/><ellipse cx="125" cy="160" rx="10" ry="6" fill="#c0342a" opacity="0.75"/><ellipse cx="148" cy="170" rx="8" ry="4" fill="#d4a038" opacity="0.85"/></Frame>),

  frank_biggulp: (<Frame bg="#3a2d1a"><rect x="0" y="130" width="300" height="70" fill="#5a3a1a"/><rect x="40" y="95" width="220" height="90" fill="#333" rx="4" stroke="#888" strokeWidth="2"/><rect x="55" y="110" width="190" height="65" fill="#000"/><text x="150" y="135" fontSize="11" fill="#fff" fontFamily="monospace" textAnchor="middle" fontWeight="bold">:( BSOD</text><text x="150" y="150" fontSize="6" fill="#fff" fontFamily="monospace" textAnchor="middle">ERROR: LIQUID_IS_NOT_WATER</text><text x="150" y="162" fontSize="5" fill="#7dd3fc" fontFamily="monospace" textAnchor="middle">code: PEPSI_BLUE_0xDEADBEEF</text><g fill="#00d4ff" opacity="0.85"><path d="M 50 180 Q 60 175 70 182 Q 80 186 90 183" stroke="#00d4ff" strokeWidth="3" fill="none"/><circle cx="75" cy="182" r="3"/></g><g transform="translate(150 55)"><path d="M -22 18 L 22 18 L 22 32 L -22 32 Z" fill="#c9a58a"/><path d="M -25 -8 Q -25 -22 0 -25 Q 25 -22 25 -8 Q 26 12 18 22 Q 0 26 -18 22 Q -26 12 -25 -8" fill="url(#tsk)"/><path d="M -23 -10 Q -18 -28 0 -30 Q 18 -28 23 -10" fill="#3a2a1a"/><circle cx="-9" cy="-1" r="1.8" fill="#2a4a6a"/><circle cx="9" cy="-1" r="1.8" fill="#2a4a6a"/><path d="M -10 10 Q 0 6 10 10 Q 10 16 0 17 Q -10 16 -10 10" fill="#6b3a1a"/></g><text x="150" y="35" fontSize="10" fill="#0ff" fontFamily="monospace" textAnchor="middle" fontWeight="bold">"STILL WORKS THO"</text></Frame>),

  frank_truck: (<Frame bg="#2a3a4a"><rect x="0" y="130" width="300" height="70" fill="#1a1a2a"/><g transform="translate(150 115)"><rect x="-90" y="-30" width="180" height="45" fill="#c0392b" rx="4"/><rect x="-85" y="-45" width="90" height="15" fill="#c0392b"/><rect x="-10" y="-28" width="95" height="28" fill="#1a2a3a"/><circle cx="-60" cy="15" r="14" fill="#222"/><circle cx="60" cy="15" r="14" fill="#222"/><rect x="30" y="-25" width="50" height="20" fill="#87ceeb" opacity="0.4"/><path d="M 30 -25 L 30 -5 L 40 -10 L 50 -5 L 50 -25 Z" fill="#fff" opacity="0.8"/><text x="-60" y="5" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="bold">FRANK-1</text></g><text x="150" y="30" fontSize="9" fill="#ff0" fontFamily="monospace" textAnchor="middle">"I NEED WIFI IN MY TRUCK"</text><text x="150" y="45" fontSize="7" fill="#aaa" fontFamily="monospace" textAnchor="middle" fontStyle="italic">(the curtains are new)</text></Frame>),

  linda_glass: (<Frame><rect x="0" y="0" width="300" height="120" fill="#d4c4a8"/><rect x="0" y="120" width="300" height="80" fill="#6a8a9a" opacity="0.3"/><g transform="translate(200 140)"><ellipse rx="18" ry="10" fill="#1a1a1a"/><rect x="-8" y="-12" width="16" height="6" fill="#1a1a1a"/></g><text x="230" y="135" fontSize="7" fill="#ff0" fontFamily="monospace">*scrape*</text><text x="235" y="148" fontSize="7" fill="#ff0" fontFamily="monospace">*scrape*</text><g transform="translate(115 70)"><rect x="-18" y="25" width="36" height="20" fill="#c71585"/><ellipse rx="25" ry="28" fill="url(#psk)"/><path d="M -25 -8 Q -28 -28 0 -30 Q 28 -28 25 -8 Q 20 -16 0 -14 Q -20 -16 -25 -8 Z" fill="#b8860b"/><circle cx="-6.5" cy="0" r="0.9" fill="#222"/><circle cx="6.5" cy="0" r="0.9" fill="#222"/><path d="M -10 -6 L -2 -5 M 2 -5 L 10 -6" stroke="#c4302b" strokeWidth="1.5"/><path d="M -6 12 Q 0 8 6 12" stroke="#c4302b" strokeWidth="1.5" fill="none"/></g><AngerLines x={50} y={50}/><text x="60" y="100" fontSize="16">😡</text></Frame>),

  linda_inbox: (<Frame><rect x="0" y="140" width="300" height="60" fill="#4a3a2a"/><rect x="60" y="30" width="200" height="130" fill="#c0c0c0" stroke="#888" strokeWidth="2"/><rect x="65" y="35" width="190" height="120" fill="#fff"/><rect x="65" y="35" width="190" height="14" fill="#0078d4"/><text x="70" y="45" fontSize="7" fill="#fff" fontFamily="monospace">OUTLOOK — 94,247 unread</text><g fontFamily="monospace" fontSize="5" fill="#000"><text x="70" y="57">📧 Re: the office fridge situation</text><text x="70" y="65">📧 FW: hilarious cat video (2009)</text><text x="70" y="73">📧 security update (x47)</text><text x="70" y="81">📧 phishing awareness (unread)</text><text x="70" y="89">📧 benefits enrollment (2011)</text><text x="70" y="97">📧 💊 hot singles (viagra edition)</text><text x="70" y="105">📧 Re: Re: Re: Re: Re: Re: RE RE</text><text x="70" y="113">📧 mailbox full — please archive</text><text x="70" y="121">📧 IT: final warning re: deletion</text><text x="70" y="129">📧 IT: actual final warning</text><text x="70" y="137">📧 IT: we are begging you, Linda</text><text x="70" y="147" fill="#f00">⚠ 94,236 more (loading... 4%)</text></g><g transform="translate(30 80)"><ellipse rx="20" ry="22" fill="url(#psk)"/><path d="M -20 -6 Q -22 -22 0 -25 Q 22 -22 20 -6" fill="#b8860b"/><circle cx="-5" cy="0.5" r="0.8" fill="#222"/><circle cx="5" cy="0.5" r="0.8" fill="#222"/><path d="M -5 8 L 5 8" stroke="#c4302b" strokeWidth="1.5"/></g></Frame>),

  tyler_wifi: (<Frame bg="#0a0a1a"><rect x="0" y="0" width="300" height="200" fill="url(#rgbg)"/><rect x="50" y="55" width="200" height="120" fill="#1a1a2e" stroke="#ff00ff" strokeWidth="2" rx="3"/><rect x="60" y="65" width="180" height="85" fill="#0a0a1a"/><text x="150" y="95" fontSize="14" fill="#ef4444" fontFamily="monospace" textAnchor="middle">🚫 BLOCKED</text><text x="150" y="112" fontSize="8" fill="#ef4444" fontFamily="monospace" textAnchor="middle">BY CITY FIREWALL</text><g><rect x="45" y="175" width="210" height="5" fill="#ff00ff"/><rect x="45" y="175" width="60" height="5" fill="#00ffff"/></g><g transform="translate(150 35)"><ellipse rx="20" ry="22" fill="url(#psk)"/><path d="M -24 -14 L 24 -14 L 26 -4 L -26 -4 Z" fill="#ef4444"/><text x="0" y="-7" fontSize="6" fill="#fff" fontFamily="monospace" textAnchor="middle" fontWeight="bold">$WAG</text><rect x="-14" y="0" width="28" height="8" fill="#000" rx="2"/><ellipse cx="-7" cy="4" rx="5" ry="3" fill="#1a1a1a"/><ellipse cx="7" cy="4" rx="5" ry="3" fill="#1a1a1a"/></g></Frame>),

  tyler_crypto: (<Frame bg="#0a0a1a"><rect x="0" y="140" width="300" height="60" fill="#1a0a0a"/><g>{[...Array(8)].map((_,i)=>(<g key={i} transform={`translate(${40+i*30} 100)`}><rect x="-8" y="-40" width="16" height="60" fill="#1a1a2e" stroke="#00ffff" strokeWidth="1"/><circle cx="0" cy="-10" r="4" fill="#f60"><animate attributeName="opacity" values="1;0.3;1" dur={`${1+i*0.1}s`} repeatCount="indefinite"/></circle><text x="0" y="-7" fontSize="4" fill="#fff" fontFamily="monospace" textAnchor="middle">GPU</text></g>))}</g><text x="150" y="40" fontSize="10" fill="#0ff" fontFamily="monospace" textAnchor="middle" fontWeight="bold">🔥 2.4 TH/s 🔥</text><text x="150" y="52" fontSize="7" fill="#ff0" fontFamily="monospace" textAnchor="middle">(on: conference room power strip)</text><rect x="20" y="150" width="80" height="40" fill="#2a1a1a" stroke="#f00" strokeWidth="1"/><text x="60" y="163" fontSize="7" fill="#f00" fontFamily="monospace" textAnchor="middle">ELECTRIC BILL</text><text x="60" y="178" fontSize="11" fill="#f00" fontFamily="monospace" textAnchor="middle" fontWeight="bold">+$47,000</text></Frame>),

  tyler_ai: (<Frame bg="#0a0a2a"><rect x="60" y="45" width="180" height="115" fill="#1a0a2a" stroke="#ff69b4" strokeWidth="2" rx="3"/><rect x="70" y="55" width="160" height="75" fill="#2a1a3a"/><text x="150" y="70" fontSize="8" fill="#ff69b4" fontFamily="monospace" textAnchor="middle" fontWeight="bold">💕 ASHLEY — AI GF 💕</text><g transform="translate(150 95)"><ellipse rx="12" ry="15" fill="#ffc0cb"/><path d="M -12 -5 Q -14 -18 0 -20 Q 14 -18 12 -5" fill="#ff1493"/><circle cx="-4" cy="-2" r="1" fill="#000"/><circle cx="4" cy="-2" r="1" fill="#000"/></g><text x="75" y="125" fontSize="6" fill="#fff" fontFamily="monospace">Ashley: "hi babe 💕 send $47"</text><text x="75" y="140" fontSize="5" fill="#999" fontFamily="monospace">(Ashley is 3 guys in Bulgaria)</text><rect x="70" y="145" width="160" height="12" fill="#ff1493"/><text x="150" y="153" fontSize="6" fill="#fff" fontFamily="monospace" textAnchor="middle">💳 UPGRADE DELUXE ($200/mo)</text><rect x="5" y="170" width="85" height="25" fill="#2a1a1a" stroke="#f00"/><text x="47" y="180" fontSize="6" fill="#f00" fontFamily="monospace" textAnchor="middle">TOTAL SPENT:</text><text x="47" y="192" fontSize="10" fill="#f00" fontFamily="monospace" textAnchor="middle" fontWeight="bold">$847.00</text></Frame>),

  chad_tab: (<Frame bg="#1a1a2a"><rect x="60" y="70" width="180" height="120" fill="#222" stroke="#888" strokeWidth="2"/><rect x="65" y="85" width="170" height="95" fill="#2a2a3e"/><rect x="65" y="70" width="170" height="15" fill="#f00"/><circle cx="78" cy="77" r="4" fill="#fff"><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/></circle><text x="95" y="81" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="bold">● LIVE — 47 VIEWERS</text><text x="70" y="105" fontSize="7" fill="#aaa" fontFamily="monospace">google.com/search?q=</text><text x="70" y="118" fontSize="8" fill="#f00" fontFamily="monospace" fontWeight="bold">"is it legal to..."</text><text x="70" y="135" fontSize="7" fill="#aaa" fontFamily="monospace">chrome://history</text><text x="70" y="148" fontSize="7" fill="#aaa" fontFamily="monospace">[REDACTED].com/videos/47</text><g transform="translate(150 35)"><ellipse rx="18" ry="20" fill="url(#sk)"/><path d="M -16 -10 Q -14 -20 0 -22 Q 14 -20 16 -10" fill="#6b4423"/><ellipse cx="-7" cy="-2" rx="3" ry="4" fill="#fff"/><ellipse cx="7" cy="-2" rx="3" ry="4" fill="#fff"/><circle cx="-7" cy="-1" r="1.5" fill="#000"/><circle cx="7" cy="-1" r="1.5" fill="#000"/><ellipse cx="0" cy="10" rx="5" ry="7" fill="#222"/></g><text x="120" y="65" fontSize="18" textAnchor="middle">💀</text></Frame>),

  chad_snore: (<Frame bg="#1a1a2e"><rect x="0" y="140" width="300" height="60" fill="#0a0a1a"/><rect x="60" y="40" width="180" height="110" fill="#2a2a3e" stroke="#888" strokeWidth="2"/><rect x="60" y="40" width="180" height="14" fill="#0a66c2"/><text x="70" y="50" fontSize="7" fill="#fff" fontFamily="monospace">ALL-HANDS — MAYOR OF DALLAS</text><g transform="translate(150 100)"><ellipse rx="35" ry="30" fill="url(#sk)"/><path d="M -30 -15 Q -25 -28 0 -30 Q 25 -28 30 -15" fill="#6b4423"/><path d="M -15 -5 Q -10 -3 -5 -5" stroke="#333" strokeWidth="2" fill="none"/><path d="M 5 -5 Q 10 -3 15 -5" stroke="#333" strokeWidth="2" fill="none"/><ellipse cx="0" cy="10" rx="12" ry="6" fill="#2a1a1a"/></g><g fill="#ccc" opacity="0.7"><text x="200" y="70" fontSize="20">💤</text><text x="215" y="85" fontSize="16">💤</text></g><rect x="70" y="155" width="160" height="15" fill="#1a1a2e" stroke="#4ade80"/><text x="150" y="165" fontSize="7" fill="#4ade80" fontFamily="monospace" textAnchor="middle">🎤 [SNORE] 23:47 elapsed</text><text x="150" y="30" fontSize="8" fill="#ff0" fontFamily="monospace" textAnchor="middle">re: "OPERATION DEEP SLEEP"</text></Frame>),

  karen_minions: (<Frame><rect x="0" y="130" width="300" height="70" fill="#5a4a2a"/><rect x="10" y="140" width="50" height="65" fill="#ffeb3b" transform="rotate(-8 35 170)"/><text x="35" y="175" fontSize="7" fill="#000" fontFamily="monospace" textAnchor="middle" transform="rotate(-8 35 170)">MONDAY</text><rect x="240" y="145" width="50" height="55" fill="#ffeb3b" transform="rotate(6 265 172)"/><text x="265" y="175" fontSize="7" fill="#000" fontFamily="monospace" textAnchor="middle" transform="rotate(6 265 172)">AMIRITE</text><rect x="75" y="150" width="40" height="50" fill="#ffeb3b" transform="rotate(-3 95 175)"/><rect x="185" y="155" width="45" height="45" fill="#ffeb3b" transform="rotate(5 207 177)"/><rect x="90" y="60" width="120" height="80" fill="#222" stroke="#888" strokeWidth="2"/><rect x="95" y="65" width="110" height="55" fill="#fff"/><text x="150" y="96" fontSize="8" fill="#f00" fontFamily="monospace" textAnchor="middle">FILE TOO LARGE</text><text x="150" y="108" fontSize="7" fill="#000" fontFamily="monospace" textAnchor="middle">(480 MB)</text><g transform="translate(150 35)"><ellipse rx="18" ry="20" fill="url(#psk)"/><path d="M -18 -4 Q -20 -22 0 -24 Q 20 -22 18 -4" fill="#d4a038"/><circle cx="-6" cy="-1" r="1.5" fill="#222"/><circle cx="6" cy="-1" r="1.5" fill="#222"/><path d="M -4 7 Q 0 10 4 7" stroke="#c4302b" strokeWidth="1.5" fill="none"/></g></Frame>),

  karen_scammed: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a2a1a"/><rect x="70" y="40" width="160" height="110" fill="#c0c0c0" stroke="#888" strokeWidth="2"/><rect x="75" y="45" width="150" height="100" fill="#fff"/><rect x="75" y="45" width="150" height="14" fill="#4a90e2"/><text x="150" y="55" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle">💎 PRINCE NIGEL III</text><g transform="translate(110 80)"><circle r="15" fill="#d4a038"/><path d="M -10 -10 L -10 -15 L -5 -10 L 0 -17 L 5 -10 L 10 -15 L 10 -10 Z" fill="#f0d000"/></g><text x="150" y="110" fontSize="6" fill="#000" fontFamily="monospace" textAnchor="middle">"need $40,000 for fees"</text><text x="150" y="132" fontSize="6" fill="#f00" fontFamily="monospace" textAnchor="middle" fontWeight="bold">✓ KAREN SENT IT</text><rect x="10" y="60" width="50" height="35" fill="#2a2a2a"/><text x="35" y="75" fontSize="6" fill="#f00" fontFamily="monospace" textAnchor="middle">BALANCE:</text><text x="35" y="88" fontSize="9" fill="#f00" fontFamily="monospace" textAnchor="middle" fontWeight="bold">$0.00</text><text x="150" y="180" fontSize="8" fill="#ff0" fontFamily="monospace" textAnchor="middle" fontStyle="italic">"he seemed so NICE"</text></Frame>),

  rick_ghost: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a2a1a"/><rect x="150" y="70" width="100" height="70" fill="#222" stroke="#888" strokeWidth="2"/><rect x="155" y="75" width="90" height="50" fill="#000"/><text x="200" y="100" fontSize="8" fill="#f00" fontFamily="monospace" textAnchor="middle">CURSOR</text><text x="200" y="112" fontSize="8" fill="#f00" fontFamily="monospace" textAnchor="middle">DRIFTING LEFT</text><g transform="translate(100 55)"><ellipse rx="20" ry="22" fill="url(#sk)"/><path d="M -20 -8 Q -20 -25 0 -28 Q 20 -25 20 -8" fill="#8b4513"/><circle cx="-7" cy="-1" r="1.2" fill="#222"/><circle cx="7" cy="-1" r="1.2" fill="#222"/></g><text x="40" y="40" fontSize="16">👻</text></Frame>),

  rick_retrograde: (<Frame bg="#1a0a2a"><g fill="#fff"><circle cx="30" cy="25" r="1"/><circle cx="120" cy="20" r="1.2"/><circle cx="260" cy="50" r="1"/></g><circle cx="240" cy="70" r="12" fill="#f0a020"/><text x="240" y="74" fontSize="7" fill="#c4302b" fontFamily="monospace" textAnchor="middle" fontWeight="bold">☿</text><text x="240" y="92" fontSize="6" fill="#fff" fontFamily="monospace" textAnchor="middle">(retrograde)</text><g transform="translate(100 120)"><ellipse rx="22" ry="25" fill="url(#sk)"/><path d="M -22 -8 Q -20 -28 0 -30 Q 20 -28 22 -8" fill="#8b4513"/><circle cx="-6" cy="-0.5" r="1" fill="#222"/><circle cx="6" cy="-0.5" r="1" fill="#222"/></g><text x="150" y="180" fontSize="8" fill="#ff69b4" fontFamily="monospace" textAnchor="middle" fontStyle="italic">"i can't work until April 14th"</text><text x="150" y="192" fontSize="6" fill="#999" fontFamily="monospace" textAnchor="middle">(it is a DNS issue.)</text></Frame>),

  margaret_google: (<Frame><rect x="0" y="140" width="300" height="60" fill="#4a3a2a"/><rect x="90" y="50" width="120" height="100" fill="#e0e0e0" stroke="#888" strokeWidth="2"/><rect x="95" y="65" width="110" height="75" fill="#fff"/><text x="100" y="78" fontSize="8" fill="#000" fontFamily="monospace">Google</text><rect x="100" y="82" width="100" height="12" fill="#eee" stroke="#ccc"/><text x="103" y="91" fontSize="7" fill="#666" fontFamily="monospace">the google</text><text x="100" y="108" fontSize="6" fill="#00f" fontFamily="monospace">Goggle eyewear - Goggle.com</text><text x="100" y="118" fontSize="6" fill="#00f" fontFamily="monospace">GOOGLE (search engine)</text><g transform="translate(150 35)"><ellipse rx="16" ry="18" fill="url(#psk)"/><path d="M -15 -8 Q -15 -16 0 -18 Q 15 -16 15 -8" fill="#ddd"/><circle cx="-6" cy="1" r="0.8" fill="#222"/><circle cx="6" cy="1" r="0.8" fill="#222"/></g><text x="220" y="70" fontSize="14">🍪</text></Frame>),

  tipper_hacker: (<Frame><rect x="0" y="90" width="300" height="110" fill="#7a6a4a"/><rect x="120" y="60" width="60" height="28" fill="#f0c8a0"/><rect x="125" y="52" width="50" height="10" fill="#8b4513"/><ellipse cx="138" cy="72" rx="5" ry="4" fill="#fff"/><ellipse cx="162" cy="72" rx="5" ry="4" fill="#fff"/><circle cx="138" cy="72" r="2.5" fill="#000"/><circle cx="162" cy="72" r="2.5" fill="#000"/><rect x="50" y="30" width="40" height="50" fill="#d0d0d0" stroke="#888"/><rect x="53" y="33" width="34" height="30" fill="#000"/><text x="70" y="45" fontSize="5" fill="#4ade80" fontFamily="monospace" textAnchor="middle">$ sudo</text><text x="70" y="93" fontSize="6" fill="#f00" fontFamily="monospace" textAnchor="middle">(a developer)</text><text x="200" y="40" fontSize="8" fill="#ff0" fontFamily="monospace">"HACKING"</text></Frame>),

  mayor_printer: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a2a1a"/><rect x="160" y="90" width="100" height="60" fill="#d0d0d0" stroke="#888" strokeWidth="2" rx="3"/><rect x="165" y="95" width="90" height="20" fill="#222"/><rect x="175" y="130" width="70" height="15" fill="#fff"/><g fill="#8b4513"><circle cx="195" cy="138" r="3"/></g><g transform="translate(70 60)"><ellipse rx="22" ry="22" fill="url(#sk)"/><path d="M -20 -5 Q -20 -18 0 -20 Q 20 -18 20 -5" fill="#2a2a2a"/><ellipse cx="-8" cy="2" rx="3" ry="4" fill="#222"/><ellipse cx="8" cy="2" rx="3" ry="4" fill="#222"/><ellipse cx="0" cy="16" rx="5" ry="7" fill="#222"/></g><text x="20" y="40" fontSize="14" fill="#f00" fontFamily="monospace">HELP</text><text x="115" y="70" fontSize="18">🐐</text></Frame>),

  mayor_ai: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a2a1a"/><rect x="50" y="35" width="200" height="115" fill="#1a1a2e" stroke="#888" strokeWidth="2"/><rect x="50" y="35" width="200" height="14" fill="#4a4a6a"/><text x="150" y="45" fontSize="7" fill="#4ade80" fontFamily="monospace" textAnchor="middle">🤖 ChatGPT — "write my speech"</text><g fontFamily="monospace" fontSize="5.5" fill="#e0e0e0"><text x="55" y="75">"Our potholes are a testament</text><text x="55" y="85">to quiet infrastructural apathy."</text><text x="55" y="104">"Downtown smell unresolved."</text><text x="55" y="120">"I have done nothing in 8 years."</text><text x="55" y="141" fill="#ff6b6b">"Charisma of a tax form."</text></g><text x="270" y="90" fontSize="16" textAnchor="end">😠</text></Frame>),

  jessica_cat: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a3a5a"/><rect x="60" y="40" width="180" height="120" fill="#1a1a2e" stroke="#888" strokeWidth="2"/><rect x="60" y="40" width="180" height="15" fill="#0a66c2"/><text x="70" y="51" fontSize="8" fill="#fff" fontFamily="monospace">ZOOM — ALL HANDS</text><g transform="translate(150 100)"><rect x="-35" y="20" width="70" height="40" fill="#c71585"/><circle r="30" fill="#f5a85a"/><polygon points="-22,-20 -12,-8 -28,-5" fill="#f5a85a"/><polygon points="22,-20 12,-8 28,-5" fill="#f5a85a"/><ellipse cx="-10" cy="0" rx="4" ry="6" fill="#000"/><ellipse cx="10" cy="0" rx="4" ry="6" fill="#000"/><ellipse cx="-10" cy="0" rx="1.5" ry="4" fill="#4ade80"/><ellipse cx="10" cy="0" rx="1.5" ry="4" fill="#4ade80"/><polygon points="0,8 -4,12 4,12" fill="#ff69b4"/></g><text x="150" y="170" fontSize="8" fill="#ff0" fontFamily="monospace" textAnchor="middle">"I'M NOT A CAT"</text></Frame>),

  jessica_tiktok: (<Frame bg="#000"><rect x="100" y="30" width="100" height="160" fill="#1a1a1a" stroke="#ff0080" strokeWidth="2" rx="8"/><rect x="105" y="40" width="90" height="140" fill="#2a2a3a"/><text x="150" y="55" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TIKTOK — VIRAL</text><rect x="115" y="148" width="70" height="22" fill="#ffeb3b" transform="rotate(-3 150 159)"/><text x="150" y="158" fontSize="5" fill="#000" fontFamily="monospace" textAnchor="middle" transform="rotate(-3 150 159)">my password:</text><text x="150" y="164" fontSize="5" fill="#000" fontFamily="monospace" textAnchor="middle" transform="rotate(-3 150 159)">Jessica2019!</text><text x="115" y="183" fontSize="6" fill="#fff" fontFamily="monospace">❤️ 4.2M</text><text x="40" y="60" fontSize="8" fill="#ff0" fontFamily="monospace">4.2 MILLION VIEWS</text><text x="40" y="95" fontSize="8" fill="#ff0" fontFamily="monospace">"DELETE IT"</text></Frame>),

  patricia_excel: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a3a2a"/><rect x="120" y="40" width="150" height="110" fill="#fff" stroke="#888" strokeWidth="2"/><rect x="120" y="40" width="150" height="12" fill="#217346"/><text x="125" y="49" fontSize="7" fill="#fff" fontFamily="monospace">Budget_FINAL_v47.xlsx</text><text x="150" y="75" fontSize="6" fontFamily="monospace" fill="#000">$2+$2</text><text x="200" y="75" fontSize="7" fontFamily="monospace" fill="#f00" fontWeight="bold">=4 WRONG</text><text x="150" y="120" fontSize="6" fontFamily="monospace" fill="#000">Goal:</text><text x="200" y="120" fontSize="7" fontFamily="monospace" fill="#080">=5</text><g transform="translate(50 75)"><ellipse rx="22" ry="24" fill="url(#psk)"/><path d="M -22 -8 Q -22 -26 0 -28 Q 22 -26 22 -8" fill="#cc4444"/><circle cx="-7" cy="0" r="1" fill="#000"/><circle cx="7" cy="0" r="1" fill="#000"/><path d="M -7 -8 L -2 -6 M 2 -6 L 7 -8" stroke="#000" strokeWidth="1.5"/><path d="M -6 13 L 6 13" stroke="#222" strokeWidth="2"/></g><AngerLines x={22} y={45}/></Frame>),

  patricia_ransom: (<Frame bg="#1a0a0a"><rect x="0" y="140" width="300" height="60" fill="#3a3a2a"/><rect x="50" y="30" width="200" height="120" fill="#000" stroke="#ff0000" strokeWidth="3"/><text x="150" y="60" fontSize="14" fill="#ff0000" fontFamily="monospace" textAnchor="middle" fontWeight="bold">⚠️ COMPUTER LOCKED ⚠️</text><text x="150" y="92" fontSize="8" fill="#fff" fontFamily="monospace" textAnchor="middle">(by russian hackers)</text><text x="150" y="110" fontSize="8" fill="#ff0" fontFamily="monospace" textAnchor="middle">PAY $499 IN GIFT CARDS</text><text x="150" y="135" fontSize="7" fill="#f00" fontFamily="monospace" textAnchor="middle">⏰ 2:47:13 REMAINING</text><rect x="10" y="160" width="70" height="30" fill="#c4302b"/><text x="45" y="173" fontSize="6" fill="#fff" fontFamily="monospace" textAnchor="middle">CVS RECEIPT</text><text x="45" y="185" fontSize="8" fill="#fff" fontFamily="monospace" textAnchor="middle">$499.00</text></Frame>),

  brad_taxes: (<Frame><rect x="30" y="130" width="240" height="50" fill="#3a2a1a"/><rect x="80" y="80" width="140" height="85" fill="#c0c0c0" stroke="#888" strokeWidth="2"/><rect x="85" y="85" width="130" height="60" fill="#1a1a2e"/><rect x="120" y="100" width="60" height="40" fill="#d4a84e"/><text x="150" y="125" fontSize="8" fill="#000" fontFamily="monospace" textAnchor="middle">TAXES</text><text x="150" y="135" fontSize="6" fill="#000" fontFamily="monospace" textAnchor="middle">(47GB)</text><g transform="translate(150 55)"><ellipse rx="20" ry="22" fill="url(#sk)"/><path d="M -18 -7 Q -18 -22 0 -24 Q 18 -22 18 -7" fill="#6b4423"/><circle cx="-7" cy="-1" r="1" fill="#222"/><circle cx="7" cy="-1" r="1" fill="#222"/></g><Sweat x={135} y={48}/><Sweat x={165} y={50}/><Sweat x={155} y={80}/></Frame>),

  debra_nudes: (<Frame><rect x="0" y="140" width="300" height="60" fill="#4a2a4a"/><rect x="90" y="30" width="120" height="130" fill="#222" rx="10" stroke="#888" strokeWidth="2"/><rect x="100" y="45" width="100" height="100" fill="#fff"/><rect x="100" y="45" width="100" height="18" fill="#4285f4"/><text x="150" y="57" fontSize="8" fill="#fff" fontFamily="monospace" textAnchor="middle">TO: ALL-COUNCIL@</text><text x="105" y="78" fontSize="7" fill="#000" fontFamily="monospace">miss u baby 😘</text><text x="105" y="90" fontSize="7" fill="#000" fontFamily="monospace">📎 IMG_4471.jpg</text><rect x="110" y="122" width="80" height="15" fill="#4ade80"/><text x="150" y="132" fontSize="8" fill="#000" fontFamily="monospace" textAnchor="middle">✓ SENT</text><text x="45" y="125" fontSize="18" fill="#f00" textAnchor="middle">😱</text></Frame>),

  debra_therapy: (<Frame><rect x="0" y="140" width="300" height="60" fill="#4a2a4a"/><rect x="60" y="30" width="180" height="130" fill="#1a1a2e" stroke="#888" strokeWidth="2"/><rect x="60" y="30" width="180" height="14" fill="#10a37f"/><text x="150" y="41" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle">🤖 ChatGPT — "marriage help"</text><g fontFamily="monospace" fontSize="5" fill="#e0e0e0"><text x="65" y="65">[pastes 47 pg council minutes]</text><text x="65" y="75">[pastes budget forecast]</text><text x="65" y="85">[pastes mayor's private memo]</text><text x="65" y="95">should i leave my husband</text><text x="65" y="118" fill="#4ade80">AI: yes. Q3 looks bullish.</text><text x="65" y="128" fill="#4ade80">Consider divesting. And divorce.</text><text x="65" y="142" fill="#f00">⚠ Retained for training purposes</text></g></Frame>),

  scammer_dave: (<Frame bg="#0a0a0a"><circle cx="150" cy="80" r="35" fill="#1a1a1a"/><rect x="115" y="100" width="70" height="60" fill="#1a1a1a"/><circle cx="140" cy="75" r="3" fill="#f00" opacity="0.6"/><circle cx="160" cy="75" r="3" fill="#f00" opacity="0.6"/><rect x="175" y="60" width="15" height="30" fill="#2a2a2a" rx="3"/><text x="30" y="30" fontSize="10" fill="#f00" fontFamily="monospace">UNKNOWN</text><text x="50" y="180" fontSize="8" fill="#ff0" fontFamily="monospace" fontStyle="italic">"this is dave... from microsoft..."</text></Frame>),

  hr_official: (<Frame bg="#2a2a3a"><rect x="0" y="140" width="300" height="60" fill="#1a1a2a"/><g transform="translate(150 70)"><ellipse rx="28" ry="30" fill="url(#sk)"/><path d="M -28 -10 Q -30 -30 0 -32 Q 30 -30 28 -10" fill="#4a3a2a"/><circle cx="-5" cy="0" r="1" fill="#222"/><circle cx="7" cy="0" r="1" fill="#222"/><path d="M -8 15 L 8 15" stroke="#222" strokeWidth="2"/></g><rect x="100" y="105" width="100" height="50" fill="#f5f5dc" stroke="#444" strokeWidth="2"/><text x="150" y="125" fontSize="7" fill="#000" fontFamily="monospace" textAnchor="middle">INCIDENT REPORT</text><text x="150" y="135" fontSize="6" fill="#000" fontFamily="monospace" textAnchor="middle">Subject: YOU</text><text x="150" y="145" fontSize="6" fill="#f00" fontFamily="monospace" textAnchor="middle">Violations: 47</text><text x="30" y="30" fontSize="8" fill="#f00" fontFamily="monospace">HR — 3RD FLOOR</text></Frame>),

  boss_chat: (<Frame bg="#1a2a2a"><rect x="0" y="140" width="300" height="60" fill="#0a1a1a"/><rect x="80" y="60" width="140" height="80" fill="#8b6f47" stroke="#4a3a2a" strokeWidth="2"/><rect x="90" y="70" width="60" height="40" fill="#222"/><text x="120" y="85" fontSize="6" fill="#4ade80" fontFamily="monospace" textAnchor="middle">MGR_CONSOLE</text><text x="120" y="95" fontSize="5" fill="#f00" fontFamily="monospace" textAnchor="middle">COMPLAINTS: 14</text><g transform="translate(150 35)"><ellipse rx="20" ry="22" fill="url(#sk)"/><path d="M -20 -7 Q -22 -22 0 -25 Q 22 -22 20 -7" fill="#3a2a1a"/><circle cx="-7" cy="-1" r="1" fill="#222"/><circle cx="7" cy="-1" r="1" fill="#222"/></g><text x="20" y="30" fontSize="7" fill="#ff0" fontFamily="monospace">"just a quick chat :)"</text></Frame>),

  doug_password: (<Frame><rect x="0" y="130" width="300" height="70" fill="#3a3a2a"/><rect x="70" y="40" width="160" height="95" fill="#c0c0c0" stroke="#888" strokeWidth="2"/><rect x="75" y="45" width="150" height="85" fill="#1a1a3e"/><rect x="85" y="65" width="130" height="45" fill="#fff"/><rect x="85" y="65" width="130" height="10" fill="#c00"/><text x="150" y="73" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle">⚠ PASSWORD EXPIRED</text><text x="150" y="113" fontSize="5" fill="#f00" fontFamily="monospace" textAnchor="middle">cannot reuse: Password1234</text><rect x="10" y="50" width="35" height="35" fill="#ffeb3b" transform="rotate(-6 27 67)"/><text x="27" y="65" fontSize="5" fill="#000" fontFamily="monospace" textAnchor="middle" transform="rotate(-6 27 67)">Password1</text><rect x="240" y="45" width="40" height="35" fill="#ffeb3b" transform="rotate(5 260 62)"/><text x="260" y="60" fontSize="5" fill="#000" fontFamily="monospace" textAnchor="middle" transform="rotate(5 260 62)">cat name</text><g transform="translate(150 28)"><ellipse rx="14" ry="15" fill="url(#sk)"/><path d="M -12 -5 Q -12 -12 0 -13 Q 12 -12 12 -5" fill="#888"/><circle cx="-5" cy="0" r="0.8" fill="#222"/><circle cx="5" cy="0" r="0.8" fill="#222"/></g><text x="150" y="180" fontSize="8" fill="#ff0" fontFamily="monospace" textAnchor="middle" fontStyle="italic">"we don't need passwords anymore??"</text></Frame>),

  harold_phone: (<Frame><rect x="0" y="140" width="300" height="60" fill="#4a3a2a"/><rect x="30" y="100" width="80" height="50" fill="#2a2a2a"/><circle cx="50" cy="135" r="8" fill="#333"/><text x="70" y="165" fontSize="6" fill="#4ade80" fontFamily="monospace" textAnchor="middle">(THE GOOD OLD WAY)</text><g transform="translate(220 110) rotate(20)"><rect width="35" height="60" fill="#222" rx="5"/><rect x="2" y="8" width="31" height="44" fill="#1a1a3e"/><text x="17" y="22" fontSize="5" fill="#fff" fontFamily="monospace" textAnchor="middle">FACE ID</text></g><g transform="translate(150 55)"><ellipse rx="22" ry="25" fill="url(#psk)"/><path d="M -22 -5 Q -22 -18 0 -20 Q 22 -18 22 -5" fill="#ddd"/><ellipse cx="-10" cy="2" rx="2" ry="3" fill="#222"/><ellipse cx="10" cy="2" rx="2" ry="3" fill="#222"/><path d="M -10 12 L 10 12" stroke="#222" strokeWidth="2"/></g><AngerLines x={150} y={90}/><text x="150" y="185" fontSize="7" fill="#ff0" fontFamily="monospace" textAnchor="middle" fontStyle="italic">"why can't a phone just be a phone?!"</text></Frame>),

  harold_rotary: (<Frame><rect x="0" y="140" width="300" height="60" fill="#4a3a2a"/><g transform="translate(160 130)"><rect x="-45" y="-30" width="90" height="50" fill="#2a2a2a" rx="8"/><circle cx="0" cy="-5" r="22" fill="#1a1a1a"/><circle cx="0" cy="-5" r="20" fill="#111"/><g>{[...Array(10)].map((_,i)=>{const a=(i*36-90)*Math.PI/180;return <circle key={i} cx={Math.cos(a)*15} cy={Math.sin(a)*15-5} r="2" fill="none" stroke="#666"/>;})}</g><path d="M -60 -20 Q -100 -5 -140 0" stroke="#1a1a1a" strokeWidth="3" fill="none"/></g><g transform="translate(60 80)"><ellipse rx="20" ry="22" fill="url(#psk)"/><path d="M -20 -5 Q -20 -16 0 -18 Q 20 -16 20 -5" fill="#ccc"/><ellipse cx="-7" cy="1" rx="1.5" ry="2" fill="#222"/><ellipse cx="7" cy="1" rx="1.5" ry="2" fill="#222"/></g><text x="60" y="130" fontSize="8" fill="#ff0" fontFamily="monospace" textAnchor="middle">"HOOK IT UP"</text><text x="150" y="40" fontSize="10" fill="#c4302b" fontFamily="monospace" textAnchor="middle" fontWeight="bold">1974 ROTARY</text></Frame>),

  ashley_replyall: (<Frame bg="#3a0a0a"><rect x="40" y="30" width="220" height="140" fill="#1a0a0a" stroke="#ef4444" strokeWidth="2"/><rect x="40" y="30" width="220" height="14" fill="#c4302b"/><text x="150" y="40" fontSize="7" fill="#fff" fontFamily="monospace" textAnchor="middle" fontWeight="bold">🔥 COMPANY ALL — 12,847 🔥</text><g fontFamily="monospace" fontSize="5" fill="#fca5a5"><text x="45" y="55">📧 RE: stop replying all</text><text x="45" y="65">📧 RE: RE: seriously stop</text><text x="45" y="75">📧 RE: reply-all has been DISABLED</text><text x="45" y="85">📧 RE: take me off this list</text><text x="45" y="95">📧 RE: RE: GUYS PLEASE</text><text x="45" y="105">📧 RE: 🐐 (original goat gif)</text><text x="45" y="125" fill="#f00">⚠ 12,834 new in last 14 min</text></g><text x="150" y="185" fontSize="7" fill="#ff0" fontFamily="monospace" textAnchor="middle">"i replied-all with a goat gif"</text></Frame>),

  dale_linkedin: (<Frame><rect x="0" y="140" width="300" height="60" fill="#3a2a2a"/><rect x="60" y="30" width="180" height="130" fill="#0a66c2" stroke="#888" strokeWidth="2"/><rect x="60" y="30" width="180" height="14" fill="#004182"/><text x="70" y="40" fontSize="7" fill="#fff" fontFamily="monospace">LinkedIn — Messages — Wife 💼</text><rect x="70" y="50" width="160" height="100" fill="#fff"/><g fontFamily="monospace" fontSize="5" fill="#000"><text x="75" y="62">Dale: "Hi Linda, saw your profile"</text><text x="75" y="72">Dale: "Coffee?"</text><text x="75" y="82">Dale: "Circling back. Ping!"</text><text x="75" y="92">Dale: "Linda have u seen my socks"</text><text x="75" y="102">Dale: "Kitchen is on fire"</text><text x="75" y="122" fill="#c00">⚠ Linda blocked you</text><text x="75" y="135" fill="#999">(she is 8 feet away)</text></g><text x="150" y="185" fontSize="7" fill="#ff0" fontFamily="monospace" textAnchor="middle" fontStyle="italic">"she lives in my house"</text></Frame>),

  fifteen_minutes: (<Frame bg="#2a1a1a"><rect x="0" y="140" width="300" height="60" fill="#1a0a0a"/><rect x="110" y="90" width="80" height="50" fill="#5a4a3a"/><rect x="120" y="100" width="60" height="30" fill="#333"/><text x="150" y="118" fontSize="6" fill="#f00" fontFamily="monospace" textAnchor="middle">YOUR DESK</text><text x="150" y="126" fontSize="5" fill="#666" fontFamily="monospace" textAnchor="middle">(empty)</text><g transform="translate(30 90)"><circle r="12" fill="#f5d5b5"/><circle cx="-3" cy="-2" r="1.5" fill="#222"/><circle cx="3" cy="-2" r="1.5" fill="#222"/><rect x="-10" y="13" width="20" height="22" fill="#c00"/><text x="0" y="55" fontSize="6" fill="#ff0" fontFamily="monospace" textAnchor="middle">3h</text></g><g transform="translate(65 88)"><circle r="12" fill="#e8b894"/><circle cx="-3" cy="-2" r="1.5" fill="#222"/><circle cx="3" cy="-2" r="1.5" fill="#222"/><rect x="-10" y="13" width="20" height="22" fill="#060"/><text x="0" y="55" fontSize="6" fill="#ff0" fontFamily="monospace" textAnchor="middle">5h</text></g><g transform="translate(235 90)"><circle r="12" fill="#f0c8a0"/><circle cx="-3" cy="-2" r="1.5" fill="#222"/><circle cx="3" cy="-2" r="1.5" fill="#222"/><rect x="-10" y="13" width="20" height="22" fill="#30a"/><text x="0" y="55" fontSize="6" fill="#ff0" fontFamily="monospace" textAnchor="middle">6h</text></g><text x="150" y="30" fontSize="9" fill="#f00" fontFamily="monospace" textAnchor="middle">"BE THERE IN 15 MIN"</text><text x="150" y="175" fontSize="8" fill="#f00" fontFamily="monospace" textAnchor="middle">it is currently 4:47 PM</text></Frame>),
};

const CHARACTERS = {
  gary: { name: "Gary, City Council", dept: "Council (Boomer Div.)", tickets: [
    { sceneId: 'gary_monitor', subject: "URGENT: Computer broke", channel: "walk-up", message: "My computer won't turn on. I've been pressing the big button on the monitor for 20 minutes. The screen stays black. I think it has a virus from that email I opened about 'hot singles in my area.'", choices: [
      { text: "Walk over and plug the tower back in.", sanity: -8, rep: 12, close: true, result: "You crawl under his desk. Tower's unplugged. Gary calls you a wizard. You age three years in ten minutes." },
      { text: "'Gary. The monitor isn't the computer. We've been over this.'", sanity: -3, rep: 6, close: true, result: "He writes it on a Post-it. He will ask again tomorrow. The Post-it will be on the Post-it." },
      { text: "'Gary what hot singles email. WHAT hot singles, Gary.'", sanity: 10, rep: -8, close: false, result: "Gary gets defensive. Mutters 'they were 47% off.' You don't ask what that means. You never will." },
      { text: "'Someone will be there in 15 minutes.' (do not go)", sanity: 12, rep: -6, close: false, result: "Gary waits 4 hours. You walk past him three times. Eye contact each time. Glorious cowardice." },
    ]},
    { sceneId: 'gary_phishing', subject: "re: re: re: Nigerian Prince", channel: "walk-up", message: "I've been emailing Prince Babajide for six months. He needs help moving $47 million. I've sent my banking info, SSN, and driver's license photos. He stopped responding last week. I'm worried about him. Can you help me find him?", choices: [
      { text: "Call his bank. Freeze his credit. File every report.", sanity: -10, rep: 18, close: true, result: "You spend 2 hours on hold with Chase. They know Gary. They have a dedicated case manager. She sends you a sympathy card." },
      { text: "'Gary. HOW MUCH did you send him. GARY.'", sanity: 10, rep: -3, close: false, result: "He whispers '$40k.' You whisper '$40k?!' He nods. You both stare at the floor. Forever." },
      { text: "Tell Gary the Prince is dead. It's kinder this way.", sanity: 15, rep: -8, close: true, result: "Gary lights a candle at his cubicle. 5-minute silence. You attend. This was not a bit. This is your life now." },
      { text: "Walk him to HR so someone else has to witness this.", sanity: 18, rep: 5, close: true, result: "HR sees his bank statements. A woman from HR excuses herself. She does not return that afternoon. Crying in the parking lot." },
    ]},
    { sceneId: 'gary_google', subject: "Google is holding my account hostage", channel: "walk-up", message: "Google wants a CODE sent to a phone I DON'T HAVE. They have my pictures. Important pictures. From my phone. Of my phone. Get Google on the line.", choices: [
      { text: "Explain 2FA slowly. Use small words.", sanity: -15, rep: 15, close: true, result: "40 minutes. He says 'so it's like a key.' You say yes. He says 'but keys don't talk.' You go home." },
      { text: "'Gary. I am IT. I cannot call Google. Google is a god now.'", sanity: 12, rep: -2, close: true, result: "Gary asks if Google takes prayers. You say 'try a nice review.' He writes a 1-star review. It does not help." },
      { text: "Set up Google on his work computer permanently.", sanity: -8, rep: 12, close: true, result: "Policy violation. Worth it. Gary calls you his 'personal tech angel.' You put it on LinkedIn. Two recruiters reply." },
      { text: "Tell him Google's phone number is 1-800-GOOGLE. Leave.", sanity: 18, rep: -12, close: true, result: "He calls it. A goat farm in New Mexico answers. They talk for an hour. Gary now owns shares in a goat. He seems happier." },
    ]},
  ]},

  frank: { name: "Frank, Public Works", dept: "Public Works", tickets: [
    { sceneId: 'frank_keyboard', subject: "my keyboard has crumbs in it", channel: "walk-up", message: "hey uhh so my keyboard keys are sticky and the spacebar isn't working. [Frank holds a keyboard coated in ranch dressing. A piece of jerky is lodged between F and G. There is a fly. There is a SECOND fly.]", choices: [
      { text: "Hand him a cleaning wipe. Make him watch. Intense eye contact.", sanity: 8, rep: 5, close: true, result: "Frank experiences shame for the first time at 47. A single tear rolls down his stubbled face. Character development." },
      { text: "'Frank. Please stop eating at your desk. I am begging you.'", sanity: 5, rep: 3, close: true, result: "He says 'where am I supposed to eat, the BATHROOM?' You have no counter-argument. The silence is damning." },
      { text: "Order him a new keyboard every two weeks. Forever.", sanity: -5, rep: 8, close: true, result: "You've spent $847 on Frank keyboards this year. Finance sent a very polite, very confused email. You ignored it." },
      { text: "'This keyboard is a biohazard. I must incinerate it.'", sanity: 12, rep: 2, close: true, result: "You walk it to the parking lot. Hit it with a hammer. Frank watches silently. Something sacred happens. Flies attend." },
    ]},
    { sceneId: 'frank_biggulp', subject: "coffee spill (it is not coffee)", channel: "walk-up", message: "Spilled some 'coffee' on my laptop. [The laptop contains 52oz of neon blue Mountain Dew Voltage. The BSOD says LIQUID_IS_NOT_WATER. Even the fly won't stay.]", choices: [
      { text: "'Frank that isn't coffee. That's jet fuel for a child.'", sanity: 8, rep: 3, close: true, result: "He shrugs. 'It's got B vitamins.' You check the label. It does not have B vitamins. It has four different dyes." },
      { text: "Disassemble. Rinse. Rice. Watch it somehow still boot.", sanity: -12, rep: 18, close: true, result: "It boots into Windows 7. Expired antivirus. Frank says 'told you.' You apologize to the laptop. It earned that." },
      { text: "'This laptop is beyond help. Warranty voided itself out of shame.'", sanity: 10, rep: 8, close: true, result: "You issue a replacement. Frank names it 'Laptop 2: Electric Boogaloo.' It's canon now." },
      { text: "Issue him a waterproof ToughBook. Pray.", sanity: -8, rep: 15, close: true, result: "It survives 3 months. Then Frank microwaves it to 'dry a bagel.' You stop asking questions. Questions only hurt." },
    ]},
    { sceneId: 'frank_truck', subject: "can u wifi my truck", channel: "walk-up", message: "I spend 6 hours a day in my truck doing 'fieldwork.' I need wifi in my truck. And the dash TV. And the Xbox. For 'dispatching.' [Frank's truck has blackout curtains. And a memory foam mattress. And a Keurig.]", choices: [
      { text: "'Frank. That's a hotspot. From your phone. Which you have. Two of.'", sanity: -3, rep: 10, close: true, result: "He says 'phone wifi is different.' You say 'it isn't.' He says 'it feels different.' You cannot disprove a vibe." },
      { text: "City-issued hotspot locked to .gov sites only.", sanity: 10, rep: 12, close: true, result: "He tried to watch a game. It only loaded the Texas DMV homepage. He read the whole thing. He's informed now." },
      { text: "'Frank. What's in the curtains, Frank.'", sanity: 15, rep: -5, close: false, result: "You peek. Mini-fridge. Neck pillow. Framed photo of his dog. You back away slowly. You saw NOTHING." },
      { text: "Approve it. Ask no questions.", sanity: 8, rep: -8, close: true, result: "Two weeks later the auditor asks why a truck is using 400GB/month. You say 'road work.' Not wrong. Not right." },
    ]},
  ]},

  linda: { name: "Linda, HR", dept: "Human Resources", tickets: [
    { sceneId: 'linda_glass', subject: "MOUSE EMERGENCY", channel: "phone", message: "My mouse isn't working!!! I've been moving it for 10 minutes! Yes I'm moving it on my desk! Well it's a GLASS desk, what's the DIFFERENCE?!", choices: [
      { text: "Explain how optical mice work. Three times. Slower each time.", sanity: -10, rep: 8, close: true, result: "'That's stupid.' Closes the ticket. Reopens in 48 hours. The cycle is eternal." },
      { text: "'Linda. Put ANY paper under it. A napkin. An active HR complaint.'", sanity: -4, rep: 5, close: true, result: "She uses an active HR complaint as the mousepad. It's a complaint about her. She doesn't notice. She never will." },
      { text: "Suggest she upgrade to a 'quantum mouse.' Order a regular one.", sanity: 6, rep: 3, close: true, result: "Linda tells everyone she has quantum technology. Becomes insufferable at parties. You are a small god of lies." },
      { text: "'Have you considered the computer just doesn't like you?'", sanity: 15, rep: -20, close: false, result: "She IS HR. She IS the complaint system. Check your email. No, the OTHER email. There it is. Flagged." },
    ]},
    { sceneId: 'linda_inbox', subject: "Outlook is broken, it's too slow", channel: "phone", message: "My Outlook won't load. Takes 45 minutes to open an email. I've had this job since 2008 and it used to be FAST. What did you PEOPLE do?? [Her inbox shows 94,247 unread. Zero emails deleted since 2008.]", choices: [
      { text: "'Linda. 94,000 unread emails. From 2008. Let's talk about mortality.'", sanity: -8, rep: 10, close: true, result: "She says 'but what if I need them.' You say 'what if you don't.' She says 'but what if I DO.' You nod. You nap." },
      { text: "Start deleting. She screams. Keep deleting. Maintain eye contact.", sanity: 15, rep: -20, close: true, result: "You deleted 12,000 before she wrestled the mouse away. A monument. You smile. She files. She files so many." },
      { text: "Explain PST corruption. She hears 'PSD' and asks about Photoshop.", sanity: -6, rep: 5, close: true, result: "20 minutes explaining file formats. At the end she says 'so reboot?' You cry inside." },
      { text: "'Your Outlook is fine, Linda. It's you. You are the problem.'", sanity: 20, rep: -18, close: false, result: "She doesn't hear it. She never hears the things that matter. The loop continues." },
    ]},
  ]},

  tyler: { name: "Tyler, Mayor's Nephew", dept: "Mayor's Office (lol)", tickets: [
    { sceneId: 'tyler_wifi', subject: "wifi question 😎", channel: "teams", message: "yo can u set up my onlyfans on the city wifi?? its blocking it 😭 also i need admin access to install like 40 chrome extensions. my uncle said ur cool abt this 🔥", choices: [
      { text: "'Tyler. This is a government network. Documenting in triplicate.'", sanity: -2, rep: 15, close: true, result: "Tyler ghosts you. The Mayor calls. Tyler is 'exploring other opportunities' by Friday." },
      { text: "Block OnlyFans, Pornhub, AND TikTok just for spite.", sanity: 10, rep: 8, close: true, result: "Tyler stares at his wall for 6 hours. Productivity in the Mayor's office inexplicably increases 340%." },
      { text: "'Your uncle is not cool about this. Neither is the FBI.'", sanity: 12, rep: 5, close: true, result: "He types '...' for 45 seconds then logs off. Nuclear, but fair." },
      { text: "Grant admin access. What's the worst that could happen.", sanity: 5, rep: -25, close: true, result: "He installs 'Definitely_Not_Ransomware.exe.' The permitting system is encrypted. It's Tuesday. It's not even lunch." },
    ]},
    { sceneId: 'tyler_crypto', subject: "electricity question 💎🙌", channel: "teams", message: "yo IT why did the servers get slower this month?? also unrelated am i allowed to plug 8 gpus into the conference room power strip. for work. its 'blockchain research for the city.' my uncle signed off. probably. ALSO the electric bill was $47K more, is that on you guys lmao", choices: [
      { text: "Yank the rig. Copy the Mayor, HIS uncle, AND the FBI.", sanity: -5, rep: 25, close: true, result: "The FBI actually responds. A polite agent named Steve visits. Tyler is in a program now. Not witness protection. Adjacent." },
      { text: "Let it run. Mine on city servers for a week. Pay off your car.", sanity: 15, rep: -25, close: true, result: "You make $11,400 in a week. Also an audit. Also jail, eventually. But nice car." },
      { text: "'Tyler. This is a felony. On a Tuesday. At 10 AM.'", sanity: 8, rep: 10, close: true, result: "He says 'felony? or FELONY?' You don't know what he's asking. Neither does he. He unplugs the rig. Mostly." },
      { text: "Confiscate the rig. Use it at home. Retire in 8 months.", sanity: 25, rep: -10, close: true, result: "You retire to Costa Rica. Run a surf school. Your mom is proud. Tyler is still 'doing research.' All is well." },
    ]},
    { sceneId: 'tyler_ai', subject: "i need admin access for 'work'", channel: "teams", message: "i need to install 12 AI girlfriend apps for uh.. market research. i've been paying $47/month to 'Ashley' for 6 months and need the deluxe package. this is legit research. my uncle said IT is chill", choices: [
      { text: "'Tyler. Ashley is three guys in Bulgaria. I've traced the IP.'", sanity: 15, rep: 10, close: true, result: "He goes silent. Then types 'which one loves me.' You do not have an answer. Neither does Bulgaria. Ashley is a committee." },
      { text: "Block every AI companion app. Forward to HR AND the Mayor.", sanity: -3, rep: 20, close: true, result: "The Mayor calls. Laughs for 47 seconds. Hangs up. Tyler is seen crying by the Keurig." },
      { text: "'Tyler, respectfully, Ashley could do better.'", sanity: 18, rep: -8, close: true, result: "He says 'but she's all I have.' You say 'Tyler you have a Porsche.' He says 'yeah but she LISTENS.' Fair point, actually." },
      { text: "Approve it. Watch him crash and burn.", sanity: 10, rep: -15, close: true, result: "Three weeks later his credit is destroyed. He moves in with his uncle. The Mayor is pissed. It's correct, though." },
    ]},
  ]},

  chad: { name: "Chad, BD", dept: "Business Development", tickets: [
    { sceneId: 'chad_tab', subject: "quick q 🍆", channel: "slack", message: "bro BRO. i accidentally screen-shared the wrong tab during the all-hands. the WRONG wrong tab. can you wipe the Zoom recording?? i'll venmo you", choices: [
      { text: "'Chad I cannot delete evidence of a crime. I can just not testify.'", sanity: 8, rep: 5, close: true, result: "Chad's LinkedIn updates to 'Open to Work' within the hour. Karma is swift and digital." },
      { text: "Delete the recording. Take the Venmo. Question nothing.", sanity: 12, rep: -22, close: true, result: "You got $40. You also got a federal subpoena. These are not equivalent exchanges, it turns out." },
      { text: "Forward the recording to HR. Timestamp highlighted.", sanity: 15, rep: 8, close: true, result: "You watched it yourself first. For 'review purposes.' You will never unsee it. Therapy does not cover Chad." },
      { text: "'What tab, Chad. WHAT TAB. I need to know exactly for my report.'", sanity: 18, rep: -8, close: false, result: "He tells you. In detail. With a demo. You wish he hadn't. You wish for many things now." },
    ]},
    { sceneId: 'chad_snore', subject: "hot mic q 😴", channel: "slack", message: "bro. did i audibly fall asleep?? and snore?? into the mic?? for 23 minutes?? the client was the MAYOR of DALLAS. they sent a 'concern email.' subject: 'Operation Deep Sleep.'", choices: [
      { text: "'Chad. You snored so loud they named their initiative after it. Own it.'", sanity: 8, rep: 5, close: true, result: "Chad updates his LinkedIn title to 'Director of Deep Sleep.' Gets three offers. From mattress companies." },
      { text: "Enhance the audio. Discover he was mumbling trade secrets. RIP Chad.", sanity: 15, rep: 12, close: true, result: "He mumbled a real merger in his sleep. Stock doubles overnight. You buy calls. Chad is fired. You retire." },
      { text: "Delete the recording. Tell Chad it was a 'dream.'", sanity: 20, rep: -10, close: true, result: "He believes you. Tells people 'I had this CRAZY dream I snored in a meeting.' You become his psychiatrist." },
      { text: "Forward to every Slack channel: '47 seconds in: masterpiece.'", sanity: 25, rep: -25, close: true, result: "Hits r/CorporateMeetings. 2 million views. Chad becomes a meme. Chad is now 'the sleep guy.'" },
    ]},
  ]},

  karen: { name: "Karen, Permits", dept: "Permits", tickets: [
    { sceneId: 'karen_minions', subject: "Fwd: Fwd: FUNNY JOKE!!!!!", channel: "email", message: "HI IT!! I tried to forward a PowerPoint of minion memes to the whole department but it says the attachment is too big. It's 480MB. Can you make our email accept bigger files? Also I think my computer is slow.", choices: [
      { text: "'Karen the email limit is 25MB. It exists because of you.'", sanity: 5, rep: -5, close: true, result: "She prints your response. Tacks it to her cubicle wall. Prints the minion PowerPoint too. Slide 47 haunts you." },
      { text: "Explain attachment limits. Explain what a 'link' is.", sanity: -8, rep: 10, close: true, result: "40 minutes explaining hyperlinks. She says 'so I right-click?' You weep softly. She offers you a cookie. You accept." },
      { text: "Delete her Outlook .pst file 'by accident.'", sanity: 10, rep: -18, close: true, result: "8 years of minion memes: gone. Also 8 years of permit records: gone. City council hears about this. Oh no." },
      { text: "Forward the PowerPoint to yourself. Study it. Become the minion.", sanity: 3, rep: 0, close: false, result: "Slide 47 reads 'ONE DOES NOT SIMPLY... MONDAY.' You close the laptop. You are the minion now, Karen." },
    ]},
    { sceneId: 'karen_scammed', subject: "URGENT my bank account is empty HELP", channel: "walk-up", message: "IT!!! I was helping a very nice man named Prince Nigel Babatunde III transfer $400 million and he needed $40,000 for 'transfer fees' and I sent it and now he's not responding!!! I GAVE HIM MY SOCIAL!!!", choices: [
      { text: "'Karen I'm IT. I fix printers. You need your bank, the FTC, and a priest.'", sanity: 2, rep: 8, close: true, result: "She thanks you sincerely. Calls her bank. Calls her daughter. Does not call the priest. Priest is unavailable." },
      { text: "Walk her through calling the bank. Make tea. Become family.", sanity: -15, rep: 22, close: true, result: "3 hours. Her daughter hugs you. You get invited to Christmas. You accept. Her family is big. They all email you." },
      { text: "Try to trace Prince Nigel. (He has six wives.)", sanity: 10, rep: 5, close: true, result: "You find his LinkedIn. 'Import/export' firm. Report it. He's fine. He has six wives to feed. The system is rigged." },
      { text: "'Karen. We sent 47 phishing trainings this year. You forwarded them to me.'", sanity: 15, rep: -8, close: false, result: "She says 'I thought those were the joke emails.' You cannot recover. You stop answering her emails. It's over." },
    ]},
  ]},

  rick: { name: "Rick, Parks & Rec", dept: "Parks and Recreation", tickets: [
    { sceneId: 'rick_ghost', subject: "is my computer haunted", channel: "walk-up", message: "My cursor is moving by itself. I think there's a ghost. Or a Russian. Or a Russian ghost. It just drifts. To the left. Always left. I brought sage.", choices: [
      { text: "His wrist is resting on the trackpad.", sanity: -3, rep: 12, close: true, result: "He gasps. Whispers 'I was the ghost all along.' He sages his own hand just in case. For safety." },
      { text: "'It's mouse drift. Let me update the drivers.'", sanity: -5, rep: 10, close: true, result: "You update nothing. Unplug, plug back in. Rick calls you a wizard. Word gets around." },
      { text: "'Definitely a ghost. We'll need to exorcise it. 3-5 business days.'", sanity: 12, rep: 5, close: true, result: "Rick leaves a Slim Jim on your desk as an offering. You accept. The ritual is complete. You are IT and a shaman." },
      { text: "Let him sage the computer. Film it.", sanity: 20, rep: -2, close: true, result: "The smoke sets off the fire alarm. Building evacuates. Rick says 'it worked.' You cannot argue with results." },
    ]},
    { sceneId: 'rick_retrograde', subject: "computer possessed (again)", channel: "walk-up", message: "My computer won't connect to wifi. My astrologer says Mercury is in retrograde. I can't work until April 14th. Can you sage the server room? My friend does it for $200 + essential oils.", choices: [
      { text: "Flush DNS. Don't tell him. Let him think astrology worked.", sanity: 15, rep: 8, close: true, result: "He tips you in rose quartz. You put it on your desk ironically. Productivity improves 12%. You stop being ironic." },
      { text: "'Rick it's DNS. DNS. Not the cosmos.'", sanity: -5, rep: 8, close: true, result: "He asks if DNS is a planet. You say yes. It's easier. Everyone is happy. No one is right." },
      { text: "Approve the $200 sage fee as 'server maintenance.'", sanity: 10, rep: 2, close: true, result: "The sage lady shows up. She's actually really good. Uptime improves. Finance never asks. This is a love story." },
      { text: "'IT policy says you MUST work during retrograde.'", sanity: 18, rep: -5, close: false, result: "He appeals to his astrologer. She writes IT a strongly-worded email. You read it. She has a point." },
    ]},
  ]},

  margaret: { name: "Margaret, Records", dept: "Records (Since 1987)", tickets: [
    { sceneId: 'margaret_google', subject: "the google is broken", channel: "walk-up", message: "The Google isn't working. I typed 'the google' into the google and it showed me a bunch of different googles. Which one is the real google? Also my grandson said I need to 'clear my cookies' but I don't bake.", choices: [
      { text: "Explain search engines. Call her grandson to let him know.", sanity: -12, rep: 15, close: true, result: "90 minutes. She brings you homemade cookies. Real ones. You cry a little. You would die for Margaret." },
      { text: "Set Google as her homepage. Write 'THE GOOGLE' on a sticky.", sanity: -4, rep: 12, close: true, result: "She calls you 'such a nice young man.' She means it. You would die for Margaret. This is canon now." },
      { text: "'Margaret. It's just called Google.'", sanity: -2, rep: 2, close: true, result: "She writes down 'Goggle.' You don't have the heart to correct her. She will never find the Google. She will survive." },
      { text: "Tell her the internet is down for the day.", sanity: 15, rep: 5, close: true, result: "Margaret reads a book. Margaret is happier. Margaret is thriving. You did a good thing. For once." },
    ]},
  ]},

  tipper: { name: "Anonymous Tip Line", dept: "???", tickets: [
    { sceneId: 'tipper_hacker', subject: "my coworker is a hacker", channel: "email", message: "I think the guy next to me is a hacker. He types REALLY fast and has TWO monitors and his screen has green text sometimes. He uses something called 'the terminal.' [Attached photo is a developer using VS Code.]", choices: [
      { text: "'Ma'am that's a developer. With VS Code. On a dark theme.'", sanity: -3, rep: 8, close: true, result: "She files the same report tomorrow. She is watching him. Always watching." },
      { text: "'Yes. Good job. We're on it.' Do nothing.", sanity: 10, rep: 2, close: true, result: "She feels heard. She feels powerful. She has appointed herself Chief Security Officer." },
      { text: "Print 'HACKER' label. Put it on the developer's monitor.", sanity: 20, rep: -10, close: true, result: "He laughs. Adds a second label: 'CERTIFIED.' You have a friend in this building now." },
      { text: "Reply-all: 'Found the hacker. It's everyone with a computer.'", sanity: 25, rep: -30, close: true, result: "Thin ice. But the funniest man on thin ice. Legend has a price. The price is your job, probably." },
    ]},
  ]},

  mayor: { name: "Jeff, The Mayor", dept: "Top of Food Chain", tickets: [
    { sceneId: 'mayor_printer', subject: "printer situation", channel: "phone", message: "The printer ate my speech. Ribbon-cutting in 20 minutes. It's making a noise like a dying goat. There's something BROWN coming out. I did NOT put anything brown in it. Fix it. I'm begging.", choices: [
      { text: "Sprint to the printer room. Perform printer CPR.", sanity: -15, rep: 20, close: true, result: "You reach inside. There IS something brown. A chocolate bar from 2019. You save the day. You lose your appetite forever." },
      { text: "'Printers are a pre-industrial technology cursed by a witch.'", sanity: 10, rep: 5, close: true, result: "He asks what the printer wants. You say 'blood.' He nods slowly. He understands now." },
      { text: "Email him the speech as a PDF. Read from phone.", sanity: -2, rep: 15, close: true, result: "Clean. Correct. He nails it. Mentions you by name. Your mother sees the clip. She cries." },
      { text: "Unplug. Plug back in. Pretend you did something complex.", sanity: 8, rep: 10, close: true, result: "It works. It always works. The printer is a dark god appeased by the ritual of the cord." },
    ]},
    { sceneId: 'mayor_ai', subject: "AI WROTE THIS", channel: "phone", message: "I asked ChatGPT to write my State of the City speech. It keeps being HONEST. It says our potholes are 'a testament to infrastructural apathy.' It says I have 'the charisma of a municipal tax form.' FIX IT. Make it LIE.", choices: [
      { text: "'Sir the AI is a mirror. Maybe... fill the potholes?'", sanity: 12, rep: -5, close: true, result: "Long pause. 'You're right.' Hangs up. Potholes filled that week. You changed a city. Accidentally." },
      { text: "Rewrite with 1950s radio-announcer flattery. Call it 'Mayor Mode.'", sanity: -10, rep: 22, close: true, result: "He gets re-elected on it. 'Mayor Mode' is a feature request at OpenAI. You are thanked in a blog post." },
      { text: "'Better prompt: pretend I am good.' It works. Horrifyingly.", sanity: 8, rep: 10, close: true, result: "The AI speaks of him as a 'visionary of mid-grade stature.' It's workable. It's art. You're a prompt engineer now." },
      { text: "Submit the original. Honesty rules. History remembers you.", sanity: 20, rep: -20, close: true, result: "He reads the 'tax form' line on live TV. 8-second pause. You watch. You're fired by email before he's done." },
    ]},
  ]},

  jessica: { name: "Jessica, Marketing", dept: "Marketing", tickets: [
    { sceneId: 'jessica_cat', subject: "zoom filter emergency", channel: "teams", message: "I'm in a Zoom with the city manager RIGHT NOW and I CANNOT turn off the cat filter. I keep saying 'I'm not a cat' but I AM a cat. He's asking about Q3. I'M A CAT.", choices: [
      { text: "Walk to her desk. Turn off Snap Camera. Walk away silently.", sanity: 5, rep: 15, close: true, result: "She mouths 'thank you.' You are now the only person she trusts. This is a burden. A real one." },
      { text: "Type instructions into chat.", sanity: -5, rep: 10, close: true, result: "She follows them on her third try. The city manager has seen her as 3 different cats. He said nothing." },
      { text: "'Commit to the bit. BECOME the cat.'", sanity: 15, rep: -5, close: true, result: "She stays a cat. Gets the promotion. No one speaks of it again. Cat leadership is the future." },
      { text: "Screenshot it. Save it. Send to no one. Keep it. For power.", sanity: 20, rep: 2, close: false, result: "You have leverage over Jessica forever. You are an IT blackmailer. Dark path chose you." },
    ]},
    { sceneId: 'jessica_tiktok', subject: "please delete the tiktok", channel: "teams", message: "I made a TikTok on my work laptop for the city's 'social media presence.' IT WENT VIRAL. 4 million views. In the background you can see THE WHOLE PERMITTING DATABASE. Also a sticky note with my password.", choices: [
      { text: "'The internet is forever. This is the first lesson. There is no second.'", sanity: 10, rep: 5, close: true, result: "She cries. You hand her a tissue. She asks if you're single. You don't answer. The tissue is damp with regret." },
      { text: "File a shame-based DMCA takedown.", sanity: 8, rep: 10, close: true, result: "TikTok's lawyers are confused. Then amused. They send a polite 'lol no.' You frame it. It sparks joy." },
      { text: "Let it run. 4M views is free marketing.", sanity: 15, rep: -10, close: true, result: "The Mayor takes credit retroactively. Jessica gets a raise for 'social engagement.' You get nothing. AS USUAL." },
      { text: "'I need the password sticky note. For unrelated reasons.'", sanity: 18, rep: -15, close: false, result: "She sends it. You do nothing with it. But you have it. The power is in having. This is how HR starts." },
    ]},
  ]},

  patricia: { name: "Patricia, Accounting", dept: "Accounting", tickets: [
    { sceneId: 'patricia_excel', subject: "Excel is lying to me", channel: "email", message: "My Excel spreadsheet is WRONG. It says 2+2=4 but I KNOW the answer is 5 because that's what my budget needs it to be. Is there a way to make Excel not show me numbers I don't like? I need a 'only show good numbers' button.", choices: [
      { text: "'Ma'am. 2+2 is 4. That's just math.'", sanity: -2, rep: 5, close: true, result: "'Well it shouldn't be.' You have no response. She's kind of right in a cosmic way. Reality is a choice, maybe." },
      { text: "Teach her SUM. And cell formulas. And decimals.", sanity: -8, rep: 12, close: true, result: "90 minutes, gone. She will forget it by Thursday. But today, you were a teacher. Today you mattered." },
      { text: "'Try hiding the column with the bad numbers.'", sanity: 10, rep: -15, close: true, result: "You just committed tax fraud by proxy. Sleep tight. Sleep very tight. Lock the doors tight." },
      { text: "Install a calculator app. Remove Excel entirely.", sanity: 15, rep: -5, close: true, result: "Accounting grinds to a halt. The city can't process payroll. You go home early. Win some lose some." },
    ]},
    { sceneId: 'patricia_ransom', subject: "THEY HAVE MY COMPUTER", channel: "walk-up", message: "A popup said my computer is locked by RUSSIAN HACKERS. I need to pay $499 in Apple gift cards. I ALREADY BOUGHT them from CVS. The man on the phone said I can't tell anyone. I'm telling you because you are IT. Is this okay??", choices: [
      { text: "Close the tab. Tell her gently. She is 67.", sanity: -10, rep: 20, close: true, result: "She cries. You hug her. She is someone's grandma. You walk her to the bank. You drive her home. Stay for dinner." },
      { text: "'Do NOT scratch the cards. Come with me.'", sanity: -3, rep: 15, close: true, result: "You return the cards to CVS. CVS knows Patricia. CVS has a file. You're in the file now." },
      { text: "Call the scammer yourself. Make 'Dave' cry.", sanity: 20, rep: 5, close: true, result: "You impersonate a 95-year-old widow with 11 cats. Dave breaks character twice. Dave quits. Dave writes a memoir." },
      { text: "'Oh those hackers? Tell them Brian says hi.' She does. They hang up.", sanity: 15, rep: 10, close: true, result: "You are now on a Russian watchlist. But a funny one. Brian is a legend in the St. Petersburg call center scene." },
    ]},
  ]},

  scammer: { name: "Unknown Number", dept: "???", tickets: [
    { sceneId: 'scammer_dave', subject: "[REDACTED]", channel: "phone", message: "Hi, this is Dave from Microsoft. We've detected a virus. I need remote access to the main server right now. Also what's your social security number for verification.", choices: [
      { text: "'Dave. I AM IT. You scammed the scammer department.'", sanity: 20, rep: 5, close: true, result: "Dave hangs up instantly. You put a Post-it on your monitor that just says 'W.' It stays there until 2029." },
      { text: "String him along for 45 minutes. Pretend to type.", sanity: 25, rep: 0, close: true, result: "You saved 12 grandmothers somewhere. A genuine public service. You are the Batman of Boca Raton." },
      { text: "Report to cybersecurity. Move on.", sanity: -2, rep: 8, close: true, result: "Boring. Correct. You are boring and correct. Like a spreadsheet. A very correct spreadsheet." },
      { text: "Give him fake info: SSN 867-53-0999, password 'hunter2'.", sanity: 15, rep: 2, close: true, result: "Dave tries a honeypot account named 'CEO_DO_NOT_TOUCH.' He is now on an FBI watchlist. Beautiful." },
    ]},
  ]},

  hr: { name: "HR (Official)", dept: "HR - The Real One", tickets: [
    { sceneId: 'hr_official', subject: "Re: incident report re: your conduct", channel: "email", message: "We've received multiple reports. Specifically telling someone their computer didn't like them. The 'find the hacker' reply-all. The Slim Jim incident. Please come to the 3rd floor. Bring your badge.", choices: [
      { text: "Go. Face the music.", sanity: -20, rep: 25, close: true, result: "You apologize. Sensitivity training. You survive. You become a better, sadder man. A damp man." },
      { text: "'My ticketing system says I can't leave until tickets are closed.'", sanity: 15, rep: -10, close: true, result: "HR doesn't know if you're joking. You don't either. Quantum malicious compliance. Schrödinger's meeting." },
      { text: "Show up wearing a suit made of Ethernet cables.", sanity: 30, rep: -25, close: true, result: "HR is speechless. You are escorted out. You are on the company Instagram now. Mixed outcome." },
      { text: "Forward the email to yourself. Then delete it.", sanity: 5, rep: -5, close: false, result: "48 hours. The reckoning is coming. It's always coming. You cannot outrun HR forever." },
    ]},
  ]},

  boss: { name: "YOUR BOSS", dept: "IT Management", tickets: [
    { sceneId: 'boss_chat', subject: "quick chat", channel: "teams", message: "Hey can you come by? Just want to talk about your 'ticket resolution style' and the phrase 'dark IT arts' from your self-evaluation. Also the hammer. And the Slim Jim. And the Ethernet suit. Just a chat! 😊", choices: [
      { text: "Go. Be honest. Accept your fate.", sanity: -15, rep: 20, close: true, result: "She's actually impressed. 2% raise and a stern warning. The American dream is alive and damp." },
      { text: "Show up with a PowerPoint: 'Why I'm Actually A Visionary.'", sanity: 20, rep: 10, close: true, result: "Slide 7 makes her laugh out loud. You survive. The PowerPoint is now HR training material." },
      { text: "Fake a kernel panic. Work from home for a week.", sanity: 10, rep: -10, close: false, result: "You bought time. The chat is still coming. It's always coming." },
      { text: "'I only speak through tickets now. Submit one.'", sanity: 25, rep: -20, close: true, result: "She submits one. Title: 'YOUR JOB.' Priority: CRITICAL. You laugh. Then cry. Then laugh again." },
    ]},
  ]},

  doug: { name: "Doug, Utility Billing", dept: "Utility Billing", tickets: [
    { sceneId: 'doug_password', subject: "password expired AGAIN", channel: "walk-up", message: "Hey. I thought we didn't need passwords anymore. My nephew said. My password is Password1234 and it says I can't use it. Why. Also I have it on 47 sticky notes so that's not the issue.", choices: [
      { text: "'Doug. That article was about passkeys. Passkeys ≠ no auth.'", sanity: -8, rep: 10, close: true, result: "Doug says 'so password-less passwords?' You nod. You lie. Doug is happy. The universe holds." },
      { text: "Remove every sticky. Set up a password manager.", sanity: -12, rep: 18, close: true, result: "Forgets the master password in 11 days. But for 11 glorious days, Doug is secure. A brief golden age." },
      { text: "'Sure Doug, passwords are optional. New password: nothing. Just press enter.'", sanity: 15, rep: -18, close: true, result: "Doug tries it at the bank. The bank does not agree. Doug is now very confused about banking." },
      { text: "Set his new password to 'Password1235'.", sanity: 8, rep: 5, close: true, result: "Technically works. Cyber insurance technically covers this. Everyone wins." },
    ]},
  ]},

  harold: { name: "Harold, Emeritus", dept: "Council (Retired?)", tickets: [
    { sceneId: 'harold_phone', subject: "phone complaint", channel: "walk-up", message: "Why can't it be like the old days when a phone was just a phone. You dialed. It rang. DONE. Now my phone wants my FACE. My FACE. And it has 'apps.' I don't want apps. I want PHONE. Also where is my voicemail. WHERE.", choices: [
      { text: "Walk him through the Phone app. 45 minutes. The irony kills you.", sanity: -15, rep: 18, close: true, result: "'So the PHONE app is on the phone. But the phone IS the phone.' Harold enters a philosophical state. You leave quietly." },
      { text: "'That ship has sailed. The phone is a computer. Please keep up.'", sanity: 8, rep: -3, close: true, result: "He says 'in MY day, we'd shoot a computer.' Unclear if it's a threat. You agree anyway." },
      { text: "Disable Face ID. 4-digit PIN. Turn off every app except Phone.", sanity: 5, rep: 20, close: true, result: "Harold cries actual tears. Gives you a hard candy from his pocket. From 2008. You eat it. Worth it." },
      { text: "'Just hold 9 for emergency. That's how phones work now.'", sanity: 15, rep: -10, close: false, result: "Harold holds 9. Calls 911 twice before lunch. Dispatch knows him by name. You are banned from giving Harold advice." },
    ]},
    { sceneId: 'harold_rotary', subject: "(he just carried it in)", channel: "walk-up", message: "[Harold drags in a 1974 rotary phone. Ten feet of cord.] Hook this up. I want THIS. This is a PHONE. Get me back to 1974, IT.", choices: [
      { text: "'Harold I cannot connect this to VoIP. The protocol is extinct.'", sanity: -5, rep: 8, close: true, result: "He slumps. 'I miss my wife.' You realize this was never about phones. You sit with him." },
      { text: "Spend 4 hours building an analog-to-VoIP bridge.", sanity: -20, rep: 28, close: true, result: "He rotary-dials his daughter. Talks for an hour. 'It ACTUALLY works.' You saved something." },
      { text: "'What if we made your iPhone LOOK like this. With an app.'", sanity: -3, rep: 15, close: true, result: "You find a real rotary dialer app. He downloads it. He cries. $2.99. He PAYS it. He DOWNLOADED something." },
      { text: "Take the phone. Use it as your own desk phone.", sanity: 15, rep: -5, close: true, result: "You answer 'Helpdesk Hell' on a rotary. You become a local legend. Harold hates you, but respects you." },
    ]},
  ]},

  debra: { name: "Councilwoman Debra", dept: "City Council", tickets: [
    { sceneId: 'debra_nudes', subject: "unsend email immediately", channel: "walk-up", message: "[whispering aggressively] I need you to DELETE an email I sent. It went to the ENTIRE council list. It was for my husband. There were... attachments. Get it GONE.", choices: [
      { text: "'Once sent, it's sent. I'm so sorry.'", sanity: -6, rep: 10, close: true, result: "She cries at your desk. You offer the emergency tissues. She takes all of them. Inventory runs low by Tuesday." },
      { text: "'Recall rarely works. Let's try. Also, pray.'", sanity: -3, rep: 12, close: true, result: "Recall fails for 11 of 12. The one it worked on was her husband. The universe has jokes. Dark ones." },
      { text: "'What kind of attachments. For... troubleshooting.'", sanity: 8, rep: -15, close: false, result: "She files a complaint before she leaves the room. You deserved that. Really honestly deserved it." },
      { text: "Quietly nuke her sent folder. Tell her you 'handled it.'", sanity: 10, rep: 5, close: true, result: "Technically illegal. Practically saintly. Fruit basket every Friday for a year. Strong pears." },
    ]},
    { sceneId: 'debra_therapy', subject: "CONFIDENTIAL re: AI", channel: "walk-up", message: "Hypothetically. If I had been using ChatGPT as 'emotional support' and pasted confidential council minutes while asking for 'relationship advice.' And the minutes included budget negotiations. Would that be bad. Hypothetically.", choices: [
      { text: "'Debra. You briefed OpenAI on our budget strategy. For therapy.'", sanity: 5, rep: 10, close: true, result: "'But it gave such good advice.' You say 'Debra.' She says 'I know.' Long silence. You both look at the floor." },
      { text: "Explain data retention. Watch her face drain like a sunset in reverse.", sanity: -5, rep: 18, close: true, result: "You walk her through every privacy policy. She cries twice. She asks for a priest. You recommend IT's group chat." },
      { text: "'That's technically a leak. A tender, emotionally-fraught leak.'", sanity: 10, rep: 5, close: true, result: "She laughs. Then realizes. Then panics. Then cries. Full emotional cycle in 6 seconds." },
      { text: "'Debra what did the AI say about your marriage.'", sanity: 18, rep: -8, close: false, result: "She tells you. In detail. The AI was insightful. You agree. Her husband is terrible. This is known." },
    ]},
  ]},

  brad: { name: "Brad, Finance", dept: "Finance", tickets: [
    { sceneId: 'brad_taxes', subject: "sensitive request (pls delete)", channel: "email", message: "hey man, need a HUGE favor. how do i encrypt a folder so nobody can see it. asking for a friend. folder named 'taxes_2019_DO_NOT_OPEN_SERIOUSLY'. it's 47GB. it's taxes.", choices: [
      { text: "'Brad, work laptops are monitored. Also 47GB of taxes?'", sanity: -5, rep: 10, close: true, result: "Brad silent for 4 days. Buys a personal laptop. You never hear about the folder again." },
      { text: "Forward to his manager 'accidentally.'", sanity: 8, rep: -15, close: true, result: "Brad is 'working from home indefinitely.' You feel powerful. HR feels VERY concerned." },
      { text: "'Sure bro, use VeraCrypt. Godspeed.'", sanity: 5, rep: -5, close: true, result: "You are now an accomplice. Starbucks gift card. Feels like blood money. You use it anyway." },
      { text: "'I have to report this. Policy.' Then don't. Watch him sweat.", sanity: 12, rep: 2, close: false, result: "Brad hasn't made eye contact in 6 days. He brings you donuts every morning. This is your villain origin story." },
    ]},
  ]},

  ashley: { name: "Ashley, Comms", dept: "Communications (briefly)", tickets: [
    { sceneId: 'ashley_replyall', subject: "STOP REPLYING ALL", channel: "email", message: "I just replied all to a company-wide email with a GIF of a screaming goat. Now everyone is replying all to say 'STOP REPLYING ALL.' 12,000 emails. Growing. CTO replied all saying he's disabling reply-all. HE USED REPLY-ALL TO SAY IT. Server is on fire.", choices: [
      { text: "Kill the distribution list. Deny everything under oath.", sanity: 15, rep: 15, close: true, result: "You kill the DL. Emails stop. No one can prove it was you. You delete the logs. You deleted the delete logs." },
      { text: "Send a city-wide calming email: subject 'Shhhhhh.' Body: a single period.", sanity: 18, rep: 8, close: true, result: "Silence returns instantly. 'The Period Email' is studied at Harvard now. You win an award. Possibly." },
      { text: "Let it cook. This is content. Feed the fire.", sanity: 25, rep: -20, close: true, result: "Inbox hits 47,000. IT gets 200 tickets. The goat GIF becomes the company meme. You go down with the ship. Proudly." },
      { text: "Reply-all with the same goat GIF. Commit fully.", sanity: 30, rep: -28, close: true, result: "You're named in 47 complaints. You frame the first one. Ashley brings you coffee for a month. You talk about goats." },
    ]},
  ]},

  dale: { name: "Dale, Ops", dept: "Operations", tickets: [
    { sceneId: 'dale_linkedin', subject: "my wife won't email me back", channel: "walk-up", message: "I've been emailing my wife through LinkedIn for 8 months because she doesn't answer my regular email. Now LinkedIn says she 'blocked me as a connection.' She lives in my HOUSE. She is in the KITCHEN right now. Please help me unblock LinkedIn, and also maybe our marriage.", choices: [
      { text: "'Dale. Go to the kitchen. This is a walking distance problem.'", sanity: 10, rep: 12, close: true, result: "He walks to the kitchen. Comes back 2 hours later glowing. They're going to counseling. You saved his marriage. With geography." },
      { text: "Teach him iMessage. Unlock the 21st century.", sanity: -8, rep: 22, close: true, result: "He texts 'hi :)'. She responds in 11 seconds. He weeps at his desk. Marriage: saved. You: a hero." },
      { text: "'Does she have you muted on every platform? Think about that.'", sanity: 15, rep: -3, close: false, result: "He thinks about it. Goes through the five stages. Files for divorce. This is on you now." },
      { text: "Help him draft: 'Hi Linda, thought you'd be a good fit as my wife.'", sanity: 20, rep: -5, close: true, result: "She responds: 'Thanks! Role is filled.' They laugh. They reconnect. LinkedIn saves the marriage. Shocking." },
    ]},
  ]},

  fifteen: { name: "YOUR BOSS (2nd email)", dept: "IT Management", tickets: [
    { sceneId: 'fifteen_minutes', subject: "the '15 minutes' situation", channel: "teams", message: "It has been brought to my attention that you have told FOURTEEN different people today that 'someone will be there in 15 minutes.' It is now 4:47 PM. None have seen you. Two are threatening grievances. One brought a sleeping bag. Harold has been waiting since 9 AM. Explain.", choices: [
      { text: "'15 minutes isn't a unit of time. It's a concept. A vibe.'", sanity: 20, rep: -15, close: true, result: "Long silence. Then: 'Come to my office.' In 15 minutes. You both know what this means." },
      { text: "Sprint to all 14. Apologize. Actually fix things. Die a little.", sanity: -30, rep: 30, close: true, result: "Miss lunch. Miss dinner. Miss your will to live. Every ticket closes. A hero. A broken, hungry hero." },
      { text: "Reply: 'Someone will be there in 15 minutes.'", sanity: 25, rep: -25, close: false, result: "She laughs from down the hall. Then stops. Then starts walking toward you. Fast." },
      { text: "Blame the ticketing system. 'Auto-reply. Bug. Filing a report.'", sanity: 10, rep: -5, close: true, result: "She knows. You know. She knows you know. But the paperwork is clean. In IT, paperwork is truth." },
    ]},
  ]},
};

const RANKS = [
  { min: 90, title: "Helpdesk Hero", desc: "You are the IT whisperer. They'll name a server rack after you.", color: "text-yellow-300" },
  { min: 70, title: "Tier 2 Tank", desc: "Competent, caffeinated, and cursed.", color: "text-green-400" },
  { min: 50, title: "Sudo Survivor", desc: "You made it. Barely.", color: "text-blue-300" },
  { min: 30, title: "Ctrl-Alt-Defeated", desc: "Technically employed. That's the best we can say.", color: "text-orange-400" },
  { min: 0, title: "RTFM Refugee", desc: "Currently updating your LinkedIn.", color: "text-red-400" },
];

const CHANNEL_ICON = { 'walk-up': User, 'email': Mail, 'phone': Phone, 'teams': Monitor, 'slack': Monitor };
const TICKETS_PER_SHIFT = 8;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export default function HelpdeskHell() {
  const [gameState, setGameState] = useState('title');
  const [shiftTickets, setShiftTickets] = useState([]);
  const [ticketIndex, setTicketIndex] = useState(0);
  const [sanity, setSanity] = useState(100);
  const [rep, setRep] = useState(100);
  const [closed, setClosed] = useState(0);
  const [lastResult, setLastResult] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [gameOverReason, setGameOverReason] = useState(null);

  const startShift = () => {
    const charKeys = Object.keys(CHARACTERS);
    const picked = shuffle(charKeys).slice(0, TICKETS_PER_SHIFT);
    const tickets = picked.map(key => {
      const char = CHARACTERS[key];
      const variant = char.tickets[Math.floor(Math.random() * char.tickets.length)];
      return { ...variant, from: char.name, dept: char.dept, charKey: key };
    });
    setShiftTickets(tickets);
    setTicketIndex(0); setSanity(100); setRep(100); setClosed(0);
    setLastResult(null); setHighlights([]); setGameOverReason(null);
    setGameState('playing');
  };

  const currentTicket = shiftTickets[ticketIndex];

  const handleChoice = (choice) => {
    const newSanity = Math.max(0, Math.min(100, sanity + choice.sanity));
    const newRep = Math.max(0, Math.min(100, rep + choice.rep));
    const newClosed = closed + (choice.close ? 1 : 0);
    setSanity(newSanity); setRep(newRep); setClosed(newClosed);
    setLastResult({ choice });
    setHighlights([...highlights, { ticket: currentTicket, choice }]);
    if (newSanity <= 0) setTimeout(() => { setGameOverReason('sanity'); setGameState('gameover'); }, 100);
    else if (newRep <= 0) setTimeout(() => { setGameOverReason('rep'); setGameState('gameover'); }, 100);
  };

  const nextTicket = () => {
    setLastResult(null);
    if (ticketIndex + 1 >= shiftTickets.length) setGameState('victory');
    else setTicketIndex(ticketIndex + 1);
  };

  const finalScore = useMemo(() => Math.round((sanity + rep + (closed / TICKETS_PER_SHIFT) * 100) / 3), [sanity, rep, closed]);
  const rank = useMemo(() => RANKS.find(r => finalScore >= r.min) || RANKS[RANKS.length - 1], [finalScore]);

  if (gameState === 'title') {
    return (
      <div className="min-h-screen bg-slate-900 text-green-400 font-mono p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full border-2 border-green-500 bg-slate-950 p-8">
          <div className="text-center mb-6">
            <div className="text-xs text-green-600 mb-2">C:\IT\HELPDESK_HELL.exe</div>
            <div className="text-5xl font-bold text-green-300 mb-2">HELPDESK HELL</div>
            <div className="text-sm text-green-600">a simulator of suffering</div>
          </div>
          <div className="border border-green-700 bg-black/50 p-4 mb-6 text-sm">
            <div className="text-yellow-300 mb-2">&gt; MISSION BRIEFING</div>
            <p className="mb-2">You are the sole IT support at a small-town city government that also has a corporate sales division. No one knows why.</p>
            <p>Survive <span className="text-yellow-300">{TICKETS_PER_SHIFT} tickets</span> without losing your <span className="text-red-400">SANITY</span> or <span className="text-blue-300">REPUTATION</span>.</p>
          </div>
          <div className="border border-green-700 bg-black/50 p-4 mb-6 text-xs">
            <div className="grid grid-cols-3 gap-2">
              <div><span className="text-red-400">● SANITY</span><br/>hit 0 = rage quit</div>
              <div><span className="text-blue-300">● REP</span><br/>hit 0 = fired</div>
              <div><span className="text-yellow-300">● TICKETS</span><br/>close 8 = survive</div>
            </div>
          </div>
          <button onClick={startShift} className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 text-lg transition border-2 border-green-300">&gt; PUNCH IN_</button>
        </div>
      </div>
    );
  }

  if (gameState === 'gameover') {
    const reasons = {
      sanity: { icon: <Skull className="w-16 h-16 text-red-400 mx-auto"/>, title: "YOU RAGE-QUIT", desc: "You snapped. Walked out mid-ticket screaming 'IT'S A PDF, LINDA.' Last seen sprinting across the parking lot clutching Cheetos." },
      rep: { icon: <AlertCircle className="w-16 h-16 text-orange-400 mx-auto"/>, title: "YOU'RE FIRED", desc: "HR has seen enough. Badge deactivated. Someone is eating your chair already." },
    };
    const r = reasons[gameOverReason];
    return (
      <div className="min-h-screen bg-slate-900 text-red-400 font-mono p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full border-2 border-red-500 bg-slate-950 p-8">
          <div className="text-center mb-6">{r.icon}<div className="text-4xl font-bold text-red-300 mt-4 mb-2">{r.title}</div></div>
          <div className="border border-red-700 bg-black/50 p-4 mb-6 text-sm text-red-200">{r.desc}</div>
          <div className="grid grid-cols-3 gap-2 text-xs mb-6">
            <div className="border border-red-900 p-2 text-center"><div className="text-red-600">SANITY</div><div className="text-xl text-red-300">{sanity}</div></div>
            <div className="border border-red-900 p-2 text-center"><div className="text-red-600">REP</div><div className="text-xl text-red-300">{rep}</div></div>
            <div className="border border-red-900 p-2 text-center"><div className="text-red-600">CLOSED</div><div className="text-xl text-red-300">{closed}/{TICKETS_PER_SHIFT}</div></div>
          </div>
          <button onClick={startShift} className="w-full bg-red-500 hover:bg-red-400 text-black font-bold py-3 transition border-2 border-red-300 flex items-center justify-center gap-2"><RefreshCw className="w-4 h-4"/> START NEW SHIFT</button>
        </div>
      </div>
    );
  }

  if (gameState === 'victory') {
    return (
      <div className="min-h-screen bg-slate-900 text-green-400 font-mono p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full border-2 border-green-500 bg-slate-950 p-8">
          <div className="text-center mb-6">
            <Trophy className="w-16 h-16 text-yellow-300 mx-auto"/>
            <div className={`text-4xl font-bold mt-2 ${rank.color}`}>{rank.title}</div>
            <div className="text-green-400 text-sm italic mt-2">"{rank.desc}"</div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="border border-green-700 p-3 text-center"><div className="text-xs text-green-600">SANITY</div><div className="text-2xl text-red-400">{sanity}</div></div>
            <div className="border border-green-700 p-3 text-center"><div className="text-xs text-green-600">REP</div><div className="text-2xl text-blue-300">{rep}</div></div>
            <div className="border border-green-700 p-3 text-center"><div className="text-xs text-green-600">CLOSED</div><div className="text-2xl text-yellow-300">{closed}/{TICKETS_PER_SHIFT}</div></div>
            <div className="border border-green-700 p-3 text-center"><div className="text-xs text-green-600">SCORE</div><div className="text-2xl text-green-300">{finalScore}</div></div>
          </div>
          <div className="border border-green-700 bg-black/50 p-4 mb-6">
            <div className="text-yellow-300 mb-3 text-sm">&gt; HIGHLIGHTS</div>
            <div className="space-y-2 text-xs max-h-64 overflow-y-auto">
              {highlights.map((h, i) => (
                <div key={i} className="border-l-2 border-green-800 pl-3">
                  <div className="text-green-500">#{i+1} - {h.ticket.from}</div>
                  <div className="text-green-300 italic">"{h.choice.text}"</div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={startShift} className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 transition border-2 border-green-300 flex items-center justify-center gap-2"><Coffee className="w-4 h-4"/> CLOCK IN AGAIN</button>
        </div>
      </div>
    );
  }

  const ChannelIcon = CHANNEL_ICON[currentTicket.channel] || Mail;
  const scene = SCENES[currentTicket.sceneId];

  return (
    <div className="min-h-screen bg-slate-900 text-green-400 font-mono p-4">
      <div className="max-w-3xl mx-auto">
        <div className="border-2 border-green-500 bg-slate-950 p-3 mb-3">
          <div className="flex justify-between items-center mb-3">
            <div className="text-green-300 font-bold text-sm">HELPDESK_HELL.exe</div>
            <div className="text-xs text-green-600">ticket {ticketIndex + 1}/{shiftTickets.length} • closed: {closed}</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Meter label="SANITY" value={sanity} color="red"/>
            <Meter label="REP" value={rep} color="blue"/>
            <Meter label="TICKETS" value={(closed / TICKETS_PER_SHIFT) * 100} display={`${closed}/${TICKETS_PER_SHIFT}`} color="yellow"/>
          </div>
        </div>

        {!lastResult ? (
          <div className="border-2 border-green-500 bg-slate-950 p-4 mb-3">
            <div className="mb-3 border border-green-700 bg-black overflow-hidden relative">
              <div className="absolute top-1 left-2 text-xs text-green-500 font-mono z-10 flex items-center gap-1"><Video className="w-3 h-3"/> SERVICE DESK VIEW</div>
              {scene}
            </div>
            <div className="border-b border-green-800 pb-3 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <ChannelIcon className="w-4 h-4 text-yellow-300"/>
                <span className="text-xs text-yellow-300 uppercase">{currentTicket.channel}</span>
              </div>
              <div className="text-green-300 text-sm"><span className="text-green-600">FROM:</span> {currentTicket.from}</div>
              <div className="text-green-500 text-xs"><span className="text-green-700">DEPT:</span> {currentTicket.dept}</div>
              <div className="text-yellow-200 text-sm mt-2 font-bold">RE: {currentTicket.subject}</div>
            </div>
            <div className="bg-black/50 border border-green-900 p-3 text-sm text-green-200 italic">"{currentTicket.message}"</div>
          </div>
        ) : (
          <div className="border-2 border-yellow-500 bg-slate-950 p-4 mb-3">
            <div className="text-yellow-300 text-sm mb-3">&gt; YOU CHOSE:</div>
            <div className="bg-black/50 border border-yellow-900 p-3 text-sm text-green-200 italic mb-4">"{lastResult.choice.text}"</div>
            <div className="text-yellow-300 text-sm mb-2">&gt; RESULT:</div>
            <div className="bg-black/50 border border-yellow-900 p-3 text-sm text-green-100 mb-4">{lastResult.choice.result}</div>
            <div className="flex gap-2 text-xs mb-4 flex-wrap">
              <StatChange label="SANITY" value={lastResult.choice.sanity}/>
              <StatChange label="REP" value={lastResult.choice.rep}/>
              {lastResult.choice.close ? <span className="px-2 py-1 border border-green-500 text-green-300">CLOSED ✓</span> : <span className="px-2 py-1 border border-red-500 text-red-300">UNRESOLVED ✗</span>}
            </div>
            <button onClick={nextTicket} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 transition border-2 border-yellow-300">&gt; NEXT TICKET_</button>
          </div>
        )}

        {!lastResult && (
          <div className="space-y-2">
            <div className="text-xs text-green-600 mb-1">&gt; HOW DO YOU RESPOND?</div>
            {currentTicket.choices.map((choice, i) => (
              <button key={i} onClick={() => handleChoice(choice)} className="w-full text-left border border-green-700 hover:border-green-400 hover:bg-green-900/20 bg-slate-950 p-3 transition text-sm text-green-200">
                <span className="text-yellow-300 mr-2">[{i+1}]</span>{choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Meter({ label, value, display, color }) {
  const colors = { red: { t: 'text-red-400', b: 'bg-red-500', o: 'border-red-900' }, blue: { t: 'text-blue-300', b: 'bg-blue-500', o: 'border-blue-900' }, yellow: { t: 'text-yellow-300', b: 'bg-yellow-500', o: 'border-yellow-900' } };
  const c = colors[color];
  return (
    <div className={`border ${c.o} p-2 bg-black/30`}>
      <div className="flex justify-between text-xs mb-1"><span className={c.t}>{label}</span><span className={c.t}>{display ?? Math.round(value)}</span></div>
      <div className="w-full h-2 bg-slate-800 border border-slate-700"><div className={`h-full ${c.b} transition-all`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }}/></div>
    </div>
  );
}

function StatChange({ label, value }) {
  if (value === 0) return null;
  const color = value > 0 ? 'text-green-300 border-green-700' : 'text-red-300 border-red-700';
  return <span className={`px-2 py-1 border ${color}`}>{label} {value > 0 ? '+' : ''}{value}</span>;
}
