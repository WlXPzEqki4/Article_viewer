// import React, { useState, useRef } from 'react';
// import { Search } from 'lucide-react';

// function HierarchicalArticleViewer() {
//   const searchInputRef = useRef(null);
//   const [activeTheme, setActiveTheme] = useState(null);
//   const [activeSubtopic, setActiveSubtopic] = useState(null);
//   const [selectedKeywords, setSelectedKeywords] = useState(new Set());
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedSearchTerm, setHighlightedSearchTerm] = useState('');

//   const themeColors = {
//     trump_tax_proposals: {
//       base: 'blue',
//       colors: { light: 'bg-blue-200', medium: 'bg-blue-400', dark: 'bg-blue-500' }
//     },
//     republican_response: {
//       base: 'red',
//       colors: { light: 'bg-red-200', medium: 'bg-red-400', dark: 'bg-red-500' }
//     },
//     legislative_outlook: {
//       base: 'yellow',
//       colors: { light: 'bg-yellow-200', medium: 'bg-yellow-400', dark: 'bg-yellow-500' }
//     }
//   };
  

//   const articleContent = {
//     title: "Republicans bedeviled by Trump's trio of new tax-cut ideas",
//     sentences: [
//       "In this article: Donald Trump won the presidency with talk of sweeping new tax breaks.",
//       "Now Republicans are grappling with how to make good on his promises — and raising alarms about how difficult and costly that will be.",
//       "During a White House meeting with House Republicans earlier this month, Trump made clear his continued interest in three campaign proposals that tilt populist and away from Republican orthodoxy: Eliminating taxes on tips, Social Security benefits and overtime pay.",
//       "Those would amount to a dramatic expansion of his biggest first-term legislative success, the 2017 tax cut law.",
//       "Republicans are already demonstrating that simply extending those eight-year-old tax cuts are a big lift on their own without the added burden of trying to make Trump's new proposals work.",
//       "Sen. John Curtis, R-Utah, told Semafor that enacting Trump's trio of new tax ideas is going to prove \"incredibly challenging.\"",
//       "\"It's a task to make the math work with the expiring cuts.",
//       "And just speaking for myself and not my colleagues, that's Mission Number One: preventing the tax increases.",
//       "You can see that we're having a difficult time just doing that,\" Curtis said.",
//       "\"I'm happy to listen to proposals.",
//       "But right now, I just don't see anything out there that allows us to go beyond that.\"",
//       "It's an important moment for Hill Republicans, who have accepted almost all of Trump's early Cabinet picks despite some reservations.",
//       "So far, Trump has largely deferred to them on the details of enacting his agenda, but that latitude may evaporate as GOP lawmakers try to square the high price tag of his goals with their queasiness about blowing a huge hole in the deficit.",
//       "Republican lawmakers are acutely aware that Trump's poll-tested tax pitches are important to him.",
//       "And because the president wants to follow through on his promises, some of them see at least a version of his ideas as essential to any successful tax plan.",
//       "\"It's something he very much wants to happen, and his support is going to be required\" to get a bill done, said Sen. John Hoeven, R-N.D.",
//       "Many, but not all, Republicans are coming around to the view that an extension of the 2017 tax cuts for individuals doesn't need to be paid for, which gives them more fiscal wiggle room for additional tax breaks in what will almost surely be a party-line bill.",
//       "But few GOP lawmakers want to look like hypocrites with a costly new tax plan after more than a decade of railing against growing debt.",
//       "They're talking about spending cuts to counterbalance a tax proposal, but actually enacting cuts is hard.",
//       "And debt and deficit politics are not Trump's forte.",
//       "Given that reality, they'll have to do some educating of their base, the White House and the public about what it means to pay for Trump's priorities.",
//       "\"There'll be a big push to say, ‘How are we going to pay for that?",
//       "And what are we going to do to make sure that we're not adding to the deficit?'",
//       "So, it's going to be much harder,\" said Sen. James Lankford, R-Okla., a member of the tax-writing Finance Committee.",
//       "If Republicans don't enact Trump's new tax ideas, Lankford predicted, \"the White House will come back and say, ‘I'm not going to sign it if you don't find a way to be able to do that.'\"",
//       "In this article: As the House tries to pass one big party-line bill that combines border, defense and taxes, the Senate is moving to separate the border and national security components from tax cuts, which would pass later in the year under their vision.",
//       "Other Republicans are floating a more novel approach.",
//       "Sen. Ron Johnson, R-Wis., has proposed taking up three bills.",
//       "That's how Sen. Roger Marshall, R-Kan., says Trump can get his extra campaign-trail tax breaks.",
//       "\"Taking three bites of the apple makes more sense.",
//       "In the second bite, we would make the Trump tax cuts permanent,\" Marshall said, while the trio of new tax proposals would likely have to wait until \"late summer, early fall.\"",
//       "Beyond the legislative mechanics of eliminating taxes on tips, Social Security and overtime are looming doubts about how any legislation would work.",
//       "In the case of ending taxes on tips, a bill that's not carefully drafted could create confusion, as well as lower rates for tipped workers like waiters than for teachers or other salaried positions.",
//       "\"We don't want our electricians to go out and say, ‘It cost $10, but if you tipped me $200, that's the bill.'",
//       "We have to be very deliberate in these things,\" said Rep. Greg Murphy, R-N.C.",
//       "Summing up the endeavor, he said: \"I'm hopeful.",
//       "I'm not confident.\"",
//       "Some Republicans are skeptical about even touching Social Security taxes due to strict budgetary rules that limit changes to the program.",
//       "If Congress can look at ditching Social Security taxes, Sen. Cynthia Lummis, R-Wyo., suggested \"we could do a means testing\" that would preserve taxes on high-income people.",
//       "Along with tariff revenue, she said, that could help mitigate costs.",
//       "\"I am concerned that, when you start adding all of these together, it is going to get expensive,\" she said.",
//       "Ending taxes on Social Security benefits, overtime and tips would cost more than $2 trillion combined over 10 years, according to the Tax Foundation.",
//       "Exempting Social Security would cost about $1.2 trillion, exempting overtime would cost roughly $750 billion and eliminating tax on tips would cost more than $100 billion.",
//       "Just extending the 2017 law costs more than $4 trillion.",
//       "And blue-state Republicans also want to expand the state and local tax deduction, and some Republicans also want to lower corporate taxes.",
//       "Some Republicans predict that Trump won't be able to achieve all of his campaign-trail dreams, but he'll get some of them.",
//       "\"We probably can't do all, but one or two of them are probably going to happen, just as a result of the election,\" Sen. Chuck Grassley, R-Iowa, told Semafor.",
//       "The Senate is nearly done with Trump's Cabinet, shifting Washington's focus onto his legislative agenda.",
//       "That is likely to expose new tensions in the Republican Party: Just look at how some Republicans disregarded his push to raise the debt ceiling during last year's government spending talks.",
//       "Casting aside Trump's campaign pledges on taxes is probably a bridge too far for Republicans.",
//       "But given the near-impossibility of doing everything Trump wants while satisfying fiscal hardliners and avoiding politically damaging cuts to popular programs, the president may have to get pragmatic, too.",
//     ]
//   };
  
//   const themeData = {
//     trump_tax_proposals: {
//       name: 'Trumps Tax Proposals',
//       keywords: ['Trump', 'tax breaks', 'tax cuts', 'tax proposals'],
//       subtopics: {
//         specific_tax_proposals: {
//           name: 'Specific Tax Proposals',
//           keywords: ['taxes on tips', 'Social Security benefits', 'overtime pay'],
//           sentences: [2, 24, 25, 26, 27, 29, 30]
//         },
//         potential_impact: {
//           name: 'Potential Impact',
//           keywords: ['costly', '$2 trillion', '$1.2 trillion', '$750 billion', '$100 billion', '$4 trillion'],
//           sentences: [4, 29, 30, 31]
//         },
//       }
//     },
//     republican_response: {
//       name: 'Republican Response',
//       keywords: ['Republicans', 'grappling', 'alarms', 'difficult', 'costly', 'challenging', 'hypocrites'],
//       subtopics: {
//         legislative_challenges: {
//           name: 'Legislative Challenges',
//           keywords: ['big lift', 'incredibly challenging', 'high price tag', 'deficit', 'debt'],
//           sentences: [1, 4, 5, 8, 13, 14]
//         },
//         political_dynamics: {
//           name: 'Political Dynamics',
//           keywords: ['accepted', 'deferred', 'poll-tested', 'promises', 'fiscal wiggle room', 'disregarded'],
//           sentences: [7, 9, 10, 11, 35, 36]
//         },
//       }
//     },
//     legislative_outlook: {
//       name: 'Legislative Outlook',
//       keywords: ['legislative success', 'legislative agenda', 'legislative mechanics', 'party-line bill'],
//       subtopics: {
//         future_legislation: {
//           name: 'Future Legislation',
//           keywords: ['extension of the 2017 tax cuts', 'border, defense and taxes', 'three bills', 'state and local tax deduction', 'lower corporate taxes'],
//           sentences: [3, 18, 19, 31, 32]
//         },
//         political_feasibility: {
//           name: 'Political Feasibility',
//           keywords: ['achievable', 'pragmatic', 'near-impossibility', 'fiscal hardliners', 'popular programs'],
//           sentences: [33, 37]
//         },
//       }
//     },
//   };
  

