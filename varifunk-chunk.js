setcps(0.4)  //tempo

// Define the LFO here so it can be used and read separately
const myLfo = sine.range(0.1, 1).slow(8)

stack(
  s("bd").bank("yamaharx21")     
    .struct("x ~ x ~ x ~ x ~ x ~ x ~ x ~ x?0.25 ~").slow(4,4,4,1)
    .color("blue red")
    ._scope({scale: .5, thickness:3}),
  
  s("sd:{1 2}").bank("viscospacedrum")                                
    .struct("~ x ~ x?0.025")
    .decay(0.2)
    .release(0.4)
    .color("blue red")
    ._scope({scale: 1, thickness:0.5})  ,
  
  s("rd:2*8")                            
    .bank("ry30")
    .decay(rand.range(0.1,myLfo))
    .gain(0.35)
    .swingBy(1/3, 2)
    .color("blue red red red")
        ._scope({scale: 1, thickness:0.5}),
  note("a1 ~ a2 ~ a1 ~ a2 ~ <a1 a3> ~ a2 ~ a1 ~ a1@0.25 ~@0.25 <g2 g#2>@0.5 ~").slow(2,2,4,2,2,1)
    .slow(1)  // global tweak
    .sound("gm_slap_bass_2:{1 0 0 1 1 1 0 1 1 0 0 1 1 1 0 1}").slow(4,0.5,0.5,1,1,1)
    .attack(0.02)
    .decay(0.2)
    .sustain(0)
    .release(0.2)
    .gain(1.3)
    .lpf(900)
    .hpf(80)
    .swingBy(1/3, 16)
    .color("yellow red green red")
    ._scope(
      {
        scale: 1, thickness:3
      }),
)
.room(0.25)
