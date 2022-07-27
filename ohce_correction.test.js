
function reverse(x){
    return x.split("").reverse().join("")
}

function palindrom(string){
    let reversedString= reverse(string)
    if (string===reversedString){
        return ("gg")
    }

    return reversedString
}

class Ohce{
    constructor(date){
        this.date=date
    }

    on=false;

    run(string){
        if (string==="start"){
            this.on=true;
            return getGreetings(this.date.getHours())
        }

        if(!this.on) return "erreur"

        if (string === 'stop') return "aurevoir"

        return palindrom(string)
    }


}

function getGreetings(n){
    if (n<20) return "bonjour"
    return "bonsoir"
}

class MockDate{
    getHours(){
        return this.hour
    }
    constructor(hour){
        this.hour=hour
    }
}



test('reverse("allo") retourne olla ',()=>{
    expect(reverse("allo")).toBe("olla")
})


test('palindrom("ici") retourne gg',()=>{
    expect(palindrom('ici')).toBe("gg")
})

test('palindrom("allo") retourne olla',()=>{
    expect(palindrom('allo')).toBe("olla")
})

test('getGreetings(10) retourne bonjour ',()=>{
    expect(getGreetings(10)).toBe("bonjour")
})

test('getGreetings(20) retourne bonsoir ',()=>{
    expect(getGreetings(20)).toBe("bonsoir")
})

test('getGreetings(15) retourne bonjour ',()=>{
    expect(getGreetings(15)).toBe("bonjour")
})


test('ohce.run(start) retourn bonjour à 9 heure',()=>{
    let ohce=new Ohce(new MockDate(9))
    expect(ohce.run("start")).toBe("bonjour")
})

test('ohce.run(start) retourn bonjour à 21 heure',()=>{
    let ohce=new Ohce(new MockDate(21))
    expect(ohce.run("start")).toBe("bonsoir")
})


test('ohce.run(stop) retourn erreur si pas de start préalable' ,()=>{
    let ohce=new Ohce(new MockDate(21))
    expect(ohce.run("stop")).toBe("erreur")
})

test('ohce.run(stop) retourn aurevoir si start préalable' ,()=>{
    let ohce=new Ohce(new MockDate(21))
    ohce.run("start")
    expect(ohce.run("stop")).toBe("aurevoir")
})

test('ohce.run(bonjour) retourn erreur si pas de start préalable' ,()=>{
    let ohce=new Ohce(new MockDate(21))

    expect(ohce.run("bonjour")).toBe("erreur")
})

test('ohce.run(bonjour) retourn ruojnob si start préalable' ,()=>{
    let ohce=new Ohce(new MockDate(21))
    ohce.run("start")
    expect(ohce.run("bonjour")).toBe("ruojnob")
})

test('ohce.run(ici) retourn gg si start préalable' ,()=>{
    let ohce=new Ohce(new MockDate(21))
    ohce.run("start")
    expect(ohce.run("ici")).toBe("gg")
})
