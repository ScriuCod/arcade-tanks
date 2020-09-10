controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
function randomWalls () {
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000001010101010101010101010201020101020102010101010103030101010101010101030301010101010201020101020102010101010101010101010102020202020202020202`, img`
        2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile1], TileScale.Sixteen))
}
scene.setBackgroundColor(7)
let tankCharacter = sprites.create(img`
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
tankCharacter,
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
info.setScore(0)
tankCharacter.setPosition(134, 93)
controller.moveSprite(tankCharacter)
tankCharacter.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202`, img`
    2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0], TileScale.Sixteen))
