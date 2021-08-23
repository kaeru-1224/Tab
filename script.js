//각 버튼을 누를때마다, 각 버튼에 해당되는 리스트가 보여야한다
const list=[
    {id:1, 
    name:"history",
    content:` 
    I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
    pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
    shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
    batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
    direct trade hoodie ugh chambray, craft beer pork belly flannel tacos
    single-origin coffee art party migas plaid pop-up.`
    },
    {id:2, 
        name:"vision",
        content:` 
        Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
        deep v hella biodiesel. Church-key listicle polaroid put a bird on it
        chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
        Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
        mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
        party hammock master cleanse pop-up truffaut, bicycle rights skateboard
        affogato readymade sustainable deep v live-edge schlitz narwhal.
          <ul>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ul>`
    
        },
        {id:1, 
            name:"goals",
            content:` 
            Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four
            dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred
            fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel
            sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid
            cold-pressed roof party. Small batch adaptogen coloring book heirloom.
            Letterpress food truck hammock literally hell of wolf beard adaptogen everyday
            carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa
            chicharrones.`
        
            }
]
const history = document.querySelector(".history");
const vision = document.querySelector(".vision");
const goals = document.querySelector(".goals");

const content= document.querySelector(".content")
//constains로 확인해서 포함되면 p에 넣어주면될것같음 
//🤔만약에 진행이 된다면, 각각 한번씩해줘서 불필요해질것같음 
//이전에  filter 해줬던거대로 하믄되지않을까,,? 아니시발 좀 마니 돌아갓네

//filter
function filter(listname){
    let result= list.filter(
        item => item.name==`${listname}`
    )
    let content2 = result.map(
        item=> 
      `<p class="content">
      ${item.content}
      </p>`
    );
    content.innerHTML=content2.join("");
} 
window.addEventListener('DOMContentLoaded',filter("history"))
history.addEventListener('click',e=> filter("history"))
vision.addEventListener('click',e=> filter("vision"))
goals.addEventListener('click',e=> filter("goals"))
history.addEventListener('mouseover',e=> filter("history"))
vision.addEventListener('mouseover',e=> filter("vision"))
goals.addEventListener('mouseover',e=> filter("goals"))