//   function findAllMatches(text, phrases) {
//     const matches = [];
//     phrases.forEach(phrase => {
//       let index = 0;
//       const lowerText = text.toLowerCase();
//       const lowerPhrase = phrase.toLowerCase();
      
//       while ((index = lowerText.indexOf(lowerPhrase, index)) !== -1) {
//         matches.push({
//           start: index,
//           end: index + phrase.length,
//           text: text.slice(index, index + phrase.length)
//         });
//         index += 1;
//       }
//     });
//     return matches.sort((a, b) => a.start - b.start);
//   }

//   function highlightText(text) {
//     const matches = [];
//     const themeColor = activeTheme ? themeColors[activeTheme].colors : null;
  
//     // Find theme matches
//     if (activeTheme) {
//       // Theme level matches
//       const themeMatches = findAllMatches(text, themeData[activeTheme].keywords);
//       matches.push(...themeMatches.map(m => ({ ...m, type: 'theme' })));

//       // Get all subtopic matches when theme is selected
//       Object.values(themeData[activeTheme].subtopics).forEach(subtopic => {
//         const subtopicMatches = findAllMatches(text, subtopic.keywords);
//         if (activeSubtopic) {
//           // If subtopic is selected, mark its matches differently
//           subtopicMatches.forEach(match => {
//             match.type = subtopic.name === themeData[activeTheme].subtopics[activeSubtopic].name 
//               ? 'activeSubtopic' 
//               : 'theme';
//           });
//         } else {
//           subtopicMatches.forEach(match => match.type = 'theme');
//         }
//         matches.push(...subtopicMatches);
//       });
//     }

//     // Find keyword matches
//     if (selectedKeywords.size > 0) {
//       const keywordMatches = findAllMatches(text, Array.from(selectedKeywords));
//       matches.push(...keywordMatches.map(m => ({ ...m, type: 'keyword' })));
//     }

//     // Find search matches
//     if (highlightedSearchTerm) {
//       const searchMatches = findAllMatches(text, [highlightedSearchTerm]);
//       matches.push(...searchMatches.map(m => ({ ...m, type: 'search' })));
//     }

//     // Now we merge matches and build `result`
//     matches.sort((a, b) => a.start - b.start);
//     const mergedMatches = matches.reduce((acc, curr) => {
//       const prev = acc[acc.length - 1];
//       if (prev && curr.start <= prev.end) {
//         prev.end = Math.max(prev.end, curr.end);
//         prev.types = [...new Set([...(prev.types || [prev.type]), curr.type])];
//         return acc;
//       }
//       curr.types = [curr.type];
//       return [...acc, curr];
//     }, []);
  
//     let result = [];
//     let lastIndex = 0;
  

//     mergedMatches.forEach(match => {
//       if (match.start > lastIndex) {
//         result.push(text.slice(lastIndex, match.start));
//       }
    
//       let className = 'px-1 rounded transition-colors duration-200 ';
//       const types = match.types;  // e.g. ["search", "theme"] if it's both
    
//       // Collect an array of colour stops
//       let colorStops = [];
    
//       if (types.includes('search')) {
//         colorStops.push('red-400');
//       }
//       if (types.includes('keyword')) {
//         colorStops.push('green-400');
//       }
//       if (types.includes('activeSubtopic')) {
//         colorStops.push(`${themeColors[activeTheme].base}-400`);
//       } else if (types.includes('theme')) {
//         colorStops.push(`${themeColors[activeTheme].base}-200`);
//       }
    
//       // Decide how many colours we got
//       if (colorStops.length === 1) {
//         // single colour
//         className += `bg-${colorStops[0]}`;
//       } else if (colorStops.length === 2) {
//         className += `bg-gradient-to-r from-${colorStops[0]} to-${colorStops[1]}`;
//       } else if (colorStops.length === 3) {
//         className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} to-${colorStops[2]}`;
//       } else if (colorStops.length >= 4) {
//         // fallback: only 4 stops
//         className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} via-${colorStops[2]} to-${colorStops[3]}`;
//       }
      
//       result.push(
//         <span key={match.start} className={className}>
//           {text.slice(match.start, match.end)}
//         </span>
//       );
    
//       lastIndex = match.end;
//     });
    

//     if (lastIndex < text.length) {
//       result.push(text.slice(lastIndex));
//     }
  
//     return result;
//   }

//   const allKeywords = [...new Set([
//     ...Object.values(themeData).flatMap(theme => theme.keywords),
//     ...Object.values(themeData).flatMap(theme => 
//       Object.values(theme.subtopics).flatMap(subtopic => subtopic.keywords)
//     )
//   ])].sort();

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-4 gap-6">
//         <div className="col-span-1 space-y-6">
//           {/* Search Box */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <div className="relative">
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     setHighlightedSearchTerm(searchTerm);
//                   }
//                 }}
//                 placeholder="Search content..."
//                 className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>

//           {/* Themes Panel */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <h2 className="text-xl font-bold mb-4">Themes</h2>
//             <div className="space-y-4">
//               {Object.entries(themeData).map(([themeKey, theme]) => (
//                 <div key={themeKey} className="mb-4">
//                   <button
//                     className={`w-full text-left p-3 rounded-lg transition-colors duration-200
//                       ${activeTheme === themeKey 
//                         ? themeColors[themeKey].colors.medium
//                         : 'bg-gray-100 hover:bg-gray-200'}`}
//                     onClick={() => {
//                       setActiveTheme(activeTheme === themeKey ? null : themeKey);
//                       setActiveSubtopic(null);
//                     }}
//                   >
//                     <h3 className="font-semibold">{theme.name}</h3>
//                   </button>
                  
//                   {activeTheme === themeKey && (
//                     <div className="ml-4 mt-2 space-y-2">
//                       {Object.entries(theme.subtopics).map(([subtopicKey, subtopic]) => (
//                         <button
//                           key={subtopicKey}
//                           className={`block w-full text-left p-2 rounded-md transition-colors duration-200
//                             ${activeSubtopic === subtopicKey 
//                               ? themeColors[themeKey].colors.dark
//                               : 'hover:bg-gray-100'}`}
//                           onClick={() => setActiveSubtopic(
//                             activeSubtopic === subtopicKey ? null : subtopicKey
//                           )}
//                         >
//                           {subtopic.name}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Keywords Panel */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <h2 className="text-xl font-bold mb-4">Keywords</h2>
//             <div className="flex flex-wrap gap-2">
//               {allKeywords.map((keyword) => (
//                 <button
//                   key={keyword}
//                   onClick={() => {
//                     const newKeywords = new Set(selectedKeywords);
//                     if (newKeywords.has(keyword)) {
//                       newKeywords.delete(keyword);
//                     } else {
//                       newKeywords.add(keyword);
//                     }
//                     setSelectedKeywords(newKeywords);
//                   }}
//                   className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
//                     ${selectedKeywords.has(keyword)
//                       ? 'bg-green-400 text-white'
//                       : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
//                 >
//                   {keyword}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Article Content */}
//         <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
//           <article className="prose prose-lg">
//             <h1 className="text-3xl font-bold mb-6">
//               {highlightText(articleContent.title)}
//             </h1>
//             {articleContent.sentences.map((sentence, idx) => (
//               <p key={idx} className="mb-2">
//                 {highlightText(sentence)}
//               </p>
//             ))}
//           </article>

//           {/* Dynamic Legend */}
//           <div className="mt-8 p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-lg font-semibold mb-2">Highlighting Guide</h3>
//             <div className="space-y-2">
//               {activeTheme && (
//                 <div className="flex items-center gap-2">
//                   <span className={`inline-block w-4 h-4 ${themeColors[activeTheme].colors.light} rounded`}></span>
//                   <span>{themeData[activeTheme].name} theme content</span>
//                 </div>
//               )}
//               {activeTheme && activeSubtopic && (
//                 <div className="flex items-center gap-2">
//                   <span className={`inline-block w-4 h-4 ${themeColors[activeTheme].colors.medium} rounded`}></span>
//                   <span>{themeData[activeTheme].subtopics[activeSubtopic].name} specific content</span>
//                 </div>
//               )}
//               {selectedKeywords.size > 0 && (
//                 <div className="flex items-center gap-2">
//                   <span className="inline-block w-4 h-4 bg-green-400 rounded"></span>
//                   <span>Selected keywords</span>
//                 </div>
//               )}
//               {highlightedSearchTerm && (
//                 <div className="flex items-center gap-2">
//                   <span className="inline-block w-4 h-4 bg-red-400 rounded"></span>
//                   <span>Search matches</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HierarchicalArticleViewer;




























// import React, { useState, useRef, useMemo } from 'react';
// import { Search } from 'lucide-react';

// function HierarchicalArticleViewer() {
//   const searchInputRef = useRef(null);
//   const [activeTheme, setActiveTheme] = useState(null);
//   const [activeSubtopic, setActiveSubtopic] = useState(null);
//   const [selectedKeywords, setSelectedKeywords] = useState(new Set());
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedSearchTerm, setHighlightedSearchTerm] = useState('');

//   // Example: up to 5 theme colour palettes (excluding green, red, which we reserve).
//   // You can replace pink/orange/teal/blue/purple with your desired colours.
//   const colorPalette = [
//     {
//       base: 'pink',
//       colors: { light: 'bg-pink-200', medium: 'bg-pink-400', dark: 'bg-pink-500' }
//     },
//     {
//       base: 'orange',
//       colors: { light: 'bg-orange-200', medium: 'bg-orange-400', dark: 'bg-orange-500' }
//     },
//     {
//       base: 'teal',
//       colors: { light: 'bg-teal-200', medium: 'bg-teal-400', dark: 'bg-teal-500' }
//     },
//     {
//       base: 'blue',
//       colors: { light: 'bg-blue-200', medium: 'bg-blue-400', dark: 'bg-blue-500' }
//     },
//     {
//       base: 'purple',
//       colors: { light: 'bg-purple-200', medium: 'bg-purple-400', dark: 'bg-purple-500' }
//     },
//   ];

