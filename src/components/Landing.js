import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Landing() {
  function changeLetters(){
    $(document).ready(function(){
      var theLetters = "abcdefghijklmnopqrstuvwxyz&^$!"; 
      var ctnt = "Oráculo pandémico"; 
      var speed = 20; 
      var increment = 10; 
      
          
      var clen = ctnt.length;       
      var si = 0;
      var stri = 0;
      var block = "";
      var fixed = "";
    
      (function rustle (i) {          
      setTimeout(function () {
        if (--i){rustle(i);}
        nextFrame(i);
        si = si + 1;        
      }, speed);
      })(clen*increment+1); 
      function nextFrame(pos){
        for (var i=0; i<clen-stri; i++) {
        
          var num = Math.floor(theLetters.length * Math.random());
          
          var letter = theLetters.charAt(num);
          block = block + letter;
        }
        if (si === (increment-1)){
          stri++;
        }
        if (si === increment){
        
        fixed = fixed +  ctnt.charAt(stri - 1);
        si = 0;
        }
        $(".name").html(fixed + block);
        block = "";
      }
      });
    }
  return(
    <div className="App">
      <div className='cristalBall'>
        <div className='cristal'>
          <div className='ball' onMouseOver={changeLetters}>
            <div className='name'>Oráculo pandémico</div>
              <button type='button' className='start-button'>
                <Link className="link-oracle" to='/form' title='Comenzar'>Comenzar</Link>
              </button>
            <div className='bright'></div>
          </div>
          <div className='step first'>
            <div className='square'>
              <div className='div1'></div><div className='div2'></div>
            </div>
            <div className='square'>
              <div className='div3'></div><div className='div4'></div>
            </div>
          </div> 
          <div className='step second'>
            <div className='square'>
              <div className='div1'></div><div className='div2'></div>
            </div>
            <div className='square'>
              <div className='div3'></div><div className='div4'></div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom1'></div>
          <div className='bottom3'></div>
        </div>
        <div className='table'></div>
      </div>
      <div className='background'>
        <div className='circle'>
          <div className='circle1'>
            <div className='circle2'>
            ✶
              <div className='circle3'>
                <div className='star'>✶</div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>    
      </div>
    </div>
  )
}

export default Landing;