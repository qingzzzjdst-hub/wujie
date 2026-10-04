'use strict';
const icons={lipstick:'<path d="M8 11h8v10H8zM9 11V6l6-3v8M7 21h10"/>',archive:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 8h6M9 12h6M9 16h3"/>',spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',link:'<path d="m10 13 4-4m-6 6-2 2a3.5 3.5 0 0 1-5-5l5-5a3.5 3.5 0 0 1 5 0m2 2 2-2a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1-5 0" transform="translate(1 0)"/>',nfc:'<path d="M8 9a4 4 0 0 1 0 6m4-10a9 9 0 0 1 0 14m4-18a14 14 0 0 1 0 22"/><circle cx="4" cy="12" r="1"/>',swap:'<path d="M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',sound:'<path d="M4 9h4l5-4v14l-5-4H4zM16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',camera:'<path d="M4 7h3l1.5-2h3L13 7h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="10" cy="12" r="3"/>',plus:'<path d="M12 5v14M5 12h14"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',check:'<path d="m5 12 4 4L19 6"/>',lock:'<rect x="5" y="10" width="14" height="11" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',more:'<circle cx="5" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.7" fill="currentColor" stroke="none"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>'};
const icon=(name)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name]||icons.spark}</svg>`;
const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shades=[
 {id:'209',name:'典藏绛红',code:'A3',color:'#882739',finish:'柔雾',tone:'正红',scent:'雪松',line:'重要表达',desc:'浓郁而沉静的正红，柔雾妆感。',scene:'正式表达、重要会面'},
 {id:'314',name:'雾感梅子',code:'B2',color:'#824258',finish:'柔雾',tone:'梅子红',scent:'紫罗兰',line:'留一点浪漫给自己',desc:'带冷调的梅子红，柔和细腻的雾面质感。',scene:'晚间相聚、独处时刻'},
 {id:'118',name:'暖意玫瑰',code:'C1',color:'#b96d64',finish:'缎光',tone:'玫瑰豆沙',scent:'白茶',line:'日常，也值得认真',desc:'柔暖的玫瑰豆沙色，带轻柔缎光。',scene:'日常出行、轻松相遇'},
 {id:'106',name:'晨光杏桃',code:'A1',color:'#c88470',finish:'缎光',tone:'杏桃',scent:'橙花',line:'让今天轻一点',desc:'柔暖杏桃色，轻盈缎光。',scene:'日常出行'},
 {id:'152',name:'落日珊瑚',code:'A2',color:'#c65f55',finish:'缎光',tone:'珊瑚红',scent:'橙花',line:'收集一点明亮',desc:'明亮珊瑚红，轻柔光泽。',scene:'朋友相聚'},
 {id:'225',name:'赤陶时刻',code:'A4',color:'#a94b3b',finish:'柔雾',tone:'砖红',scent:'雪松',line:'从容一点',desc:'暖调砖红，柔雾质感。',scene:'工作、日常'},
 {id:'267',name:'枫叶来信',code:'B1',color:'#954838',finish:'柔雾',tone:'枫叶红',scent:'雪松',line:'慢慢说给你听',desc:'浓郁枫叶红，温暖雾面。',scene:'秋日出行'},
 {id:'328',name:'暮色莓果',code:'B3',color:'#793449',finish:'缎光',tone:'莓果红',scent:'紫罗兰',line:'今晚，自在一点',desc:'深莓果色，细腻缎光。',scene:'夜间聚会'},
 {id:'356',name:'柔声紫玫',code:'B4',color:'#965f77',finish:'柔雾',tone:'紫玫瑰',scent:'紫罗兰',line:'轻声表达',desc:'柔和紫玫瑰色，低饱和雾面。',scene:'日常、阅读'},
 {id:'127',name:'微醺奶茶',code:'C2',color:'#a97868',finish:'柔雾',tone:'奶茶棕',scent:'白茶',line:'享受片刻安静',desc:'暖调奶茶棕，柔和自然。',scene:'日常相遇'},
 {id:'163',name:'花间告白',code:'C3',color:'#b45572',finish:'缎光',tone:'玫红',scent:'橙花',line:'心动，值得表达',desc:'明亮玫红，柔润缎光。',scene:'约会、相聚'},
 {id:'188',name:'裸粉诗句',code:'C4',color:'#bf8a8b',finish:'缎光',tone:'裸粉',scent:'白茶',line:'做舒服的自己',desc:'轻柔裸粉色，细腻光泽。',scene:'日常出行'}
];
const defaults={version:1,activeShell:0,shells:[{name:'我的第一支 · 珠光白',shade:'209',paused:false}],profiles:{},card:{template:'商业',expression:'清醒地发光',name:'李乔',role:'品牌策略 · 创新体验',topic:'正在关注：小众人群的消费体验',showShade:true,showProduct:true,enabled:true,channels:{wechat:true,xhs:false,linkedin:true},expiry:'forever',expiresAt:null},events:[],easy:false};
let state=structuredClone(defaults);try{const saved=JSON.parse(localStorage.getItem('unbounded-demo-v1'));if(saved?.version===1&&Array.isArray(saved.shells)&&saved.card)state=saved}catch{}
let draft=null,archiveId=null,archiveTab='all',journalPeriod='month',pendingShade=null,flow='swap',expressionEditing=false,expressionGuideIndex=-1,expressionIntroPending=false,lastEditorAnnouncement=null,pendingAssistantEdits=null,assistantRecognition=null,lastFocus=null,readTimer=null,toastTimer=null,returnRoute='home',visitorStage='profile',visitorSaved=false,lastRenderedRoute=null,lowStockAnnounced=false,lastShadeAnnouncement=null,shadeBrowseTimer=null,shadeBrowseReady=false;
const shell=()=>state.shells[state.activeShell];
const shade=(id=shell()?.shade)=>shades.find(s=>s.id===id)||shades[0];const remainingPercent=78;const remainingSpeech=()=>remainingPercent<25?`提醒：当前口红余量仅 ${remainingPercent}%，建议尽快换芯。`:'';
const profile=(id)=>({...shade(id),...(state.profiles[id]||{})});
const shadeOptions=(selected)=>shades.map(s=>`<option value="${s.id}" ${selected===s.id?'selected':''}>${s.code} · ${s.id} ${s.name}</option>`).join('');
const scentOptions=(selected)=>['雪松','紫罗兰','白茶','橙花','无香'].map(s=>`<option ${selected===s?'selected':''}>${s}</option>`).join('');
function profileScentPicker(selected){if(!state.easy)return `<select name="scent">${scentOptions(selected)}</select>`;return `<select name="scent" class="scent-value" tabindex="-1" aria-hidden="true">${scentOptions(selected)}</select><button class="scent-trigger" type="button" data-action="scent-toggle" aria-label="选择收纳袋香气，当前${selected}" aria-expanded="false" aria-controls="scent-choices">${selected}</button><div class="scent-choices" id="scent-choices" role="listbox" aria-label="配套收纳袋香气" hidden>${['雪松','紫罗兰','白茶','橙花','无香'].map(s=>`<button type="button" role="option" aria-selected="${selected===s}" data-action="scent-choice" data-id="${s}">${s}</button>`).join('')}</div>`}
const save=()=>{try{localStorage.setItem('unbounded-demo-v1',JSON.stringify(state))}catch{toast('浏览器未允许保存，当前操作仅在本次体验中保留。')}};
const event=(text)=>{state.events.unshift({text,time:new Date().toISOString()});state.events=state.events.slice(0,30);save()};
const toast=(text)=>{clearTimeout(toastTimer);const el=document.querySelector('#toast');el.textContent=text;el.classList.add('visible');toastTimer=setTimeout(()=>el.classList.remove('visible'),3200)};
const heading=(en,title,description,action='')=>`<div class="page-heading"><div><p class="eyebrow">${en}</p><h1>${title}</h1>${description?`<p class="intro">${description}</p>`:''}</div>${action}</div>`;
const main=document.querySelector('#main'),modal=document.querySelector('#modal');
let pendingNavAnnouncement=null;
function showModal(html){stopSpokenOutput();clearTimeout(shadeBrowseTimer);shadeBrowseTimer=null;shadeBrowseReady=false;lastFocus=document.activeElement;document.querySelector('#modal-content').innerHTML=html;modal.classList.toggle('poster-modal',html.includes('shade-poster-card'));modal.classList.toggle('assistant-modal',html.includes('ai-assistant-panel'));modal.classList.toggle('compact-modal',html.includes('mode-option-list')||html.includes('contact-entry-dialog'));if(!modal.open)modal.showModal()}
function closeModal(){stopAssistantVoiceInput(true);clearTimeout(readTimer);clearTimeout(shadeBrowseTimer);shadeBrowseTimer=null;shadeBrowseReady=false;stopSpokenOutput();modal.classList.remove('poster-modal','compact-modal');modal.close();lastFocus?.isConnected&&lastFocus.focus()}
modal.addEventListener('cancel',()=>{clearTimeout(readTimer);stopSpokenOutput()});
modal.addEventListener('scroll',scheduleShadeBrowse,{passive:true});
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal()}});
let spokenUtterance=null,speechStartTimer=null,speechRun=0;
function stopSpokenOutput(){speechRun++;clearTimeout(speechStartTimer);spokenUtterance=null;if('speechSynthesis'in window&&(speechSynthesis.speaking||speechSynthesis.pending||speechSynthesis.paused))speechSynthesis.cancel()}
function say(text){
 if(!state.easy)return;
 if(!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){toast('当前浏览器不支持语音播报，请使用支持语音的浏览器。');return}
 stopSpokenOutput();
 const run=speechRun;
 const voices=speechSynthesis.getVoices?.()||[];
 const chinese=voices.filter(v=>/^zh(?:[-_]|$)/i.test(v.lang));
 const preferred=chinese.find(v=>/^zh[-_]CN$/i.test(v.lang)&&/Xiaoxiao|Xiaoyi|Tingting|Lili|晓晓|晓伊|婷婷|丽丽|女/i.test(v.name))||chinese.find(v=>/^zh[-_]CN$/i.test(v.lang))||chinese[0];
 const local=chinese.find(v=>v.localService&&/Yaoyao|Huihui|Lili|瑶瑶|慧慧|丽丽|女/i.test(v.name))||chinese.find(v=>v.localService);
 let triedLocal=false;
 function start(voice){
  const u=new SpeechSynthesisUtterance(String(text));spokenUtterance=u;u.lang='zh-CN';u.rate=.9;u.volume=1;if(voice)u.voice=voice;
  const fallback=error=>{if(run!==speechRun||spokenUtterance!==u)return;clearTimeout(speechStartTimer);if(!triedLocal&&local&&local!==voice&&['network','synthesis-failed','voice-unavailable','language-unavailable','timeout'].includes(error)){triedLocal=true;spokenUtterance=null;if(speechSynthesis.pending||speechSynthesis.speaking)speechSynthesis.cancel();start(local);return}spokenUtterance=null;const hints={'not-allowed':'浏览器阻止了语音，请点击播报按钮后重试。','language-unavailable':'设备没有可用的中文语音，请安装中文语音包或换用支持中文播报的浏览器。','voice-unavailable':'所选中文语音不可用，请重试。','audio-hardware':'未找到音频输出设备，请检查系统声音设置。','network':'在线语音服务暂不可用，请检查网络后重试。'};toast(hints[error]||'语音播报失败，请检查设备音量或更换浏览器后重试。')};
  u.onstart=()=>{if(run===speechRun&&spokenUtterance===u)clearTimeout(speechStartTimer)};
  u.onend=()=>{if(run===speechRun&&spokenUtterance===u){clearTimeout(speechStartTimer);spokenUtterance=null}};
  u.onerror=e=>{if(['interrupted','canceled'].includes(e.error))return;fallback(e.error)};
  try{if(speechSynthesis.paused)speechSynthesis.resume();speechSynthesis.speak(u)}catch{fallback('synthesis-failed');return}
  speechStartTimer=setTimeout(()=>{if(run===speechRun&&spokenUtterance===u&&!speechSynthesis.speaking)fallback('timeout')},4000);
 }
 start(preferred);
}
function announceEditorField(target,source='focus'){
 if(!state.easy)return;
 const form=target.closest?.('#expression-form');
 if(form){
  const segmented=target.closest('.segmented');
  let speakerTarget=target,text='';
  if(segmented){
   speakerTarget=target.closest('button[data-action="template"]')||segmented;
   const selected=segmented.querySelector('button[aria-pressed="true"]')?.textContent.trim()||'未选择';
   text=`名片模板。可以选择商业展会、学术社交或日常相遇。当前选择：${selected}。`;
  }else{
   const wrapper=target.closest('.field,.settings-row');
   const field=wrapper?.querySelector('input:not([type="hidden"]),textarea,select');
   if(!field)return;
   if(field.type==='checkbox'&&source==='click')return;
   speakerTarget=field;
   const label=field.getAttribute('aria-label')||wrapper.querySelector(':scope > span')?.textContent.trim()||wrapper.querySelector('strong')?.textContent.trim()||field.name||'编辑内容';
   const value=field.type==='checkbox'?(field.checked?'已开启':'已关闭'):field.tagName==='SELECT'?(field.selectedOptions[0]?.textContent.trim()||'未选择'):(field.value.trim()||'尚未填写');
   const help={expression:'填写主页上今天想传达的一句话。',name:'填写访客用来认识你的姓名或昵称。',role:'简要介绍你的身份、职位或方向。',topic:'选填你希望访客与你交流的话题。',expiry:'设置这张名片对外展示的有效期限。',showShade:'控制是否在名片上展示当前色号。',showProduct:'控制是否显示产品卡入口。',enabled:'控制访客是否可以读取你的名片。'}[field.name]||'';
   if(field.type==='checkbox')text=`${label}。${wrapper.querySelector('small')?.textContent.trim()||help}。当前${value}。点击可切换。`;
   else if(field.tagName==='SELECT')text=`${label}。${help}当前选择：${value}。`;
   else text=`${label}。${help}当前内容：${value}。${field.maxLength>0?`最多填写${field.maxLength}个字。`:''}${!field.value.trim()&&field.placeholder?`提示：${field.placeholder}。`:''}`;
  }
  const now=Date.now();
  const repeatedFocusClick=lastEditorAnnouncement?.target===speakerTarget&&lastEditorAnnouncement.text===text&&((lastEditorAnnouncement.source==='focus'&&source==='click')||(lastEditorAnnouncement.source==='click'&&source==='focus'))&&now-lastEditorAnnouncement.time<700;
  if(repeatedFocusClick)return;
  lastEditorAnnouncement={target:speakerTarget,text,source,time:now};
  say(text);
  return;
 }
 const field=target.matches?.('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="password"]),textarea,select')?target:target.closest?.('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="password"]),textarea,select');
 if(!field)return;
 const labelWrap=field.closest('label'),label=field.getAttribute('aria-label')||labelWrap?.querySelector(':scope > span')?.textContent.trim()||labelWrap?.querySelector('strong')?.textContent.trim()||field.placeholder||field.name||'编辑框';
 let value='';if(field.type==='checkbox')value=field.checked?'已开启':'未开启';else if(field.tagName==='SELECT')value=field.selectedOptions[0]?.textContent.trim()||'';else value=field.value.trim();
 const parts=[label];if(value)parts.push(field.type==='checkbox'?value:`当前内容：${value}`);if(field.placeholder&&!field.value.trim())parts.push(`提示：${field.placeholder}`);parts.push(field.tagName==='SELECT'?'可选择列表中的选项。':field.type==='checkbox'?'点击可切换状态。':'可在此编辑内容。');say(parts.join('。'))
}
function modeOption(id,title,description,selected,iconName=selected?'check':'spark'){return '<button class="mode-option'+(selected?' selected':'')+'" type="button" data-action="display-mode" data-id="'+id+'" aria-pressed="'+selected+'">'+icon(iconName)+'<span><strong>'+esc(title)+'</strong><small>'+esc(description)+'</small></span></button>'}
function openDisplaySettings(){const options=state.easy?modeOption('standard','标准模式','切换为标准显示，关闭辅助语音播报。',false,'swap'):modeOption('standard','标准模式','常规显示，不提供辅助语音播报。',true)+modeOption('assist','辅助阅读模式','增加自动语音提示，并启用大字与高对比显示。',false);const description=state.easy?'当前为辅助阅读模式。你可以切换回标准模式。':'语音播报辅助仅在辅助阅读模式中启用。';showModal('<h2 id="modal-title">显示与播报设置</h2><p>'+description+'</p><div class="mode-option-list">'+options+'</div>')}
function openAIAssistant(){
 pendingAssistantEdits=null;
 const greeting='你好，我可以根据场合和页面中的演示天气给你穿搭、口红建议，也可以带你进入换芯或名片编辑。';
 const canSpeak=Boolean(window.SpeechRecognition||window.webkitSpeechRecognition);
 const voiceButton=state.easy?'<button class="btn ai-voice-input-button" type="button"'+(canSpeak?' data-action="assistant-voice-input" aria-label="开始语音输入" aria-pressed="false" title="开始语音输入"':' disabled aria-label="浏览器不支持语音输入" title="当前浏览器不支持语音识别"')+'>'+assistantMicIcon()+'</button>':'';
 const voiceStatus=state.easy?'<span class="ai-voice-status-live" id="assistant-voice-status" role="status" aria-live="polite">'+(canSpeak?'':'当前浏览器不支持语音识别，请使用文字输入。')+'</span>':'';
 const inputClass=state.easy?' has-voice-input':'';
 const inputLabel=state.easy?'语音识别结果，可编辑':'输入消息';
 const inputPlaceholder='输入场合、穿搭或操作需求';
 const sendButton='<button class="btn primary" type="submit">发送</button>';
 showModal('<section class="ai-assistant-panel"><h2>AI 助手</h2><div class="ai-assistant-messages" id="assistant-messages" aria-label="对话示例与聊天记录" aria-live="polite"><div class="assistant-message assistant">'+greeting+'</div><div class="assistant-message user">正式场合口红建议</div><div class="assistant-message assistant">正式场合可以优先试试 209 典藏绛红；喜欢柔和一点，也可以看看 118 暖意玫瑰。点击下方建议词或输入框，就能继续聊。</div></div><div class="ai-assistant-prompts"><button type="button" class="assistant-prompt" data-action="assistant-prompt" data-id="commute">通勤穿搭建议</button><button type="button" class="assistant-prompt" data-action="assistant-prompt" data-id="formal">正式场合口红</button><button type="button" class="assistant-prompt" data-action="assistant-prompt" data-id="swap">我要换芯</button><button type="button" class="assistant-prompt" data-action="assistant-prompt" data-id="edit">修改名片</button></div><form id="assistant-form" class="ai-assistant-input'+inputClass+'">'+voiceStatus+'<input name="message" type="text" maxlength="200" placeholder="'+inputPlaceholder+'" aria-label="'+inputLabel+'">'+voiceButton+sendButton+'</form></section>');
}
function assistantMicIcon(){return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8"/></svg>'}
function stopAssistantVoiceInput(abort=false){if(!assistantRecognition)return;const active=assistantRecognition;assistantRecognition=null;active.onend=null;active.onerror=null;try{abort?active.abort():active.stop()}catch{}const button=modal.querySelector('[data-action="assistant-voice-input"]');if(button){button.classList.remove('is-listening');button.setAttribute('aria-label','开始语音输入');button.title='开始语音输入';button.setAttribute('aria-pressed','false');button.innerHTML=assistantMicIcon()}}
function startAssistantVoiceInput(){
 const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
 const form=modal.querySelector('#assistant-form'),field=form?.elements.message,status=modal.querySelector('#assistant-voice-status'),button=modal.querySelector('[data-action="assistant-voice-input"]');
 if(!Recognition){if(status)status.textContent='当前浏览器不支持语音识别，请使用下方文字输入。';return}
 if(assistantRecognition){try{assistantRecognition.stop()}catch{}return}
 if(!field)return;
 const recognition=new Recognition(),startingText=field.value.trim();
 assistantRecognition=recognition;recognition.lang='zh-CN';recognition.interimResults=true;recognition.continuous=false;recognition.maxAlternatives=1;
 let hadError=false;
 if(button){button.classList.add('is-listening');button.setAttribute('aria-label','停止语音输入');button.title='正在聆听，点击结束';button.setAttribute('aria-pressed','true');button.innerHTML=assistantMicIcon()}
 if(status)status.textContent='正在聆听，请说出你的需求。';
 recognition.onresult=event=>{let transcript='';for(let i=0;i<event.results.length;i++)transcript+=event.results[i][0].transcript;field.value=[startingText,transcript].filter(Boolean).join(' ');const finalResult=event.results.length&&event.results[event.results.length-1].isFinal;if(status)status.textContent=finalResult?'识别完成，可修改输入框内容后发送。':'正在识别语音…'};
 recognition.onerror=event=>{hadError=true;const messages={'not-allowed':'麦克风权限未开启，请允许访问麦克风后重试。','service-not-allowed':'浏览器未允许语音识别，请检查麦克风权限。','no-speech':'没有听到语音，请靠近麦克风再试一次。','network':'语音识别服务暂不可用，请稍后重试或输入文字。'};const message=messages[event.error]||'语音输入暂不可用，请重试或输入文字。';if(status)status.textContent=message;toast(message)};
 recognition.onend=()=>{if(assistantRecognition===recognition)assistantRecognition=null;if(button){button.classList.remove('is-listening');button.setAttribute('aria-label','开始语音输入');button.title='开始语音输入';button.setAttribute('aria-pressed','false');button.innerHTML=assistantMicIcon()}if(!hadError&&status)status.textContent=field.value.trim()?'识别完成，可修改输入框内容后发送。':'没有识别到语音，可以重试或直接输入。'};
 try{recognition.start()}catch{assistantRecognition=null;hadError=true;if(button){button.classList.remove('is-listening');button.setAttribute('aria-label','开始语音输入');button.title='开始语音输入';button.setAttribute('aria-pressed','false');button.innerHTML=assistantMicIcon()}if(status)status.textContent='无法启动麦克风，请检查浏览器权限后重试。'}
}
function addAssistantMessage(role,text,action=null){
 const box=modal.querySelector('#assistant-messages');
 if(!box)return;
 const message=document.createElement('div');
 message.className='assistant-message '+role;
 const content=document.createElement('p');
 content.textContent=text;
 message.append(content);
 if(action){
  const button=document.createElement('button');
  button.type='button';
  button.className='btn assistant-message-action';
  button.dataset.action=action.action;
  button.textContent=action.label;
  message.append(button);
 }
 box.append(message);
 box.scrollTop=box.scrollHeight;
}
function assistantOpenCardEditor(edits={}){
 pendingAssistantEdits=edits;
 expressionEditing=true;
 expressionIntroPending=state.easy;
 const samePage=location.hash==='#expression';
 closeModal();
 if(samePage)render();else location.hash='expression';
 toast(Object.keys(edits).length?'已将修改填入名片草稿，请检查后保存。':'已打开名片编辑，请修改后保存。');
}
function assistantSend(query){
 const text=String(query||'').trim();
 if(!text)return;
 addAssistantMessage('user',text);
 const clean=text.replace(/[。.!！?？]+$/,'');
 const editMatch=clean.match(/(?:把|将)(?:我的)?(今天的表达|想聊的话题|个人介绍|姓名|名字|昵称|表达|介绍|话题)(?:改成|换成|设为)(.+)/);
 let answer='';
 let action=null;
 if(editMatch){
  const fieldMap={姓名:'name',名字:'name',昵称:'name','今天的表达':'expression',表达:'expression','想聊的话题':'topic',话题:'topic','个人介绍':'role',介绍:'role'};
  const value=editMatch[2].trim();
  pendingAssistantEdits={[fieldMap[editMatch[1]]]:value};
  const label={name:'姓名或昵称',expression:'今天的表达',topic:'想聊的话题',role:'个人介绍'}[fieldMap[editMatch[1]]];
  answer='可以，我已把“'+label+'”更新到名片草稿中。检查内容后点击保存才会生效。';
  action={label:'查看并确认修改',action:'assistant-edit-card'};
 }else if(/换芯|换新|换口红|替换口红芯/.test(clean)){
  answer='可以，我带你进入换芯选择。你可以浏览全部已上传色号，核对后再确认保存。';
  action={label:'进入换芯选择',action:'assistant-start-swap'};
 }else if(/修改名片|编辑名片|改名片|设置名片|名片编辑/.test(clean)){
  pendingAssistantEdits={};
  answer='可以，我为你打开名片编辑页。你可以修改表达、姓名、介绍和公开范围，确认后再保存。';
  action={label:'打开名片编辑',action:'assistant-edit-card'};
 }else if(/天气|穿搭|通勤|下雨|雨伞|衣服|穿什么|场合/.test(clean)){
  if(/正式|会议|商务|面试|客户/.test(clean)){
   answer='页面中的演示天气是上海小雨、18–24°。正式场合可考虑轻薄防水外套、简洁中性色和方便行走的鞋；口红可先试 209 典藏绛红或 118 暖意玫瑰，再根据现场光线和个人偏好决定。';
  }else if(/约会|晚宴|聚会|夜间/.test(clean)){
   answer='页面中的演示天气是上海小雨、18–24°。可以搭配轻薄外套和便于携带的雨具；口红可先试 314 雾感梅子或 118 暖意玫瑰，建议实际试色后再决定。';
  }else{
   answer='页面中的演示天气是上海小雨、18–24°。通勤可考虑轻薄外套、便于行走的鞋并带上雨具；口红可以先试 118 暖意玫瑰或 106 晨光杏桃。光线、肤色和个人偏好都会影响观感，请试色后自行选择。';
  }
 }else if(/正式|会议|商务|面试|口红|色号|颜色/.test(clean)){
  answer='如果是正式表达，可先试 209 典藏绛红；希望柔和一些，可以试 118 暖意玫瑰。这里提供的是可试方向，现场光线和个人偏好都会影响效果。';
 }else{
  answer='我可以帮你参考场合、穿搭和页面演示天气，也能打开换芯或名片编辑。你可以试着说“下雨天通勤怎么穿”“正式会面选什么口红”或“把名字改成小李”。';
 }
 addAssistantMessage('assistant',answer,action);
 if(state.easy)say(answer);
}

function renderHome(){
 const s=shade(),now=new Date(),date=new Intl.DateTimeFormat('zh-CN',{month:'short',day:'numeric'}).format(now),remaining=remainingPercent;
 const wave=Array.from({length:34},(_,i)=>`<i style="--h:${10+((i*17)%24)}px"></i>`).join('');
 const audioArea=state.easy?`<div class="morning-audio"><button data-action="morning-play" aria-label="播放早安播报">▶</button><div class="audio-wave" aria-hidden="true">${wave}</div><span>早安播报</span></div>`:`<div class="morning-audio morning-weather-strip" role="note" aria-label="今日天气与出门提醒"><div class="morning-weather-copy"><strong>上海 · 小雨 · 18–24°</strong><span>小雨天，记得带伞。愿你今天遇见温暖，也成为温暖。</span></div></div>`;
 const lipstickInfo=state.easy?`<button class="remaining-widget read-lipstick-widget" data-action="read-lipstick" aria-label="播报当前色号与适用场景"><strong>读取口红</strong><span>播报色号与场景</span>${icon('sound')}<small>点击播报</small></button>`:`<button class="remaining-widget static-lipstick-info home-namecard-info" data-action="visitor" aria-label="打开我的名片分享页"><strong>我的名片</strong></button>`;
 return `<section class="home-routine morning-home"><div class="morning-copy morning-weather-head"><span>${date}</span><h1>18–24°</h1><p>上海 · 小雨</p><button class="morning-remaining ${remaining<25?'is-low':''}" data-action="remaining-warning" aria-label="口红余量 ${remaining}%"><span>${remaining}%</span><small>余量</small></button></div>${audioArea}<button class="routine-add" data-action="bind" aria-label="绑定新壳体">${icon('plus')}</button><article class="morning-card"><div class="morning-card-top"><button data-action="connections">记录 ${icon('arrow')}</button><button data-action="swap" aria-label="换芯">换芯 ${icon('arrow')}</button></div><div class="morning-shade"><small>今天的口红</small><h2>${s.name}</h2><p><span>${s.id} · ${s.code}</span><span>${s.finish}${s.tone}</span></p></div><img class="gold-lipstick" src="lipstick-cutout.png" alt="金色欧莱雅口红产品示意"><div class="morning-widgets"><div class="weather-widget home-action-stack ai-assistant-stack"><button class="ai-assistant-button" data-action="ai-assistant" aria-label="AI 助手"><strong>AI 助手</strong><span>聊场合 · 穿搭 · 口红</span><span class="ai-assistant-symbol" aria-hidden="true">✧</span></button></div>${lipstickInfo}</div></article></section>`
}
function announceLowStock(){if(!state.easy||remainingPercent>=25||lowStockAnnounced)return;lowStockAnnounced=true;say(remainingSpeech())}
function renderArchive(){const s=shade(),p=profile(s.id),library=shades.filter(x=>x.id!==s.id);return `<section class="archive-screen">${heading('MY COLOUR ARCHIVE','色号档案库','当前嵌入在上方，其他色号收进档案库。','<button class="archive-read-button" data-action="read-new-shade" aria-label="读取新口红">' + icon('nfc') + '<span>读取</span></button>')}<div class="archive-tabs" aria-label="档案分类"><span>全部档案</span><strong>当前嵌入</strong><span>我的描述</span></div><article class="current-shade"><div class="current-copy"><span class="current-label">当前嵌入 · ${s.code}</span><h2><b>${s.id}</b>${s.name}</h2><p>${s.finish}${s.tone} · ${esc(p.line)}</p><div class="current-actions">${state.easy?`<button data-action="listen-archive" data-id="${s.id}" aria-label="试听当前档案">${icon('sound')}试听</button>`:''}<button data-action="edit-profile" data-id="${s.id}">编辑档案</button></div></div><div class="current-slab" style="--shade:${s.color}" role="img" aria-label="当前嵌入 ${s.id} ${s.name} 的色块"></div></article><div class="library-heading"><h2>已拥有色号</h2><span>${shades.length} 个档案</span></div><div class="shade-library" role="list">${library.map(x=>{const px=profile(x.id);return `<button class="shade-tile" role="listitem" data-action="open-shade" data-id="${x.id}" style="--shade:${x.color}"><span class="tile-colour" aria-hidden="true"></span><span class="tile-copy"><strong>${x.id} ${x.name}</strong><small>${x.code} · ${x.finish}${x.tone}</small><em>${esc(px.line)}</em></span></button>`}).join('')}</div></section>`}
function renderJournal(){const s=shade(),events=(state.events||[]).filter(e=>Date.now()-new Date(e.time).getTime()<=(journalPeriod==='week'?7:30)*86400000),confirmed=events.filter(e=>e.text.includes('确认色号')).length,used=events.filter(e=>e.text.includes('记录使用')).length,shared=events.filter(e=>e.text.includes('分享')).length,periodName=journalPeriod==='week'?'本周':'本月',summaryControl=state.easy?`data-action="speak-journal-summary" tabindex="0" role="region" aria-label="点击播报${periodName}口红日记摘要"`:'',listControl=state.easy?'data-action="speak-diary-list" tabindex="0" role="region" aria-label="点击播报口红日记记录"':'';return `<div class="archive-journal"><article class="companion-card" ${summaryControl}><div class="companion-tabs"><button class="${journalPeriod==='month'?'selected':''}" data-action="journal-period" data-id="month" aria-pressed="${journalPeriod==='month'}">AI 月报</button><button class="${journalPeriod==='week'?'selected':''}" data-action="journal-period" data-id="week" aria-pressed="${journalPeriod==='week'}">AI 周报</button></div><small>口红陪伴卡 · ${periodName}</small><p>${periodName}，你主动确认了 ${s.code} 号口红 <strong>${confirmed}</strong> 次，记录使用 <strong>${used}</strong> 次${shared?`，分享 <strong>${shared}</strong> 次`:''}。</p><span>仅整理你主动留下的记录，不补写未记录的场合。</span></article><div class="diary-list" ${listControl}>${events.length?events.slice(0,8).map((e,index)=>`<div class="diary-entry" ${state.easy?`role="button" tabindex="0" data-action="speak-diary-entry" data-id="${index}"`:""}><i style="--shade:${s.color}"></i><span><b>${esc(e.text)}</b><small>${new Date(e.time).toLocaleString('zh-CN',{month:'long',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false})}</small></span></div>`).join(''):'<div class="diary-empty">还没有使用记录。主动确认、使用或分享后，会出现在这里。</div>'}</div></div>`}
function speakJournalCard(element){if(!state.easy||!element)return;if(element.matches('.diary-entry')){const title=element.querySelector('b')?.textContent.trim(),date=element.querySelector('small')?.textContent.trim();say([title,date].filter(Boolean).join('。'));return}if(element.matches('.diary-list')){const entries=[...element.querySelectorAll('.diary-entry')].map(item=>`${item.querySelector('b')?.textContent.trim()}。${item.querySelector('small')?.textContent.trim()}`);say(entries.join('。')||element.textContent.trim());return}const label=element.querySelector(':scope > small')?.textContent.trim(),summary=element.querySelector('p')?.innerText.trim(),note=element.querySelector(':scope > span')?.textContent.trim();say([label,summary,note].filter(Boolean).join('。'))}
function renderArchive(){const s=shade(),p=profile(s.id),library=shades.filter(x=>x.id!==s.id);return `<section class="archive-screen">${heading('MY COLOUR ARCHIVE','色号档案库','当前嵌入在上方，其他色号收进档案库。','<button class="archive-read-button" data-action="read-new-shade" aria-label="读取新口红">' + icon('nfc') + '<span>读取</span></button>')}<div class="archive-tabs" role="tablist" aria-label="档案分类"><button type="button" class="${archiveTab==='all'?'selected':''}" data-action="archive-tab" data-id="all" role="tab" aria-selected="${archiveTab==='all'}">全部档案</button><button type="button" class="${archiveTab==='journal'?'selected':''}" data-action="archive-tab" data-id="journal" role="tab" aria-selected="${archiveTab==='journal'}">口红日记</button></div>${archiveTab==='journal'?renderJournal():`<article class="current-shade"><div class="current-copy"><span class="current-label">当前嵌入 · ${s.code}</span><h2><b>${s.id}</b>${s.name}</h2><p>${s.finish}${s.tone} · ${esc(p.line)}</p><div class="current-actions">${state.easy?`<button data-action="listen-archive" data-id="${s.id}" aria-label="试听当前档案">${icon('sound')}试听</button>`:''}<button data-action="edit-profile" data-id="${s.id}">编辑档案</button></div></div><div class="current-slab" style="--shade:${s.color}" role="img" aria-label="当前嵌入 ${s.id} ${s.name} 的色块"></div></article><div class="library-heading"><h2>已拥有色号</h2><span>${shades.length} 个档案</span></div><div class="shade-library" role="list">${library.map(x=>{const px=profile(x.id);return `<button class="shade-tile" role="listitem" data-action="open-shade" data-id="${x.id}" style="--shade:${x.color}"><span class="tile-colour" aria-hidden="true"></span><span class="tile-copy"><strong>${x.id} ${x.name}</strong><small>${x.code} · ${x.finish}${x.tone}</small><em>${esc(px.line)}</em></span></button>`}).join('')}</div>`}</section>`}
function isAvailable(card=state.card){return card.enabled&&!shell().paused&&(!card.expiresAt||card.expiresAt>Date.now())}
function namecard(c,preview=false){if(!isAvailable(c))return `<div class="empty-card">${icon('lock')}<h2>这张名片目前不可用</h2><p>${preview?'开启名片，并确认壳体未暂停、有效期未结束。':'主人暂未开放这张名片。'}</p></div>`;const s=shade(),contacts=[['phone','电话','演示联系入口','☎'],['wechat','微信',c.name,'●●'],['email','邮箱','演示邮件入口','✉']];return `<article class="namecard styled-namecard"><div class="namecard-head"><span class="eyebrow">DESIGN · CREATE · CONNECT</span><p class="expression-line">${esc(c.expression||'做自在的自己')}</p><span class="card-edition">${esc(c.template)}相遇 / MY EXPRESSION</span><span class="namecard-hero-note">GOOD DESIGN<br>BRINGS A KINDER<br>WORLD</span></div><div class="namecard-body"><div class="namecard-main-row"><div class="person"><span class="person-avatar" aria-hidden="true">${esc((c.name||'我').slice(0,1))}</span><div><h2>${esc(c.name)}</h2><p>${esc(c.role)}</p></div></div></div>${c.topic?`<p class="topic">${esc(c.topic)}</p>`:''}<div class="namecard-expression-pill"><span>我的表达</span><strong>${esc(c.expression||'做自在的自己')}</strong></div><div class="namecard-contact-grid">${contacts.map(([key,title,value,glyph])=>`<button data-action="contact" data-id="${key}"><span class="contact-glyph">${glyph}</span><strong>${title}</strong><small>${esc(value)}</small></button>`).join('')}</div>${c.showShade||c.showProduct?`<div class="card-product"><div>${c.showShade?`<small>今天的色彩</small><p><span class="swatch" style="--shade:${s.color}"></span> ${s.id} ${s.name}</p>`:'<small>我的口红体验</small>'}</div>${c.showProduct?`<button data-action="product" data-hide-shade="${!c.showShade}">看看这只 ${icon('arrow')}</button>`:''}</div>`:''}<button class="namecard-meet" data-action="contact" data-id="wechat">认识一下</button></div><div class="card-foot">无界体验官 · BEAUTY WITHOUT BOUNDARIES</div></article>`}
function profileHomepage(){const c=state.card,meta=[['wechat','微信','演示联系入口'],['xhs','小红书','演示联系入口'],['linkedin','LinkedIn','演示联系入口']],links=meta.map(([key,title,desc])=>toggle(key,title,`${desc} · ${c.channels[key]?'已开启':'未开启'}`,c.channels[key])).join('');return `<section class="profile-page profile-home portrait-profile"><div class="portrait-top"><div class="portrait-avatar" aria-hidden="true"><span>${esc((c.name||'我').slice(0,1))}</span></div><div class="portrait-tools"><button data-action="display-settings" aria-label="显示与播报设置" aria-haspopup="dialog">${icon('more')}</button><button data-action="edit-expression" aria-label="编辑我的表达">✎</button><button data-action="visitor" aria-label="查看对外名片">${icon('link')}</button></div></div><div class="portrait-copy"><h1>${esc(c.name)}</h1><h2>我的名片</h2><p>${esc(c.role)}，${esc(c.topic)}。<br>${esc(c.expression||'做自在的自己')}，保持好奇，持续探索。</p></div><div class="contact-sheet"><button data-action="contact" data-id="phone"><span class="contact-icon phone">☎</span><span><b>电话</b><small>演示联系入口</small></span><i>›</i></button><button data-action="contact" data-id="wechat"><span class="contact-icon wechat">●●</span><span><b>微信</b><small>${esc(c.name)}</small></span><i>›</i></button><button data-action="contact" data-id="email"><span class="contact-icon email">✉</span><span><b>邮箱</b><small>演示联系入口</small></span><i>›</i></button></div><div class="profile-section-title portrait-section-title"><h2>我的名片</h2><a href="#visitor">查看对外名片 ${icon('arrow')}</a></div><div class="profile-namecard-preview">${namecard(c,true)}</div><div class="profile-section-title portrait-section-title"><h2>我的链接与记录</h2></div><form id="channels-form" class="home-links-panel"><h3>认识我的方式</h3>${links}<div class="save-row"><button class="btn primary" type="submit">保存公开渠道 ${icon('check')}</button></div></form></section>`}function renderExpression(){if(!expressionEditing)return profileHomepage();draft=structuredClone(state.card);if(pendingAssistantEdits){Object.assign(draft,pendingAssistantEdits);pendingAssistantEdits=null}return `<section class="profile-editor">${heading('EDIT MY EXPRESSION','编辑我的表达','保存后，主页与对外名片将同步更新。',`<button class="plain-link" data-action="cancel-expression">取消编辑</button>`)}<form id="expression-form" class="panel"><h2>为这次相遇，选一种表达</h2><div class="segmented" role="group" aria-label="名片模板">${['商业','学术','日常'].map(x=>`<button type="button" data-action="template" data-id="${x}" aria-pressed="${draft.template===x}" class="${draft.template===x?'selected':''}">${x}${x==='商业'?'展会':x==='学术'?'社交':'相遇'}</button>`).join('')}</div><label class="field"><span>今天的表达</span><input name="expression" maxlength="28" value="${esc(draft.expression)}" placeholder="例如：清醒地发光"></label><div class="field-row"><label class="field"><span>姓名 / 昵称</span><input name="name" value="${esc(draft.name)}" required maxlength="24"></label><label class="field"><span id="role-label">${draft.template==='学术'?'机构 / 研究方向':draft.template==='日常'?'一句话介绍':'职位 / 公司'}</span><input name="role" value="${esc(draft.role)}" maxlength="45"></label></div><label class="field"><span>想聊的话题</span><input name="topic" value="${esc(draft.topic)}" maxlength="80"></label>${toggle('showShade','展示当前色号','让色彩成为相遇的开场',draft.showShade)}${toggle('showProduct','展示产品卡入口','访客主动点击后，才进入产品卡',draft.showProduct)}${toggle('enabled','允许访客读取名片','关闭后，访客无法查看名片',draft.enabled)}<label class="field"><span>名片有效期</span><select name="expiry"><option value="forever" ${draft.expiry==='forever'?'selected':''}>保持开启，直到我手动关闭</option><option value="tonight" ${draft.expiry==='tonight'?'selected':''}>今天结束时失效</option><option value="24h" ${draft.expiry==='24h'?'selected':''}>保存后 24 小时失效</option></select></label><div class="save-row"><button class="btn primary" type="submit">保存并返回主页 ${icon('check')}</button></div></form></section>`}function mountExpressionGuide(){
 if(!state.easy)return;
 const form=main.querySelector('#expression-form');
 if(!form||main.querySelector('.expression-voice-guide'))return;
 const panel=document.createElement('aside');
 panel.className='expression-voice-guide';
 panel.setAttribute('aria-labelledby','expression-guide-title');
 panel.innerHTML=[
  '<div class="expression-guide-copy"><strong id="expression-guide-title">语音填写提示</strong><p id="expression-guide-message" aria-live="polite">点击每个填写框或公开设置，可听到对应板块说明和当前内容。你可以随时编辑，完成后点击保存。</p></div>'
 ].join('');
 form.before(panel);
 if(expressionIntroPending){expressionIntroPending=false;say('正在编辑我的表达主页。点击每个填写框或公开设置，我会播报对应板块说明和当前内容。你可以逐项编辑，完成后点击保存并返回主页。')}
}
function expressionGuideSteps(){
 const form=main.querySelector('#expression-form');
 if(!form)return [];
 const value=name=>(form.elements[name]?.value||'').trim()||'尚未填写';
 const checked=name=>form.elements[name]?.checked;
 const templateNames={商业:'商业展会',学术:'学术社交',日常:'日常相遇'};
 const expiry=form.elements.expiry?.selectedOptions?.[0]?.textContent.trim()||'未选择';
 const changed=[
  ['名片模板',draft.template,state.card.template],
  ['今天的表达',draft.expression,state.card.expression],
  ['姓名或昵称',draft.name,state.card.name],
  ['介绍',draft.role,state.card.role],
  ['想聊的话题',draft.topic,state.card.topic],
  ['展示当前色号',draft.showShade,state.card.showShade],
  ['展示产品卡入口',draft.showProduct,state.card.showProduct],
  ['访客读取名片',draft.enabled,state.card.enabled],
  ['名片有效期',draft.expiry,state.card.expiry]
 ].filter(item=>item[1]!==item[2]).map(item=>item[0]+'：'+(typeof item[1]==='boolean'?(item[1]?'开启':'关闭'):item[1]||'未填写'));
 const visibility=draft.enabled
  ?'名片已开放。'+(draft.showShade?'访客可以看到当前色号。':'访客看不到当前色号。')+(draft.showProduct?'访客可以打开产品卡入口。':'产品卡入口已关闭。')
  :'名片当前关闭，访客无法读取。';
 return [
  {target:'.segmented',text:'第一项，名片模板。可选择商业展会、学术社交或日常相遇。当前是'+(templateNames[draft.template]||draft.template)+'。'},
  {target:'input[name="expression"]',text:'第二项，今天的表达。填写你希望传达的一句话，最多二十八个字。当前内容：'+value('expression')+'。'},
  {target:'input[name="name"]',text:'第三项，姓名或昵称。访客会用它认识你。当前内容：'+value('name')+'。'},
  {target:'input[name="role"]',text:'第四项，'+(form.querySelector('#role-label')?.textContent||'个人介绍')+'。可以简短说明你的身份或方向。当前内容：'+value('role')+'。'},
  {target:'input[name="topic"]',text:'第五项，想聊的话题。选填，可以告诉访客你最近关注什么。当前内容：'+value('topic')+'。'},
  {target:'[name="showShade"]',text:'第六项，展示当前色号。当前'+(checked('showShade')?'已开启，访客能在名片上看到今天的色彩。':'已关闭，访客看不到当前色号。')},
  {target:'[name="showProduct"]',text:'第七项，展示产品卡入口。当前'+(checked('showProduct')?'已开启，访客可以主动打开产品卡。':'已关闭，访客看不到产品卡入口。')},
  {target:'[name="enabled"]',text:'第八项，允许访客读取名片。当前'+(checked('enabled')?'已开启，对外链接可以显示名片。':'已关闭，访客暂时无法读取名片。')+'请按你的意愿决定是否公开。'},
  {target:'select[name="expiry"]',text:'第九项，名片有效期。当前选择：'+expiry+'。到期后访客将无法查看。'},
  {target:'.save-row',text:'最后一步，保存前核对。'+(changed.length?'本次修改了：'+changed.join('；')+'。':'目前没有内容变更。')+visibility+'有效期为'+expiry+'。语音导览不会自动保存；信息确认后，请点击保存并返回主页。'}
 ];
}
function setExpressionGuideStep(index){
 const steps=expressionGuideSteps();
 if(!steps.length)return;
 expressionGuideIndex=Math.max(0,Math.min(index,steps.length-1));
 main.querySelectorAll('.expression-guide-current').forEach(el=>el.classList.remove('expression-guide-current'));
 const step=steps[expressionGuideIndex],form=main.querySelector('#expression-form');
 const target=form?.querySelector(step.target);
 const highlight=target?.closest('.field,.settings-row,.segmented,.save-row')||target;
 if(highlight){
  highlight.classList.add('expression-guide-current');
  const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  highlight.scrollIntoView({behavior,block:'center'});
 }
 const message=main.querySelector('#expression-guide-message');
 const progress=main.querySelector('#expression-guide-progress');
 const controls=main.querySelector('#expression-guide-controls');
 const start=main.querySelector('.expression-guide-start');
 if(message)message.textContent=step.text;
 if(progress)progress.textContent='第 '+(expressionGuideIndex+1)+' 项，共 '+steps.length+' 项';
 if(controls)controls.hidden=false;
 if(start)start.hidden=true;
 const previous=main.querySelector('[data-action="expression-guide-prev"]');
 const next=main.querySelector('[data-action="expression-guide-next"]');
 if(previous)previous.disabled=expressionGuideIndex===0;
 if(next)next.disabled=expressionGuideIndex===steps.length-1;const pause=main.querySelector('[data-action="expression-guide-pause"]');if(pause)pause.textContent='暂停播报';
 say(step.text);
}
function toggleExpressionGuideSpeech(){if(!('speechSynthesis'in window)){toast('当前没有正在播报的内容。');return}if(!speechSynthesis.speaking){toast('当前没有正在播报的内容。');return}const button=main.querySelector('[data-action="expression-guide-pause"]');if(speechSynthesis.paused){speechSynthesis.resume();if(button)button.textContent='暂停播报'}else{speechSynthesis.pause();if(button)button.textContent='继续播报'}}
function endExpressionGuide(message='语音导览已结束。你可以继续编辑，并在确认后保存。'){
 stopSpokenOutput();
 expressionGuideIndex=-1;
 main.querySelectorAll('.expression-guide-current').forEach(el=>el.classList.remove('expression-guide-current'));
 const start=main.querySelector('.expression-guide-start');
 const controls=main.querySelector('#expression-guide-controls');
 const status=main.querySelector('#expression-guide-message');
 const progress=main.querySelector('#expression-guide-progress');
 const pause=main.querySelector('[data-action="expression-guide-pause"]');if(start)start.hidden=false;
 if(controls)controls.hidden=true;
 if(status)status.textContent=message;
 if(progress)progress.textContent='';if(pause)pause.textContent='暂停播报';
}
function toggle(name,title,desc,on){return `<label class="settings-row"><span><strong>${title}</strong><small>${desc}</small></span><input class="switch" type="checkbox" name="${name}" ${on?'checked':''} aria-label="${title}"></label>`}
function visitorLipstickCard(s=shade(),editable=false){const p=profile(s.id);return `<article class="visitor-lipstick-card${editable?' shade-poster-card standard-poster-card':''}" data-shade-id="${s.id}" style="--visitor-shade:${s.color};--shade:${s.color}"><div class="visitor-poster-preview"><img src="${s.id}.png" alt="${s.id} ${s.name} 色号展示"></div><div class="visitor-poster-meta"><div><span>个人描述</span><strong>${esc(p.desc||p.line||'暂无描述')}</strong></div><div><span>收纳袋香气</span><strong>${esc(p.scent||'无香')}</strong></div><div><span>使用场景</span><strong>${esc(p.scene||'日常使用')}</strong></div></div>${editable?`<div class="shade-poster-actions"><button data-action="edit-profile" data-id="${s.id}" aria-label="编辑档案">✎</button></div>`:''}</article>`}
function renderVisitor(){if(visitorStage==='profile')return `<section class="visitor-page visitor-profile-page"><div class="visitor-toolbar"><button class="plain-link" data-action="owner">← 返回主页</button><span>链接预览 · 演示</span></div>${namecard(state.card)}<p class="visitor-note">这里只呈现主人允许公开的信息。</p></section>`;return `<section class="visitor-page visitor-share-page"><div class="visitor-toolbar"><button class="plain-link" data-action="visitor-profile">← 返回名片</button><span>口红展示</span></div>${visitorLipstickCard()}<div class="visitor-share-actions"><button class="btn visitor-favorite ${visitorSaved?'is-saved':''}" data-action="visitor-favorite">${visitorSaved?icon('check')+' 已收藏':'♡ 收藏'}</button><button class="btn primary" data-action="buy-demo">购买入口 ${icon('arrow')}</button></div><p class="visitor-note">色号展示与购买入口均为演示内容。</p></section>`}
function renderConnections(){return renderVisitor()}
function render(){const route=location.hash.slice(1)||'home',navRoute=route==='connections'?'expression':route;if(route!==lastRenderedRoute){if(route==='home')lowStockAnnounced=false;lastRenderedRoute=route}document.body.dataset.route=route;document.body.classList.toggle('visitor-mode',route==='visitor');document.body.classList.toggle('a11y',state.easy);document.documentElement.classList.toggle('assist-wallpaper',state.easy&&route!=='visitor');document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===navRoute)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});main.innerHTML=({home:renderHome,archive:renderArchive,expression:renderExpression,connections:renderConnections,visitor:renderVisitor}[route]||renderHome)();if(route==='expression'&&expressionEditing)mountExpressionGuide();document.querySelectorAll('[data-icon]').forEach(x=>x.innerHTML=icon(x.dataset.icon));if(route==='home')announceLowStock()}function readNewShadeStart(){showModal(`<h2 id="modal-title">读取新口红</h2><div class="read-emblem pulsing">${icon('nfc')}</div><p>将手机靠近壳体 NFC 识别区。本功能不是扫码识别。</p><label class="field"><span>识别到的色号</span><select id="new-profile-shade">${shadeOptions(shell().shade)}</select></label><button class="btn primary full" data-action="new-profile-load">读取并调取官方档案 ${icon('arrow')}</button>`)}
function readNewShadeProfile(id){const s=shade(id),p=profile(id);showModal(`<h2 id="modal-title">建立我的口红档案</h2><div class="readout"><b>${s.code} · ${s.id} ${s.name}</b><span class="helper">${s.finish}${s.tone} · 官方基础档案建议</span><span class="helper">${esc(s.desc)}</span></div><p>以下内容可以修改或直接清空，保存后会写入你的档案库。</p><form id="new-profile-form" data-id="${s.id}"><label class="field"><span>我的命名</span><input name="line" value="${esc(p.line)}" maxlength="35"></label><label class="field"><span>${state.easy?'我的语音描述':'我的描述'}</span><textarea name="desc" maxlength="250">${esc(p.desc)}</textarea></label><label class="field"><span>收纳袋香气建议</span><select name="scent"><option value="">暂不设置</option>${scentOptions(p.scent)}</select></label><label class="field"><span>使用场景建议</span><input name="scene" value="${esc(p.scene)}" maxlength="50"></label><div class="dialog-actions"><button class="btn primary" type="submit">保存我的口红档案 ${icon('check')}</button></div></form>`)}function readStart(){showModal(`<h2 id="modal-title">确认手中的这一支</h2><div class="read-emblem pulsing">${icon('nfc')}</div><p>将手机靠近壳体侧面的轻碰区。本次为交互演示，不会调用手机 NFC。</p><button class="btn primary full" data-action="read-confirm">模拟读取 ${icon('arrow')}</button>`)}
function readConfirm(){const b=document.querySelector('[data-action="read-confirm"]');b.disabled=true;b.textContent='正在读取档案…';readTimer=setTimeout(()=>{const s=shade(),p=profile(s.id);event(`确认色号 ${s.code} · ${s.id} ${s.name}`);const text=`这是你的 ${s.code} 号口红芯，${s.id} ${s.name}，${s.finish}${s.tone}。${p.line?'你把它命名为，'+p.line+'。':''}${p.desc||''}`;const voiceActions=state.easy?`<p>语音会播放色号和个人描述。</p><div class="dialog-actions"><button class="btn" data-action="repeat">${icon('sound')}再听一次</button><button class="btn primary" data-action="morning">听早安模式</button></div>`:`<p>已通过文字确认色号和个人描述。</p>`;showModal(`<h2 id="modal-title">已确认，是这一支</h2><div class="readout">${s.code} · ${s.id} ${s.name}<br>${esc(p.line)}<span class="helper">${esc(p.desc)}</span></div>${voiceActions}`);say(text)},650)}function morning(){const s=shade();showModal(`<h2 id="modal-title">早安，从确认自己开始</h2><p class="helper">天气与语录为演示内容，未连接实时天气或 AI 服务。</p><div class="readout">${s.code} · ${s.id} ${s.name}<span class="helper">先确认色号，再听天气和一句话。</span></div><div class="weather-number">18–24° <small>上海 · 小雨</small></div><p>“不用急着证明，先把自己放在场。”</p><button class="btn primary full" data-action="morning-play">${icon('sound')}播放早安演示</button><p class="helper">本版不读取定位、系统日历或待办。</p>`)}
function announceShadeBrowse(id,label=''){if(!state.easy)return;const now=Date.now();if(lastShadeAnnouncement?.id===id&&now-lastShadeAnnouncement.time<1400)return;lastShadeAnnouncement={id,time:now};const s=shade(id);say(`${label}${s.id}号，${s.name}，编号 ${s.code}，${s.finish}${s.tone}。`)}
function scheduleShadeBrowse(){clearTimeout(shadeBrowseTimer);if(!state.easy||!modal.open)return;shadeBrowseTimer=setTimeout(()=>{shadeBrowseTimer=null;if(!modal.open)return;const cards=[...modal.querySelectorAll('#modal-content .shade-option')],box=modal.getBoundingClientRect(),top=box.top+modal.clientTop,bottom=top+modal.clientHeight,center=(top+bottom)/2;const visible=cards.map(card=>({card,rect:card.getBoundingClientRect()})).filter(x=>x.rect.bottom>top&&x.rect.top<bottom).sort((a,b)=>Math.abs((a.rect.top+a.rect.bottom)/2-center)-Math.abs((b.rect.top+b.rect.bottom)/2-center));shadeBrowseReady=true;if(visible.length)announceShadeBrowse(visible[0].card.dataset.id)},180)}
function pendingConfirmationText(){const s=shade(pendingShade),scent=document.querySelector('#new-scent')?.value||profile(s.id).scent;return `色号 ${s.id} ${s.name}，编号 ${s.code}。收纳袋香气 ${scent}。`}
function chooseShade(kind='swap',selectedId=null){flow=kind;lastShadeAnnouncement=null;shadeBrowseReady=false;const initialId=selectedId||(kind==='bind'?'118':shell().shade);pendingShade=initialId;showModal(`<h2 id="modal-title">${kind==='bind'?'给新壳体，配上第一支色彩':'这次，换一种表达'}</h2><div class="shade-options" aria-label="口红色号，可滚动浏览">${shades.map(s=>`<button type="button" class="shade-option${s.id===initialId?' selected':''}" data-action="choose-shade" data-id="${s.id}" aria-pressed="${s.id===initialId}"><span class="color-block" style="--shade:${s.color}" aria-hidden="true"></span><span><strong>${s.id} ${s.name}</strong><small>${s.code} · ${s.finish}${s.tone}</small></span></button>`).join('')}</div>`);scheduleShadeBrowse()}
function confirmShade(){pendingShade=pendingShade||(flow==='bind'?'118':shell().shade);const s=shade(pendingShade),p=profile(s.id);showModal(`<div class="step-count">02 / 02 · 最后确认</div><h2 id="modal-title">确认是 ${s.code} 号口红芯</h2><div class="readout">${s.id} ${s.name}<span class="helper">${s.finish}${s.tone} · 收纳袋香气 ${p.scent}</span></div>${state.easy?`<button class="btn full replay-confirmation" type="button" data-action="speak-pending">${icon('sound')}重听确认内容</button>`:''}${flow==='bind'?'<label class="field"><span>壳体名称</span><input id="new-shell-name" maxlength="25" value="我的新壳体 · 珠光白"></label>':''}<label class="field"><span>对应收纳袋</span><select id="new-scent">${scentOptions(p.scent)}</select></label><div class="dialog-actions"><button class="btn" data-action="flow-back">上一步</button><button class="btn primary" data-action="flow-save">${flow==='bind'?'完成模拟绑定':'确认换芯'}</button></div>`);if(state.easy)say(pendingConfirmationText())}
function productCard(hideShade){if(!isAvailable()||!state.card.showProduct){toast('名片或产品卡已关闭。');return}const s=shade();showModal(`<h2 id="modal-title">${hideShade?'无界口红体验':s.id+' '+s.name}</h2><div class="archive-image" style="height:220px"><img src="product.png" alt="珠光白口红与香气袋概念示意"></div><p>${hideShade?`主人未公开当前色号。你仍可以了解可替换口红芯、${state.easy?'语音':'文字'}确认与香气袋的体验。`:`${s.finish}${s.tone}。${s.desc}`}</p><p class="helper">概念色彩系列 · 演示产品资料，非真实在售商品。</p><button class="btn primary full" data-action="buy-demo">体验购买入口 ${icon('arrow')}</button>`)}
function speakArchiveShade(id){const s=shade(id),p=profile(id);say(`${s.code}，${s.id} ${s.name}，${s.finish}${s.tone}。${p.line}。语音描述：${p.desc}。收纳袋香气：${p.scent}。使用场景：${p.scene}`)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const a=b.dataset.action,id=b.dataset.id;switch(a){
 case 'close':closeModal();break;
 case 'scent-toggle':{const choices=document.querySelector('#scent-choices'),open=choices.hidden;choices.hidden=!open;b.setAttribute('aria-expanded',String(open));break}
 case 'scent-choice':{const f=document.querySelector('#profile-form'),choices=document.querySelector('#scent-choices'),trigger=f.querySelector('.scent-trigger');f.elements.scent.value=id;trigger.textContent=id;trigger.setAttribute('aria-label',`选择收纳袋香气，当前${id}`);trigger.setAttribute('aria-expanded','false');choices.hidden=true;choices.querySelectorAll('[role="option"]').forEach(option=>option.setAttribute('aria-selected',String(option.dataset.id===id)));say(`已选择${id}香气。`);break}
 case 'access':state.easy=!state.easy;save();document.body.classList.toggle('a11y',state.easy);b.setAttribute('aria-pressed',state.easy);toast(state.easy?'辅助阅读模式已开启。':'已切换为标准模式。');render();break;
 case 'ai-assistant':openAIAssistant();break;case 'assistant-voice-input':startAssistantVoiceInput();break;case 'assistant-prompt':{const prompts={commute:'通勤穿搭建议',formal:'正式场合口红建议',swap:'我想换芯',edit:'修改名片'};assistantSend(prompts[id]||b.textContent);break}case 'assistant-start-swap':closeModal();chooseShade();break;case 'assistant-edit-card':assistantOpenCardEditor(pendingAssistantEdits||{});break;
 case 'display-settings':openDisplaySettings();break;case 'display-mode':{const next=id==='assist';if(state.easy===next){closeModal();break}state.easy=next;save();if(!state.easy)clearTimeout(readTimer);closeModal();render();toast(state.easy?'辅助阅读模式已开启。':'已切换为标准模式。');break;}
 case 'read-new-shade':readNewShadeStart();break;case 'new-profile-load':readNewShadeProfile(document.querySelector('#new-profile-shade').value);break;case 'read':readStart();break;case 'read-confirm':readConfirm();break;
 case 'repeat':{const s=shade(),p=profile(s.id);say(`${s.code}，${s.id} ${s.name}。${p.line}。${p.desc}`);break}
 case 'morning':morning();break;
 case 'remaining-warning':if(state.easy)say(remainingSpeech()||`当前口红余量为 ${remainingPercent}%。`);else toast(remainingSpeech()||`当前口红余量为 ${remainingPercent}%。`);break;case 'read-lipstick':{const s=shade(),p=profile(s.id),scene=(p.scene||'日常使用').replace(/场景$/,'');say(`当前色号为${s.id} · ${s.code}${s.finish}${s.tone}，适合${scene}等场景。`);break}case 'morning-play':{const s=shade(),name=String(state.card.name||'朋友').trim()||'朋友',date=new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric'}).format(new Date());say(`早安，${name}。新的一天开始啦。今天是${date}，上海有小雨，气温18到24度，出门记得带伞哦。今天就让${s.id}号${s.name}陪你出门吧。愿你今天遇见温暖，也成为温暖。`,'morning');break}
 case 'renew-shade':say('换新');chooseShade();break;case 'swap':chooseShade();break;case 'bind':chooseShade('bind');break;
 case 'choose-shade':pendingShade=id;confirmShade();break;
 case 'flow-back':chooseShade(flow,pendingShade);break;
 case 'speak-pending':say(pendingConfirmationText());break
 case 'flow-save':{const scent=document.querySelector('#new-scent').value,completedFlow=flow,completedShade=pendingShade,s=shade(completedShade);if(completedFlow==='bind'){const name=document.querySelector('#new-shell-name').value.trim()||'我的新壳体';state.shells.push({name,shade:completedShade,paused:false});state.activeShell=state.shells.length-1}else shell().shade=completedShade;state.profiles[completedShade]={...profile(completedShade),scent};event(`${completedFlow==='bind'?'模拟绑定壳体':'确认换芯'} · ${completedShade} ${s.name}`);archiveId=completedShade;closeModal();render();toast(completedFlow==='bind'?'模拟绑定完成，新壳体已加入我的口红。':'换芯完成，档案与已公开色号已同步。');if(state.easy)say(`已确认，${s.id}号 ${s.name}，编号 ${s.code}。${completedFlow==='bind'?'新壳体绑定完成。':'换芯完成。'}`);break}
 case 'expression-guide-start':setExpressionGuideStep(0);break;case 'expression-guide-prev':if(expressionGuideIndex>0)setExpressionGuideStep(expressionGuideIndex-1);break;case 'expression-guide-next':if(expressionGuideIndex>=0)setExpressionGuideStep(expressionGuideIndex+1);break;case 'expression-guide-replay':if(expressionGuideIndex>=0)setExpressionGuideStep(expressionGuideIndex);break;case 'expression-guide-pause':toggleExpressionGuideSpeech();break;case 'expression-guide-end':endExpressionGuide();break;
 case 'share':location.hash='expression';break;
 case 'connections':visitorStage='profile';location.hash='connections';break;
 case 'archive-shade':archiveId=id;if(location.hash==='#archive')render();else location.hash='archive';break;
 case 'archive-tab':archiveTab=id==='journal'?'journal':'all';render();if(state.easy&&archiveTab==='journal')speakJournalCard(document.querySelector('.companion-card'));break;
 case 'journal-period':journalPeriod=id==='week'?'week':'month';render();if(state.easy)speakJournalCard(document.querySelector('.companion-card'));break;
 case 'speak-journal-summary':speakJournalCard(b);break;case 'speak-diary-list':speakJournalCard(b);break;case 'speak-diary-entry':speakJournalCard(b);break;
 case 'open-shade':{const s=shade(id),p=profile(id),posters=['106','118','127','152','163','188','209','225','267','314','328','356'];if(posters.includes(s.id)){if(!state.easy){showModal(visitorLipstickCard(s,true));break}showModal(`<article class="shade-poster-card" style="--shade:${s.color}"><img class="shade-poster-image" src="${s.id}.png" alt="${s.id} ${s.name} 色号档案详情"><div class="shade-poster-actions"><button data-action="edit-profile" data-id="${s.id}" aria-label="编辑档案">✎</button></div><div class="poster-dynamic" aria-label="可编辑档案内容"><div class="poster-dynamic-row"><b>个人描述</b><span>${esc(p.desc)}</span></div><div class="poster-dynamic-row"><b>收纳袋香气</b><span>${esc(p.scent)}</span></div><div class="poster-dynamic-row"><b>使用场景</b><span>${esc(p.scene)}</span></div></div>${state.easy?`<div class="shade-poster-hotspots"><button class="poster-hotspot poster-speak" data-action="listen-archive" data-id="${s.id}" aria-label="语音播报"></button></div>`:''}</article>`);speakArchiveShade(s.id);break}showModal(`<article class="shade-detail-card"><div class="shade-detail-hero" style="--shade:${s.color}"><span class="shade-detail-tag">品牌预设</span><div class="shade-detail-actions"><button data-action="edit-profile" data-id="${s.id}" aria-label="编辑档案">✎</button></div></div><div class="shade-detail-body"><p class="shade-detail-brand">UNBOUNDED · LIPSTICK CORE</p><h2 id="modal-title"><b>${s.id}</b>${s.name}<span>${esc(p.line||'我的命名')}</span></h2><div class="shade-detail-row"><b>个人描述</b><span>${esc(p.desc||'还没有留下个人描述。')}</span></div><div class="shade-detail-row"><b>收纳袋香气</b><span>${esc(p.scent)} · ${s.finish}${s.tone}</span></div><div class="shade-detail-row"><b>使用场景</b><span>${esc(p.scene)}</span></div><div class="shade-detail-pills"><button data-action="edit-profile" data-id="${s.id}">改成自己的说法</button>${state.easy?`<button data-action="listen-archive" data-id="${s.id}">${icon('sound')} 播报</button>`:''}</div><button class="shade-detail-save" data-action="save-core" data-id="${s.id}">保存口红芯</button></div></article>`);break}
 case 'listen-archive':speakArchiveShade(id);break;
 case 'edit-profile':{const s=shade(id),p=profile(id);showModal(`<h2 id="modal-title">编辑 ${s.id} ${s.name}</h2><p>在右上角铅笔中调整这支口红的命名、${state.easy?'语音描述':'个人描述'}、香气和使用场景。</p><form id="profile-form" data-id="${s.id}"><div class="profile-edit-quick" aria-label="快速调整档案"><button class="btn" type="button" data-action="restore-profile" data-id="${s.id}">保留品牌预设</button><button class="btn" type="button" data-action="customize-profile" data-id="${s.id}">改成自己的说法</button><button class="btn" type="button" data-action="no-scent" data-id="${s.id}">选择无香</button></div><label class="field"><span>我的命名</span><input name="line" value="${esc(p.line)}" maxlength="35" placeholder="给这支口红一个名字"></label><label class="field"><span>${state.easy?'我的语音描述':'我的描述'}</span><textarea name="desc" maxlength="250">${esc(p.desc)}</textarea></label><div class="field scent-field"><span>配套收纳袋香气</span>${profileScentPicker(p.scent)}</div><label class="field"><span>使用场景</span><input name="scene" value="${esc(p.scene)}" maxlength="50" placeholder="例如：日常通勤"></label><div class="dialog-actions"><button class="btn primary" type="submit">保存档案 ${icon('check')}</button></div>${state.easy?`<button class="plain-link" type="button" data-action="listen-profile" data-id="${s.id}">${icon('sound')}试听当前内容</button>`:''}</form>`);break}
 case 'listen-profile':{const f=document.querySelector('#profile-form'),s=shade(id);say(`${s.code}，${s.id} ${s.name}。${f.elements.line.value}。语音描述：${f.elements.desc.value}。收纳袋香气：${f.elements.scent.value}。使用场景：${f.elements.scene.value}`);break}
 case 'restore-profile':{const s=shade(id),f=document.querySelector('#profile-form');f.elements.line.value=s.line;f.elements.desc.value=s.desc;f.elements.scent.value=s.scent;f.elements.scene.value=s.scene;toast('已填入预设内容，点击保存后生效。');break}
 case 'customize-profile':{const f=document.querySelector('#profile-form');f.elements.line.focus();toast(`可以在下方修改命名和${state.easy?'语音描述':'个人描述'}。`);break}
 case 'no-scent':{const f=document.querySelector('#profile-form');f.elements.scent.value='无香';const trigger=f.querySelector('.scent-trigger');if(trigger){trigger.textContent='无香';trigger.setAttribute('aria-label','选择收纳袋香气，当前无香');const choices=f.querySelector('#scent-choices');choices.hidden=true;choices.querySelectorAll('[role=option]').forEach(option=>option.setAttribute('aria-selected',String(option.dataset.id==='无香')));trigger.setAttribute('aria-expanded','false')}toast('已选择无香，点击保存档案后生效。');say('已选择无香。');break}
 case 'edit-expression':expressionGuideIndex=-1;expressionEditing=true;expressionIntroPending=state.easy;render();break;
 case 'cancel-expression':endExpressionGuide('已取消编辑。');expressionEditing=false;draft=null;render();break;
 case 'template':{draft.template=id;document.querySelectorAll('[data-action="template"]').forEach(x=>{x.classList.toggle('selected',x.dataset.id===id);x.setAttribute('aria-pressed',x.dataset.id===id)});document.querySelector('#role-label').textContent=id==='学术'?'机构 / 研究方向':id==='日常'?'一句话介绍':'职位 / 公司';break}
 case 'visitor':visitorStage='profile';returnRoute=location.hash.slice(1)||'home';location.hash='visitor';break;
 case 'visitor-favorite':visitorSaved=true;render();toast('已收藏。');break;
 case 'visitor-meet':visitorStage='profile';render();break;
 case 'visitor-profile':visitorStage='profile';render();break;
 case 'visitor-lipstick':visitorStage='lipstick';render();break;
 case 'owner':visitorStage='lipstick';location.hash='home';break;
 case 'contact':showModal(`<h2 class="contact-entry-dialog" id="modal-title">${{wechat:'微信',phone:'电话',email:'邮箱',xhs:'小红书',linkedin:'LinkedIn'}[id]}联系入口</h2><p>这是访客联系流程的演示。正式名片会显示主人主动绑定并授权公开的二维码或主页链接。</p><p class="helper">当前未绑定真实账号，不会自动加好友。</p><button class="btn primary full" data-action="close">知道了</button>`);break;
 case 'product':if(location.hash==='#visitor'&&visitorStage==='profile'){visitorStage='lipstick';render()}else productCard(b.dataset.hideShade==='true');break;
 case 'save-core':closeModal();toast('这支口红芯已保留在当前壳体中。');break;
 case 'poster-brand':toast('已保留品牌预设，可在编辑档案中改成自己的说法。');break;
 case 'buy-demo':showModal('<h2 id="modal-title">已到达模拟购买入口</h2><p>正式版本会前往对应品牌的产品页或替换芯页面。本次没有创建订单，也不会产生费用。</p><button class="btn primary full" data-action="close">返回名片</button>');break;
 case 'pause':if(shell().paused){shell().paused=false;event('重新启用壳体');render();toast('壳体已启用，名片仍按公开设置与有效期展示。')}else showModal('<h2 id="modal-title">暂停这支壳体？</h2><p>暂停后，访客只能看到“这张名片目前不可用”。你的私人色号档案仍然保留，找回后可以重新启用。</p><div class="dialog-actions"><button class="btn" data-action="close">暂不暂停</button><button class="btn red" data-action="pause-confirm">确认暂停</button></div>');break;
 case 'pause-confirm':shell().paused=true;event('暂停壳体分享');closeModal();render();toast('已暂停，访客无法查看这支壳体的名片。');break;
 }});
document.addEventListener('keydown',e=>{if(!state.easy||!['Enter',' '].includes(e.key)||!e.target.matches('[data-action="speak-journal-summary"],[data-action="speak-diary-list"],[data-action="speak-diary-entry"]'))return;e.preventDefault();e.target.click()});
function announceNavigation(route){const messages={archive:'色号档案',home:'我的口红',expression:'主页'};if(state.easy&&messages[route])say(messages[route])}
document.addEventListener('click',e=>{const link=e.target.closest('[data-nav]');if(!link)return;const route=link.dataset.nav;if(!state.easy){pendingNavAnnouncement=null;return}if(location.hash===link.getAttribute('href')){pendingNavAnnouncement=null;announceNavigation(route)}else pendingNavAnnouncement=route});
document.addEventListener('focusin',e=>{if(e.target.matches('.scent-choices [role="option"]'))say(`${e.target.dataset.id}香气`);else if(e.target.matches('.shade-option')&&shadeBrowseReady)announceShadeBrowse(e.target.dataset.id);else announceEditorField(e.target,'focus')});
document.addEventListener('pointerover',e=>{const option=e.target.closest('.scent-choices [role="option"]');if(option&&option!==e.relatedTarget?.closest?.('.scent-choices [role="option"]'))say(`${option.dataset.id}香气`)});
document.addEventListener('click',e=>{if(e.target.closest('#expression-form .field,#expression-form .settings-row,#expression-form .segmented'))announceEditorField(e.target,'click')});
document.addEventListener('change',e=>{if(e.target.closest('#expression-form')&&(e.target.type==='checkbox'||e.target.tagName==='SELECT'))announceEditorField(e.target,'change')});
document.addEventListener('change',e=>{if(e.target.id==='shell-select'){state.activeShell=Number(e.target.value);save();render()}if(e.target.id==='archive-select'){archiveId=e.target.value;render()}if(e.target.id==='new-scent'&&state.easy&&'speechSynthesis'in window)say(`收纳袋香气已选择 ${e.target.value}。`);if(e.target.closest('#expression-form'))updateDraft()});
document.addEventListener('input',e=>{if(e.target.closest('#expression-form'))updateDraft()});
function updateDraft(){const f=document.querySelector('#expression-form');for(const key of ['expression','name','role','topic','expiry'])draft[key]=f.elements[key].value;for(const key of ['showShade','showProduct','enabled'])draft[key]=f.elements[key].checked;draft.expiresAt=null}
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target;if(f.id==='assistant-form'){stopAssistantVoiceInput(true);const message=f.elements.message.value.trim();if(message){f.elements.message.value='';assistantSend(message)}return}if(f.id==='profile-form'||f.id==='new-profile-form'){state.profiles[f.dataset.id]={line:f.elements.line.value.trim(),desc:f.elements.desc.value.trim(),scent:f.elements.scent.value,scene:f.elements.scene.value.trim()};save();closeModal();render();toast(f.id==='new-profile-form'?'已保存到我的色号档案库。':'个人档案已保存，读取时会使用你的描述。')}if(f.id==='expression-form'){updateDraft();if(!draft.name.trim()){f.elements.name.focus();toast('请填写姓名或昵称。');return}if(draft.expiry==='tonight'){const end=new Date();end.setHours(24,0,0,0);draft.expiresAt=end.getTime()}else if(draft.expiry==='24h')draft.expiresAt=Date.now()+86400000;state.card=structuredClone(draft);save();endExpressionGuide('内容已保存。');expressionEditing=false;render();toast('主页已更新。')}if(f.id==='channels-form'){for(const key of ['wechat','xhs','linkedin'])state.card.channels[key]=f.elements[key].checked;save();toast('已保存，访客只会看到你开启的联系渠道。')}});
window.addEventListener('hashchange',()=>{const route=location.hash.slice(1)||'home';if(expressionGuideIndex>=0)endExpressionGuide();else stopSpokenOutput();if(location.hash==='#expression'&&expressionEditing&&state.easy)expressionIntroPending=true;render();if(pendingNavAnnouncement){const pending=pendingNavAnnouncement;pendingNavAnnouncement=null;if(pending===route)announceNavigation(pending)}});
render();
