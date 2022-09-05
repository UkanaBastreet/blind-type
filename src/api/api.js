const url = "https://63112bbb19eb631f9d6e9404.mockapi.io/main/blind-type/1"

export const getValue = async (setValue) => {
  fetch(url)
    .then((response) => response.json())
    .then((response) => setValue(response.words.join(" ")))
}
export async function getNamedValue(type, cb) {
  let value
  await fetch(url)
    .then((r) => r.json())
    .then((r) => (value = r[type]))
  cb('cb')
  return value.join(" ")
}