//   // ------------------ EXAMPLE THEMEDATA + ARTICLE CONTENT ------------------
//   // In real usage, you’d supply these from outside, e.g. from an LLM or server.
//   const articleContent = {
//     title: "Republicans bedeviled by Trump's trio of new tax-cut ideas",
//     sentences: [
//       "In this article: Donald Trump won the presidency with talk of sweeping new tax breaks.",
//       "Now Republicans are grappling with how to make good on his promises — and raising alarms about how difficult and costly that will be.",
//       "During a White House meeting with House Republicans earlier this month, Trump made clear his continued interest in three campaign proposals that tilt populist and away from Republican orthodoxy: Eliminating taxes on tips, Social Security benefits and overtime pay.",
//       "Those would amount to a dramatic expansion of his biggest first-term legislative success, the 2017 tax cut law.",
//       "Republicans are already demonstrating that simply extending those eight-year-old tax cuts are a big lift on their own without the added burden of trying to make Trump's new proposals work.",
//       "Sen. John Curtis, R-Utah, told Semafor that enacting Trump's trio of new tax ideas is going to prove \"incredibly challenging.\"",
//       "\"It's a task to make the math work with the expiring cuts.",
//       "And just speaking for myself and not my colleagues, that's Mission Number One: preventing the tax increases.",
//       "You can see that we're having a difficult time just doing that,\" Curtis said.",
//       "\"I'm happy to listen to proposals.",
//       "But right now, I just don't see anything out there that allows us to go beyond that.\"",
//       "It's an important moment for Hill Republicans, who have accepted almost all of Trump's early Cabinet picks despite some reservations.",
//       "So far, Trump has largely deferred to them on the details of enacting his agenda, but that latitude may evaporate as GOP lawmakers try to square the high price tag of his goals with their queasiness about blowing a huge hole in the deficit.",
//       "Republican lawmakers are acutely aware that Trump's poll-tested tax pitches are important to him.",
//       "And because the president wants to follow through on his promises, some of them see at least a version of his ideas as essential to any successful tax plan.",
//       "\"It's something he very much wants to happen, and his support is going to be required\" to get a bill done, said Sen. John Hoeven, R-N.D.",
//       "Many, but not all, Republicans are coming around to the view that an extension of the 2017 tax cuts for individuals doesn't need to be paid for, which gives them more fiscal wiggle room for additional tax breaks in what will almost surely be a party-line bill.",
//       "But few GOP lawmakers want to look like hypocrites with a costly new tax plan after more than a decade of railing against growing debt.",
//       "They're talking about spending cuts to counterbalance a tax proposal, but actually enacting cuts is hard.",
//       "And debt and deficit politics are not Trump's forte.",
//       "Given that reality, they'll have to do some educating of their base, the White House and the public about what it means to pay for Trump's priorities.",
//       "\"There'll be a big push to say, ‘How are we going to pay for that?",
//       "And what are we going to do to make sure that we're not adding to the deficit?'",
//       "So, it's going to be much harder,\" said Sen. James Lankford, R-Okla., a member of the tax-writing Finance Committee.",
//       "If Republicans don't enact Trump's new tax ideas, Lankford predicted, \"the White House will come back and say, ‘I'm not going to sign it if you don't find a way to be able to do that.'\"",
//       "In this article: As the House tries to pass one big party-line bill that combines border, defense and taxes, the Senate is moving to separate the border and national security components from tax cuts, which would pass later in the year under their vision.",
//       "Other Republicans are floating a more novel approach.",
//       "Sen. Ron Johnson, R-Wis., has proposed taking up three bills.",
//       "That's how Sen. Roger Marshall, R-Kan., says Trump can get his extra campaign-trail tax breaks.",
//       "\"Taking three bites of the apple makes more sense.",
//       "In the second bite, we would make the Trump tax cuts permanent,\" Marshall said, while the trio of new tax proposals would likely have to wait until \"late summer, early fall.\"",
//       "Beyond the legislative mechanics of eliminating taxes on tips, Social Security and overtime are looming doubts about how any legislation would work.",
//       "In the case of ending taxes on tips, a bill that's not carefully drafted could create confusion, as well as lower rates for tipped workers like waiters than for teachers or other salaried positions.",
//       "\"We don't want our electricians to go out and say, ‘It cost $10, but if you tipped me $200, that's the bill.'",
//       "We have to be very deliberate in these things,\" said Rep. Greg Murphy, R-N.C.",
//       "Summing up the endeavor, he said: \"I'm hopeful.",
//       "I'm not confident.\"",
//       "Some Republicans are skeptical about even touching Social Security taxes due to strict budgetary rules that limit changes to the program.",
//       "If Congress can look at ditching Social Security taxes, Sen. Cynthia Lummis, R-Wyo., suggested \"we could do a means testing\" that would preserve taxes on high-income people.",
//       "Along with tariff revenue, she said, that could help mitigate costs.",
//       "\"I am concerned that, when you start adding all of these together, it is going to get expensive,\" she said.",
//       "Ending taxes on Social Security benefits, overtime and tips would cost more than $2 trillion combined over 10 years, according to the Tax Foundation.",
//       "Exempting Social Security would cost about $1.2 trillion, exempting overtime would cost roughly $750 billion and eliminating tax on tips would cost more than $100 billion.",
//       "Just extending the 2017 law costs more than $4 trillion.",
//       "And blue-state Republicans also want to expand the state and local tax deduction, and some Republicans also want to lower corporate taxes.",
//       "Some Republicans predict that Trump won't be able to achieve all of his campaign-trail dreams, but he'll get some of them.",
//       "\"We probably can't do all, but one or two of them are probably going to happen, just as a result of the election,\" Sen. Chuck Grassley, R-Iowa, told Semafor.",
//       "The Senate is nearly done with Trump's Cabinet, shifting Washington's focus onto his legislative agenda.",
//       "That is likely to expose new tensions in the Republican Party: Just look at how some Republicans disregarded his push to raise the debt ceiling during last year's government spending talks.",
//       "Casting aside Trump's campaign pledges on taxes is probably a bridge too far for Republicans.",
//       "But given the near-impossibility of doing everything Trump wants while satisfying fiscal hardliners and avoiding politically damaging cuts to popular programs, the president may have to get pragmatic, too.",
//     ]
//   };







//   const themeData = {
//     trump_tax_proposals: {
//       name: 'Trumps Tax Proposals',
//       keywords: ['Trump', 'tax breaks', 'tax cuts', 'tax proposals'],
//       subtopics: {
//         specific_tax_proposals: {
//           name: 'Specific Tax Proposals',
//           keywords: ['taxes on tips', 'Social Security benefits', 'overtime pay'],
//           sentences: [2, 24, 25, 26, 27, 29, 30]
//         },
//         potential_impact: {
//           name: 'Potential Impact',
//           keywords: ['costly', '$2 trillion', '$1.2 trillion', '$750 billion', '$100 billion', '$4 trillion'],
//           sentences: [4, 29, 30, 31]
//         },
//       }
//     },
//     republican_response: {
//       name: 'Republican Response',
//       keywords: ['Republicans', 'grappling', 'alarms', 'difficult', 'costly', 'challenging', 'hypocrites'],
//       subtopics: {
//         legislative_challenges: {
//           name: 'Legislative Challenges',
//           keywords: ['big lift', 'incredibly challenging', 'high price tag', 'deficit', 'debt'],
//           sentences: [1, 4, 5, 8, 13, 14]
//         },
//         political_dynamics: {
//           name: 'Political Dynamics',
//           keywords: ['accepted', 'deferred', 'poll-tested', 'promises', 'fiscal wiggle room', 'disregarded'],
//           sentences: [7, 9, 10, 11, 35, 36]
//         },
//       }
//     },
//     legislative_outlook: {
//       name: 'Legislative Outlook',
//       keywords: ['legislative success', 'legislative agenda', 'legislative mechanics', 'party-line bill'],
//       subtopics: {
//         future_legislation: {
//           name: 'Future Legislation',
//           keywords: ['extension of the 2017 tax cuts', 'border, defense and taxes', 'three bills', 'state and local tax deduction', 'lower corporate taxes'],
//           sentences: [3, 18, 19, 31, 32]
//         },
//         political_feasibility: {
//           name: 'Political Feasibility',
//           keywords: ['achievable', 'pragmatic', 'near-impossibility', 'fiscal hardliners', 'popular programs'],
//           sentences: [33, 37]
//         },
//       }
//     },

    



//     // Potentially up to 5 total themes, e.g. theme_three, theme_four, theme_five
//   };
//   // ------------------------------------------------------------------------

//   // Build a dynamic mapping from each theme key to one of our 5 palette slots.
//   const assignedColors = useMemo(() => {
//     const keys = Object.keys(themeData);
//     const mapping = {};
//     keys.forEach((k, idx) => {
//       // If we exceed 5 themes, fall back to a neutral 'gray' palette
//       if (idx < colorPalette.length) {
//         mapping[k] = colorPalette[idx];
//       } else {
//         mapping[k] = {
//           base: 'gray',
//           colors: {
//             light: 'bg-gray-200',
//             medium: 'bg-gray-400',
//             dark: 'bg-gray-500'
//           }
//         };
//       }
//     });
//     return mapping;
//   }, [themeData]);

