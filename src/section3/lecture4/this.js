function a() {
    console.log(this)
}

const b = () => {
    console.log(this)
}

a() // global
b() // {}
