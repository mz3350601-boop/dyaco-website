'use client';
import {useState} from 'react';
export default function Home(){
 const [idea,setIdea]=useState('');
 const [hero,setHero]=useState('Coco');
 const [story,setStory]=useState('');
 function generate(){
  const topic=idea||'a magical adventure';
  setStory('TITLE: '+hero+' and the '+topic+'\n\nOnce upon a time, '+hero+' discovered a wonderful surprise. A new adventure began!\n\nSCENE 1: A mysterious clue appears.\nSCENE 2: A friend needs help.\nSCENE 3: They work together and solve the problem.\n\nTHE END ✨\n\nYouTube Title: '+hero+' Amazing Adventure | Kids Story\n#KidsStories #TinyWonderTales');
 }
 return <main className="app"><section className="hero"><div style={{fontSize:64}}>🧸✨🎬</div><h1>Tiny Wonder Tales AI</h1><p>Create English kids stories for YouTube</p></section><section className="card"><div className="grid"><div className="field"><b>Story idea</b><input value={idea} onChange={e=>setIdea(e.target.value)} placeholder="A bunny finds a lost star"/></div><div className="field"><b>Main character</b><select value={hero} onChange={e=>setHero(e.target.value)}><option>Coco 🐰</option><option>Benny 🐻</option><option>Luna 🦊</option><option>Milo 🐘</option></select></div></div><button onClick={generate}>✨ GENERATE STORY</button>{story&&<div className="card result"><h2>Your Story 📖</h2>{story}</div>}</section></main>
}