//   function getThemeColors(themeKey) {
//     return assignedColors[themeKey] || {
//       base: 'gray',
//       colors: {
//         light: 'bg-gray-200',
//         medium: 'bg-gray-400',
//         dark: 'bg-gray-500'
//       }
//     };
//   }

//   // Helper function to find all matches of an array of phrases in a text
//   function findAllMatches(text, phrases) {
//     const matches = [];
//     phrases.forEach(phrase => {
//       let index = 0;
//       const lowerText = text.toLowerCase();
//       const lowerPhrase = phrase.toLowerCase();
      
//       while ((index = lowerText.indexOf(lowerPhrase, index)) !== -1) {
//         matches.push({
//           start: index,
//           end: index + phrase.length,
//           text: text.slice(index, index + phrase.length)
//         });
//         index += 1;
//       }
//     });
//     return matches.sort((a, b) => a.start - b.start);
//   }

//   // Main highlight function
//   function highlightText(text) {
//     const matches = [];

//     if (activeTheme) {
//       // Find top-level theme keywords
//       const themeMatches = findAllMatches(text, themeData[activeTheme].keywords);
//       matches.push(...themeMatches.map(m => ({ ...m, type: 'theme' })));

//       // Subtopics
//       Object.entries(themeData[activeTheme].subtopics).forEach(([subKey, subtopic]) => {
//         const subMatches = findAllMatches(text, subtopic.keywords);
//         subMatches.forEach(match => {
//           if (activeSubtopic && subKey === activeSubtopic) {
//             match.type = 'activeSubtopic';
//           } else {
//             match.type = 'theme';
//           }
//         });
//         matches.push(...subMatches);
//       });
//     }

//     // Keywords
//     if (selectedKeywords.size > 0) {
//       const keywordMatches = findAllMatches(text, Array.from(selectedKeywords));
//       matches.push(...keywordMatches.map(m => ({ ...m, type: 'keyword' })));
//     }

//     // Search
//     if (highlightedSearchTerm) {
//       const searchMatches = findAllMatches(text, [highlightedSearchTerm]);
//       matches.push(...searchMatches.map(m => ({ ...m, type: 'search' })));
//     }

//     // Merge overlapping matches
//     matches.sort((a, b) => a.start - b.start);
//     const mergedMatches = matches.reduce((acc, curr) => {
//       const prev = acc[acc.length - 1];
//       if (prev && curr.start <= prev.end) {
//         prev.end = Math.max(prev.end, curr.end);
//         prev.types = [...new Set([...(prev.types || [prev.type]), curr.type])];
//         return acc;
//       }
//       curr.types = [curr.type];
//       return [...acc, curr];
//     }, []);

//     // Build the final text with highlight spans
//     let result = [];
//     let lastIndex = 0;

//     mergedMatches.forEach(match => {
//       if (match.start > lastIndex) {
//         result.push(text.slice(lastIndex, match.start));
//       }

//       // Now build up a gradient or single colour
//       let className = 'px-1 rounded transition-colors duration-200 ';
//       const types = match.types;

//       // Collect color stops
//       let colorStops = [];

//       // 'search' => red
//       if (types.includes('search')) {
//         colorStops.push('red-400');
//       }
//       // 'keyword' => green
//       if (types.includes('keyword')) {
//         colorStops.push('green-400');
//       }

//       // If it's an active subtopic, we use the 'medium/dark' shade
//       if (types.includes('activeSubtopic')) {
//         colorStops.push(`${getThemeColors(activeTheme).base}-400`);
//       } 
//       // Else if it's at least 'theme', use the lighter shade
//       else if (types.includes('theme')) {
//         colorStops.push(`${getThemeColors(activeTheme).base}-200`);
//       }

//       // Decide how many color stops
//       if (colorStops.length === 1) {
//         className += `bg-${colorStops[0]}`;
//       } else if (colorStops.length === 2) {
//         className += `bg-gradient-to-r from-${colorStops[0]} to-${colorStops[1]}`;
//       } else if (colorStops.length === 3) {
//         className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} to-${colorStops[2]}`;
//       } else if (colorStops.length >= 4) {
//         // from, via, via, to
//         className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} via-${colorStops[2]} to-${colorStops[3]}`;
//       }

//       result.push(
//         <span key={match.start} className={className}>
//           {text.slice(match.start, match.end)}
//         </span>
//       );

//       lastIndex = match.end;
//     });

//     if (lastIndex < text.length) {
//       result.push(text.slice(lastIndex));
//     }

//     return result;
//   }

//   // Collect all possible keywords for the “Keywords” panel
//   const allKeywords = useMemo(() => {
//     const all = [];
//     Object.values(themeData).forEach(theme => {
//       all.push(...theme.keywords);
//       Object.values(theme.subtopics).forEach(sub => {
//         all.push(...sub.keywords);
//       });
//     });
//     return Array.from(new Set(all)).sort();
//   }, [themeData]);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-4 gap-6">
//         {/* Left side: search box, theme panel, keywords */}
//         <div className="col-span-1 space-y-6">
//           {/* Search Box */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <div className="relative">
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     setHighlightedSearchTerm(searchTerm);
//                   }
//                 }}
//                 placeholder="Search content..."
//                 className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>

//           {/* Themes Panel */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <h2 className="text-xl font-bold mb-4">Themes</h2>
//             <div className="space-y-4">
//               {Object.entries(themeData).map(([themeKey, themeObj]) => {
//                 // Grab the assigned color style (medium) if active
//                 const colorSet = getThemeColors(themeKey).colors;
//                 const isActive = activeTheme === themeKey;
//                 return (
//                   <div key={themeKey} className="mb-4">
//                     <button
//                       className={`w-full text-left p-3 rounded-lg transition-colors duration-200
//                         ${isActive ? colorSet.medium : 'bg-gray-100 hover:bg-gray-200'}`}
//                       onClick={() => {
//                         setActiveTheme(isActive ? null : themeKey);
//                         setActiveSubtopic(null);
//                       }}
//                     >
//                       <h3 className="font-semibold">{themeObj.name}</h3>
//                     </button>
                    
//                     {isActive && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         {Object.entries(themeObj.subtopics).map(([subKey, subObj]) => {
//                           const subIsActive = activeSubtopic === subKey;
//                           return (
//                             <button
//                               key={subKey}
//                               className={`block w-full text-left p-2 rounded-md transition-colors duration-200
//                                 ${subIsActive ? colorSet.dark : 'hover:bg-gray-100'}`}
//                               onClick={() => 
//                                 setActiveSubtopic(subIsActive ? null : subKey)
//                               }
//                             >
//                               {subObj.name}
//                             </button>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Keywords Panel */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <h2 className="text-xl font-bold mb-4">Keywords</h2>
//             <div className="flex flex-wrap gap-2">
//               {allKeywords.map((kw) => (
//                 <button
//                   key={kw}
//                   onClick={() => {
//                     const newSet = new Set(selectedKeywords);
//                     if (newSet.has(kw)) {
//                       newSet.delete(kw);
//                     } else {
//                       newSet.add(kw);
//                     }
//                     setSelectedKeywords(newSet);
//                   }}
//                   className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
//                     ${selectedKeywords.has(kw)
//                       ? 'bg-green-400 text-white'
//                       : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
//                 >
//                   {kw}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side: article content + legend */}
//         <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
//           <article className="prose prose-lg">
//             <h1 className="text-3xl font-bold mb-6">
//               {highlightText(articleContent.title)}
//             </h1>
//             {articleContent.sentences.map((sentence, idx) => (
//               <p key={idx} className="mb-2">
//                 {highlightText(sentence)}
//               </p>
//             ))}
//           </article>

//           {/* Legend */}
//           <div className="mt-8 p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-lg font-semibold mb-2">Highlighting Guide</h3>
//             <div className="space-y-2">
//               {activeTheme && (
//                 <div className="flex items-center gap-2">
//                   <span
//                     className={`inline-block w-4 h-4 ${
//                       getThemeColors(activeTheme).colors.light
//                     } rounded`}
//                   ></span>
//                   <span>{themeData[activeTheme].name} theme content</span>
//                 </div>
//               )}
//               {activeTheme && activeSubtopic && (
//                 <div className="flex items-center gap-2">
//                   <span
//                     className={`inline-block w-4 h-4 ${
//                       getThemeColors(activeTheme).colors.medium
//                     } rounded`}
//                   ></span>
//                   <span>
//                     {themeData[activeTheme].subtopics[activeSubtopic].name} 
//                     {' '}specific content
//                   </span>
//                 </div>
//               )}
//               {selectedKeywords.size > 0 && (
//                 <div className="flex items-center gap-2">
//                   <span className="inline-block w-4 h-4 bg-green-400 rounded"></span>
//                   <span>Selected keywords (green)</span>
//                 </div>
//               )}
//               {highlightedSearchTerm && (
//                 <div className="flex items-center gap-2">
//                   <span className="inline-block w-4 h-4 bg-red-400 rounded"></span>
//                   <span>Search matches (red)</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HierarchicalArticleViewer;




































// import React, { useState, useRef, useMemo } from 'react';
// import { Search } from 'lucide-react';

