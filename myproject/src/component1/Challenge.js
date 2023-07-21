import React from "react";
const Challenge=()=>{
    const name='Poonam Maurya'
    const fname='Poonam'
    const lname="Maurya"
    const currDate = new Date(). toLocaleDateString()
    const currTime = new Date(). toLocaleTimeString()
    const extra='extra'
    const img1='https://picsum.photos/200/300'
    const img2='https://picsum.photos/200'
    const img3='https://picsum.photos/250/300'
    const img4='https://picsum.photos/150/300'
    const img5='https://picsum.photos/210/300'
    console.log('img',img1, img2, img3, img4,)
    const links='https://picsum.photos/';
   //  object styling
    const heading ={
     textTransform: 'capitalize',
     color: '#2f012f',
     textAlign: 'center',
     boxShadow: '1px 3px 7px #a38fa3',
     fontFamily: '"Roboto", sans-serif',
    }
   return(
       <>
       <h2>use the fragment tag because there are not create extra node  </h2> 
       <p>and mention raact.fragment tag and without react fragment </p> <p>Multipler element create is JSX and wrap in Div and array </p>
         <p>incase wrap in div coma is not compulsory  and array is coma compulsory</p>
       
       <h1>Netflix Series</h1>
       <p>Here the Netflix series name</p>
       
       <ol>
         <li>Sacred Games</li>
         <li>Peaky Blinders</li>
         <li>Bard of Blood</li>
         <li>Dark</li>
         <li>Squid Game</li>
       </ol>
       
       {/* Expression in JSX */}
       <h1>Expression in JSX </h1>
       <h1>My name is {name}</h1>
       <h4>use only Expression and Expression is below given for exp</h4>
       <p>use javasrcipt in html and html use is jsx </p>
       <p>my value is {3*5}</p>
       <p>five less is sixty {5-60}</p>
       <p>twenty add is one thousand {20+1000}</p>
       <p>seven divied is fifteen {7/15}</p>
       <p>shown random number {Math.random()}</p>
       <strong>there are not use statement in inner html like <br></br>
         "if (six less than four)curly brackets<br></br>
         console.log(ture) curly brackets end"<br></br>
         else(console.log(false))<br></br>
       </strong>
       <h1>concat method</h1>
       <p><strong>My Self is {fname}{lname} "simple" </strong></p>
       <p><strong>My Self is {fname + lname} "add pluse"</strong></p>
       <p><strong>My Self is {fname +""+ lname} "add pluse and opening and closing coma"</strong></p>
       <p><strong>My Self is {`${fname} ${lname}`} "back tick, templete literal
       "</strong></p>
       <p><strong>{`My Self is ${fname} ${lname} "use in back tick inner"`}</strong></p>
       
       <h1>{`My first name is ${fname} and last name is ${lname}` }</h1>
       <p>Today Current time is {currDate}</p>
       <p>Today Current Date is {currTime}</p>
       <h2 contentEditable="true"> totally change content {extra}</h2>
       {/* img tag */}
       <h1 className='heading' style={heading}> random image section</h1>
       <div className='img_items'>
       <img src={img1} alt='randomImage' style={{width:"15rem" , height:"15rem"}}/>
       <a href={links} target='_newPage'style={{width:"15rem" , height:"15rem"}}>
         <img src={img2} alt='randomImage' style={{width:"15rem" , height:"15rem"}}/></a>
       <img src={img3} alt='randomImage' style={{width:"15rem" , height:"15rem"}}/>
       
       <img src={img4} alt='randomImage'style={{width:"15rem" , height:"15rem"}} />
       <img src={img5} alt='randomImage' style={{width:"15rem" , height:"15rem"}}/>
       </div>
       </>
   )
   
   }
   export default Challenge;