export function arc(type, x, y, width, height, radius, color): void {
  const ctx = this.canvasCtx;
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx[type + 'Style'] = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.arcTo(x + width + radius, y, x + width + radius, y + radius, radius);
  ctx.lineTo(x + width + radius, y + height);
  ctx.arcTo(x + width + radius, y + height + radius, x + width, y + radius + height, radius);
  ctx.lineTo(x, y + height + radius);
  ctx.arcTo(x - radius, y + height + radius, x - radius, y + height, radius);
  ctx.lineTo(x - radius, y + radius);
  ctx.arcTo(x - radius, y, x, y, radius);
  ctx.closePath();
  ctx[type]();
}