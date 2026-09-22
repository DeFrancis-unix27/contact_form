/*
  Contact Us

  First Name
  This field is required

  Last Name
  This field is required

  Email Address
  Please enter a valid email address
  This field is required

  Query Type
  General Enquiry
  Support Request
  Please select a query type

  Message
  This field is required

  I consent to being contacted by the team
  To submit this form, please consent to being contacted

  Submit

  Message Sent!
  Thanks for completing the form. We'll be in touch soon! */

const root = document.getElementById('root')
const section = document.createElement('section')
section.className = "main_body"
root.append(section)

// Create form 
const form = document.createElement('form')
form.innerHTML = `<h1> CONTACT US </h1>`
// -----------------------------------------------------------------------------
// create top div
const fdiv = document.createElement('div')
fdiv.className = "fdiv"
const flab1 = document.createElement('label')
flab1.innerHTML = `<p>First Name *</p>`
const fname = document.createElement('input')
fname.type = "text"
fname.id = "fname"
// first name error
let f_error = document.createElement("p")
f_error.style.color = "red"





fdiv.prepend(flab1)
flab1.appendChild(fname)


const flab2 = document.createElement('label')
flab2.innerHTML = `<p>Last Name *</p>`
const lname = document.createElement('input')
lname.type = "text"
let l_error = document.createElement("p")
l_error.style.color = "red"
fdiv.append(flab2)
flab2.appendChild(lname)


// fdiv
// ----------------------------------------------------------------------------------

const emlab = document.createElement('label')
emlab.className = "emlab"
emlab.innerHTML = `<p>Email Address *</p>`
const email = document.createElement('input')
email.type = "email"
let e_error = document.createElement("p")
e_error.style.color = "red"
emlab.append(email)

// emlab
// -----------------------------------------------------------------------------------------------------------


// query type-------------------------------
const sdiv = document.createElement('div')
sdiv.className = "sdiv"
sdiv.innerHTML = `<p>query type</p>`
const cont = document.createElement('div')
cont.className = "cont"
const slab1 = document.createElement('label')
slab1.innerHTML = `<span> General Enquiry</span>`
const gen = document.createElement('input')
gen.type = "radio"
gen.name = "query"
slab1.prepend(gen)


const slab2 = document.createElement('label')
slab2.innerHTML = `<span> Support Request</span>`
const sup = document.createElement('input')
sup.type = "radio"
sup.name = "query"
slab2.prepend(sup)

let query_error = document.createElement("p")
query_error.style.color = "red"
cont.appendChild(slab1)
cont.appendChild(slab2)
sdiv.appendChild(cont)
// ------------------------------------------------------------------------

// message
const mesg = document.createElement('label')
mesg.className = "msg"
mesg.innerHTML = `<span> Message *</span>`
const textarea = document.createElement('textarea')
textarea.cols = "40"
textarea.rows = "5"
textarea.maxLength = "300"
let text_error = document.createElement("p")
text_error.style.color = "red"
mesg.appendChild(textarea)

// checkbox
const teamdiv = document.createElement('div')

const team = document.createElement('label')
team.className = "team"
const checkbox = document.createElement('input')
checkbox.type = "checkbox"
team.innerHTML = `<p> I consent to being contacted by the team </p>`
team.prepend(checkbox)
teamdiv.append(team)
let check_box_error = document.createElement("p")
check_box_error.style.color = "red"
// 

//submit button
const Btn = document.createElement('button')
Btn.className = "btn"
Btn.id = "btnd"
Btn.innerHTML = "Submit"
Btn.type = "submit"

form.appendChild(fdiv)
form.appendChild(emlab)
form.appendChild(sdiv)
form.appendChild(mesg)
form.appendChild(teamdiv)
form.appendChild(Btn)

section.append(form)


function toast(){
  toast_box = document.createElement('div')
  toast_box.className = "toast"
  toast_box.innerHTML = `
  <h3 class='toast_title'><img src='/assets/images/icon-success-check.svg' alt='toast icon' class='toast_img'> Message Sent!</h3>
  <p class='toast_content'>Thanks for completing the form. We'll be in touch soon!</p>
  `
  section.prepend(toast_box)
}

// toast()

function val (e) {
  e.preventDefault();
  // const name = document.getElementById("fname").value
  // console.log("Obi")
  if (fname.value == "") {
    fname.style.borderColor = "red"
    f_error.innerHTML = " This field is required"
    flab1.appendChild(f_error)
  }
  if(lname.value == ""){
    lname.style.borderColor = "red"
    l_error.innerHTML = " This field is required"
    flab2.appendChild(l_error)
  }
  if (email.value == "" || !email.value.includes("@")) {
    email.style.borderColor = "red"
    e_error.innerHTML = "Please enter a valid email address"
    emlab.append(e_error)
  }
  const selected = document.querySelectorAll("input[name='query']:checked")
  if (selected.length === 0){
    query_error.innerHTML = "Please select a query type"
    sdiv.append(query_error)
  }
  if (textarea.value === ""){
    text_error.innerHTML = "This field is required"
    mesg.append(text_error)
  }

  const check = document.querySelectorAll("input[type='checkbox']:checked")

  if (check.length === 0){
    check_box_error.innerHTML = "This field is required"
    teamdiv.append(check_box_error)
  }

  if (
    fname.value !== "" &&
    lname.value !== "" &&
    email.value !== "" &&
    email.value.includes("@") &&
    selected.length > 0 &&
    textarea.value !== "" &&
    check.length > 0
  ){
    fname.value = ""
    lname.value = ""
    email.value = ""
    selected.length = 0
    textarea.value = 0
    check.length = 0
    toast()
  }
}


// val()

form.addEventListener("submit", val)