// function HierarchicalArticleViewer() {
//   const searchInputRef = useRef(null);
//   const [activeTheme, setActiveTheme] = useState(null);
//   const [activeSubtopic, setActiveSubtopic] = useState(null);
//   const [selectedKeywords, setSelectedKeywords] = useState(new Set());
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedSearchTerm, setHighlightedSearchTerm] = useState('');

//   // We provide up to 5 colour palettes for unknown theme keys:
//   const colorPalette = [
//     {
//       base: 'pink',
//       colors: { light: 'bg-pink-200', medium: 'bg-pink-400', dark: 'bg-pink-500' }
//     },
//     {
//       base: 'orange',
//       colors: { light: 'bg-orange-200', medium: 'bg-orange-400', dark: 'bg-orange-500' }
//     },
//     {
//       base: 'teal',
//       colors: { light: 'bg-teal-200', medium: 'bg-teal-400', dark: 'bg-teal-500' }
//     },
//     {
//       base: 'blue',
//       colors: { light: 'bg-blue-200', medium: 'bg-blue-400', dark: 'bg-blue-500' }
//     },
//     {
//       base: 'purple',
//       colors: { light: 'bg-purple-200', medium: 'bg-purple-400', dark: 'bg-purple-500' }
//     },
//   ];

//   // ------------------ ARTICLE CONTENT ------------------
//   const articleContent = {
//     title: "Republicans bedeviled by Trump's trio of new tax-cut ideas",
//     sentences: [
//       "In this article: Donald Trump won the presidency with talk of sweeping new tax breaks.",
//       "Now Republicans are grappling with how to make good on his promises — and raising alarms about how difficult and costly that will be.",
//       "During a White House meeting with House Republicans earlier this month, Trump made clear his continued interest in three campaign proposals that tilt populist and away from Republican orthodoxy: Eliminating taxes on tips, Social Security benefits and overtime pay.",
//       "Those would amount to a dramatic expansion of his biggest first-term legislative success, the 2017 tax cut law.",
//       "Republicans are already demonstrating that simply extending those eight-year-old tax cuts are a big lift on their own without the added burden of trying to make Trump's new proposals work.",
//       "Sen. John Curtis, R-Utah, told Semafor that enacting Trump's trio of new tax ideas is going to prove \"incredibly challenging.\"",
//       "\"It's a task to make the math work with the expiring cuts.",
//       "And just speaking for myself and not my colleagues, that's Mission Number One: preventing the tax increases.",
//       "You can see that we're having a difficult time just doing that,\" Curtis said.",
//       "\"I'm happy to listen to proposals.",
//       "But right now, I just don't see anything out there that allows us to go beyond that.\"",
//       "It's an important moment for Hill Republicans, who have accepted almost all of Trump's early Cabinet picks despite some reservations.",
//       "So far, Trump has largely deferred to them on the details of enacting his agenda, but that latitude may evaporate as GOP lawmakers try to square the high price tag of his goals with their queasiness about blowing a huge hole in the deficit.",
//       "Republican lawmakers are acutely aware that Trump's poll-tested tax pitches are important to him.",
//       "And because the president wants to follow through on his promises, some of them see at least a version of his ideas as essential to any successful tax plan.",
//       "\"It's something he very much wants to happen, and his support is going to be required\" to get a bill done, said Sen. John Hoeven, R-N.D.",
//       "Many, but not all, Republicans are coming around to the view that an extension of the 2017 tax cuts for individuals doesn't need to be paid for, which gives them more fiscal wiggle room for additional tax breaks in what will almost surely be a party-line bill.",
//       "But few GOP lawmakers want to look like hypocrites with a costly new tax plan after more than a decade of railing against growing debt.",
//       "They're talking about spending cuts to counterbalance a tax proposal, but actually enacting cuts is hard.",
//       "And debt and deficit politics are not Trump's forte.",
//       "Given that reality, they'll have to do some educating of their base, the White House and the public about what it means to pay for Trump's priorities.",
//       "\"There'll be a big push to say, ‘How are we going to pay for that?",
//       "And what are we going to do to make sure that we're not adding to the deficit?'",
//       "So, it's going to be much harder,\" said Sen. James Lankford, R-Okla., a member of the tax-writing Finance Committee.",
//       "If Republicans don't enact Trump's new tax ideas, Lankford predicted, \"the White House will come back and say, ‘I'm not going to sign it if you don't find a way to be able to do that.'\"",
//       "In this article: As the House tries to pass one big party-line bill that combines border, defense and taxes, the Senate is moving to separate the border and national security components from tax cuts, which would pass later in the year under their vision.",
//       "Other Republicans are floating a more novel approach.",
//       "Sen. Ron Johnson, R-Wis., has proposed taking up three bills.",
//       "That's how Sen. Roger Marshall, R-Kan., says Trump can get his extra campaign-trail tax breaks.",
//       "\"Taking three bites of the apple makes more sense.",
//       "In the second bite, we would make the Trump tax cuts permanent,\" Marshall said, while the trio of new tax proposals would likely have to wait until \"late summer, early fall.\"",
//       "Beyond the legislative mechanics of eliminating taxes on tips, Social Security and overtime are looming doubts about how any legislation would work.",
//       "In the case of ending taxes on tips, a bill that's not carefully drafted could create confusion, as well as lower rates for tipped workers like waiters than for teachers or other salaried positions.",
//       "\"We don't want our electricians to go out and say, ‘It cost $10, but if you tipped me $200, that's the bill.'",
//       "We have to be very deliberate in these things,\" said Rep. Greg Murphy, R-N.C.",
//       "Summing up the endeavor, he said: \"I'm hopeful.",
//       "I'm not confident.\"",
//       "Some Republicans are skeptical about even touching Social Security taxes due to strict budgetary rules that limit changes to the program.",
//       "If Congress can look at ditching Social Security taxes, Sen. Cynthia Lummis, R-Wyo., suggested \"we could do a means testing\" that would preserve taxes on high-income people.",
//       "Along with tariff revenue, she said, that could help mitigate costs.",
//       "\"I am concerned that, when you start adding all of these together, it is going to get expensive,\" she said.",
//       "Ending taxes on Social Security benefits, overtime and tips would cost more than $2 trillion combined over 10 years, according to the Tax Foundation.",
//       "Exempting Social Security would cost about $1.2 trillion, exempting overtime would cost roughly $750 billion and eliminating tax on tips would cost more than $100 billion.",
//       "Just extending the 2017 law costs more than $4 trillion.",
//       "And blue-state Republicans also want to expand the state and local tax deduction, and some Republicans also want to lower corporate taxes.",
//       "Some Republicans predict that Trump won't be able to achieve all of his campaign-trail dreams, but he'll get some of them.",
//       "\"We probably can't do all, but one or two of them are probably going to happen, just as a result of the election,\" Sen. Chuck Grassley, R-Iowa, told Semafor.",
//       "The Senate is nearly done with Trump's Cabinet, shifting Washington's focus onto his legislative agenda.",
//       "That is likely to expose new tensions in the Republican Party: Just look at how some Republicans disregarded his push to raise the debt ceiling during last year's government spending talks.",
//       "Casting aside Trump's campaign pledges on taxes is probably a bridge too far for Republicans.",
//       "But given the near-impossibility of doing everything Trump wants while satisfying fiscal hardliners and avoiding politically damaging cuts to popular programs, the president may have to get pragmatic, too.",
//     ]
//   };

//   // ------------------ THEME DATA (with separated triggers) ------------------
//   // We rename "keywords" to:
//   //  - `themeTriggers` for top-level theme highlighting
//   //  - `highlightPhrases` for subtopics
//   const themeData = {
//     trump_tax_proposals: {
//       name: 'Trumps Tax Proposals',
//       themeTriggers: ['Trump', 'tax breaks', 'tax cuts', 'tax proposals'],
//       subtopics: {
//         specific_tax_proposals: {
//           name: 'Specific Tax Proposals',
//           highlightPhrases: ['taxes on tips', 'Social Security benefits', 'overtime pay'],
//           sentences: [2, 24, 25, 26, 27, 29, 30]
//         },
//         potential_impact: {
//           name: 'Potential Impact',
//           highlightPhrases: ['costly', '$2 trillion', '$1.2 trillion', '$750 billion', '$100 billion', '$4 trillion'],
//           sentences: [4, 29, 30, 31]
//         },
//       }
//     },
//     republican_response: {
//       name: 'Republican Response',
//       themeTriggers: ['Republicans', 'grappling', 'alarms', 'difficult', 'costly', 'challenging', 'hypocrites'],
//       subtopics: {
//         legislative_challenges: {
//           name: 'Legislative Challenges',
//           highlightPhrases: ['big lift', 'incredibly challenging', 'high price tag', 'deficit', 'debt'],
//           sentences: [1, 4, 5, 8, 13, 14]
//         },
//         political_dynamics: {
//           name: 'Political Dynamics',
//           highlightPhrases: ['accepted', 'deferred', 'poll-tested', 'promises', 'fiscal wiggle room', 'disregarded'],
//           sentences: [7, 9, 10, 11, 35, 36]
//         },
//       }
//     },
//     legislative_outlook: {
//       name: 'Legislative Outlook',
//       themeTriggers: ['legislative success', 'legislative agenda', 'legislative mechanics', 'party-line bill'],
//       subtopics: {
//         future_legislation: {
//           name: 'Future Legislation',
//           highlightPhrases: [
//             'extension of the 2017 tax cuts',
//             'border, defense and taxes',
//             'three bills',
//             'state and local tax deduction',
//             'lower corporate taxes'
//           ],
//           sentences: [3, 18, 19, 31, 32]
//         },
//         political_feasibility: {
//           name: 'Political Feasibility',
//           highlightPhrases: ['achievable', 'pragmatic', 'near-impossibility', 'fiscal hardliners', 'popular programs'],
//           sentences: [33, 37]
//         },
//       }
//     },
//     // Potentially more themes...
//   };

