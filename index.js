function getFirstSelector(selector)
{
  var selOut = document.querySelector(selector);
  return selOut;
}

function nestedTarget()
{
  var targList = document.querySelectorAll(".target");
  return targList[0];
}

function increaseRankBy(n)
{
  var listItems = document.querySelectorAll("ul.ranked-list li");
  for (var loop = 0; loop <= listItems.length-1; loop ++)
  {
    listItems[loop].innerHTML = (Number(listItems[loop].innerHTML) + n).toString();
  }
}

function deepestChild()
{
  var tempNode = document.querySelector("#grand-node");
  var isParent = true;
  // console.log (tempNode.innerHTML);

  while (isParent)
  {
    var innerNode = tempNode.querySelector("* *");
      if (innerNode.querySelector("* *") !== null)
        {
        // console.log("It's a parent");
        // console.log (innerNode.innerHTML);
        tempNode = innerNode;
        }
      else
        {
          return innerNode.innerHTML;
        }
  } // close while loop
}
