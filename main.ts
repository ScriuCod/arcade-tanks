scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f f f . . . e e . . . f f f . 
    . f f f f f f e e f f f f d f . 
    . f d f 4 4 4 e e 4 4 4 f f f . 
    . f f f 4 4 4 e e 4 4 4 f d f . 
    . f d f 4 4 2 e e 2 4 4 f f f . 
    . f f f 4 4 2 e e 2 4 4 f d f . 
    . f d f 4 4 2 2 2 2 4 4 f f f . 
    . f f f 4 4 4 4 4 4 4 4 f d f . 
    . f d f 4 f 4 f f 4 f 4 f f f . 
    . f f f 4 4 4 4 4 4 4 4 f d f . 
    . f d f f f f f f f f f f f f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f f f . . . e e . . . f f f . 
    . f d f f f f e e f f f f d f . 
    . f f f 4 4 4 e e 4 4 4 f f f . 
    . f d f 4 4 4 e e 4 4 4 f d f . 
    . f f f 4 4 2 e e 2 4 4 f f f . 
    . f d f 4 4 2 e e 2 4 4 f d f . 
    . f f f 4 4 2 2 2 2 4 4 f f f . 
    . f d f 4 4 4 4 4 4 4 4 f d f . 
    . f f f 4 f 4 f f 4 f 4 f f f . 
    . f d f 4 4 4 4 4 4 4 4 f d f . 
    . f f f f f f f f f f f f f f . 
    . f d f . . . . . . . . f d f . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f d f . . . e e . . . f d f . 
    . f f f f f f e e f f f f f f . 
    . f d f 4 4 4 e e 4 4 4 f d f . 
    . f f f 4 4 4 e e 4 4 4 f f f . 
    . f d f 4 4 2 e e 2 4 4 f d f . 
    . f f f 4 4 2 e e 2 4 4 f f f . 
    . f d f 4 4 2 2 2 2 4 4 f d f . 
    . f f f 4 4 4 4 4 4 4 4 f f f . 
    . f d f 4 f 4 f f 4 f 4 f d f . 
    . f f f 4 4 4 4 4 4 4 4 f f f . 
    . f d f f f f f f f f f f d f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
