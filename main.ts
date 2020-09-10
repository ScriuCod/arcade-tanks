function randomWalls () {
    bricksDifficulty = 30
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000004010101010101010104010201020101020102010101010103030101010101010101030301010101010201020101020102010401010101010101010402020202020202020202`, img`
        2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . 
        . 2 . 2 . . 2 . 2 . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . 2 . 2 . . 2 . 2 . 
        . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,myTiles.tile3], TileScale.Sixteen))
    for (let index = 0; index < bricksDifficulty; index++) {
        mySprite = sprites.create(img`
            e e e e e e e e e e e e e e e e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e e e e e e e e e e e e e e e e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e e e e e e e e e e e e e e e e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e e e e e e e e e e e e e e e e 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
    }
}
let mySprite: Sprite = null
let bricksDifficulty = 0
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
info.setScore(0)
controller.moveSprite(tankCharacter)
tankCharacter.setFlag(SpriteFlag.StayInScreen, true)
randomWalls()
tiles.placeOnRandomTile(tankCharacter, myTiles.tile3)
