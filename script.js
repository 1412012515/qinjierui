const lines=["“今天也要贴贴。”","“跑酷比赛现在开始！”","“先卖萌，再咬一口。”","“你坐下了吗？那我来了。”","“招招申请占用你的注意力。”"];
const meowBtn=document.getElementById("meowBtn"),meowText=document.getElementById("meowText");let lineIndex=0;
meowBtn?.addEventListener("click",()=>{lineIndex=(lineIndex+1)%lines.length;meowText.textContent=lines[lineIndex];});
const dialog=document.getElementById("lightbox"),dialogImg=document.getElementById("lightboxImg"),dialogCaption=document.getElementById("lightboxCaption"),closeBtn=document.getElementById("closeLightbox");
document.querySelectorAll(".photo-card").forEach(card=>{card.addEventListener("click",()=>{dialogImg.src=card.dataset.src;dialogImg.alt=card.querySelector("img")?.alt||"招招的照片";dialogCaption.textContent=card.dataset.caption||"";dialog.showModal();});});
closeBtn?.addEventListener("click",()=>dialog.close());
dialog?.addEventListener("click",e=>{const r=dialog.getBoundingClientRect();if(!(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom))dialog.close();});
