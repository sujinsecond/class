const blockFixed = (selector, direction) => {
    const el = document.querySelector(selector);
    
    if(!el) return;
    
    const elHeight = el.offsetHeight;
    const elWidth = el.offsetWidth;
    
    switch (direction){
      case "top":
        document.body.style.paddingTop = `${elHeight}px`;  
        break;
      case "bottom":
        document.body.style.paddingBottom = `${elHeight}px`;  
        break;
      case "left":
        document.body.style.paddingLeft = `${elWidth}px`;  
        break;
      case "right":
        document.body.style.paddingRight = `${elWidth}px`;  
        break;
    }
  }
  
//   blockFixed('.btn-group.fixed', 'bottom');
//   blockFixed('.header', 'top');
  
//   blockFixed(선택자, 위치);
blockFixed('.btn-group.fixed', 'bottom');
blockFixed('.btn-group2.fixed', 'bottom');
