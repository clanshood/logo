'use strick';

(function(){

  var paper = Snap('#logo-atlantis'),
      paperWidth = 400,
      paperHeight = 400,
      color = {
        primary: '#a3be8c',
        success: '#ebcb8b',
        inf: '#8fa1b3',
        warn: '#bf616a'
      },
      circle = function(x, y, r, fill, stroke){
        var c = paper.circle(x, y, r);

        fill = fill || color.primary;
        stroke = stroke || fill;

        c.attr({
          fill: fill,
          stroke: stroke,
          strokeWidth: 0
        });

        return c;
      };

  // positioning
  var cRadius = 20,
      diameter = cRadius/2,
      startPoint = 50,
      topStart = startPoint,
      bottomStart = paperHeight - topStart,
      leftStart = startPoint,
      rightStart = paperWidth - leftStart,
      centerX = (paperWidth/2),
      centerY = (paperHeight/2),

      posX = centerX, posY = centerY,

      posX1 = centerX, posY1 = topStart,
      posX2 = rightStart, posY2 = centerY - 75,
      posX3 = rightStart, posY3 = centerY + 75,
      posX4 = centerX, posY4 = bottomStart,
      posX5 = leftStart, posY5 = centerY + 75,
      posX6 = leftStart, posY6 = centerY - 75;

  var c = circle(posX, posY, cRadius, color.primary),

      c1 = circle(posX1, posY1, cRadius, color.primary),
      c2 = circle(posX2, posY2, cRadius, color.success),
      c3 = circle(posX3, posY3, cRadius, color.primary),
      c4 = circle(posX4, posY4, cRadius, color.warn),
      c5 = circle(posX5, posY5, cRadius, color.primary),
      c6 = circle(posX6, posY6, cRadius, color.success);

  var p1 = paper.path("M200 50 L50 275 L200 200 L350 275 L200 50 Z");

  p1.attr({
    fill: 'none',
    stroke: color.warn,
    strokeWidth: 5
  });

})(window, jQuery, Snap);