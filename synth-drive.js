setcpm(15);
  samples('github:bubobubobubobubo/dough-waveforms')
stack(
  s("bd:4")
    .bank("Rolandtr808")              // use the 909
    .struct(`
    x ~ ~ ~                  
    x ~ ~ ~            
    x ~ ~ ~            
    x ~ ~ ~             
    `)
  //.swingBy(1/3,2)
  .gain(2)
  ,
  s("sd:2")
    .bank("Rolandtr909")              // use the 909
    .struct(`
    ~ ~ x ~                  
    ~ ~ x ~                  
    ~ ~ x ~                  
    ~ ~ x ~                  
    `)
  .gain(1.8)
  ,
  s("hh:0")
    .bank("Rolandtr909")              // use the 909
    .struct(`
    ~ x ~ x                  
    x x x x                  
    ~ x ~ x                  
    x x <~ x ~ [x x ]> x                  
    `)
  .swingBy(1/12,8)
  // .gain(0.7)
  .gain("0.5 0.6 0.4 0.7 0.5 0.6 0.4 0.8")
  .gain(0.3)
  ,
  
  s("sh:0")                           // shaker
    .bank("akailinn")                 //
    .struct(`
    x x ~ x                  
    x x ~ [x x ]                  
    x x ~ x                  
    x x ~ x                  
    `)
  .swingBy(1/6, 2)
  // .gain(0.7)
  .gain("0.5 0.4 0.2 0.7 0.5 0.2 0.4 0.8")
  .gain(0.08)
  ,

  arrange
  (
    [12,"<c2*16> <g2 eb2> <eb2 g2> <bb2 eb2>"],   //cm7
    [04,"<eb2*16> <f2 f2> <ab2 c2> <f2 f2>"],     //fm7
  )
  .note().s("wt_snippets")
      .struct(`
    ~ x x ~                  
    x ~ x ~                  
    ~ x x ~                  
    x ~ x ~                  
    `)
  .transpose("<0 0 0 8 0 0 0 [8 ~ 8 8 8 ~ 8 0]>")
  .lpf(sine.range(100,sine.range(100,1000).slow(4)).slow(6))
  .lpenv(-7).lpa(.09).room(.5).fast(2)
  .hpf(sine.range(50,sine.range(80,200).slow(12)))
  .pan(rand.range(0.45,0.55))
  .gain("0.3 0.6 0.7 0.4 0.5 0.6 0.8 0.4")
  .gain(4)
)
.room(0.1)