//   // ------------------ USER KEYWORDS (highlighted green) ------------------
//   // This is now separate from the theme triggers:
//   const userKeywords = [
//     'deficit', 'debt', 'promises', 'tax breaks', 'Trump'
//     // etc., you can add more as needed
//   ];





//   // ------------------------------------------------------------------------

//   // Dynamically assign colours to each theme (up to 5). If more than 5, fallback to gray.
//   const assignedColors = useMemo(() => {
//     const keys = Object.keys(themeData);
//     const mapping = {};
//     keys.forEach((k, idx) => {
//       if (idx < colorPalette.length) {
//         mapping[k] = colorPalette[idx];
//       } else {
//         mapping[k] = {
//           base: 'gray',
//           colors: {
//             light: 'bg-gray-200',
//             medium: 'bg-gray-400',
//             dark: 'bg-gray-500'
//           }
//         };
//       }
//     });
//     return mapping;
//   }, [themeData]);

//   function getThemeColors(themeKey) {
//     return assignedColors[themeKey] || {
//       base: 'gray',
//       colors: {
//         light: 'bg-gray-200',
//         medium: 'bg-gray-400',
//         dark: 'bg-gray-500'
//       }
//     };
//   }

//   // Helper function: find all matches of `phrases` in `text`
//   function findAllMatches(text, phrases) {
//     const matches = [];
//     phrases.forEach(phrase => {
//       let index = 0;
//       const lowerText = text.toLowerCase();
//       const lowerPhrase = phrase.toLowerCase();
      
//       while ((index = lowerText.indexOf(lowerPhrase, index)) !== -1) {
//         matches.push({
//           start: index,
//           end: index + phrase.length,
//           text: text.slice(index, index + phrase.length)
//         });
//         index += 1;
//       }
//     });
//     return matches.sort((a, b) => a.start - b.start);
//   }

//   // Main highlight function
//   function highlightText(text) {
//     const matches = [];

//     // 1) Theme-level highlights
//     if (activeTheme) {
//       // a) Top-level theme triggers
//       const triggers = themeData[activeTheme].themeTriggers || [];
//       const themeMatches = findAllMatches(text, triggers);
//       matches.push(...themeMatches.map(m => ({ ...m, type: 'theme' })));

//       // b) Subtopics
//       Object.entries(themeData[activeTheme].subtopics).forEach(([subKey, subtopic]) => {
//         const subPhrases = subtopic.highlightPhrases || [];
//         const subMatches = findAllMatches(text, subPhrases);
//         subMatches.forEach(match => {
//           if (activeSubtopic && subKey === activeSubtopic) {
//             match.type = 'activeSubtopic';
//           } else {
//             match.type = 'theme';
//           }
//         });
//         matches.push(...subMatches);
//       });
//     }

//     // 2) User keywords (highlighted green)
//     if (selectedKeywords.size > 0) {
//       const keywordMatches = findAllMatches(text, Array.from(selectedKeywords));
//       matches.push(...keywordMatches.map(m => ({ ...m, type: 'keyword' })));
//     }

//     // 3) Search term (highlighted red)
//     if (highlightedSearchTerm) {
//       const searchMatches = findAllMatches(text, [highlightedSearchTerm]);
//       matches.push(...searchMatches.map(m => ({ ...m, type: 'search' })));
//     }

//     // Merge overlapping matches
//     matches.sort((a, b) => a.start - b.start);
//     const mergedMatches = matches.reduce((acc, curr) => {
//       const prev = acc[acc.length - 1];
//       if (prev && curr.start <= prev.end) {
//         prev.end = Math.max(prev.end, curr.end);
//         prev.types = [...new Set([...(prev.types || [prev.type]), curr.type])];
//         return acc;
//       }
//       curr.types = [curr.type];
//       return [...acc, curr];
//     }, []);

//     // Build final array of <span> or raw text
//     let result = [];
//     let lastIndex = 0;

//     mergedMatches.forEach(match => {
//       if (match.start > lastIndex) {
//         result.push(text.slice(lastIndex, match.start));
//       }

//       let className = 'px-1 rounded transition-colors duration-200 ';
//       const types = match.types;
//       let colorStops = [];

//       // "search" => red-400
//       if (types.includes('search')) {
//         colorStops.push('red-400');
//       }
//       // "keyword" => green-400
//       if (types.includes('keyword')) {
//         colorStops.push('green-400');
//       }

//       // For subtopic vs. theme highlights:
//       if (types.includes('activeSubtopic')) {
//         // The medium/dark shade
//         colorStops.push(`${getThemeColors(activeTheme).base}-400`);
//       } else if (types.includes('theme')) {
//         // The lighter shade
//         colorStops.push(`${getThemeColors(activeTheme).base}-200`);
//       }

//       // Decide how many colours
//       if (colorStops.length === 1) {
//         className += `bg-${colorStops[0]}`;
//       } else if (colorStops.length === 2) {
//         className += `bg-gradient-to-r from-${colorStops[0]} to-${colorStops[1]}`;
//       } else if (colorStops.length === 3) {
//         className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} to-${colorStops[2]}`;
//       } else if (colorStops.length >= 4) {
//         className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} via-${colorStops[2]} to-${colorStops[3]}`;
//       }

//       result.push(
//         <span key={match.start} className={className}>
//           {text.slice(match.start, match.end)}
//         </span>
//       );
//       lastIndex = match.end;
//     });

//     if (lastIndex < text.length) {
//       result.push(text.slice(lastIndex));
//     }

//     return result;
//   }

//   // Instead of deriving all keywords from theme data, we have them pre-defined
//   // as "userKeywords" (highlighted in green).
//   // Provide a separate UI list so user can select which ones to highlight:
//   const allKeywords = useMemo(() => {
//     // If you want the user to choose from the userKeywords array:
//     return userKeywords.slice().sort();
//   }, [userKeywords]);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-4 gap-6">
//         {/* Left side: search box, theme panel, user keywords */}
//         <div className="col-span-1 space-y-6">

//           {/* Search Box */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <div className="relative">
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     setHighlightedSearchTerm(searchTerm);
//                   }
//                 }}
//                 placeholder="Search content..."
//                 className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>

//           {/* Themes Panel */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <h2 className="text-xl font-bold mb-4">Themes</h2>
//             <div className="space-y-4">
//               {Object.entries(themeData).map(([themeKey, themeObj]) => {
//                 const colorSet = getThemeColors(themeKey).colors;
//                 const isActive = activeTheme === themeKey;
//                 return (
//                   <div key={themeKey} className="mb-4">
//                     <button
//                       className={`w-full text-left p-3 rounded-lg transition-colors duration-200
//                         ${isActive ? colorSet.medium : 'bg-gray-100 hover:bg-gray-200'}`}
//                       onClick={() => {
//                         setActiveTheme(isActive ? null : themeKey);
//                         setActiveSubtopic(null);
//                       }}
//                     >
//                       <h3 className="font-semibold">{themeObj.name}</h3>
//                     </button>

//                     {isActive && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         {Object.entries(themeObj.subtopics).map(([subKey, subObj]) => {
//                           const subIsActive = activeSubtopic === subKey;
//                           return (
//                             <button
//                               key={subKey}
//                               className={`block w-full text-left p-2 rounded-md transition-colors duration-200
//                                 ${subIsActive ? colorSet.dark : 'hover:bg-gray-100'}`}
//                               onClick={() =>
//                                 setActiveSubtopic(subIsActive ? null : subKey)
//                               }
//                             >
//                               {subObj.name}
//                             </button>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Keywords Panel (User keywords) */}
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <h2 className="text-xl font-bold mb-4">Keywords</h2>
//             <div className="flex flex-wrap gap-2">
//               {allKeywords.map((kw) => (
//                 <button
//                   key={kw}
//                   onClick={() => {
//                     const newSet = new Set(selectedKeywords);
//                     if (newSet.has(kw)) {
//                       newSet.delete(kw);
//                     } else {
//                       newSet.add(kw);
//                     }
//                     setSelectedKeywords(newSet);
//                   }}
//                   className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
//                     ${selectedKeywords.has(kw)
//                       ? 'bg-green-400 text-white'
//                       : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
//                 >
//                   {kw}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side: Article content & Legend */}
//         <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
//           <article className="prose prose-lg">
//             <h1 className="text-3xl font-bold mb-6">
//               {highlightText(articleContent.title)}
//             </h1>
//             {articleContent.sentences.map((sentence, idx) => (
//               <p key={idx} className="mb-2">
//                 {highlightText(sentence)}
//               </p>
//             ))}
//           </article>

