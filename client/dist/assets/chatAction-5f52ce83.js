import{aw as s}from"./index-9d46c87f.js";const y=a=>async e=>{try{e({type:"accessChatRequest"});const t=await s.post("/",{userId:a});e({type:"accessChatSuccess",payload:t.data})}catch(t){e({type:"accessChatFailure",payload:t})}},o=()=>async a=>{try{a({type:"fetchChatRequest"});const e=await s.get("/");a({type:"fetchChatSuccess",payload:e.data})}catch(e){a({type:"fetchChatFailure",payload:e.data.message})}},h=a=>async e=>{try{e({type:"setSelectedChatRequest"}),e({type:"setSelectedChatSuccess",payload:a})}catch(t){e({type:"setSelectedChatFailure",payload:t.data.message})}};export{y as a,o as f,h as s};