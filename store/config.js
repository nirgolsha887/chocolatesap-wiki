// ChocolateSMP store settings.
//
// token: your Tebex PUBLIC token (creator.tebex.io > Developers > API Keys > "Public Token",
//        it starts with 4 letters and a dash, e.g. "abcd-1234..."). It is safe to put here.
//        NEVER put the Private Key or the server Secret Key in this file: this site is public.
//
// ranks: the perks shown on each card. "match" is compared with the package name on Tebex
//        (lower case), so a Tebex package called "VIP+" gets the VIP+ card. "price" is only
//        shown while the token is empty; once the token is set, prices come from Tebex.
window.STORE = {
  token: "",
  ranks: [
    { match: "vip", name: "VIP", colors: ["#E0A21B"], icon: "cookie", price: "€4.99",
      perks: ["[VIP] tag in chat and TAB", "Gold name", "15 items on Quick Buy (instead of 5)"] },
    { match: "vip+", name: "VIP+", colors: ["#55FFFF", "#00AAAA"], icon: "bar", price: "€9.99",
      perks: ["[VIP+] tag", "Name in two blues, letter by letter", "25 items on Quick Buy", "Everything from VIP"] },
    { match: "choco mvp", name: "Choco MVP", colors: ["#FFAA00", "#FFFF55"], icon: "cake", price: "€19.99",
      perks: ["[Choco MVP] tag", "Name in gold and yellow, letter by letter", "40 items on Quick Buy", "Everything from VIP+"] },
    { match: "cocoa king", name: "Cocoa King", colors: ["#AA0000", "#FFAA00"], icon: "crown", price: "€29.99",
      perks: ["[Cocoa King] tag", "Name in red and gold, letter by letter", "60 items on Quick Buy", "Everything from Choco MVP"] }
  ]
};
