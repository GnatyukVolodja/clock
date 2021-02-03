const componentAnalogClock = {
  name: 'componentAnalogClock',
  methods: {
    build_numbers () {
      for (let i = 1; i < 13; i++) {
        document.querySelector('.clock').insertAdjacentHTML('afterbegin', `<span class="number number_${i}">${i}</span>`)
      }
      this.build_big_label()
    },
    build_big_label () {
      for (let i = 1; i < 13; i++) {
        document.querySelector('.clock').insertAdjacentHTML('afterbegin', `<span class="big-label big-label-${i}"></span>`)
      }
      this.build_small_label()
    },
    build_small_label () {
      for (let i = 1; i < 13; i++) {
        for (let j = 1; j < 5; j++) {
          document.querySelector('.clock').insertAdjacentHTML('afterbegin', `<span class="small-label small-label-${i}_${j}"></span>`)
        }
      }
      this.start()
    },
    start () {
      const time = {
        second: document.querySelector('.second-hand'),
        minute: document.querySelector('.minute-hand'),
        hour: document.querySelector('.hour-hand')
      }
      
      const getSeconds = date => (date.getSeconds() / 60) * 360 - 90
      
      const getMinutes = date =>
        (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6 - 90
      
      const getHours = date =>
        (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30 - 90
      
      const setDate = () => {
        [...document.querySelectorAll('.divider')].forEach(element => element.classList.add('dividers'))
        
        if (new Date().getSeconds().toString().charAt(1) === '') {
          this.secl = '0'
          this.secr = new Date().getSeconds().toString().charAt(0)
        } else {
          this.secl = new Date().getSeconds().toString().charAt(0)
          this.secr = new Date().getSeconds().toString().charAt(1)
        }
        
        if (new Date().getMinutes().toString().charAt(1) === '') {
          this.minl = '0'
          this.minr = new Date().getMinutes().toString().charAt(0)
        } else {
          this.minl = new Date().getMinutes().toString().charAt(0)
          this.minr = new Date().getMinutes().toString().charAt(1)
        }
        
        if (new Date().getHours().toString().charAt(1) === '') {
          this.hourl = '0'
          this.hourr = new Date().getHours().toString().charAt(0)
        } else {
          this.hourl = new Date().getHours().toString().charAt(0)
          this.hourr = new Date().getHours().toString().charAt(1)
        }
        
        time.second.style.transform = `rotate(${getSeconds(new Date())}deg)`
        time.minute.style.transform = `rotate(${getMinutes(new Date())}deg)`
        time.hour.style.transform = `rotate(${getHours(new Date())}deg)`
      }
      setInterval(setDate, 1000)
    }
  },
  mounted () {
    this.build_numbers()
  },
  template: `<div class="centered flex">
                <div class="border-clock bg-dark d-flex align-items-center justify-content-center">
                    <div class="clock">
                        <div class="second-hand" style="transform: rotate(0deg)"></div>
                        <div class="minute-hand" style="transform: rotate(120deg)"></div>
                        <div class="hour-hand" style="transform: rotate(240deg)"></div>
                    </div>
                </div>
            </div>`
}

const componentDigitalClock = {
  name: 'componentDigitalClock',
  data () {
    return {
      secl: '0',
      secr: '0',
      minl: '0',
      minr: '0',
      hourl: '0',
      hourr: '0'
    }
  },
  methods: {
    build_numbers () {
      
      for (let i = 1; i < 10; i++) {
        document.querySelector('.numbers-hl').insertAdjacentHTML('afterbegin', `<span class="num num_${i}"></span>`)
        document.querySelector('.numbers-hr').insertAdjacentHTML('afterbegin', `<span class="num num_${i}"></span>`)
        document.querySelector('.numbers-ml').insertAdjacentHTML('afterbegin', `<span class="num num_${i}"></span>`)
        document.querySelector('.numbers-mr').insertAdjacentHTML('afterbegin', `<span class="num num_${i}"></span>`)
        document.querySelector('.numbers-sl').insertAdjacentHTML('afterbegin', `<span class="num num_${i}"></span>`)
        document.querySelector('.numbers-sr').insertAdjacentHTML('afterbegin', `<span class="num num_${i}"></span>`)
      }
      
      const setDate = () => {
        [...document.querySelectorAll('.divider')].forEach(element => element.classList.add('dividers'))
        
        if (new Date().getSeconds().toString().charAt(1) === '') {
          this.secl = '0'
          this.secr = new Date().getSeconds().toString().charAt(0)
        } else {
          this.secl = new Date().getSeconds().toString().charAt(0)
          this.secr = new Date().getSeconds().toString().charAt(1)
        }
        
        if (new Date().getMinutes().toString().charAt(1) === '') {
          this.minl = '0'
          this.minr = new Date().getMinutes().toString().charAt(0)
        } else {
          this.minl = new Date().getMinutes().toString().charAt(0)
          this.minr = new Date().getMinutes().toString().charAt(1)
        }
        
        if (new Date().getHours().toString().charAt(1) === '') {
          this.hourl = '0'
          this.hourr = new Date().getHours().toString().charAt(0)
        } else {
          this.hourl = new Date().getHours().toString().charAt(0)
          this.hourr = new Date().getHours().toString().charAt(1)
        }
        
        [...document.querySelectorAll('.num')].forEach(element => element.style.display = 'block')
        
        if (this.secr === '0') {
          [...document.querySelectorAll('.numbers-sr .num_6, .numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '1') {
          [...document.querySelectorAll('.numbers-sr .num_1, .numbers-sr .num_2, .numbers-sr .num_3, .numbers-sr .num_4, .numbers-sr .num_5, .numbers-sr .num_6, .numbers-sr .num_7')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '2') {
          [...document.querySelectorAll('.numbers-sr .num_1, .numbers-sr .num_4, .numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '3') {
          [...document.querySelectorAll('.numbers-sr .num_1, .numbers-sr .num_2, .numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '4') {
          [...document.querySelectorAll('.numbers-sr .num_2, .numbers-sr .num_5, .numbers-sr .num_7, .numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '5') {
          [...document.querySelectorAll('.numbers-sr .num_2, .numbers-sr .num_3, .numbers-sr .num_8, .numbers-sr .num_9 ')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '6') {
          [...document.querySelectorAll('.numbers-sr .num_3, .numbers-sr .num_8, .numbers-sr .num_9 ')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '7') {
          [...document.querySelectorAll('.numbers-sr .num_1, .numbers-sr .num_2, .numbers-sr .num_6, .numbers-sr .num_7, .numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '8') {
          [...document.querySelectorAll('.numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secr === '9') {
          [...document.querySelectorAll('.numbers-sr .num_2, .numbers-sr .num_8, .numbers-sr .num_9')].forEach(element => element.style.display = 'none')
        }
        
        if (this.secl === '0') {
          [...document.querySelectorAll('.numbers-sl .num_6, .numbers-sl .num_8, .numbers-sl .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secl === '1') {
          [...document.querySelectorAll('.numbers-sl .num_1, .numbers-sl .num_2, .numbers-sl .num_3, .numbers-sl .num_4, .numbers-sl .num_5, .numbers-sl .num_6, .numbers-sl .num_7')].forEach(element => element.style.display = 'none')
        } else if (this.secl === '2') {
          [...document.querySelectorAll('.numbers-sl .num_1, .numbers-sl .num_4, .numbers-sl .num_8, .numbers-sl .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secl === '3') {
          [...document.querySelectorAll('.numbers-sl .num_1, .numbers-sl .num_2, .numbers-sl .num_8, .numbers-sl .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secl === '4') {
          [...document.querySelectorAll('.numbers-sl .num_2, .numbers-sl .num_5, .numbers-sl .num_7, .numbers-sl .num_8, .numbers-sl .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.secl === '5') {
          [...document.querySelectorAll('.numbers-sl .num_2, .numbers-sl .num_3, .numbers-sl .num_8, .numbers-sl .num_9 ')].forEach(element => element.style.display = 'none')
        }
        
        if (this.minr === '0') {
          [...document.querySelectorAll('.numbers-mr .num_6, .numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '1') {
          [...document.querySelectorAll('.numbers-mr .num_1, .numbers-mr .num_2, .numbers-mr .num_3, .numbers-mr .num_4, .numbers-mr .num_5, .numbers-mr .num_6, .numbers-mr .num_7')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '2') {
          [...document.querySelectorAll('.numbers-mr .num_1, .numbers-mr .num_4, .numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '3') {
          [...document.querySelectorAll('.numbers-mr .num_1, .numbers-mr .num_2, .numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '4') {
          [...document.querySelectorAll('.numbers-mr .num_2, .numbers-mr .num_5, .numbers-mr .num_7, .numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '5') {
          [...document.querySelectorAll('.numbers-mr .num_2, .numbers-mr .num_3, .numbers-mr .num_8, .numbers-mr .num_9 ')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '6') {
          [...document.querySelectorAll('.numbers-mr .num_3, .numbers-mr .num_8, .numbers-mr .num_9 ')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '7') {
          [...document.querySelectorAll('.numbers-mr .num_1, .numbers-mr .num_2, .numbers-mr .num_6, .numbers-mr .num_7, .numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '8') {
          [...document.querySelectorAll('.numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minr === '9') {
          [...document.querySelectorAll('.numbers-mr .num_2, .numbers-mr .num_8, .numbers-mr .num_9')].forEach(element => element.style.display = 'none')
        }
        
        if (this.minl === '0') {
          [...document.querySelectorAll('.numbers-ml .num_6, .numbers-ml .num_8, .numbers-ml .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minl === '1') {
          [...document.querySelectorAll('.numbers-ml .num_1, .numbers-ml .num_2, .numbers-ml .num_3, .numbers-ml .num_4, .numbers-ml .num_5, .numbers-ml .num_6, .numbers-ml .num_7')].forEach(element => element.style.display = 'none')
        } else if (this.minl === '2') {
          [...document.querySelectorAll('.numbers-ml .num_1, .numbers-ml .num_4, .numbers-ml .num_8, .numbers-ml .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minl === '3') {
          [...document.querySelectorAll('.numbers-ml .num_1, .numbers-ml .num_2, .numbers-ml .num_8, .numbers-ml .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minl === '4') {
          [...document.querySelectorAll('.numbers-ml .num_2, .numbers-ml .num_5, .numbers-ml .num_7, .numbers-ml .num_8, .numbers-ml .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.minl === '5') {
          [...document.querySelectorAll('.numbers-ml .num_2, .numbers-ml .num_3, .numbers-ml .num_8, .numbers-ml .num_9 ')].forEach(element => element.style.display = 'none')
        }
        
        if (this.hourr === '0') {
          [...document.querySelectorAll('.numbers-hr .num_6, .numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '1') {
          [...document.querySelectorAll('.numbers-hr .num_1, .numbers-hr .num_2, .numbers-hr .num_3, .numbers-hr .num_4, .numbers-hr .num_5, .numbers-hr .num_6, .numbers-hr .num_7')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '2') {
          [...document.querySelectorAll('.numbers-hr .num_1, .numbers-hr .num_4, .numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '3') {
          [...document.querySelectorAll('.numbers-hr .num_1, .numbers-hr .num_2, .numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '4') {
          [...document.querySelectorAll('.numbers-hr .num_2, .numbers-hr .num_5, .numbers-hr .num_7, .numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '5') {
          [...document.querySelectorAll('.numbers-hr .num_2, .numbers-hr .num_3, .numbers-hr .num_8, .numbers-hr .num_9 ')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '6') {
          [...document.querySelectorAll('.numbers-hr .num_3, .numbers-hr .num_8, .numbers-hr .num_9 ')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '7') {
          [...document.querySelectorAll('.numbers-hr .num_1, .numbers-hr .num_2, .numbers-hr .num_6, .numbers-hr .num_7, .numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '8') {
          [...document.querySelectorAll('.numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourr === '9') {
          [...document.querySelectorAll('.numbers-hr .num_2, .numbers-hr .num_8, .numbers-hr .num_9')].forEach(element => element.style.display = 'none')
        }
        
        if (this.hourl === '0') {
          [...document.querySelectorAll('.numbers-hl .num_6, .numbers-hl .num_8, .numbers-hl .num_9')].forEach(element => element.style.display = 'none')
        } else if (this.hourl === '1') {
          [...document.querySelectorAll('.numbers-hl .num_1, .numbers-hl .num_2, .numbers-hl .num_3, .numbers-hl .num_4, .numbers-hl .num_5, .numbers-hl .num_6, .numbers-hl .num_7')].forEach(element => element.style.display = 'none')
        } else if (this.hourl === '2') {
          [...document.querySelectorAll('.numbers-hl .num_1, .numbers-hl .num_4, .numbers-hl .num_8, .numbers-hl .num_9')].forEach(element => element.style.display = 'none')
        }
        
      }
      setInterval(setDate, 1000)
    }
  },
  mounted () {
    this.build_numbers()
    
  },
  template: `<div class="centered flex">
                <div class="digital-clock mx-5">
                    <div class="flex">
                        <div class="mx-1 cols numbers-hl"></div>
                        <div class="mx-1 cols numbers-hr"></div>
                        <div class="flex divider">:</div>
                        <div class="mx-1 cols numbers-ml"></div>
                        <div class="mx-1 cols numbers-mr"></div>
                        <div class="flex divider">:</div>
                        <div class="mx-1 cols numbers-sl"></div>
                        <div class="mx-1 cols numbers-sr"></div>
                    </div>
                </div>
            </div>`
}

const apps = {
  name: 'app',
  components: {
    componentAnalogClock,
    componentDigitalClock
  },
  data () {
    return {
      analogClock: true
    }
  }
}

Vue.createApp(apps).mount('#app')
