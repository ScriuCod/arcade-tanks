namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Present = SpriteKind.create()
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
    if (sprites.readDataNumber(tankCharacter, "activeMunition") < sprites.readDataNumber(tankCharacter, "maxMunition")) {
        music.pewPew.play()
        projectile = sprites.create(img`
            2 f 
            f 2 
            `, SpriteKind.Projectile)
        projectile.setPosition(tankCharacter.x, tankCharacter.y)
        console.log(sprites.readDataString(tankCharacter, "orientation"))
        if (sprites.readDataString(tankCharacter, "orientation") == "up") {
            projectile.setPosition(tankCharacter.x, tankCharacter.y - 7)
            projectile.setVelocity(0, projectileSpeed * -1)
        } else if (sprites.readDataString(tankCharacter, "orientation") == "down") {
            projectile.y += 5
            projectile.setVelocity(0, projectileSpeed)
        } else if (sprites.readDataString(tankCharacter, "orientation") == "right") {
            projectile.x += 5
            projectile.setVelocity(projectileSpeed, 0)
        } else if (sprites.readDataString(tankCharacter, "orientation") == "left") {
            projectile.x += -5
            projectile.setVelocity(projectileSpeed * -1, 0)
        }
    }
})
function imitLevel (level: number) {
    bricksDifficulty = 30
    scene.setBackgroundColor(7)
    if (level == 0) {
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020203010101010101010103010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010302020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3], TileScale.Sixteen))
        randomWalls()
    } else if (level == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000003010101010101010103010201020101020102010101010104040101010101010101040401010101010201020101020102010301010101010101010302020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . 
            . 2 . 2 . . 2 . 2 . 
            . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 
            . 2 . 2 . . 2 . 2 . 
            . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
        randomWalls()
    }
    tiles.placeOnRandomTile(tankCharacter, myTiles.tile3)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    setOrientation("left")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    setOrientation("right")
})
function randomWalls () {
    list = tiles.getTilesByType(sprites.castle.tilePath5)
    for (let index = 0; index < bricksDifficulty; index++) {
        randomLocation = list[randint(0, list.length - 1)]
        tiles.setTileAt(randomLocation, myTiles.tile1)
        tiles.setWallAt(randomLocation, true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Present, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    music.baDing.play()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    setOrientation("down")
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, myTiles.tile1)) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, sprites.castle.tilePath5)
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(location, myTiles.tile4)) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, sprites.castle.tilePath5)
        info.changeScoreBy(25)
        randomPresent = randint(1, 3)
        if (randomPresent == 1) {
            tiles.setTileAt(location, sprites.dungeon.floorLight0)
            tiles.setWallAt(location, true)
        } else if (randomPresent == 2) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d f f f f d f f f f d b 
                1 d d d d d d d f d f d d d d b 
                1 d d 5 d d d f d d d f f d d b 
                1 d 5 5 5 d f d d d d d d f d b 
                1 d d 5 d d f d d d f d d f d b 
                1 d d d d d f d d d d f f d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
            tiles.placeOnTile(sprPresent, location)
        } else if (randomPresent == 3) {
        	
        }
    }
    sprite.destroy()
})
function createPlayer () {
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
    sprites.setDataString(tankCharacter, "orientation", "up")
    sprites.setDataNumber(tankCharacter, "speed", 45)
    sprites.setDataNumber(tankCharacter, "maxMunition", 3)
    sprites.setDataNumber(tankCharacter, "activeMunition", 0)
    tankCharacter.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(tankCharacter, sprites.readDataNumber(tankCharacter, "speed"), sprites.readDataNumber(tankCharacter, "speed"))
}
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    sprites.changeDataNumberBy(tankCharacter, "activeMunition", 1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wall, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    sprites.changeDataNumberBy(tankCharacter, "activeMunition", -1)
})
let sprPresent: Sprite = null
let randomPresent = 0
let randomLocation: tiles.Location = null
let list: tiles.Location[] = []
let bricksDifficulty = 0
let projectile: Sprite = null
let tankCharacter: Sprite = null
let projectileSpeed = 0
info.setScore(0)
projectileSpeed = 80
createPlayer()
imitLevel(1)
