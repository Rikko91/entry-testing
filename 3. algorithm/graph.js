class Graph {
  constructor(inputNodes) {
    this.inputNodes = inputNodes;
  }

  getNode(nodeId) {
    let result;
    this.inputNodes.forEach((node) => {
      if(nodeId === node.id) {
        result = node;
      }
    })

    return result;
  }

  draw(canvas) {
    this.inputNodes.forEach((node) => {
      if (node.childs) {
        node.childs.forEach((childId) => {
          let childNode = this.getNode(childId);
          console.log(childId, childNode);
          canvas.fillStyle = "#FF0000";
          canvas.fillText(node.id, node.x - 10, node.y);
          canvas.fillText(childNode.id, childNode.x - 10, childNode.y);
          canvas.beginPath();
          canvas.arc(node.x, node.y, 3, 2*Math.PI, 0, 0);
          canvas.fill();
          canvas.moveTo(node.x, node.y);
          canvas.lineTo(childNode.x, childNode.y);
          canvas.stroke();
        })
      }
    })
  }

}
