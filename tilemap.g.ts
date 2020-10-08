// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0a0008000202020202020202020203010101010101010103010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010302020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3], TileScale.Sixteen)
            case "level_0": return tiles.createTilemap(hex`0a0008000000000000000000000003010101010101010103010201020101020102010101010104040101010101010101040401010101010201020101020102010301010101010101010302020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. 2 . 2 . . 2 . 2 . 
. . . . 2 2 . . . . 
. . . . 2 2 . . . . 
. 2 . 2 . . 2 . 2 . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen)
            case "level_1": return tiles.createTilemap(hex`0a0008000202020202020202020203010101010101010103010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010302020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3], TileScale.Sixteen)
            case "level_2": return tiles.createTilemap(hex`0a0008000000000000000000000003010101010101010103010201020101020102010101010104040101010101010101040401010101010201020101020102010301010101010101010302020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. 2 . 2 . . 2 . 2 . 
. . . . 2 2 . . . . 
. . . . 2 2 . . . . 
. 2 . 2 . . 2 . 2 . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
