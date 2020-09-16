namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    setOrientation("up")
})
function setOrientation (newOrientation: string) {
    if (newOrientation == "up") {
        sprites.setDataString(tankCharacter, "orientation", newOrientation)
        tankCharacter.setImage(img`
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
            `)
    } else if (newOrientation == "down") {
        sprites.setDataString(tankCharacter, "orientation", newOrientation)
        tankCharacter.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f . . . . . . . . f f f . 
            . f f f f f f f f f f f f d f . 
            . f d f 4 4 4 4 4 4 4 4 f f f . 
            . f f f 4 f 4 f f 4 f 4 f d f . 
            . f d f 4 4 4 4 4 4 4 4 f f f . 
            . f f f 4 4 2 2 2 2 4 4 f d f . 
            . f d f 4 4 2 e e 2 4 4 f f f . 
            . f f f 4 4 2 e e 2 4 4 f d f . 
            . f d f 4 4 4 e e 4 4 4 f f f . 
            . f f f 4 4 4 e e 4 4 4 f d f . 
            . f d f f f f e e f f f f f f . 
            . f f f . . . e e . . . f f f . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (newOrientation == "right") {
        sprites.setDataString(tankCharacter, "orientation", newOrientation)
        tankCharacter.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f . . . 
            . f d f d f d f d f d f f . . . 
            . f f f f f f f f f f f f . . . 
            . . f 4 4 4 4 4 4 4 4 f . . . . 
            . . f 4 f 4 4 4 4 4 4 f . . . . 
            . . f 4 4 4 2 2 2 4 4 f . . . . 
            . . f 4 f 4 2 e e e e e e e e . 
            . . f 4 f 4 2 e e e e e e e e . 
            . . f 4 4 4 2 2 2 4 4 f . . . . 
            . . f 4 f 4 4 4 4 4 4 f . . . . 
            . . f 4 4 4 4 4 4 4 4 f . . . . 
            . f f f f f f f f f f f f . . . 
            . f f d f d f d f d f d f . . . 
            . f f f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (newOrientation == "left") {
        sprites.setDataString(tankCharacter, "orientation", newOrientation)
        tankCharacter.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f . 
            . . . f d f d f d f d f d f f . 
            . . . f f f f f f f f f f f f . 
            . . . . f 4 4 4 4 4 4 4 4 f . . 
            . . . . f 4 4 4 4 4 4 f 4 f . . 
            . . . . f 4 4 2 2 2 4 4 4 f . . 
            . e e e e e e e e 2 4 f 4 f . . 
            . e e e e e e e e 2 4 f 4 f . . 
            . . . . f 4 4 2 2 2 4 4 4 f . . 
            . . . . f 4 4 4 4 4 4 f 4 f . . 
            . . . . f 4 4 4 4 4 4 4 4 f . . 
            . . . f f f f f f f f f f f f . 
            . . . f f d f d f d f d f d f . 
            . . . f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        f 2 
        2 f 
        `, tankCharacter, 0, -50)
    projectile.y += -5
})
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
            `, SpriteKind.Wall)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    setOrientation("down")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wall, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
let mySprite: Sprite = null
let bricksDifficulty = 0
let projectile: Sprite = null
let tankCharacter: Sprite = null
scene.setBackgroundColor(7)
tankCharacter = sprites.create(img`
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
sprites.setDataString(tankCharacter, "orientatation", "up")
info.setScore(0)
controller.moveSprite(tankCharacter)
tankCharacter.setFlag(SpriteFlag.StayInScreen, true)
randomWalls()
tiles.placeOnRandomTile(tankCharacter, myTiles.tile3)
