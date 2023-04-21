import React from 'react'
const props={
    sub:"Birthday party",
    to:"jaGdish@gmail.com",
    name:"jaGdish",
    party:"birthday party",
    p1:"Ritu",
    p2:"Saurabh",
    p3:"Kartik",
    location:"Green field Avenue"
}

const Invitation = () => {
  return (
    <div>
        <p>Subject:{props.sub}</p>
        <p>To:{props.to}</p>
        <p>Hi, {props.name}</p>
        <p>I am having a {props.party} next Friday at my Home. would you like to come? It will be fun. Lots of people from my schools are coming. you know some of them - {props.p1} {props.p2} {props.p3}</p>
        <p>My house is behing our school, near {props.location}</p>
        <p>I hope you will come and see you soon</p>
        <p>from</p>
        <p>{props.name}</p>
        


        

    </div>
  )
}

export default Invitation
