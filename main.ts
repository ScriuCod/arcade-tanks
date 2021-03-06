namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Present = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Explosion = SpriteKind.create()
    export const Sentinel = SpriteKind.create()
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
    tankColorise(tank)
}
function tankChangeScore (tank: Sprite, score: number) {
    tankID = sprites.readDataNumber(tank, "tankID")
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.Bomb).length < BombMax) {
    	
    }
    sentinelCreate(tank_01)
})
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
    scene.setBackgroundColor(13)
    for (let value of sprites.allOfKind(SpriteKind.Sentinel)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Present)) {
        value.destroy()
    }
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
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020203010101010101010103010201020101020102010101010104040101010101010101040401010101010201020101020102010301010101010101010302020202020202020202`, img`
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
    } else if (level == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000001010101010101010101010401030404030104010101040404040404010101010404040404040101010401030404030104010101010101010101010102020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . 
            . 2 . . 2 2 . . 2 . 
            . . 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 . . 
            . 2 . . 2 2 . . 2 . 
            . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
        createRandomWalls()
    } else if (level == 3) {
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000001010102010101020104010201020102010201040102010201020102010401020302030203020304010201020102010201040102010101020101010402020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 
            . . . 2 . . . 2 . 2 
            . 2 . 2 . 2 . 2 . 2 
            . 2 . 2 . 2 . 2 . 2 
            . 2 . 2 . 2 . 2 . 2 
            . 2 . 2 . 2 . 2 . 2 
            . 2 . . . 2 . . . 2 
            2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
    } else if (level == 4) {
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000003010202020202020103020104040404040401020201010101010101010202010101010101010102020104040404040401020301020202020202010302020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 
            . . 2 2 2 2 2 2 . . 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            . . 2 2 2 2 2 2 . . 
            2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
        createRandomWalls()
    } else if (level == 5) {
        tankCheckWinner()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "tankID") != sprites.readDataNumber(otherSprite, "tankID")) {
        tankChangeLife(otherSprite, -1)
        tankChangeScore(sprite, 15)
        if (sprites.readDataNumber(otherSprite, "tankID") == 1 && info.player1.life() == 0) {
            tankChangeScore(sprite, 10)
            otherSprite.destroy()
        }
        sprite.destroy()
    }
})
function tankColorise (tank: Sprite) {
    tankID = sprites.readDataNumber(tank, "tankID")
    if (tankID == 1) {
        tank.image.replace(1, 2)
    } else if (tankID == 2) {
        tank.image.replace(1, 8)
    } else if (tankID == 3) {
        tank.image.replace(1, 4)
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
function startNewLevel () {
    gameLevel += 1
    imitLevel(gameLevel)
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
    music.powerUp.playUntilDone()
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
info.onCountdownEnd(function () {
    for (let value of sprites.allOfKind(SpriteKind.Bomb)) {
        value.destroy(effects.fire, 500)
        scene.cameraShake(4, 500)
        if (value.tileKindAt(TileDirection.Top, sprites.dungeon.floorLight0) || value.tileKindAt(TileDirection.Top, myTiles.tile1)) {
            tmpLocation = tiles.getTileLocation(value.x / 16, value.y / 16 - 1)
            sprExplosion = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Explosion)
            tiles.placeOnTile(sprExplosion, tmpLocation)
            tiles.setTileAt(tmpLocation, sprites.castle.tilePath5)
            tiles.setWallAt(tmpLocation, false)
        }
        if (value.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight0) || value.tileKindAt(TileDirection.Bottom, myTiles.tile1)) {
            tmpLocation = tiles.getTileLocation(value.x / 16 - 0, value.y / 16 + 1)
            sprExplosion = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Explosion)
            tiles.placeOnTile(sprExplosion, tmpLocation)
            tiles.setTileAt(tmpLocation, sprites.castle.tilePath5)
            tiles.setWallAt(tmpLocation, false)
        }
        if (value.tileKindAt(TileDirection.Right, sprites.dungeon.floorLight0) || value.tileKindAt(TileDirection.Right, myTiles.tile1)) {
            tmpLocation = tiles.getTileLocation(value.x / 16 + 1, value.y / 16 + 0)
            sprExplosion = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Explosion)
            tiles.placeOnTile(sprExplosion, tmpLocation)
            tiles.setTileAt(tmpLocation, sprites.castle.tilePath5)
            tiles.setWallAt(tmpLocation, false)
        }
        if (value.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight0) || value.tileKindAt(TileDirection.Left, myTiles.tile1)) {
            tmpLocation = tiles.getTileLocation(value.x / 16 - 1, value.y / 16 + 0)
            sprExplosion = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Explosion)
            tiles.placeOnTile(sprExplosion, tmpLocation)
            tiles.setTileAt(tmpLocation, sprites.castle.tilePath5)
            tiles.setWallAt(tmpLocation, false)
        }
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Explosion)) {
        value2.destroy(effects.fire, 250)
    }
})
function tankCreate (tank: Sprite, tankID: number) {
    tank.setFlag(SpriteFlag.ShowPhysics, false)
    tank.setFlag(SpriteFlag.StayInScreen, true)
    sprites.setDataBoolean(tank, "ignoreColor", false)
    sprites.setDataBoolean(tank, "controlsReverse", false)
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
    tankChangeLife(tank, 2)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Present, function (sprite, otherSprite) {
    sprite.destroy()
    tankChangeScore(sprite, 75)
    music.baDing.play()
})
function tankCheckWinner () {
    if (sprites.allOfKind(SpriteKind.Enemy).length == 0) {
        if (gameLevel == gameLevelMax) {
            game.showLongText("Finally you won, \"took you long enough\" :-)", DialogLayout.Bottom)
            game.over(true, effects.confetti)
        } else {
            info.player1.changeLifeBy(1)
            startNewLevel()
        }
    } else if (sprites.allOfKind(SpriteKind.Player).length == 0) {
        game.over(false, effects.confetti)
    }
}
function sentinelShoot (sentinel: Sprite) {
    projectile = sprites.create(img`
        2 f 
        f 2 
        `, SpriteKind.Projectile)
    projectile.setPosition(sentinel.x, sentinel.y)
    sprites.setDataNumber(projectile, "tankID", sprites.readDataNumber(sentinel, "tankID"))
    if (sprites.readDataString(sentinel, "orientation") == "up") {
        projectile.setPosition(sentinel.x, sentinel.y - 7)
        projectile.setVelocity(0, projectileSpeed * -1)
        sprites.setDataString(sentinel, "orientation", "right")
    } else if (sprites.readDataString(sentinel, "orientation") == "down") {
        projectile.y += 5
        projectile.setVelocity(0, projectileSpeed)
        sprites.setDataString(sentinel, "orientation", "left")
    } else if (sprites.readDataString(sentinel, "orientation") == "right") {
        projectile.x += 5
        projectile.setVelocity(projectileSpeed, 0)
        sprites.setDataString(sentinel, "orientation", "down")
    } else if (sprites.readDataString(sentinel, "orientation") == "left") {
        projectile.x += -5
        projectile.setVelocity(projectileSpeed * -1, 0)
        sprites.setDataString(sentinel, "orientation", "up")
    }
    sprites.changeDataNumberBy(sentinel, "munition", -1)
    if (sprites.readDataNumber(sentinel, "munition") == 0) {
        sentinel.destroy()
    }
}
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
        tankChangeScore(sprite, 5)
    } else if (tiles.tileAtLocationEquals(location, myTiles.tile4)) {
        tiles.setWallAt(location, false)
        if (Math.percentChance(2)) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 f f 7 f 7 7 f 7 7 b 
                1 7 7 5 7 7 7 f 7 f 7 f 7 7 7 b 
                1 7 5 5 5 7 7 f 7 f f 7 7 7 7 b 
                1 7 7 5 7 7 7 f 7 f 7 f 7 7 7 b 
                1 7 7 7 7 7 7 f 7 f 7 7 f 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
            tankChangeScore(sprite, 1000)
        } else if (Math.percentChance(10)) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d f f d d d d d d b 
                1 d d d d d d f f d d d d d d b 
                1 d d d d f f f f f f d d d d b 
                1 d d d d f 2 2 2 2 f d d d d b 
                1 d d f f f 2 2 2 2 f f f d d b 
                1 d d f f f 2 2 2 2 f f f d d b 
                1 d d d d f 2 2 2 2 f d d d d b 
                1 d d d d f f f f f f d d d d b 
                1 d d d d d d f f d d d d d d b 
                1 d d d d d d f f d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
        } else if (Math.percentChance(10)) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 f f 4 4 f f f f 4 b 
                1 4 4 4 4 f 4 4 f 4 f 4 4 4 4 b 
                1 4 4 4 4 4 4 4 f 4 4 f f 4 4 b 
                1 4 5 5 5 4 4 f 4 4 4 4 4 f 4 b 
                1 4 4 4 4 4 f 4 4 4 f 4 4 f 4 b 
                1 4 4 4 4 f f f f 4 4 f f 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
        } else if (Math.percentChance(10)) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d 2 2 2 d d d 2 2 2 d d d b 
                1 d 2 2 2 2 2 d 2 2 2 2 2 d d b 
                1 d 2 2 5 2 2 2 2 2 2 2 2 d d b 
                1 d d 2 5 2 2 2 2 2 2 2 d d d b 
                1 d 5 5 5 5 5 2 2 2 2 d d d d b 
                1 d d d 5 2 2 2 2 2 d d d d d b 
                1 d d d 5 d 2 2 2 d d d d d d b 
                1 d d d d d d 2 d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d d d d d d d d b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
        } else if (Math.percentChance(10)) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 f 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 f f 4 4 b 
                1 4 4 4 f 4 f f f f f f f f 4 b 
                1 4 4 f f 4 4 4 4 4 4 f f 4 4 b 
                1 4 f f f f f f f 4 4 f 4 4 4 b 
                1 4 4 f f 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 f 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
        } else if (Math.percentChance(10)) {
            sprPresent = sprites.create(img`
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                1 d d d d d d d d d d d d d d b 
                1 d d d d d d d 2 5 d d d d d b 
                1 d d d d d d d f 2 d d d d d b 
                1 d d d d d d f d d d d d d d b 
                1 d d d d d d f d d d d d d d b 
                1 d d d d f f f f f f d d d d b 
                1 d d d f f 1 1 1 f f f d d d b 
                1 d d d f f 1 f f 1 f f d d d b 
                1 d d d f f 1 1 1 f f f d d d b 
                1 d d d f f 1 f f 1 f f d d d b 
                1 d d d f f 1 1 1 f f f d d d b 
                1 d d d f f f f f f f f d d d b 
                1 d d d d f f f f f f d d d d b 
                1 d d d d d d d d d d d d d d b 
                b b b b b b b b b b b b b b b . 
                `, SpriteKind.Present)
        } else if (Math.percentChance(40)) {
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
            tankChangeScore(sprite, 75)
        } else {
            tiles.setTileAt(location, sprites.dungeon.floorLight0)
            tiles.setWallAt(location, true)
        }
        tiles.placeOnTile(sprPresent, location)
        tiles.setTileAt(location, sprites.castle.tilePath5)
    }
    sprite.destroy()
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    sprites.changeDataNumberBy(sprite, "activeMunition", 1)
})
function sentinelCreate (tank: Sprite) {
    sprSentinel = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . e . e . . . . . . 
        . . . . . . e f e . . . . . . 
        . . . . f f e f e f f . . . . 
        . . . . f 2 2 f 2 2 f . . . . 
        . . e e e 2 4 f 4 2 e e e . . 
        . . . f f f f f f f f f . . . 
        . . e e e 2 4 f 4 2 e e e . . 
        . . . . f 2 2 f 2 2 f . . . . 
        . . . . f f e f e f f . . . . 
        . . . . . . e f e . . . . . . 
        . . . . . . e . e . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.Sentinel)
    sprSentinel.setPosition(tank.x, tank.y)
    sprites.setDataNumber(sprSentinel, "munition", 50)
    sprites.setDataString(sprSentinel, "orientation", "up")
    sprites.setDataNumber(sprSentinel, "tankID", sprites.readDataNumber(tank, "tankID"))
}
function createBomb () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 f . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bomb)
    mySprite.setPosition(tank_01.x, tank_01.y)
    info.startCountdown(5)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wall, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    tankCheckWinner()
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    sprites.changeDataNumberBy(sprite, "activeMunition", -1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
function tankChangeLife (tank: Sprite, life: number) {
    tankID = sprites.readDataNumber(tank, "tankID")
    if (tankID == 1) {
        info.player1.changeLifeBy(life)
    } else if (tankID == 2) {
        info.player2.changeLifeBy(life)
    } else if (tankID == 3) {
        info.player3.changeLifeBy(life)
    } else if (tankID == 4) {
        info.player4.changeLifeBy(life)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "tankID") != sprites.readDataNumber(otherSprite, "tankID")) {
        tankChangeLife(otherSprite, -1)
        tankChangeScore(sprite, 15)
        if (sprites.readDataNumber(otherSprite, "tankID") == 2 && info.player2.life() == 0) {
            tankChangeScore(sprite, 15)
            otherSprite.destroy()
        }
        if (sprites.readDataNumber(otherSprite, "tankID") == 3 && info.player3.life() == 0) {
            tankChangeScore(sprite, 15)
            otherSprite.destroy()
        }
        if (sprites.readDataNumber(otherSprite, "tankID") == 4 && info.player4.life() == 0) {
            tankChangeScore(sprite, 15)
            otherSprite.destroy()
        }
        sprite.destroy()
    }
})
let randomOrientation = ""
let randomShoot = ""
let tanks: Sprite[] = []
let mySprite: Sprite = null
let sprSentinel: Sprite = null
let sprPresent: Sprite = null
let randomLocation: tiles.Location = null
let wallLocationLIist: tiles.Location[] = []
let sprExplosion: Sprite = null
let tmpLocation: tiles.Location = null
let projectile: Sprite = null
let tank_04: Sprite = null
let tank_03: Sprite = null
let tank_02: Sprite = null
let randomStartLocation: tiles.Location = null
let startLocations: tiles.Location[] = []
let pickedPossibility = ""
let tile_02: Image = null
let tile_01: Image = null
let listPosibilities: string[] = []
let tankID = 0
let BombMax = 0
let tank_01: Sprite = null
let gameLevelMax = 0
let gameLevel = 0
let projectileSpeed = 0
let bricksDifficulty = 0
bricksDifficulty = 30
projectileSpeed = 95
gameLevel = 0
gameLevelMax = 3
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
BombMax = 1
startNewLevel()
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
game.onUpdateInterval(randint(400, 600), function () {
    tanks = sprites.allOfKind(SpriteKind.Enemy)
    for (let value22 of tanks) {
        randomShoot = tankRandomDecision(value22, "shoot")
        if (randomShoot == "clear") {
            randomOrientation = tankRandomDecision(value22, "walk")
            tankOrientation(value22, randomOrientation)
            tankMove(value22, randomOrientation)
            if (Math.percentChance(55)) {
                tankShoot(value22)
            }
        } else {
            tankOrientation(value22, randomShoot)
            tankShoot(value22)
        }
    }
})
game.onUpdateInterval(150, function () {
    for (let value of sprites.allOfKind(SpriteKind.Sentinel)) {
        sentinelShoot(value)
    }
})
