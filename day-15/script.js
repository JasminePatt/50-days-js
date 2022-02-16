const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)

        const c = +counter.innerText

        const increment = target / 200
        // *NOTE* Determines what the increment for each counter is
        // console.log(increment);

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
            // *NOTE* Delay of one milisecond
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})