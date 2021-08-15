class Member {
    constructor () {
        this.element = document.createElement('div')
        this.element.classList.add('memberbg')

        this.member = document.createElement('div')
        this.member.classList.add('member')

        this.profile = document.createElement('img')
        this.profile.classList.add('profile')
        this.name = document.createElement('label')
        this.name.classList.add('name')
        this.detail = document.createElement('label')
        this.detail.classList.add('detail')

        this.member.appendChild(this.profile)
        this.member.appendChild(this.name)
        this.member.appendChild(this.detail)

        this.element.appendChild(this.member)
    }
}

let memberlist = document.getElementsByClassName('memberlist')[0]

member1 = new Member()
member1.profile.src = './image/raw_Leader_Parfait.png'
member1.name.innerText = '00 SHI3DO'
member1.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member2 = new Member()
member2.profile.src = './image/raw_Office_Parfait.png'
member2.name.innerText = '01 Yeon'
member2.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member3 = new Member()
member3.profile.src = './image/raw_FirstMember_Parfait.png'
member3.name.innerText = '02 RedTea'
member3.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member4 = new Member()
member4.profile.src = './image/raw_Gamer_Parfait.png'
member4.name.innerText = '03 Chanho'
member4.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member5 = new Member()
member5.profile.src = './image/raw_Creator_Parfait.png'
member5.name.innerText = '04 STR.HK'
member5.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member6 = new Member()
member6.profile.src = './image/raw_Developer_Parfait.png'
member6.name.innerText = '05 Developer'
member6.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member7 = new Member()
member7.profile.src = './image/raw_Artist_Parfait.png'
member7.name.innerText = '06 Artist'
member7.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

member8 = new Member()
member8.profile.src = './image/re_Member.png'
member8.name.innerText = '07 Member'
member8.detail.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

memberloadlist = []

memberloadlist.push(member1.element)
memberloadlist.push(member2.element)
memberloadlist.push(member3.element)
memberloadlist.push(member4.element)
memberloadlist.push(member5.element)
memberloadlist.push(member6.element)
memberloadlist.push(member7.element)
memberloadlist.push(member8.element)

var CurruntFirst = 0
var RenderMember = 4    
var MaxRender = memberloadlist.length

var AnimateTime = 300

setInterval(
    function () {
        console.log('runned')
        console.log(`CurruntFirst : ${CurruntFirst} , RenderMember : ${RenderMember}, MaxRender : ${MaxRender}`)
        if (MaxRender - RenderMember <= CurruntFirst) {
            CurruntFirst = 0 - RenderMember
        }
            console.log('정상작동')
            goLeft()
            setTimeout( function () {
                resetAnime()
                removeFirst()
                CurruntFirst += 1
                memberlist.appendChild(memberloadlist[RenderMember + CurruntFirst - 1])
            }, AnimateTime)
    }, 3000) 


function removeAll() {
    console.log('다지')
    memberlist.innerHTML = ''
}

function removeFirst() {
    memberlist.removeChild(memberlist.firstElementChild)
}

removeAll()
render()

function render(){
    for (i = 0; i < RenderMember; i++) {
        memberlist.appendChild(memberloadlist[i + CurruntFirst])
        
    }
}

function isNode(o){
    return (
        typeof Node === "object" ? o instanceof Node : 
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
}

function goLeft() {
    memberlist.childNodes.forEach(child => {
        try {
            child.style.transition = `all ${AnimateTime/1000}s ease-in-out`
            child.style.transform = `translate(calc(-100% - ${between()}px))`
        } catch {
            console.log('error')
        }
    })
}

function resetAnime() {
    memberlist.childNodes.forEach(child => {
        try {
            child.style.transition = 'none'
            child.style.transform = ''
        } catch {
            console.log(child)
        }
    
    })
}

function between(){
    a = offset(memberlist.firstElementChild)['left'] + memberlist.firstElementChild.getBoundingClientRect()['width']
    b = offset(memberlist.firstElementChild.nextElementSibling)['left']
    return b - a
}

var flexgap = between()

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}