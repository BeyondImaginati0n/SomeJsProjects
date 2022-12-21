var link = document.getElementsByTagName("a")[1];
console.log(link.attributes["href"].nodeValue);
console.log(link.getAttributeNode("href").nodeValue);
console.log(link.href);
console.log(link.firstChild); console.log(link.attributes[0].nodeType);
console.log(link.firstChild.nodeType);
console.log(link.parentNode.nodeName);
console.log(link.lastChild.parentNode.nodeName);
console.log(link.attributes.length); 