//           {/* Legend */}
//           <div className="mt-8 p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-lg font-semibold mb-2">Highlighting Guide</h3>
//             <div className="space-y-2">
//               {activeTheme && (
//                 <div className="flex items-center gap-2">
//                   <span
//                     className={`inline-block w-4 h-4 ${
//                       getThemeColors(activeTheme).colors.light
//                     } rounded`}
//                   ></span>
//                   <span>{themeData[activeTheme].name} theme content</span>
//                 </div>
//               )}
//               {activeTheme && activeSubtopic && (
//                 <div className="flex items-center gap-2">
//                   <span
//                     className={`inline-block w-4 h-4 ${
//                       getThemeColors(activeTheme).colors.medium
//                     } rounded`}
//                   ></span>
//                   <span>
//                     {themeData[activeTheme].subtopics[activeSubtopic].name} specific content
//                   </span>
//                 </div>
//               )}
//               {selectedKeywords.size > 0 && (
//                 <div className="flex items-center gap-2">
//                   <span className="inline-block w-4 h-4 bg-green-400 rounded"></span>
//                   <span>Selected keywords (green)</span>
//                 </div>
//               )}
//               {highlightedSearchTerm && (
//                 <div className="flex items-center gap-2">
//                   <span className="inline-block w-4 h-4 bg-red-400 rounded"></span>
//                   <span>Search matches (red)</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HierarchicalArticleViewer;



































import React, { useState, useRef, useMemo } from 'react';
import { Search } from 'lucide-react';

