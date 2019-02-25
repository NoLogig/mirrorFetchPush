# NodeGarden Array Performance 

## 
 ```ts 
    
  // Update shapes
  updateNodes(nodes: ICircleShape[]): void {

    for (let i = 0, limit = nodes.length; i < limit; i++) {

      let node = nodes[i];

      node.x = maths.lock(node.x + node.vx, 0, this.cWidth);
      node.y = maths.lock(node.y + node.vy, 0, this.cHeight);

      this.drawCircle(this.ctx, node);

      this.connectAllNodes(this.nodes, i, this.maxConnectDist);
    }
    return;
  }

  // Draw lines between nodes if in range
  connectAllNodes(nodes: ICircleShape[], currentIndex: number, maxDist: number): void {

    let node = nodes[currentIndex];

    for (let i = currentIndex + 1, limit = nodes.length; i < limit; i++) {

      let _node = nodes[i],
        dx = _node.x - node.x,
        dy = _node.y - node.y,
        dist = Math.sqrt((dx ** 2) + (dy ** 2));

      if (dist < maxDist) {
        this.ctx.lineWidth = 1 - dist / maxDist;
        this.drawLine(this.ctx, node, _node);
      }
    }
    return;
  }

 ```



##



##