namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Present = SpriteKind.create()
}
function tankChangeActiveMunition (tankID: number, munition: number) {
    if (tankID == 1) {
        sprites.changeDataNumberBy(tank_01, "activeMunition", munition)
    } else if (tankID == 2) {
        sprites.changeDataNumberBy(tank_02, "activeMunition", munition)
    } else if (tankID == 3) {
        sprites.changeDataNumberBy(tank_03, "activeMunition", munition)
    } else if (tankID == 4) {
        sprites.changeDataNumberBy(tank_04, "activeMunition", munition)
    }
}
function tankOrientation (tank: Sprite, orientation: string) {
    if (orientation == "up") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . f f f . . . e e . . . f f f . 
            . f f f f f f e e f f f f d f . 
            . f d f 1 1 1 e e 1 1 1 f f f . 
            . f f f 1 1 1 e e 1 1 1 f d f . 
            . f d f 1 1 2 e e 2 1 1 f f f . 
            . f f f 1 1 2 e e 2 1 1 f d f . 
            . f d f 1 1 2 2 2 2 1 1 f f f . 
            . f f f 1 1 1 1 1 1 1 1 f d f . 
            . f d f 1 f 1 f f 1 f 1 f f f . 
            . f f f 1 1 1 1 1 1 1 1 f d f . 
            . f d f f f f f f f f f f f f . 
            . f f f . . . . . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (orientation == "down") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f . . . . . . . . f f f . 
            . f f f f f f f f f f f f d f . 
            . f d f 1 1 1 1 1 1 1 1 f f f . 
            . f f f 1 f 1 f f 1 f 1 f d f . 
            . f d f 1 1 1 1 1 1 1 1 f f f . 
            . f f f 1 1 2 2 2 2 1 1 f d f . 
            . f d f 1 1 2 e e 2 1 1 f f f . 
            . f f f 1 1 2 e e 2 1 1 f d f . 
            . f d f 1 1 1 e e 1 1 1 f f f . 
            . f f f 1 1 1 e e 1 1 1 f d f . 
            . f d f f f f e e f f f f f f . 
            . f f f . . . e e . . . f f f . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (orientation == "right") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f . . . 
            . f d f d f d f d f d f f . . . 
            . f f f f f f f f f f f f . . . 
            . . f 1 1 1 1 1 1 1 1 f . . . . 
            . . f 1 f 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 2 2 2 1 1 f . . . . 
            . . f 1 f 1 2 e e e e e e e e . 
            . . f 1 f 1 2 e e e e e e e e . 
            . . f 1 1 1 2 2 2 1 1 f . . . . 
            . . f 1 f 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 1 1 1 1 1 f . . . . 
            . f f f f f f f f f f f f . . . 
            . f f d f d f d f d f d f . . . 
            . f f f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (orientation == "left") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f . 
            . . . f d f d f d f d f d f f . 
            . . . f f f f f f f f f f f f . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 f 1 f . . 
            . . . . f 1 1 2 2 2 1 1 1 f . . 
            . e e e e e e e e 2 1 f 1 f . . 
            . e e e e e e e e 2 1 f 1 f . . 
            . . . . f 1 1 2 2 2 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 f 1 f . . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . f f f f f f f f f f f f . 
            . . . f f d f d f d f d f d f . 
            . . . f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    sprites.setDataString(tank, "orientation", orientation)
    tankColorise(tank, sprites.readDataNumber(tank, "tankID"))
}
function tankChangeScore (tankID: number, score: number) {
    if (tankID == 1) {
        info.player1.changeScoreBy(score)
    } else if (tankID == 2) {
        info.player2.changeScoreBy(score)
    } else if (tankID == 3) {
        info.player3.changeScoreBy(score)
    } else if (tankID == 4) {
        info.player4.changeScoreBy(score)
    }
}
function tankRandomDecision (tank: Sprite, _type: string) {
    listPosibilities = []
    if (_type == "shoot") {
        tile_01 = myTiles.tile1
        tile_02 = myTiles.tile4
    } else if (_type == "walk") {
        tile_01 = sprites.castle.tilePath5
        tile_02 = myTiles.tile5
    }
    if (tank.tileKindAt(TileDirection.Top, tile_01) || tank.tileKindAt(TileDirection.Top, tile_02)) {
        listPosibilities.push("up")
    }
    if (tank.tileKindAt(TileDirection.Bottom, tile_01) || tank.tileKindAt(TileDirection.Bottom, tile_02)) {
        listPosibilities.push("down")
    }
    if (tank.tileKindAt(TileDirection.Left, tile_01) || tank.tileKindAt(TileDirection.Left, tile_02)) {
        listPosibilities.push("left")
    }
    if (tank.tileKindAt(TileDirection.Right, tile_01) || tank.tileKindAt(TileDirection.Right, tile_02)) {
        listPosibilities.push("right")
    }
    if (listPosibilities.length == 0) {
        listPosibilities.push("clear")
    }
    pickedPossibility = listPosibilities[randint(0, listPosibilities.length - 1)]
    console.logValue("randomDecision-" + _type + "-" + sprites.readDataNumber(tank, "tankID"), pickedPossibility)
    return pickedPossibility
}
function tankMove (tank: Sprite, orientation: string) {
    if (orientation == "up") {
        tank.vy += -20
    } else if (orientation == "down") {
        tank.vy += 20
    } else if (orientation == "right") {
        tank.vx += 20
    } else if (orientation == "left") {
        tank.vx += -20
    }
}
function imitLevel (level: number) {
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
        createRandomWalls()
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
        createRandomWalls()
    }
}
function tankColorise (tank: Sprite, tankID: number) {
    if (tankID == 1) {
        tank.image.replace(1, 4)
    } else if (tankID == 2) {
        tank.image.replace(1, 2)
    } else if (tankID == 3) {
        tank.image.replace(1, 9)
    } else if (tankID == 4) {
        tank.image.replace(1, 7)
    }
}
function placeTank (tank: Sprite) {
    startLocations = tiles.getTilesByType(myTiles.tile3)
    randomStartLocation = startLocations[randint(0, startLocations.length - 1)]
    tiles.placeOnTile(tank, randomStartLocation)
    tiles.setTileAt(randomStartLocation, sprites.castle.tilePath5)
}
function tankShoot (tank: Sprite) {
    if (sprites.readDataNumber(tank, "activeMunition") < sprites.readDataNumber(tank, "maxMunition")) {
        music.pewPew.play()
        projectile = sprites.create(img`
            2 f 
            f 2 
            `, SpriteKind.Projectile)
        projectile.setPosition(tank.x, tank.y)
        sprites.setDataNumber(projectile, "tankID", sprites.readDataNumber(tank, "tankID"))
        if (sprites.readDataString(tank, "orientation") == "up") {
            projectile.setPosition(tank.x, tank.y - 7)
            projectile.setVelocity(0, projectileSpeed * -1)
        } else if (sprites.readDataString(tank, "orientation") == "down") {
            projectile.y += 5
            projectile.setVelocity(0, projectileSpeed)
        } else if (sprites.readDataString(tank, "orientation") == "right") {
            projectile.x += 5
            projectile.setVelocity(projectileSpeed, 0)
        } else if (sprites.readDataString(tank, "orientation") == "left") {
            projectile.x += -5
            projectile.setVelocity(projectileSpeed * -1, 0)
        }
    }
}
function tankCreate (tank: Sprite, tankID: number) {
    tank.setFlag(SpriteFlag.ShowPhysics, false)
    tank.setFlag(SpriteFlag.StayInScreen, true)
    sprites.setDataNumber(tank, "speed", 45)
    sprites.setDataNumber(tank, "tankID", tankID)
    sprites.setDataNumber(tank, "maxMunition", 3)
    sprites.setDataNumber(tank, "activeMunition", 0)
    sprites.setDataString(tank, "orientation", "up")
    if (tank.kind() == SpriteKind.Player) {
        controller.moveSprite(tank, sprites.readDataNumber(tank, "speed"), sprites.readDataNumber(tank, "speed"))
    }
    placeTank(tank)
    tankOrientation(tank, "up")
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Present, function (sprite, otherSprite) {
    otherSprite.destroy()
    tankChangeScore(sprites.readDataNumber(sprite, "tankID"), 75)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Present, function (sprite, otherSprite) {
    otherSprite.destroy()
    tankChangeScore(sprites.readDataNumber(sprite, "tankID"), 75)
    music.baDing.play()
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    tankShoot(tank_01)
})
function createRandomWalls () {
    wallLocationLIist = tiles.getTilesByType(sprites.castle.tilePath5)
    for (let index = 0; index < bricksDifficulty; index++) {
        randomLocation = wallLocationLIist[randint(0, wallLocationLIist.length - 1)]
        tiles.setTileAt(randomLocation, myTiles.tile1)
        tiles.setWallAt(randomLocation, true)
    }
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, myTiles.tile1)) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, sprites.castle.tilePath5)
        tankChangeScore(sprites.readDataNumber(sprite, "tankID"), 5)
    } else if (tiles.tileAtLocationEquals(location, myTiles.tile4)) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, sprites.castle.tilePath5)
        tankChangeScore(sprites.readDataNumber(sprite, "tankID"), 25)
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
        }
    }
    sprite.destroy()
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    tankChangeActiveMunition(sprites.readDataNumber(sprite, "tankID"), 1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wall, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    tankChangeActiveMunition(sprites.readDataNumber(sprite, "tankID"), -1)
})
let randomOrientation = ""
let randomShoot = ""
let tanks: Sprite[] = []
let sprPresent: Sprite = null
let randomPresent = 0
let randomLocation: tiles.Location = null
let wallLocationLIist: tiles.Location[] = []
let projectile: Sprite = null
let randomStartLocation: tiles.Location = null
let startLocations: tiles.Location[] = []
let pickedPossibility = ""
let tile_02: Image = null
let tile_01: Image = null
let listPosibilities: string[] = []
let tank_04: Sprite = null
let tank_03: Sprite = null
let tank_02: Sprite = null
let tank_01: Sprite = null
let projectileSpeed = 0
let bricksDifficulty = 0
bricksDifficulty = 30
projectileSpeed = 80
imitLevel(1)
tank_01 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f f f . . . e e . . . f f f . 
    . f f f f f f e e f f f f d f . 
    . f d f 1 1 1 e e 1 1 1 f f f . 
    . f f f 1 1 1 e e 1 1 1 f d f . 
    . f d f 1 1 2 e e 2 1 1 f f f . 
    . f f f 1 1 2 e e 2 1 1 f d f . 
    . f d f 1 1 2 2 2 2 1 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f 1 f 1 f f 1 f 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f f f f f f f f f f f f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tank_02 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f f f . . . e e . . . f f f . 
    . f f f f f f e e f f f f d f . 
    . f d f 1 1 1 e e 1 1 1 f f f . 
    . f f f 1 1 1 e e 1 1 1 f d f . 
    . f d f 1 1 2 e e 2 1 1 f f f . 
    . f f f 1 1 2 e e 2 1 1 f d f . 
    . f d f 1 1 2 2 2 2 1 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f 1 f 1 f f 1 f 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f f f f f f f f f f f f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tank_03 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f f f . . . e e . . . f f f . 
    . f f f f f f e e f f f f d f . 
    . f d f 1 1 1 e e 1 1 1 f f f . 
    . f f f 1 1 1 e e 1 1 1 f d f . 
    . f d f 1 1 2 e e 2 1 1 f f f . 
    . f f f 1 1 2 e e 2 1 1 f d f . 
    . f d f 1 1 2 2 2 2 1 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f 1 f 1 f f 1 f 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f f f f f f f f f f f f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tank_04 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . f f f . . . e e . . . f f f . 
    . f f f f f f e e f f f f d f . 
    . f d f 1 1 1 e e 1 1 1 f f f . 
    . f f f 1 1 1 e e 1 1 1 f d f . 
    . f d f 1 1 2 e e 2 1 1 f f f . 
    . f f f 1 1 2 e e 2 1 1 f d f . 
    . f d f 1 1 2 2 2 2 1 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f 1 f 1 f f 1 f 1 f f f . 
    . f f f 1 1 1 1 1 1 1 1 f d f . 
    . f d f f f f f f f f f f f f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tankCreate(tank_01, 1)
tankCreate(tank_02, 2)
tankCreate(tank_03, 3)
tankCreate(tank_04, 4)
game.onUpdate(function () {
    if (controller.player1.isPressed(ControllerButton.Up)) {
        tankOrientation(tank_01, "up")
    } else if (controller.player1.isPressed(ControllerButton.Down)) {
        tankOrientation(tank_01, "down")
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
        tankOrientation(tank_01, "left")
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
        tankOrientation(tank_01, "right")
    }
})
game.onUpdateInterval(500, function () {
    tanks = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of tanks) {
        randomShoot = tankRandomDecision(value, "shoot")
        if (randomShoot == "clear") {
            randomOrientation = tankRandomDecision(value, "walk")
            tankOrientation(value, randomOrientation)
            tankMove(value, randomOrientation)
            if (Math.percentChance(33.3333)) {
                tankShoot(value)
            }
        } else {
            tankOrientation(value, randomShoot)
            tankShoot(value)
        }
    }
})
