/**
 * Bonus Manager
 *
 * @param {Game} game
 */
function BonusManager(game)
{
    BaseBonusManager.call(this, game);

    this.bonuses.index = false;

    this.onLoad = this.onLoad.bind(this);

    this.sprite = new SpriteAsset('images/bonus.png', 4, 4, this.onLoad, true);
    this.assets = {};
}

BonusManager.prototype = Object.create(BaseBonusManager.prototype);
BonusManager.prototype.constructor = BonusManager;

/**
 * Bonuses position on the sprite
 *
 * @type {Array}
 */
BonusManager.prototype.spritePosition = [
<<<<<<< HEAD
      'BonusSelfFast',
      'BonusEnemyFast',
      'BonusSelfSlow',
      'BonusSelfInverse',
      'BonusEnemySlow',
      'BonusAllBorderless',
      'BonusSelfMaster',
      'BonusSelfTeleport',
      'BonusEnemyBig',
      'BonusAllColor',
      'BonusEnemyInverse',
      'BonusEnemyTeleport',
      'BonusSelfGodzilla',
      'BonusEnemySmall',
      'BonusSelfSmall',
=======
    'BonusSelfFast',
    'BonusEnemyFast',
    'BonusSelfSlow',
    'BonusEnemySlow',
    'BonusAllBorderless',
    'BonusSelfMaster',
    'BonusEnemyBig',
    'BonusAllColor',
    'BonusEnemyInverse',
    'BonusSelfSmall',
    'BonusGameClear',
    'BonusEnemyStraightAngle'
>>>>>>> 7a11c5ca8d2dbe1167cd1f55b1974ae5753c1a10
];

/**
 * Set scale
 *
 * @param {Number} scale
 */
BonusManager.prototype.setScale = function(scale)
{
    for (i = this.bonuses.items.length - 1; i >= 0; i--) {
        this.bonuses.items[i].setScale(scale);
    }
};

/**
 * On bonus sprite loaded
 */
BonusManager.prototype.onLoad = function()
{
    var images = this.sprite.getImages();

    for (var i = this.spritePosition.length - 1; i >= 0; i--) {
        this.assets[this.spritePosition[i]] = images[i];
    }

    Bonus.prototype.assets = this.assets;
};

/**
 * Draw
 *
 * @param {Canvas} canvas
 */
BonusManager.prototype.draw = function(canvas)
{
    var i, bonus, width;

    for (i = this.bonuses.items.length - 1; i >= 0; i--) {
        bonus = this.bonuses.items[i];
        width = bonus.getDrawWidth();

        canvas.drawImageScaled(bonus.asset, [(bonus.position[0] - width/2), (bonus.position[1] - width/2)], width, width);
    }
};