// Simple 4/4 drum pattern with some basic variations

setcpm(15);

stack(
  s("bd")
    .bank("Rolandtr909")              // use the 909
    .struct("x ~ ~ ~                  x ~ ~ ~            x ~ ~ ~            x ~ ~ ~             ")
  ,
  s("sd:2")                           // use 3rd snare drum sound
    .bank("Rolandtr909")
    // occasionally miss two of the snare beats (one in twenty chance)
    .struct("~ ~ x ~                  ~ ~ x?0.05 ~       ~ ~ x ~            ~ ~ x?0.05 ~        ")
    //.swing(1/3, 4)
  ,
  s("hh:0")
    .bank("Rolandtr909")
    // every four cycles double up the 2nd hat
    .struct("~ x ~ <x x x [x x ]>     ~ x ~ x            ~ x ~ x            ~ x?0.8 ~ x         ")
    // short decay to tighten up the hat sound
    .decay(0.03)
    //.swing(1/3, 4)
  ,
)
.room(0.1)
