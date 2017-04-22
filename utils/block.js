utils.block = {
  block: function (list, optional) {
    if (optional == true) {
      if (random.chance(6)) {
        return '';
      }
    }

    function go_deeper(item) {
      if (item == null || item === undefined) {
        return "";
      }
      if (typeof(item) == "function") {
        return item();
      }
      if (typeof(item) == "string") {
        return item;
      }
      if (item instanceof (Array)) {
        let s = "";
        for (let i = 0; i < item.length; i++) {
          s += go_deeper(item[i]);
        }
        return s;
      }
      return item;
    }

    let asString = "";
    for (let i = 0; i < list.length; i++) {
      asString += go_deeper(list[i]);
    }

    return asString;
  }
};