function HierarchicalArticleViewer() {
  const searchInputRef = useRef(null);
  const [activeTheme, setActiveTheme] = useState(null);
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedSearchTerm, setHighlightedSearchTerm] = useState('');

  // We provide up to 5 colour palettes for unknown theme keys:
  const colorPalette = [
    {
      base: 'pink',
      colors: { light: 'bg-pink-200', medium: 'bg-pink-400', dark: 'bg-pink-500' }
    },
    {
      base: 'orange',
      colors: { light: 'bg-orange-200', medium: 'bg-orange-400', dark: 'bg-orange-500' }
    },
    {
      base: 'teal',
      colors: { light: 'bg-teal-200', medium: 'bg-teal-400', dark: 'bg-teal-500' }
    },
    {
      base: 'blue',
      colors: { light: 'bg-blue-200', medium: 'bg-blue-400', dark: 'bg-blue-500' }
    },
    {
      base: 'purple',
      colors: { light: 'bg-purple-200', medium: 'bg-purple-400', dark: 'bg-purple-500' }
    },
  ];

  // ------------------ ARTICLE CONTENT ------------------
  const articleContent = {
    title: "Republicans bedeviled by Trump's trio of new tax-cut ideas",
    sentences: [
      "In this article: Donald Trump won the presidency with talk of sweeping new tax breaks.",
      "Now Republicans are grappling with how to make good on his promises — and raising alarms about how difficult and costly that will be.",
      "During a White House meeting with House Republicans earlier this month, Trump made clear his continued interest in three campaign proposals that tilt populist and away from Republican orthodoxy: Eliminating taxes on tips, Social Security benefits and overtime pay.",
      "Those would amount to a dramatic expansion of his biggest first-term legislative success, the 2017 tax cut law.",
      "Republicans are already demonstrating that simply extending those eight-year-old tax cuts are a big lift on their own without the added burden of trying to make Trump's new proposals work.",
      "Sen. John Curtis, R-Utah, told Semafor that enacting Trump's trio of new tax ideas is going to prove \"incredibly challenging.\"",
      "\"It's a task to make the math work with the expiring cuts.",
      "And just speaking for myself and not my colleagues, that's Mission Number One: preventing the tax increases.",
      "You can see that we're having a difficult time just doing that,\" Curtis said.",
      "\"I'm happy to listen to proposals.",
      "But right now, I just don't see anything out there that allows us to go beyond that.\"",
      "It's an important moment for Hill Republicans, who have accepted almost all of Trump's early Cabinet picks despite some reservations.",
      "So far, Trump has largely deferred to them on the details of enacting his agenda, but that latitude may evaporate as GOP lawmakers try to square the high price tag of his goals with their queasiness about blowing a huge hole in the deficit.",
      "Republican lawmakers are acutely aware that Trump's poll-tested tax pitches are important to him.",
      "And because the president wants to follow through on his promises, some of them see at least a version of his ideas as essential to any successful tax plan.",
      "\"It's something he very much wants to happen, and his support is going to be required\" to get a bill done, said Sen. John Hoeven, R-N.D.",
      "Many, but not all, Republicans are coming around to the view that an extension of the 2017 tax cuts for individuals doesn't need to be paid for, which gives them more fiscal wiggle room for additional tax breaks in what will almost surely be a party-line bill.",
      "But few GOP lawmakers want to look like hypocrites with a costly new tax plan after more than a decade of railing against growing debt.",
      "They're talking about spending cuts to counterbalance a tax proposal, but actually enacting cuts is hard.",
      "And debt and deficit politics are not Trump's forte.",
      "Given that reality, they'll have to do some educating of their base, the White House and the public about what it means to pay for Trump's priorities.",
      "\"There'll be a big push to say, ‘How are we going to pay for that?",
      "And what are we going to do to make sure that we're not adding to the deficit?'",
      "So, it's going to be much harder,\" said Sen. James Lankford, R-Okla., a member of the tax-writing Finance Committee.",
      "If Republicans don't enact Trump's new tax ideas, Lankford predicted, \"the White House will come back and say, ‘I'm not going to sign it if you don't find a way to be able to do that.'\"",
      "In this article: As the House tries to pass one big party-line bill that combines border, defense and taxes, the Senate is moving to separate the border and national security components from tax cuts, which would pass later in the year under their vision.",
      "Other Republicans are floating a more novel approach.",
      "Sen. Ron Johnson, R-Wis., has proposed taking up three bills.",
      "That's how Sen. Roger Marshall, R-Kan., says Trump can get his extra campaign-trail tax breaks.",
      "\"Taking three bites of the apple makes more sense.",
      "In the second bite, we would make the Trump tax cuts permanent,\" Marshall said, while the trio of new tax proposals would likely have to wait until \"late summer, early fall.\"",
      "Beyond the legislative mechanics of eliminating taxes on tips, Social Security and overtime are looming doubts about how any legislation would work.",
      "In the case of ending taxes on tips, a bill that's not carefully drafted could create confusion, as well as lower rates for tipped workers like waiters than for teachers or other salaried positions.",
      "\"We don't want our electricians to go out and say, ‘It cost $10, but if you tipped me $200, that's the bill.'",
      "We have to be very deliberate in these things,\" said Rep. Greg Murphy, R-N.C.",
      "Summing up the endeavor, he said: \"I'm hopeful.",
      "I'm not confident.\"",
      "Some Republicans are skeptical about even touching Social Security taxes due to strict budgetary rules that limit changes to the program.",
      "If Congress can look at ditching Social Security taxes, Sen. Cynthia Lummis, R-Wyo., suggested \"we could do a means testing\" that would preserve taxes on high-income people.",
      "Along with tariff revenue, she said, that could help mitigate costs.",
      "\"I am concerned that, when you start adding all of these together, it is going to get expensive,\" she said.",
      "Ending taxes on Social Security benefits, overtime and tips would cost more than $2 trillion combined over 10 years, according to the Tax Foundation.",
      "Exempting Social Security would cost about $1.2 trillion, exempting overtime would cost roughly $750 billion and eliminating tax on tips would cost more than $100 billion.",
      "Just extending the 2017 law costs more than $4 trillion.",
      "And blue-state Republicans also want to expand the state and local tax deduction, and some Republicans also want to lower corporate taxes.",
      "Some Republicans predict that Trump won't be able to achieve all of his campaign-trail dreams, but he'll get some of them.",
      "\"We probably can't do all, but one or two of them are probably going to happen, just as a result of the election,\" Sen. Chuck Grassley, R-Iowa, told Semafor.",
      "The Senate is nearly done with Trump's Cabinet, shifting Washington's focus onto his legislative agenda.",
      "That is likely to expose new tensions in the Republican Party: Just look at how some Republicans disregarded his push to raise the debt ceiling during last year's government spending talks.",
      "Casting aside Trump's campaign pledges on taxes is probably a bridge too far for Republicans.",
      "But given the near-impossibility of doing everything Trump wants while satisfying fiscal hardliners and avoiding politically damaging cuts to popular programs, the president may have to get pragmatic, too.",
    ]
  };

  // ------------------ THEME DATA (with separated triggers) ------------------
  // We rename "keywords" to:
  //  - `themeTriggers` for top-level theme highlighting
  //  - `highlightPhrases` for subtopics

  const themeData = {
    trump_tax_proposals: {
      name: 'Trumps Tax Proposals',
      themeTriggers: ['Trump', 'tax breaks', 'tax cuts', 'tax proposals'],
      subtopics: {
        specific_tax_proposals: {
          name: 'Specific Tax Proposals',
          highlightPhrases: ['taxes on tips', 'Social Security benefits', 'overtime pay'],
          sentences: [2, 24, 25, 26, 27, 29, 30]
        },
        potential_impact: {
          name: 'Potential Impact',
          highlightPhrases: ['costly', '$2 trillion', '$1.2 trillion', '$750 billion', '$100 billion', '$4 trillion'],
          sentences: [4, 29, 30, 31]
        },
      }
    },
    republican_response: {
      name: 'Republican Response',
      themeTriggers: ['Republicans', 'grappling', 'alarms', 'difficult', 'costly', 'challenging', 'hypocrites'],
      subtopics: {
        legislative_challenges: {
          name: 'Legislative Challenges',
          highlightPhrases: ['big lift', 'incredibly challenging', 'high price tag', 'deficit', 'debt'],
          sentences: [1, 4, 5, 8, 13, 14]
        },
        political_dynamics: {
          name: 'Political Dynamics',
          highlightPhrases: ['accepted', 'deferred', 'poll-tested', 'promises', 'fiscal wiggle room', 'disregarded'],
          sentences: [7, 9, 10, 11, 35, 36]
        },
      }
    },
    legislative_outlook: {
      name: 'Legislative Outlook',
      themeTriggers: ['legislative success', 'legislative agenda', 'legislative mechanics', 'party-line bill'],
      subtopics: {
        future_legislation: {
          name: 'Future Legislation',
          highlightPhrases: [
            'extension of the 2017 tax cuts',
            'border, defense and taxes',
            'three bills',
            'state and local tax deduction',
            'lower corporate taxes'
          ],
          sentences: [3, 18, 19, 31, 32]
        },
        political_feasibility: {
          name: 'Political Feasibility',
          highlightPhrases: ['achievable', 'pragmatic', 'near-impossibility', 'fiscal hardliners', 'popular programs'],
          sentences: [33, 37]
        },
      }
    },
  };

  // ------------------ USER KEYWORDS (highlighted green) ------------------
  // This is now separate from the theme triggers:
  const userKeywords = [
    'deficit', 'debt', 'promises', 'tax breaks', 'Trump'
    // etc., you can add more as needed
  ];

  // ------------------------------------------------------------------------

  // Dynamically assign colours to each theme (up to 5). If more than 5, fallback to gray.
  const assignedColors = useMemo(() => {
    const keys = Object.keys(themeData);
    const mapping = {};
    keys.forEach((k, idx) => {
      if (idx < colorPalette.length) {
        mapping[k] = colorPalette[idx];
      } else {
        mapping[k] = {
          base: 'gray',
          colors: {
            light: 'bg-gray-200',
            medium: 'bg-gray-400',
            dark: 'bg-gray-500'
          }
        };
      }
    });
    return mapping;
  }, [themeData]);

  function getThemeColors(themeKey) {
    return assignedColors[themeKey] || {
      base: 'gray',
      colors: {
        light: 'bg-gray-200',
        medium: 'bg-gray-400',
        dark: 'bg-gray-500'
      }
    };
  }

  // Helper function: find all matches of `phrases` in `text`
  function findAllMatches(text, phrases) {
    const matches = [];
    phrases.forEach(phrase => {
      let index = 0;
      const lowerText = text.toLowerCase();
      const lowerPhrase = phrase.toLowerCase();
      
      while ((index = lowerText.indexOf(lowerPhrase, index)) !== -1) {
        matches.push({
          start: index,
          end: index + phrase.length,
          text: text.slice(index, index + phrase.length)
        });
        index += 1;
      }
    });
    return matches.sort((a, b) => a.start - b.start);
  }

  // Main highlight function
  function highlightText(text) {
    const matches = [];

    // 1) Theme-level highlights
    if (activeTheme) {
      // a) Top-level theme triggers
      const triggers = themeData[activeTheme].themeTriggers || [];
      const themeMatches = findAllMatches(text, triggers);
      matches.push(...themeMatches.map(m => ({ ...m, type: 'theme' })));

      // b) Subtopics
      Object.entries(themeData[activeTheme].subtopics).forEach(([subKey, subtopic]) => {
        const subPhrases = subtopic.highlightPhrases || [];
        const subMatches = findAllMatches(text, subPhrases);
        subMatches.forEach(match => {
          if (activeSubtopic && subKey === activeSubtopic) {
            match.type = 'activeSubtopic';
          } else {
            match.type = 'theme';
          }
        });
        matches.push(...subMatches);
      });
    }

    // 2) User keywords (highlighted green)
    if (selectedKeywords.size > 0) {
      const keywordMatches = findAllMatches(text, Array.from(selectedKeywords));
      matches.push(...keywordMatches.map(m => ({ ...m, type: 'keyword' })));
    }

    // 3) Search term (highlighted red)
    if (highlightedSearchTerm) {
      const searchMatches = findAllMatches(text, [highlightedSearchTerm]);
      matches.push(...searchMatches.map(m => ({ ...m, type: 'search' })));
    }

    // Merge overlapping matches
    matches.sort((a, b) => a.start - b.start);
    const mergedMatches = matches.reduce((acc, curr) => {
      const prev = acc[acc.length - 1];
      if (prev && curr.start <= prev.end) {
        prev.end = Math.max(prev.end, curr.end);
        prev.types = [...new Set([...(prev.types || [prev.type]), curr.type])];
        return acc;
      }
      curr.types = [curr.type];
      return [...acc, curr];
    }, []);

    // Build final array of <span> or raw text
    let result = [];
    let lastIndex = 0;

    mergedMatches.forEach(match => {
      if (match.start > lastIndex) {
        result.push(text.slice(lastIndex, match.start));
      }

      let className = 'px-1 rounded transition-colors duration-200 ';
      const types = match.types;
      let colorStops = [];

      // "search" => red-400
      if (types.includes('search')) {
        colorStops.push('red-400');
      }
      // "keyword" => green-400
      if (types.includes('keyword')) {
        colorStops.push('green-400');
      }

      // For subtopic vs. theme highlights:
      if (types.includes('activeSubtopic')) {
        // The medium/dark shade
        colorStops.push(`${getThemeColors(activeTheme).base}-400`);
      } else if (types.includes('theme')) {
        // The lighter shade
        colorStops.push(`${getThemeColors(activeTheme).base}-200`);
      }

      // Decide how many colours
      if (colorStops.length === 1) {
        className += `bg-${colorStops[0]}`;
      } else if (colorStops.length === 2) {
        className += `bg-gradient-to-r from-${colorStops[0]} to-${colorStops[1]}`;
      } else if (colorStops.length === 3) {
        className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} to-${colorStops[2]}`;
      } else if (colorStops.length >= 4) {
        className += `bg-gradient-to-r from-${colorStops[0]} via-${colorStops[1]} via-${colorStops[2]} to-${colorStops[3]}`;
      }

      result.push(
        <span key={match.start} className={className}>
          {text.slice(match.start, match.end)}
        </span>
      );
      lastIndex = match.end;
    });

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }

    return result;
  }

  // Instead of deriving all keywords from theme data, we have them pre-defined
  // as "userKeywords" (highlighted in green).
  // Provide a separate UI list so user can select which ones to highlight:
  const allKeywords = useMemo(() => {
    // If you want the user to choose from the userKeywords array:
    return userKeywords.slice().sort();
  }, [userKeywords]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-4 gap-6">
        {/* Left side: search box, theme panel, user keywords */}
        <div className="col-span-1 space-y-6">

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setHighlightedSearchTerm(searchTerm);
                  }
                }}
                placeholder="Search content..."
                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Themes Panel */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">Themes</h2>
            <div className="space-y-4">
              {Object.entries(themeData).map(([themeKey, themeObj]) => {
                const colorSet = getThemeColors(themeKey).colors;
                const isActive = activeTheme === themeKey;
                return (
                  <div key={themeKey} className="mb-4">
                    <button
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200
                        ${isActive ? colorSet.medium : 'bg-gray-100 hover:bg-gray-200'}`}
                      onClick={() => {
                        setActiveTheme(isActive ? null : themeKey);
                        setActiveSubtopic(null);
                      }}
                    >
                      <h3 className="font-semibold">{themeObj.name}</h3>
                    </button>

                    {isActive && (
                      <div className="ml-4 mt-2 space-y-2">
                        {Object.entries(themeObj.subtopics).map(([subKey, subObj]) => {
                          const subIsActive = activeSubtopic === subKey;
                          return (
                            <button
                              key={subKey}
                              className={`block w-full text-left p-2 rounded-md transition-colors duration-200
                                ${subIsActive ? colorSet.dark : 'hover:bg-gray-100'}`}
                              onClick={() =>
                                setActiveSubtopic(subIsActive ? null : subKey)
                              }
                            >
                              {subObj.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Keywords Panel (User keywords) */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {allKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => {
                    const newSet = new Set(selectedKeywords);
                    if (newSet.has(kw)) {
                      newSet.delete(kw);
                    } else {
                      newSet.add(kw);
                    }
                    setSelectedKeywords(newSet);
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
                    ${selectedKeywords.has(kw)
                      ? 'bg-green-400 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side: Article content & Legend */}
        <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
          <article className="prose prose-lg">
            <h1 className="text-3xl font-bold mb-6">
              {highlightText(articleContent.title)}
            </h1>
            {articleContent.sentences.map((sentence, idx) => (
              <p key={idx} className="mb-2">
                {highlightText(sentence)}
              </p>
            ))}
          </article>

          {/* Legend */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Highlighting Guide</h3>
            <div className="space-y-2">
              {activeTheme && (
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-4 h-4 ${
                      getThemeColors(activeTheme).colors.light
                    } rounded`}
                  ></span>
                  <span>{themeData[activeTheme].name} theme content</span>
                </div>
              )}
              {activeTheme && activeSubtopic && (
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-4 h-4 ${
                      getThemeColors(activeTheme).colors.medium
                    } rounded`}
                  ></span>
                  <span>
                    {themeData[activeTheme].subtopics[activeSubtopic].name} specific content
                  </span>
                </div>
              )}
              {selectedKeywords.size > 0 && (
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-green-400 rounded"></span>
                  <span>Selected keywords (green)</span>
                </div>
              )}
              {highlightedSearchTerm && (
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-red-400 rounded"></span>
                  <span>Search matches (red)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HierarchicalArticleViewer;








