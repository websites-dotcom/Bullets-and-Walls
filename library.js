function isTouching(ob1, ob2){

    if (ob1.x - ob2.x <= ob2.width/2 + ob1.width/2 && 
      ob2.x - ob1.x <= ob1.width/2 + ob2.width/2 &&
      ob1.y - ob2.y <= ob2.height/2 + ob1.height/2 &&
      ob2.y - ob1.y <= ob2.height/2 + ob1.height/2){
  
          return true;
  
      }
  
      else{ 
        
        return false;
      
      }
  
  }
  
  
  function bounceOff(object1, object2){
  
    if (object1.x - object2.x <= object1.width/2 + object2.width/2 && 
      object2.x - object1.x <= object2.width/2 + object1.width/2){
  
          object1.velocityX = -(object1.velocityX);
          object2.velocityX = -(object2.velocityX);
  
      }
  
      if (moving1.y - fixed1.y <= fixed1.height/2 + moving1.height/2 &&
      fixed1.y - moving1.y <= fixed1.height/2 + moving1.height/2){
      
        object1.velocityY = -(object1.velocityY);
        object2.velocityY = -(object2.velocityY);
  
      }
      
  }


  function collide(o1, o2){

    if (o1.x - o2.x <= o2.width/2 + o1.width/2 && 
      o2.x - o1.x <= o1.width/2 + o2.width/2 &&
      o1.y - o2.y <= o2.height/2 + o1.height/2 &&
      o2.y - o1.y <= o2.height/2 + o1.height/2){

        o1.velocityX = 0;
        o2.velocityX = 0;

        o1.velocityY = 0;
        o2.velocityY = 0;

        return true;
      }

      else {

        return false;

      }
  }