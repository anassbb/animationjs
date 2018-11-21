
//  *********************script de l'animation*****************************//
//appele fonction timeline d'animejs
var basicTimeline = anime.timeline();

basicTimeline

//premieur mouvment
.add({

    //element suivie
    targets: '#img44',
    //transation suivant x
    translateX:[
        {value:0,duration:800},
        {value : -50,duration : 500}
       
        
    ],  
    easing: 'easeOutExpo'
  })

  //deuxieme mouvement  
  .add({
      //element suivie
    targets: '#img55',

    //translation x
    translateX:[
        {value:0,duration:800},
        {value : -30,duration : 500}
       
        
    ],    
    easing: 'easeOutExpo'
  })

  //troisieme mouvement
  .add({
      //element suivie
    targets: '#img12',

    //translation suivant x
    translateX:[
        {value:0,duration:600},
        {value : -120,duration : 500}       
        
    ],

    //transalation suivant y
    translateY:[
        {value:0,duration:500},
        {value : 80,duration : 500}
              
    ],    
    easing: 'easeOutExpo'
  })

  //quatrieme mouvement
  .add({
      //elemnt suivie
    targets: '#img13',

    //translation suivant x
    translateX:[
        {value:0,duration:500},
        {value : -100,duration : 500}
       
        
    ],

    //transalation suivant y
    translateY:[
        {value:0,duration:550},
        {value : -80,duration : 500}      
        
    ],    
    easing: 'easeOutExpo'
  });

