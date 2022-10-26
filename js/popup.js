

class LandingPagePopup{

    constructor(content){
      this.content = content;
    }
  
    determineContent(){
      let popupContent = {};
      if (this.content.substring(0,1) == "." || this.content.substring(0,1) == "#"){
        popupContent.type = "html-content"
        popupContent.source = this.generateHTMLContent(this.content);
      }else if( this.content.substring(0,24)  == "https://www.youtube.com/"){
        popupContent.type = "youtube-video";
        popupContent.source = this.generateYoutubeContent(this.content);
      }else if(this.content.substring(0,27)  == "https://www.joahbeauty.com/"){
        popupContent.type = "joah-video";
      }
      else{
        console.error("You must add class, id or video url");
      }
      return popupContent;
    }
  
    generateHTMLContent(content){
      let htmlContent = `<section class="html-popup-content--container">`
      htmlContent+= document.querySelector(content).innerHTML;
      htmlContent+= `</section>`;
      return htmlContent;
    }
  
    generateYoutubeContent(content){
      let youtubeContent =`<iframe 
          id="video-src"
          class="youtube-video--iframe"
          width="560" height="315" 
          src="${content}" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>`;
      return youtubeContent;
    }
  
    createPopupContent(){
      let popupContent = this.determineContent();
      let html;
      html = document.createElement("section");
      html.classList.add("landing-page--popup-container");
      html.setAttribute("aria-hidden","false");
      html.innerHTML = `
                <div class="inner-${popupContent.type}-popup inner-landing-page--video-popup"> 
                  <button 
                    class="close-popup--btn" 
                    onClick="removeLandingPagePopUp(this)">
                      <div class="close-popup--icon"></div>
                      <div class="screen-reader-text">Close ${popupContent.type} Button</div> 
                  </button>
                   
                  <div class="${popupContent.type}-container"  >
                    
                    <div class="landing-page--popup__loading">
                      <div class="landing-page--popup__dot-animation">
                        <div>
                          <div class="landing-page--popup__dot landing-page--popup__dot-1"></div>
                        </div>
                        <div>
                          <div class="landing-page--popup__dot landing-page--popup__dot-2"></div>
                        </div>
                        <div>
                         <div class="landing-page--popup__dot landing-page--popup__dot-3"></div>
                        </div>
                      </div>
                      <div class="landing-page--popup__loading-text">LOADING</div>
                    </div>
   
                    ${popupContent.source}
                  </div><!-- ${popupContent.type}-container -->
                </div>`;
        return html;
    }
  
    showPopup(){
      document.body.classList.add('no-scroll');
      document.body.appendChild( this.createPopupContent() );
    }
  
    removeLandingPagePopUp(btn){
      let popup = btn.closest(".landing-page--popup-container");
      popup.setAttribute("aria-hidden","true");
      popup.remove();
    }
  
  }
  
  
  function removeLandingPagePopUp(btn){
    let popup = btn.closest(".landing-page--popup-container");
    popup.setAttribute("aria-hidden","true");
    popup.remove();
    document.body.classList.remove('no-scroll');
  }