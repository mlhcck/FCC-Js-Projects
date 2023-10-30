// REGEX ile çözüldü bu saçmalık;
function telephoneCheck(str) {
    var telefonKontrol = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return telefonKontrol.test(str);
  }

  telephoneCheck("1 455-555-5555");