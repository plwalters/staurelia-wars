export class Character {
  name = '';
  x;
  y;
  move(dir){
    if (dir === 'up') {
      this.x -= 1
    } else if (dir === 'down') {
      this.x += 1
    } else if (dir === 'left') {
      this.y -= 1
    } else if (dir === 'right') {
      this.y += 1
    }
  }
  moveToTile(tile){
    this.x = tile.row;
    this.y = tile.column;
  }
}
