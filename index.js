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
